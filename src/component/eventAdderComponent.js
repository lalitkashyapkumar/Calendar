import React,{useState} from "react";

const EventAdder = ({eventStartDate,setEvents, Events,  month, year })=>
{
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [startTime, setStartTime] = useState(0)
    const [endTime, setEndTime] = useState(0)
    // console.log(eventStartDate,  month, year );

    const hadleSubmit = ()=>{
        console.log(startTime, endTime)

        if(parseInt(startTime) < parseInt(endTime)){
            const newEvents={
                "id": Date.now(),
                "title":title,
                "description":description,
                "startDate": new Date(year, month, eventStartDate, startTime),
                "endDate": new Date(year, month, eventStartDate, endTime)
            }
            setEvents([...Events, newEvents]);
            setTitle("")
            setDescription("")
        }else{
            alert("Invalid time")
        }
        
    }

    return(
    <div className="modal fade" id="eventAdderModal" tabIndex="-1" aria-labelledby="eventAdderLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title" id="eventAdderLabel">Add Event</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body pt-0">
            <form onSubmit={()=>console.log("clicked")}>
                <div className="row">
                    <label id="eventStartDate" className="col-form-label text-center">
                        <span className="badge rounded-pill bg-danger fw-bolder">{eventStartDate}/{month}/{year}</span>
                    </label>                        
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="eventTitle">Title</span>
                    <input onChange={(event)=>setTitle(event.target.value)} value={title} type="text" className="form-control" placeholder="Please write you event title here" aria-label="Title" aria-describedby="eventTitle"/>
                </div>

                <div className="input-group">
                  <span className="input-group-text">Description</span>
                  <textarea onChange={(event)=>setDescription(event.target.value)} value={description} className="form-control" aria-label="With textarea" rows="1"></textarea>
                </div>                
                <hr />
                <div className="row g-4 pt-2 align-items-center">
                    <div className="row">
                        <div className="col-6">
                            <label id="eventStartTime" className="col-form-label">Start Time</label>
                            <input onChange={(event)=>setStartTime(event.target.value)} className="form-control" type="number" min="0" max="23" value={startTime}></input>
                            
                        </div>
                        <div className="col-6">
                            <label id="eventStartDate" className="col-form-label">End Time</label>
                            <input onChange={(event)=>setEndTime(event.target.value)} className="form-control" type="number" min="0" max="23" value={endTime}></input>
                        </div>
                    </div>
                </div>
            </form>

        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={()=>hadleSubmit()} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
        
        </div>
    </div>
    </div>
</div>
)
}
export default EventAdder