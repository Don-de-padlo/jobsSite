let id = 0;
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('vacancyForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Retrieve form data
        let vacancyName = document.getElementById('vacancyName').value;
        let vacancySalary = document.getElementById('vacancySalary').value;
        let vacancyCompany = document.getElementById('vacancyCompany').value;
        let vacancyCity = document.getElementById('vacancyCity').value;
        let vacancyImage = document.getElementById('vacancyImage').value;

        // Log the retrieved data (you can modify this to save or display the data as needed)
        console.log('Vacancy Name:', vacancyName);
        console.log('Vacancy Salary:', vacancySalary);
        console.log('Vacancy Company:', vacancyCompany);
        console.log('Vacancy City:', vacancyCity);
        console.log('Vacancy Image URL:', vacancyImage);


        // Optionally, you can clear the form after submission
        // document.getElementById('vacancyForm').reset();
        // Sample data to be converted to JSON
        
        const vacantion = {
            vacancyName: vacancyName,
            vacancySalary: vacancySalary,
            vacancyCompany: vacancyCompany,
            vacancyCity: vacancyCity,
            vacancyImage: vacancyImage
        };
  
        localStorage.setItem('vacantion' + id, JSON.stringify(vacantion));
        localStorage.setItem('id', id);
        id++;
        // Retrieving the object
       
        
    });
});
