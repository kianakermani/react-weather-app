import React from "react";
import moment from "moment";
import "moment-timezone";

export default function Date(props) {
  const now = moment(props.value); // Get the current moment
  var jun = moment("2014-06-01T12:00:00Z");
  const day = now.format("dddd"); // Get the day of the week (e.g., Tuesday)
  const hour = jun.tz("Asia/Tehran").format("HH"); // Get the hour in 24-hour format (e.g., 14)
  const minute = jun.tz("Asia/Tehran").format("MM"); // Get the minute (e.g., 24)

  return (
    <div>
      {day} {hour}:{minute}
    </div>
  );
}
