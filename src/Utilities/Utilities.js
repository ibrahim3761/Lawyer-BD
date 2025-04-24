const getStoredBooking = () => {
    const BookSTR = localStorage.getItem('bookinglist');
    return BookSTR ? JSON.parse(BookSTR) : [];
};

const addToDb = (id) => {
    const storedBooking = getStoredBooking();
    if (storedBooking.includes(id)) {
        return false; // Already booked
    } else {
        storedBooking.push(id);
        localStorage.setItem('bookinglist', JSON.stringify(storedBooking));
        return true; // New booking successful
    }
};

const removeFromDb = (id) => {
    const storedBooking = getStoredBooking();
    const updatedBookings = storedBooking.filter((booking) => booking !== id);
    localStorage.setItem('bookinglist', JSON.stringify(updatedBookings));
}

export { addToDb, getStoredBooking,removeFromDb };