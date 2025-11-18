import { premiumItem, standardItem, basicItem } from "./data/membership-data.js";

let membershipPremiumHTML = '';
let membershipStandardHTML = '';
let membershipBasicHTML = '';

export function membershipCard() {

    // premium card list items
premiumItem.forEach((premiumItem) => {
    membershipPremiumHTML += `

       <li><i class="tick-nike far fa-check-circle"></i> ${premiumItem.listItem}</li>

    `;
})

    // standard card list items

standardItem.forEach((standardItem) => {
    membershipStandardHTML += `
    <li><i class="tick-nike far fa-check-circle"></i> ${standardItem.listItem}</li>
    `;
})

    // basic card list items

basicItem.forEach((basicItem) => {
    membershipBasicHTML += `

    <li><i class="tick-nike far fa-check-circle"></i> ${basicItem.listItem}</li>

    `;
})

document.querySelector('.premium-js').innerHTML = membershipPremiumHTML;
document.querySelector('.standard-js').innerHTML = membershipStandardHTML;
document.querySelector('.basic-js').innerHTML = membershipBasicHTML;
}

