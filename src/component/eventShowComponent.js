import React from "react";

const EventShow = ({currentEvent, currentEventSetter, setEvents, Events})=>{
    const EventLister = currentEvent.map((data, index)=>{
        return(<div key={index} className="card mb-1">
        <div className="card-header">
            {data.title}
            <button value={index} onClick={(event)=>
                {   setEvents(Events.filter((data)=>data!==currentEvent[event.target.value]));
                    currentEvent.splice(event.target.value,1)
                    currentEventSetter(currentEvent)
                }}
                
                type="button" className="btn-close float-end" aria-label="Delete"></button>
        </div>
        <div className="card-body">
            <p className="card-text">{data.description}</p>
            <p>Start at: <span className="badge rounded-pill bg-danger">{data.startDate.getDate()}/{data.startDate.getMonth()}/{data.startDate.getFullYear()}</span> at <span className="badge rounded-pill bg-danger">{data.startDate.getHours()} </span> O'Clock</p>
            <p>End at: <span className="badge rounded-pill bg-danger">{data.endDate.getDate()}/{data.endDate.getMonth()}/{data.endDate.getFullYear()}</span> at <span className="badge rounded-pill bg-danger">{data.endDate.getHours()} </span> O'Clock</p>
        </div>
    </div>)
    })

return(
    <div className="modal fade" id="eventShowModal" tabIndex="-1" aria-labelledby="eventAdderLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="eventAdderLabel">Show Event</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {EventLister}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
)
}
export default EventShow;