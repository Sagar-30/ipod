import style from "./page.module.css"

export default function Page(props){
return(
    <div className={style.mainPageDiv}>
     <img src={props.url} alt={props.text}></img>
     <p>{props.text}</p>
    </div>
)
}