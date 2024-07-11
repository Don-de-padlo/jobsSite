console.log("vacantion");
import("./create-vacantion.js");
function addVacantionBlock(id) {

    const storedVacantion = JSON.parse(localStorage.getItem('vacantion'+id));
    // Create main wrapper div
    let vacantionWrapper = document.createElement('div');
    vacantionWrapper.id = id;
    vacantionWrapper.classList.add('vacantion-form-wrapper');

    // Create inner content div
    let vacantionContent = document.createElement('div');
    vacantionContent.classList.add('vacantion-form-content');

    // Create title and details
    let titleText = document.createElement('div');
    titleText.classList.add('vacantion-title-text');
    titleText.innerHTML = `
        <h2 class="vacantion-naming"> ${storedVacantion.vacancyName}</h2>
        <span class="vacantion-salary"> ${storedVacantion.vacancySalary} ₴ </span>
        <div class="description-wrapper">
            <span class="vacantion-company"> ${storedVacantion.vacancyCompany} </span>
            <span class="vacantion-city">${storedVacantion.vacancyCity}</span>
        </div>
    `;

    // Create image element
    let image = document.createElement('img');
    image.src = 'https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/14169029_20240110160148.png';
    image.classList.add('vacantion-title-brand-image');

    // Append title and image to content div
    vacantionContent.appendChild(titleText);
    vacantionContent.appendChild(image);

    let button = document.createElement('button');
    button.classList.add('vacantion-button','btn', 'btn-primary');
    button.textContent = 'Click Me';
    button.addEventListener('click', function() {
        console.log('Button clicked!' + id);
        id++;
    });
    
    // Create benefits div
    let vacantionBenefits = document.createElement('div');
    vacantionBenefits.classList.add('vacantion-benefits');

    // Append content and benefits to main wrapper
    vacantionWrapper.appendChild(vacantionContent);
    vacantionWrapper.appendChild(vacantionBenefits);
    vacantionWrapper.appendChild(button);
    // Append main wrapper to main content wrapper
    document.querySelector('.main-content-wrapper').appendChild(vacantionWrapper);
}
function redirectToCreateVacationPage() {
    // Assuming you want to redirect the entire page to create-vacation.html
    window.location.href = 'create-vacantion.html';
  }
function findAllVacantion(){
    document.querySelector('.main-content-wrapper').innerHTML = "";
    const id = JSON.parse(localStorage.getItem('id'));
    for(let i =0;i <= parseInt(id); i++){
        addVacantionBlock(i);
    }
}
function clearLocalStorage(){
    localStorage.clear();
}
document.querySelector('.create-vacantion').addEventListener('click', redirectToCreateVacationPage);
document.querySelector('.find-button').addEventListener('click', findAllVacantion);
document.querySelector('.clear-button').addEventListener('click', clearLocalStorage);