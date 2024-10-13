import { Component } from "react";
import IpodStyle from "./ipod.module.css";

export default class Ipod extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: 0,
        };
        this.isPointerActive = false; // Track if pointer is down
    }

    handleItemClick = (index) => {
        this.setState({ activeItem: index }, () => {
            console.log(this.state.activeItem);
        });
    };

    handlePointerMove = () => {
        if (this.isPointerActive) {
            this.setState((prevState) => {
                const nextActiveItem = (prevState.activeItem + 1) % 4; // Cycle through items
                return { activeItem: nextActiveItem };
            });
        }
    };

    handlePointerDown = () => {
        this.isPointerActive = true; // Set pointer active
        this.pointerMoveInterval = setInterval(this.handlePointerMove, 500); // Call move function every 100ms
    };

    handlePointerUp = () => {
        this.isPointerActive = false; // Set pointer inactive
        clearInterval(this.pointerMoveInterval); // Clear interval
    };

    componentWillUnmount() {
        clearInterval(this.pointerMoveInterval); // Clean up on unmount
    }

    render() {
        const items = ['CoverFlow', 'Music', 'Games', 'Setting'];
        return (
            <div className={IpodStyle.mainDivIpod}>
                <div className={IpodStyle.IpodScreen}>
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
                </div>
                <div className={IpodStyle.IpodButtonSection}>
                    <div
                        className={IpodStyle.buttonsTopMainSection}
                        onPointerDown={this.handlePointerDown}
                        onPointerUp={this.handlePointerUp}
                    >
                        <section className={IpodStyle.menuButtonSection}>
                            <p></p>
                        </section>
                        <section className={IpodStyle.nextbuttonSection}>
                            <img className={IpodStyle.prevButton} src="https://cdn-icons-png.flaticon.com/128/2723/2723003.png" alt="icon" />
                            <section className={IpodStyle.centerButton}></section>
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
