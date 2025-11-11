import { benefitItem } from "./data/benefit-data.js";

let benefitHTML = '';

benefitItem.forEach((benefitItem) => {
    benefitHTML +=`

    <div class="benefit-card card">
        <i class="fas fa-${benefitItem.benefitIcon} benefit-icon"></i>
        <h3 class="benefit-card-title">${benefitItem.benefitTitle}</h3>
        <p class="benefit-card-desc">
            ${benefitItem.benefitDesc}
        </p>
    </div>

    `;
})

document.querySelector('.benefit-js').innerHTML = benefitHTML;