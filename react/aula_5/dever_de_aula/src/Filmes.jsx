import PropsFilho from './PropsFilho.jsx';
import PropsChildren from './PropsChildren.jsx';


function Filmes() {
  
  const film = [
    {id: 1,genero:"comedia", titulo:"minha mae é uma peça"},
    {id: 2, genero:"terror", titulo:"samara"},
    {id: 3,genero:"pokemon", titulo:"x e y"}
  ]

  return (
    <>
      
      <PropsChildren>
        <li>minha mae é uma peça</li>
        <li>samara</li>
        <li>x e y</li>
      </PropsChildren>
      <PropsFilho film={film}/>
    </>
  )
}

export default Filmes
