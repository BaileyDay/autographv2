import React from "react";
import '../css/businessHours.css'
import $ from "jquery";

const BusinessHours = () => {
  daySet();
  return (
    <div className="hoursContainer">
      <div class="container demo-bg">
        <div class="columns">
          <div class="column"></div>
          <div class="column"></div>
          <div class="column">
            <div class="business-hours">
              <h2 class="title">Barn Hours</h2>
              <ul class="list-unstyled opening-hours">
                <li>
                  <span className="dayTitle"> Sunday</span>{" "}
                  <span class="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Monday </span>
                  <span class="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Tuesday </span>
                  <span class="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Wednesday </span>
                  <span class="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Thursday </span>
                  <span class="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle">Friday</span>{" "}
                  <span class="pull-right">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="dayTitle"> Saturday </span>
                  <span class="pull-right">9:00 AM -6:00 PM</span>
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
