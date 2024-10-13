import { Component } from "react";
import IpodStyle from "./ipod.module.css"

export default class Ipod extends Component{

    constructor(){
        super();
        this.state ={
            activeItem: 0
        }
    }
    handleItemClick =(index)=>{
        this.setState({ activeItem: index },()=>{console.log(this.state.activeItem)});
    }
    handlePointerMove = (e)=>{
        console.log("Pointer is moving:", e.clientX, e.clientY);
        if(this.state.activeItem < 4){
            this.setState({ activeItem: this.state.activeItem+1 }) 
        }else{
            this.setState({ activeItem: 0 }) 
        }
        
    }
    render(){
        const items = ['CoverFlow', 'Music', 'Games', 'Setting'];
        return(
            <div className={IpodStyle.mainDivIpod}>
                {/* Screen Section */}
                <div className={IpodStyle.IpodScreen}>
                 <section className={IpodStyle.screenMainSection}>
                    <p>Ipod</p>
                    <ul>
                        {items && items.map((item,index)=>(
                            <li
                            key={index}
                            className={this.state.activeItem === index ? IpodStyle.active : ''}
                            onClick={() => this.handleItemClick(index)}
                    >{item}</li>
                        ))}
                    </ul>
                 </section>
                </div>
                {/* Button Section */}
                <div className={IpodStyle.IpodButtonSection}>
                 <div className={IpodStyle.buttonsTopMainSection} onPointerMove={(e)=>this.handlePointerMove(e)}>
                    <section className={IpodStyle.menuButtonSection}>
                        <p></p>
                    </section>
                    <section className={IpodStyle.nextbuttonSection}>
                    <img className={IpodStyle.prevButton} src="https://cdn-icons-png.flaticon.com/128/2723/2723003.png" alt="icon"></img>
                    <section className={IpodStyle.centerButton}></section>
                    <img className={IpodStyle.nextButton} src="https://cdn-icons-png.flaticon.com/128/2722/2722998.png" alt="icon"></img>
                    </section>
                    <section className={IpodStyle.pauseButtonSection}>
                    <img  className={IpodStyle.pauseButton}src="https://cdn-icons-png.flaticon.com/128/2066/2066181.png" alt="icon"></img>
                    </section>
                 </div>
                </div>
            </div>
        )
    }
}