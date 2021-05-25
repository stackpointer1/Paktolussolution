import "./styles.css";
import React from "react";
const { createRef, Component } = React;

class Slots extends Component {
  static defaultProps = {
    fruits: ["1", "2", "3", "4", "5", "6"]
  };

  constructor(props) {
    super(props);
    this.state = {
      fruit1: "1",
      fruit2: "2",
      fruit3: "3",
      fruit4: "4",
      fruit5: "5",
      fruit6: "6",
      fruit7: "7",
      fruit8: "8",
      fruit9: "9",
      rolling: false,
      button1: false,
      Balance: 99
    };
    this.clickHandler = this.clickHandler.bind(this);

    this.slotRef = [createRef(), createRef(), createRef()];
  }

  clickHandler() {
    this.setState((state) => ({
      button1: !state.button1
    }));
  }

  roll = () => {
    this.setState({
      rolling: true,
      Balance: this.state.Balance - 1
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 700);

    this.slotRef.forEach((slot, i) => {
      const selected = this.triggerSlotRotation(slot.current);
      this.setState({ [`fruit${i + 1}`]: selected });
    });
  };

  triggerSlotRotation = (ref) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }

    let options = ref.children;
    console.log(options);
    let randomOption = Math.floor(
      Math.random() * Slots.defaultProps.fruits.length
    );
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return Slots.defaultProps.fruits[randomOption];
  };

  render() {
    return (
      <div className="SlotMachine">
        {this.state.button1 ? (
          <>
            <h1>current balance</h1>
            <h3>${this.state.Balance}</h3>
            <div className="slot">
              <section>
                <div className="container" ref={this.slotRef[0]}>
                  {Slots.defaultProps.fruits.map((fruit, i) => (
                    <div key={i}>
                      <span>{fruit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div className="slot">
              <section>
                <div className="container" ref={this.slotRef[1]}>
                  {Slots.defaultProps.fruits.map((fruit) => (
                    <div>
                      <span>{fruit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div className="slot">
              <section>
                <div className="container" ref={this.slotRef[2]}>
                  {Slots.defaultProps.fruits.map((fruit) => (
                    <div>
                      <span>{fruit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div
              className={!this.state.rolling ? "roll rolling" : "roll"}
              onClick={!this.state.rolling && this.roll}
              disabled={this.state.rolling}
            >
              {this.state.rolling ? "Rolling..." : "ROLL"}
            </div>
          </>
        ) : (
          "hey"
        )}
        <button onClick={this.clickHandler}>
          {this.state.button1 ? "prev page" : "click me to play"}
        </button>
      </div>
    );
  }
}
export default Slots;
