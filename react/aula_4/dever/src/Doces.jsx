const ItemDoce1 = () => <li>bolo de chocolate</li>
const ItemDoce2 = () => <li>bala</li>
const ItemDoce3 = () => <li>bolo de morango</li>
const ItemDoce4 = () => <li>pe de moleque</li>
const ItemDoce5 = () => <li>bolo de pote</li>

function Doces() {
  return (
    <>
      <ol>
          <ItemDoce1/>
          <ItemDoce2/>
          <ItemDoce3/>
          <ItemDoce4/>
          <ItemDoce5/>
      </ol>
    </>
  )
}

export default Doces
