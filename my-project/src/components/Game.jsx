
export default function Game({game}) {
  return (
    <>
    <li className={game == "Football" ? 'game popular-game' : 'game'} >{game}
</li>
    </>
  )
}
