function compareDates(endDate, startDate) {
    const startDate = new Date(startDate);
    const endDate = new Date(endDate);
    
    // Check if endDate is less than or equal to startDate
    if (endDate <= startDate) {
        return false; // Invalid: End date is before or same as start date
    }
    return true; // Valid: End date is after start date
}