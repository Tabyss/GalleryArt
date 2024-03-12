import React from "react";
import { eventList } from "../../../api/Event";
import moment from "moment";

function List() {
  return (
    <div className="list">
      <div className="list-title">
        <h2>exhibitions</h2>
        <p>2024</p>
      </div>
      {eventList.map((list, i) => {
        return (
          <div className="list-event">
            <p className="list-event-title">{list.name}</p>
            <p>{moment(list.start).format("DD MMM")}</p>
          </div>
        );
      })}
      <div className="list-link">
        <a>Buy Tickets</a>
      </div>
    </div>
  );
}

export default List;
