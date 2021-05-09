const now = new Date();
const Events = [{
    id: 0,
    startDate: new Date(now.getFullYear(), now.getMonth(), 8, 13),
    endDate: new Date(now.getFullYear(), now.getMonth(), 8, 13),
    title: 'Lunch @ Old Rao',
    description:"Some quick example text to b bulk of the card's content"
}, {
    id: 1,
    startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate()+5, 15),
    endDate: new Date(now.getFullYear(), now.getMonth(), 8, 13),
    title: 'General orientation',
    description:"Some quick example text to b bulk of the card's content"
}, {
    id: 2,
    startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10, 18),
    endDate: new Date(now.getFullYear(), now.getMonth(), 8, 13),
    title: 'Test @ Kuk',
    description:"Some quick example text to b bulk of the card's content"
}, {
    id: 3,
    startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10, 18),
    endDate: new Date(now.getFullYear(), now.getMonth(), 8, 13),
    title: 'Meeting @ Comviva',
    description:"Some quick example text to b bulk of the card's content"
}, {
    id: 4,
    startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 15, 10, 30),
    endDate: new Date(now.getFullYear(), now.getMonth(), 8, 13),
    title: 'Meeting @ Mahendra',
    description:"Some quick example text to b bulk of the card's content"
}];

export default Events;