import React, {useState} from "react";
import Month from "./monthComponent";
import Events from "../events/events";
import EventAdder from "./eventAdderComponent";

const next = (year, month, setMonth, setYear)=>{
    setMonth((month + 1) % 12);
    setYear((month === 11) ? year + 1 : year);
}

const prev = (year, month, setMonth, setYear)=>{
    setMonth((month === 0) ? 11: month-1);
    setYear((month === 0) ? year - 1 : year);
}
const equal = (year, month, setMonth, setYear)=>{
    
    setMonth(parseInt(month));
    setYear(parseInt(year));
}

const Calender = ()=>{
    const [EventsDate, setEventsDate]= useState(Events)

    const [date, setDate] = useState(new Date())
    const [month , setMonth]= useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    let firstDay = (new Date(year, month)).getDay();
    let totalDaysInMonth = 32 - new Date(year, month, 32).getDate();
    const [eventStartDate, setEventStartDate] = useState(0);
    console.log(EventsDate);
    return(
        <>
        <EventAdder setEvents = {setEventsDate} Events={EventsDate} eventStartDate={eventStartDate}  month={month} year={year} />
        <div className="col-12 mt-5">
            <div className="row header shadow-lg p-3 mb-5 bg-body rounded">
                <div className="bg-color">
                    <div className="row justify-content-between">
                        <div className="col-3 col-md-2 list-group">
                            <select onChange={(event)=>equal(year, event.target.value, setMonth, setYear)} class="form-select bg-color list-group-item" aria-label="select month">
                                <option selected={month===0} value="0">Jan</option>
                                <option selected={month===1} value="1">Feb</option>
                                <option selected={month===2} value="2">Mar</option>
                                <option selected={month===3} value="3">Apr</option>
                                <option selected={month===4} value="4">May</option>
                                <option selected={month===5} value="5">Jun</option>
                                <option selected={month===6} value="6">Jul</option>
                                <option selected={month===7} value="7">Aug</option>
                                <option selected={month===8} value="8">Sep</option>
                                <option selected={month===9} value="9">Oct</option>
                                <option selected={month===10} value="10">Nov</option>
                                <option selected={month===11} value="11">Dec</option>
                            </select>
                            <input onChange={(event)=>equal(event.target.value, month, setMonth, setYear)} className="bg-color list-group-item" type="number" min="2000" max="2040" value={year}></input>
                        </div>
                        <div className="col-5 col-md-2" style={{display:"flex"}}>
                            <button className="btn" onClick={()=>prev(year, month, setMonth, setYear)}>
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="btn" onClick={()=>next(year, month, setMonth, setYear)}>
                                <span className="carousel-control-next-icon"></span>
                            </button> 
                        </div>
                    </div>
                </div>

                <Month setEvents = {setEventsDate} EventsDate={EventsDate} month={month} year={year} firstDay = {firstDay} totalDays = {totalDaysInMonth} setEventStartDate={setEventStartDate}/>
               
            </div>
        </div>
        </>
    )
}

export default Calender;