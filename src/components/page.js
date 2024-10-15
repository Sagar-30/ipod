import React, { useState,useEffect} from "react";
import style from "./page.module.css";
import IpodStyle from "./ipod.module.css"
import Music from "./musicComp";

export default function Page(props) {
    const [activeItem, setActiveItem] = useState(0);
    const [activeMusicPage, setactiveMusicPage] = useState(false);
    const items = ['All Songs', 'Artists', 'Album'];
    const URL =["","https://cdn-icons-png.flaticon.com/128/6901/6901850.png","https://cdn-icons-png.flaticon.com/128/26/26805.png"]

    const handleItemClick = (index) => {
        setActiveItem(index);
        setactiveMusicPage(true);
    }
 
    return (
        <>{activeMusicPage&&props.activePage ? <Music text={items[activeItem]} url={URL[activeItem]}/> :
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
        }
        </>
    )
}