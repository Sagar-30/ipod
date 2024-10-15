import React,{useState} from "react";
import style from "./page.module.css";
import IpodStyle from "./ipod.module.css"

export default function Page(props) {
    const [activeItem,setActiveItem] = useState(0);
    const items = ['Music', 'Games', 'Setting'];
    
    const handleItemClick = (index)=>{
       setActiveItem(index);
    }
    console.log("From Page",props.activePage)
    return (
        <>
            {props.text === "Music" ? 
            <section className={IpodStyle.screenMainSection}>
            <p>Music</p>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={activeItem === index ? IpodStyle.active : ''}
                        onClick={() => handleItemClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </section>
            :
            <div className={style.mainPageDiv}>
                    <img src={props.url} alt={props.text}></img>
                    <p>{props.text}</p>
                    </div>
            }
        </>
    )
}