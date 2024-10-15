import { Component } from "react";
import IpodStyle from "./ipod.module.css";
import Page from "./page";

export default class Ipod extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: 0,
            activePage: false
        };
        this.isPointerActive = false;
    }

    handleItemClick = (index) => {
        this.setState({ activeItem: index, activePage: true }, () => {
            console.log(this.state.activeItem);
        });
    };
    handleMenuButton = ()=>{
        this.setState({activePage: false });

    };
    handleCenterBtnClick = ()=>{
        this.setState({activePage: true });
    }
    handlePointerMove = () => {
        if (this.isPointerActive) {
            this.setState((prevState) => {
                const nextActiveItem = (prevState.activeItem + 1) % 4;
                return { activeItem: nextActiveItem };
            });
        }
    };

    handlePointerDown = () => {
        this.isPointerActive = true; 
        this.pointerMoveInterval = setInterval(this.handlePointerMove, 500); 
    };

    handlePointerUp = () => {
        this.isPointerActive = false; 
        clearInterval(this.pointerMoveInterval); 
    };

    componentWillUnmount() {
        clearInterval(this.pointerMoveInterval);
    }

    render() {
        const items = ['CoverFlow', 'Music', 'Games', 'Setting'];
        const URL = ["https://cdn-icons-png.flaticon.com/128/14563/14563910.png",
            "", "https://cdn-icons-png.flaticon.com/128/13/13973.png",
            "https://cdn-icons-png.flaticon.com/128/503/503849.png"
        ]
        return (
            <div className={IpodStyle.mainDivIpod}>
                <div className={IpodStyle.IpodScreen}>
                    {this.state.activePage ? <Page url={URL[this.state.activeItem]} text={items[this.state.activeItem]} activePage={this.state.activePage}/> :
                        <section className={IpodStyle.screenMainSection}>
                            <p>Ipod</p>
                            <ul>
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className={this.state.activeItem === index ? IpodStyle.active : ''}
                                        onClick={() => this.handleItemClick(index)}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    }
                </div>
                <div className={IpodStyle.IpodButtonSection}>
                    <div
                        className={IpodStyle.buttonsTopMainSection}
                        onPointerDown={this.handlePointerDown}
                        onPointerUp={this.handlePointerUp}
                    >
                        <section className={IpodStyle.menuButtonSection} onClick={this.handleMenuButton}>
                            <p></p>
                        </section>
                        <section className={IpodStyle.nextbuttonSection}>
                            <img className={IpodStyle.prevButton} src="https://cdn-icons-png.flaticon.com/128/2723/2723003.png" alt="icon" />
                            <section className={IpodStyle.centerButton} onClick={this.handleCenterBtnClick}></section>
                            <img className={IpodStyle.nextButton} src="https://cdn-icons-png.flaticon.com/128/2722/2722998.png" alt="icon" />
                        </section>
                        <section className={IpodStyle.pauseButtonSection}>
                            <img className={IpodStyle.pauseButton} src="https://cdn-icons-png.flaticon.com/128/2066/2066181.png" alt="icon" />
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
