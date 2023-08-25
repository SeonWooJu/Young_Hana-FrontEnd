import React, { useState } from "react";
import ReactDatetime from "react-datetime";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleReactDatetimeChange = (who, date) => {
    if (
        startDate &&
        who === "endDate" &&
        new Date(startDate._d + "") > new Date(date._d + "")
    ) {
      setStartDate(date);
      setEndDate(date);
    } else if (
        endDate &&
        who === "startDate" &&
        new Date(endDate._d + "") < new Date(date._d + "")
    ) {
      setStartDate(date);
      setEndDate(date);
    } else {
      who === "startDate" ? setStartDate(date) : setEndDate(date);
    }
  };

  const getClassNameReactDatetimeDays = (date) => {
    if (startDate && endDate && startDate._d + "" !== endDate._d + "") {
      if (
          new Date(endDate._d + "") > new Date(date._d + "") &&
          new Date(startDate._d + "") < new Date(date._d + "")
      ) {
        return " middle-date";
      }
      if (endDate._d + "" === date._d + "") {
        return " end-date";
      }
      if (startDate._d + "" === date._d + "") {
        return " start-date";
      }
    }
    return "";
  };

  return (
      <>
        <h3 className="h4 text-success font-weight-bold mt-md mb-4">
          Datepicker
        </h3>
        <Row>
          <Col md="4">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Single date
            </small>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Date Picker Here",
                  }}
                  timeFormat={false}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col className="mt-4 mt-md-0" md="8">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Date range
            </small>
            <Row>
              <Col sm={6} xs={12}>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <ReactDatetime
                      inputProps={{
                        placeholder: "Start Date",
                      }}
                      value={startDate}
                      timeFormat={false}
                      onChange={(e) =>
                        handleReactDatetimeChange("startDate", e)
                      }
                      renderDay={(props, currentDate, selectedDate) => {
                        let classes = props.className;
                        classes +=
                          getClassNameReactDatetimeDays(currentDate);
                        return (
                          <td {...props} className={classes}>
                            {currentDate.date()}
                          </td>
                        );
                      }}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={6} xs={12}>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <ReactDatetime
                      inputProps={{
                        placeholder: "End Date",
                      }}
                      className="rdtPickerOnRight"
                      value={endDate}
                      timeFormat={false}
                      onChange={(e) =>
                        handleReactDatetimeChange("endDate", e)
                      }
                      renderDay={(props, currentDate, selectedDate) => {
                        let classes = props.className;
                        classes +=
                          getClassNameReactDatetimeDays(currentDate);
                        return (
                          <td {...props} className={classes}>
                            {currentDate.date()}
                          </td>
                        );
                      }}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
  );
};

export default Datepicker;