import React, { useState } from "react";
import { useIntl } from "react-intl";
import { FormattedMessage } from "react-intl";
import Job from "./job";

const JobsList = () => {
  const intl = useIntl();
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
    },
  ]);

  let headerStyle = {
    "background-color": "black",
    color: "white",
  };

  if (intl.locale === "es-ES") {
    headerStyle = { "background-color": "white", color: "black" };
  }
  console.log(intl.locale);
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr style={headerStyle}>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" defaultMessage='Position'/>
            </th>
            <th scope="col">
              <FormattedMessage id="Company" defaultMessage='Company'/>
            </th>
            <th scope="col">
              <FormattedMessage id="Salary" defaultMessage='Salary'/>
            </th>
            <th scope="col">
              <FormattedMessage id="City" defaultMessage='City'/>
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate" defaultMessage='Publication date'/>
            </th>
            <th scope="col">
              <FormattedMessage id="Views" defaultMessage='Views'/>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
