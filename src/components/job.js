import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedNumber value={props.offer.salary*1000000} notation='compact' compactDisplay='long'/></td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />{" "}
      </td>
      <td>
        <FormattedNumber value='5000'/>
      </td>
    </tr>
  );
};

export default Job;
