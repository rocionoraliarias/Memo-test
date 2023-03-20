import React from "react";

interface Props {
    srcImg: string;
    altName: string;
    handlerSelecter: any;
  }

const File: React.FC<Props> = ({srcImg, altName, handlerSelecter}) => {

return(
    <div style={{
        width: '80px', 
        height: '80px',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '5px,', 
        cursor: 'pointer', 
        border: '4px solid #EA5455', 
        borderRadius: '5px',
        backgroundColor: '#E4DCCF'
        }}
        onClick={() => handlerSelecter()}>
    <img src={srcImg} alt={altName} style={{width: '50px'}}/>
    </div>
)

}

export default File;