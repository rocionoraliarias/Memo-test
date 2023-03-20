import { Images }from './Images'
import File from './File';
import './App.css'
import { useEffect, useState } from 'react';
function App() {

  const [ guessed , setGuessed ] = useState<string[]>([])
  const [ selected, setSelected ] = useState<string[]>([])
 
  const handleSelect = (imgUrl: string) => {
    setSelected((selected) => selected.concat(imgUrl));
  };

 useEffect(() => {
 if(selected.length === 2){
  if(selected[0].split("|")[1] === selected[1].split("|")[1]){
    setGuessed((guessed) => guessed.concat(selected))
  }
  setTimeout(() => setSelected([]), 1000)
 }
 },[selected])

 useEffect(() => {
  if(guessed.length === Images.length){
    alert('you whin!')
  }
  },[guessed])

  return (
   <main style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(128px,1fr))', gap: 24}}>
    {
      Images.map((img,i) => 
      {
        const [, url ] = img.url.split("|")

        return (
          guessed.includes(img.url) || selected.includes(img.url)
          ?  <File srcImg={url}  altName={img.name} handlerSelecter={() => handleSelect(img.url)} key={img.url}/>
          :
          <File srcImg='https://icongr.am/jam/coffee.svg' altName='Descubrir imagen' handlerSelecter={() => handleSelect(img.url)} key={img.url}/>
        )
      })
    }
   
   </main>
  ); 
}

export default App;
