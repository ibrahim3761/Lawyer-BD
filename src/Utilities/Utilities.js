const getStoredBooking = () =>{

    const BookSTR = localStorage.getItem('bookinglist');
    if(BookSTR) {
        return JSON.parse(BookSTR);
    }
    else{
        return [];
    }

}

const addToDb = (id) => {
    const storedBooking  = getStoredBooking();
    if(storedBooking.includes(id)){
        alert('Already added to booking list')
    }
    else{
        storedBooking.push(id);
        localStorage.setItem('bookinglist', JSON.stringify(storedBooking));
        alert('Added to booking list'); 
        console.log(storedBooking);
        
    }
}

export {addToDb,getStoredBooking};