import React from "react";
import moment from "moment";
import "moment-timezone";

export default function Date(props) {
  const dateObject = moment(props.value);
  const day = dateObject.format("dddd");
  const time = dateObject.format("h:mm a");

  return (
    <div>
      {day} {time}
    </div>
  );
}
