import React, { useState } from 'react';
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import './home.css';

function Home({ inputDataClickHandle, inputData, email }) {
  const [from, setFrom] = useState('');
  const [where, setWhere] = useState('');
  const [when, setWhen] = useState('');
  const [additionalInput, setAdditionalInput] = useState(false);
  const [firData, setFirData] = useState();
  const [secData, setSecData] = useState();

  function fromData(e) {
    setFrom(e.target.value);
  }

  function whereData(e) {
    setWhere(e.target.value);
  }

  function whenData(e) {
    setWhen(e.target.value);
  }

  function multiInput() {
    setAdditionalInput(!additionalInput);
  }

  function changePlace() {
    if(from == firData){

        setFirData(where);
        setSecData(from);
        setFrom(where);
        setWhere(firData);
    }else{
        setFirData(from);
        setSecData(where);
        setFrom(from);
        setWhere(where);
    }
  }

  return (
    <>
      <div className="search-box">
        <section>
          <img
            style={{
              height: '20px',
              backgroundColor: 'white',
              borderRadius: '30px',
            }}
            src="https://cdn-icons-png.flaticon.com/128/2134/2134701.png"
            alt=""
          />{' '}
          <span style={{ fontWeight: '700' }}>Book a flight </span>
          <p> <i>" Discover your next dream destination " </i></p>
          <div className="search">
            <input type="radio" name="tick" id="" />
            <label htmlFor="">Round trip</label>
            <input type="radio" name="tick" id="" />
            <label htmlFor="">One way</label>
            <input type="radio" name="tick" id="" onClick={multiInput} />
            <label htmlFor="">Multi-city</label>

            <label className="label" htmlFor="membership">
              Economy
            </label>
            <select name="membership" id="membership">
              <option value="free">Economy</option>
              <option value="bronze">Premium economy</option>
              <option value="silver" selected>
                Business
              </option>
              <option value="Gold">First class</option>
            </select>
          </div>
          {additionalInput && (
            <div className="search-bar">
              <input
                className="from"
                onChange={fromData}
                type="text"
                placeholder="from"
              />
              <div className="arrow"  >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9637/9637250.png"
                  alt=""
                  onClick={changePlace} 
                />
              </div>
              <input
                className="where-to"
                onChange={whereData}
                type="text"
                placeholder="where to"
              />
              <input
                className="where-to"
                onChange={whenData}
                type="date"
                style={{width:'20%'}}
                placeholder="when"
              />
              <input
                className="where-to"
                type="date"
                style={{width:'20%'}}
                placeholder="when"
              />
            </div>
          )}
          <div className="search-bar">
            <input
              className="from"
              onChange={fromData}
              type="text"
              placeholder="from"
              value={firData}
            />
            <div className="arrow" onClick={changePlace} >
              <img
                src="https://cdn-icons-png.flaticon.com/128/9637/9637250.png"
                alt=""
              />
            </div>
            <input
              className="where-to"
              onChange={whereData}
              type="text"
              placeholder="where to"
              value={secData}
            />
            <input
              className="where-to"
              onChange={whenData}
              type="date"
              style={{width:'20%'}}
              placeholder="when"
            />
            <input
              className="where-to"
              type="date"
              style={{width:'20%'}}
              placeholder="when"
            />
            {inputData && email ? (
              <button onClick={() => inputDataClickHandle(from, where, when)}>
                <Link to="/searchDetails" style={{ textDecoration: 'none' }}>
                  searchDetails
                </Link>
              </button>
            ) : (
              <button onClick={() => inputDataClickHandle(from, where)}>
                searchDetails
              </button>
            )}
          </div>
        </section>
      </div>
      <main>
        <div className="intro">
          <div className="int">
            <div className="content-one">
              <h1>Easy Booking sites</h1>
              <p>Can I book one way flight tickets on this site?</p>
              {email ? (
                <Link to="/">
                  <button>Learn More</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button>Learn More</button>
                </Link>
              )}
            </div>
            <div className="image-f">
              <img
                src="https://images.pexels.com/photos/104826/aircraft-holiday-sun-tourism-104826.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
        </div>
        <Card />
        <div className="about-me">
          <div className="about-me-text">
            <h2>cheapest flights</h2>
            <p>
              You can sort flights by price to see them from cheapest to most
              expensive. To find the cheapest flights, you also need to consider
              factors such as when you are booking and when you want to travel.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/1547739/pexels-photo-1547739.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="me"
          />
        </div>
      </main>
    </>
  );
}

export default Home;
