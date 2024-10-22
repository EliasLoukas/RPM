let checkCount = 1;
const maxChecks = 7;
const checkSection = document.getElementById('check-section');
const addCheckBtn = document.getElementById('add-check-btn');

addCheckBtn.addEventListener('click', () => {
    if (checkCount < maxChecks) {
        checkCount++;

        const newCheckRow = document.createElement('div');
        newCheckRow.classList.add('payment-row');

        newCheckRow.innerHTML = `
            <label>Check</label>
            <select>
                <option>LBP</option>
                <option>USD</option>
            </select>
            <input type="text" placeholder="Amount in LBP">
            <input type="text" placeholder="Amount in USD">
            <button type="button" class="remove-btn">-</button>
        `;

        checkSection.appendChild(newCheckRow);

        const removeBtn = newCheckRow.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
            checkSection.removeChild(newCheckRow);
            checkCount--;
        });
    } else {
        alert('You can only add up to 7 checks.');
    }
});
0