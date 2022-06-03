import "../components/List.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "./EventCard";
import EventCard from "./EventCard";

const List = () => {
  //   const location = useLocation();
  //   const [destination, setDestination] = useState(location.state.destination);
  //   const [date, setDate] = useState(location.state.date);
  //   const [openDate, setOpenDate] = useState(false);
  //   const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <div type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Searcg by ttile</label>
              <input placeholder="sdf" type="text" />
            </div>
            <div className="lsItem">
              <label>Catagaries</label>
              <input placeholder="sdf" type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              {/* <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span> */}
              <DateRange
                //   onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                //   ranges={date}
              />
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
