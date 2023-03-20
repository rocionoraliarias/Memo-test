 interface Image {
    id: number;
    url: string;
    color: string;
    colored: boolean;
    name: string;
  }
  
  export const Images: Image[] = [
    {
      id: 1,
      url: 'https://icongr.am/simple/jenkins.svg',
      color: 'currentColor',
      colored: false,
      name: 'loquito'
    },
    { 
        id: 2,
        url: 'https://icongr.am/simple/tapas.svg',
        color: 'currentColor',
        colored: false,
        name: 'bolsillito'
      },
      {
        id: 3,
        url: 'https://icongr.am/simple/travisci.svg',
        color: 'currentColor',
        colored: false,
        name: 'bolsillito'
      },
      {
        id: 4,
        url: 'https://icongr.am/simple/tencentqq.svg',
        color: 'currentColor',
        colored: false,
        name: 'bolsillito'
      },
      {
        id: 5,
        url: 'https://icongr.am/simple/staticman.svg',
        color: 'currentColor',
        colored: false,
        name: 'bolsillito'
      },
      {
        id: 6,
        url: 'https://icongr.am/simple/libuv.svg',
        color: 'currentColor',
        colored: false,
        name: 'bolsillito'
      },
      {
        id: 7,
        url: 'https://icongr.am/simple/keybase.svg',
        color: 'currentColor',
        colored: false,
        name: 'bolsillito'
      },
      {
        id: 8,
        url: 'https://icongr.am/simple/jenkinsx.svg',
        color: 'currentColor',
        colored: false,
        name: 'bolsillito'
      },
      {
        id: 9,
        url: 'https://icongr.am/simple/happycow.svg',
        color: 'currentColor',
        colored: false,
        name: 'bolsillito'
      },
      {
        id: 10,
        url: 'https://icongr.am/simple/furaffinity.svg',
        color: 'currentColor', 
        colored: false,
        name: 'bolsillito'
      }
  ]
.flatMap(image => [{ ...image, url: `a|${image.url}` }, { ...image, url: `b|${image.url}` }])
.sort(() => Math.random() - 0.5);