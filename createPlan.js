function compareDates(endDate, startDate) {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    
    // Check if endDate is less than or equal to startDate
    if (endDateObj <= startDateObj) {
        return false; // Invalid: End date is before or same as start date
    }
    return true; // Valid: End date is after start date
}

// Assuming jQuery UI Datepicker is used
$(document).ready(function() {
    // Get the start date from the input field
    var startDate = $('#startDate').val();
    
    // Initialize the end date picker with the start date as the minimum date
    $('#endDate').datepicker({
        minDate: new Date(startDate),
        onSelect: function(dateText, inst) {
            // Update the end date value
            $('#endDate').val(dateText);
        }
    });
});
