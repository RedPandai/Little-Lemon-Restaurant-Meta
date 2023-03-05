import React, { useState, useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "../../api/helper";
import { useNavigate } from "react-router-dom";
import validateForm from "../../utili/validateForm";

function BookingPage() {
  const initialState = {
    date: "",
    time: "",
    people: 1,
    occasion: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const updateTime = (state, action) => {
    switch (action.type) {
      //action.payload就是要输入的值，前面的名字就是识别这个值的东西。
      case "CHANGE_INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(updateTime, initialState);
  const { date, name, time, email, people, message, occasion, phone } = state;
  const history = useNavigate();
  //in 16 version the useHistory was replaced by the useNavigate

  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    let data = fetchAPI(date);
    setAvailableTimes(() => {
      if (date) return data;
      else return [];
    });
    // put the condition inside the useState(), here put the fetchAPI inside useEffect to update the avaliabletimes!
    console.log("bookinpage rerendered");
  }, [date]);

  const renderedTimes = availableTimes.map((element) => {
    return <option key={element}>{element}</option>;
  });

  const today = new Date();
  const minDate = today.toISOString().slice(0, 10);
  const maxDate = new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const { errors, isValid } = validateForm(state);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      submitAPI(state);
      console.log(state);
      history("/booking/confirmation");
    } else {
    }
  }

  function handleChange(e) {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
    console.log(e.target.value);
  }

  return (
    <div className="bookingContainer">
      <form onSubmit={handleSubmit} aria-label="Booking Form">
        <h2>Make a Reservation</h2>
        <div className="timeInfo" aria-label="Booking time inputs">
          <div className="form-item">
            <label htmlFor="res-date">Choose date</label>
            <input
              onChange={handleChange}
              name="date"
              value={date}
              min={minDate}
              max={maxDate}
              type="date"
              id="res-date"
            />
            <div className="errorMessages">{date && errors.date}</div>
          </div>
          <div className="form-item">
            <label htmlFor="res-time">Choose time</label>
            <select
              onChange={handleChange}
              value={time}
              name="time"
              id="res-time"
            >
              <option>---</option>
              {renderedTimes}
            </select>
            <div className="errorMessages">{time && errors.time}</div>
          </div>
          <div className="form-item">
            <label htmlFor="guests">Number of guests</label>
            <input
              name="people"
              onChange={handleChange}
              value={people}
              type="number"
              placeholder="0"
              min="1"
              max="10"
              id="guests"
            />
            <div className="errorMessages">{errors.people}</div>
          </div>
          <div className="form-item">
            <label htmlFor="occasion" className="optional-container">
              Occasion <span className="optional">(Optional)</span>
            </label>
            <select
              name="occasion"
              onChange={handleChange}
              value={occasion}
              id="occasion"
            >
              <option>---</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
        </div>
        <div className="contactInfo" aria-label="Booking Contact information">
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={name}
            />
            <div className="errorMessages">{name && errors.name}</div>
          </div>
          <div className="form-item">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
            <div className="errorMessages">{email && errors.email}</div>
          </div>
          <div className="form-item">
            <label htmlFor="Phone" className="optional-container">
              Phone<span className="optional">(Optional)</span>
            </label>
            <input
              aria-label="phone"
              type="text"
              id="Phone"
              name="phone"
              onChange={handleChange}
              value={phone}
            />
          </div>
          <div className="form-item">
            <label htmlFor="message" className="optional-container">
              Message<span className="optional">(Optional)</span>
            </label>
            <textarea
              aria-label="special requirement messages"
              id="message"
              rows={8}
              name="message"
              onChange={handleChange}
              value={message}
            />
          </div>
        </div>
        <input
          className="submitBtn"
          aria-label="Submit Button"
          type="submit"
          value="Confirm"
          disabled={!validateForm(state).isValid}
        />
      </form>
    </div>
  );
}

export default BookingPage;
