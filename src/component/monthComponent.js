import React, {useState} from "react";
import EventShow from "./eventShowComponent";

const DateFiller = ({firstDay, totalDays, month, year, setEventStartDate, currentEventSetter, Events})=>{
    console.log(Events);
    const eventsMonthData = Events.filter((data)=>(data.startDate.getFullYear() === year && data.startDate.getMonth()===month))
    const EventsDate = eventsMonthData.map((data)=>data.startDate.getDate())
    const tableRow = [];
    let date=1;
    let today = new Date();//date in string format
    for(let i=0;i<6;i++){
        const cell=[];
        for (let j = 0; j < 7; j++) {
            if(i===0 && j<firstDay){
                cell.push(<td key={i+''+j}>&nbsp;</td>)
            }else if(date>totalDays){
                cell.push(<td key={i+''+j}>&nbsp;</td>)
            }
            else{
                if(date===today.getDate() && month===today.getMonth() && year===today.getFullYear()){
                    cell.push(
                    <td className="hoverEffect bg-info-color" key={i+''+j}>
                        <a className="fs-5" onClick={(event)=>setEventStartDate(event.target.innerText)} data-bs-toggle="modal" data-bs-target="#eventAdderModal" href={`#${date}`}>{date}</a>
                        { EventsDate.filter(data=>data===date).length>0
                            
                            ?<span onClick={(event)=>currentEventSetter(eventsMonthData.filter((data)=>data.startDate.getDate()==event.target.attributes.value.value))} value={date} data-bs-toggle="modal" data-bs-target="#eventShowModal" className="badge rounded-pill bg-info-color ">
                                {EventsDate.filter(data=>data===date).length}
                            </span> :
                            <span>
                                
                            </span> 
    
                            }
                    </td>
                    )
                }else{
                    cell.push(<td className="hoverEffect" key={date}>
                        <a className="fs-5" onClick={(event)=>setEventStartDate(event.target.innerText)} data-bs-toggle="modal" data-bs-target="#eventAdderModal" href={`#${date}`}>{date} </a>

                        { EventsDate.filter(data=>data===date).length>0
                            
                        ?<span onClick={(event)=>currentEventSetter(eventsMonthData.filter((data)=>data.startDate.getDate()==event.target.attributes.value.value))} value={date} data-bs-toggle="modal" data-bs-target="#eventShowModal" className="badge rounded-pill bg-info-color">
                            {EventsDate.filter(data=>data===date).length}
                        </span> :
                        <span>
                            
                        </span> 

                        }
                        </td>)
                }
                date++;
            }
            
        }
        tableRow.push(<tr key={i}>{cell}</tr>)
    }
    return tableRow;
}

const Month =({firstDay, totalDays, month, year, setEventStartDate, EventsDate, setEvents})=>{
    
    const [currentEvent, currentEventSetter] = useState([]);
    // console.log(EventsDate);
    return (
        <><EventShow Events={EventsDate} setEvents={setEvents} currentEvent={currentEvent} currentEventSetter={currentEventSetter}/>
        <table className="table table-bordered border-secondary">
            <thead>
                <tr>
                    <th scope="col">Sun</th>
                    <th scope="col">Mon</th>
                    <th scope="col">Tue</th>
                    <th scope="col">Wed</th>
                    <th scope="col">Thu</th>
                    <th scope="col">Fri</th>
                    <th scope="col">Sat</th>
                </tr>
            </thead>
            <tbody>
                <DateFiller Events={EventsDate} currentEventSetter={currentEventSetter} month={month} year={year} firstDay = {firstDay} totalDays = {totalDays} setEventStartDate={setEventStartDate}/>
            </tbody>
        </table>
        </>
    )

}

export default Month;