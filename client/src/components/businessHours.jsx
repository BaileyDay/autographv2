import React from "react";
import '../css/businessHours.css'
import $ from "jquery";

const BusinessHours = () => {
  daySet();
  return (
    <div className="hoursContainer">
      <div className="container demo-bg">
        <div className="columns">
          <div className="column"></div>
          <div className="column"></div>
          <div className="column">
            <div className="business-hours">
              <h2 className="title">Barn Hours</h2>
              <ul className="list-unstyled opening-hours">
                <li>
                  <span className="dayTitle"> Sunday</span>{" "}
                  <span className="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Monday </span>
                  <span className="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Tuesday </span>
                  <span className="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Wednesday </span>
                  <span className="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Thursday </span>
                  <span className="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Friday</span>{" "}
                  <span className="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle"> Saturday </span>
                  <span className="pull-right">9:00 AM -6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function daySet() {
  $(document).ready(function () {
    $(".opening-hours li").eq(new Date().getDay()).addClass("today");
  });
}

export default BusinessHours;
