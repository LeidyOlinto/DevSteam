import style from './subtitle.module.css'

export default function Subtitle({ children }){
  return(
    <h2 className={style.sutitle}> { children }</h2>
  )
}