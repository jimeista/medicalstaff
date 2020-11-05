import React from "react";
import $ from "jquery";
import "air-datepicker/dist/js/datepicker.js";
import "air-datepicker/dist/css/datepicker.css";
import "./DatePicker.css";
class AirDatepicker extends React.Component {
  state = {
    classname: "",
    date: "x",
  };
  constructor(props) {
    super(props);
    this.valueDate = null;
  }

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.datepicker();
  }

  handleActive = () => {
    this.setState({ classname: " active" });
  };
  handleOff = () => {
    this.setState({ classname: "" });
    this.setState({ date: this.valueDate.value });
  };

  render() {
    let ttr = "tessst";
    if (this.state.classname === "") {
      ttr = "tessst active";
    } else {
      ttr = "tessst";
    }

    return (
      <div>
        <div className="date_period_wrap">
          <div className={ttr}>
            <div className="data_confirm active">
              <span> по состоянию за: </span>
              <span className="set_date covid_city_date">
                {this.state.date}
              </span>
            </div>
            <div
              className="calendar_icon calendar active"
              onClick={() => this.handleActive()}
            />
          </div>
          <div className={"date_period_icon" + this.state.classname}>
            <input
              type="text"
              data-range="true"
              data-multiple-dates-separator=" - "
              className="datepicker-here"
              placeholder="выбрать диапозон"
              autoComplete="off"
              ref={(ref) => (this.valueDate = ref)}
            />
            <button
              className="calendar_ok covid_city_btn"
              onClick={(e) => {
                this.handleOff();
              }}
            >
              ок
            </button>
          </div>
        </div>
        {/*  <div className="date_period_icon">
          <input
            ref={(el) => (this.el = el)}
            type="text"
            data-range="true"
            data-multiple-dates-separator=" - "
            className="datepicker-here"
            placeholder="выбрать диапозон"
          />
          <button className="calendar_ok covid_city_btn">ок</button>
        </div>*/}
      </div>
    );
  }
}

export default AirDatepicker;
