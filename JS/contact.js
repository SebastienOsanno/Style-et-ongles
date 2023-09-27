// Start by selecting my main select in my form
const select = document.querySelector('#Demand__question');

//! Quote part form !

// Select quote section that is hidden for now
const quote = document.querySelector('.quote');
const product = document.querySelector('.info__product');
const reclamation = document.querySelector('.reclamation');
const fidelite = document.querySelector('.fidelity');
const other = document.querySelector('.other');

// Add an eventListener to let appear the section
// and a 'else" to hide the section
select.addEventListener('change',(event) => {

        if (event.target.value === 'Quote') {
            quote.style.display = 'flex';
            product.style.display = 'none';
            reclamation.style.display = 'none';
            fidelite.style.display = 'none';
            other.style.display = 'none';
        }
        else if (event.target.value === 'Produit') {
            product.style.display = 'flex';
            quote.style.display = 'none';
            reclamation.style.display = 'none';
            fidelite.style.display = 'none';
            other.style.display = 'none';
        }
        else if (event.target.value === 'Reclamation') {
            reclamation.style.display = 'flex';
            quote.style.display = 'none';
            product.style.display = 'none';
            fidelite.style.display = 'none';
            other.style.display = 'none';
        }
        else if (event.target.value === 'Fidélité') {
            fidelite.style.display = 'flex';
            quote.style.display = 'none';
            product.style.display = 'none';
            reclamation.style.display = 'none';
            other.style.display = 'none';
        }
        else if (event.target.value === 'Other') {
            other.style.display = 'flex';
            quote.style.display = 'none';
            product.style.display = 'none';
            fidelite.style.display = 'none';
            reclamation.style.display = 'none';
        }
        else 
            {quote.style.display = 'none';
            product.style.display = 'none';
            fidelite.style.display = 'none';
            reclamation.style.display = 'none';
            other.style.display = 'none';
        }
    })

// When I click on my label, I have access to the input text.
const nameLabel = document.querySelector('.name__label');
const nameInput = document.querySelector('.name__input');

const nameLabelAll = for (const label of nameLabel) {
    
}

nameLabel.addEventListener('click', (event) => {
        const targetLabel = event.target
        targetLabel.style.display = 'block';
       //nameInput.style.transitionDuration = '1s';
    }
   )