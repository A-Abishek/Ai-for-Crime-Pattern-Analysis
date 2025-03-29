
document.getElementById('crimeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const crimeType = document.getElementById('crimeType').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value;

    const reportDisplay = document.getElementById('reportDisplay');
    reportDisplay.innerHTML = `
        <h3>Report Details:</h3>
        <p><strong>Crime Type:</strong> ${crimeType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;

    // Here, you would typically send this data to a server
    // for storage and further processing.
    console.log({
        crimeType,
        location,
        date,
        time,
        description
    });
    //clear the form after submit
    document.getElementById('crimeForm').reset();
});