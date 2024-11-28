document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderInput = document.getElementById('card-holder');
    const cardExpiryInput = document.getElementById('card-expiry');
    const cardCVCInput = document.getElementById('card-cvc');

    const cardNumberDisplay = document.querySelector('.card-number');
    const cardHolderDisplay = document.querySelector('.holder-name');
    const cardExpiryDisplay = document.querySelector('.expiry-date');
    const cardCVCDisplay = document.querySelector('.cvc-number');
    const cardLogoDisplay = document.getElementById('card-logo');

    cardNumberInput.addEventListener('input', (e) => {
        let cardNumber = e.target.value;
        cardNumber = cardNumber.replace(/\D/g, '');
        cardNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();
        cardNumberDisplay.textContent = cardNumber || '#### #### #### ####';
        updateCardLogo(cardNumber);
    });

    cardHolderInput.addEventListener('input', (e) => {
        cardHolderDisplay.textContent = e.target.value.toUpperCase() || 'NOME COMPLETO';
    });

    cardExpiryInput.addEventListener('input', (e) => {
        let expiryDate = e.target.value;
        expiryDate = expiryDate.replace(/\D/g, '');
        if (expiryDate.length > 2) {
            expiryDate = expiryDate.slice(0, 2) + '/' + expiryDate.slice(2);
        }
        cardExpiryDisplay.textContent = expiryDate || 'MM/AA';
    });

    cardCVCInput.addEventListener('input', (e) => {
        cardCVCDisplay.textContent = e.target.value || '###';
    });

    function updateCardLogo(cardNumber) {
        const firstDigit = cardNumber[0];
        let logoUrl = '';

        if (firstDigit === '4') {
            logoUrl = 'assets/imagens/visa.png'; // Visa
        } else if (firstDigit === '5') {
            logoUrl = 'assets/imagens/mastercard.png'; // MasterCard
        
        } else {
            logoUrl = '';
        }

        cardLogoDisplay.style.backgroundImage = logoUrl ? `url(${logoUrl})` : 'none';
    }
});
