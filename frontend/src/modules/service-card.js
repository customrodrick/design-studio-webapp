import { serviceItem } from "./data/service-data.js";
let serviceHTML = '';

serviceItem.forEach((serviceItem) => {
    serviceHTML += `
    <div class="services-card">
        <img src="/src/images/${serviceItem.serviceMedia}" alt="CAD/CAM" class="card-image" />
        <p class="card-text">${serviceItem.serviceDesc}</p>
    </div>
    `;
})

document.querySelector('.service-js').innerHTML = serviceHTML;
