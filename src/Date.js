import React from "react";
import moment from "moment";
import "moment-timezone";

export default function Date(props) {
  const dateObject = moment(props.value);
  const formattedDate = dateObject.format("dddd,     h:mm a");

  return <div>{formattedDate}</div>;
}
