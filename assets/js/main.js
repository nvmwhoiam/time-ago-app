import { timeAgo } from './timeAgo.js';

document.addEventListener('DOMContentLoaded', () => {
    const timeForm = document.getElementById('timeForm');
    const dateTimeInput = document.getElementById('dateTime');
    const resultText = document.getElementById('result');
    const exampleButtons = document.querySelectorAll('.example-btn');

    // Set current date and time as default
    const now = new Date();
    dateTimeInput.value = now.toISOString().slice(0, 16);

    // Handle form submission
    timeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (dateTimeInput.value) {
            const date = new Date(dateTimeInput.value);
            const result = timeAgo(date);
            resultText.textContent = result;
            resultText.classList.remove('fade-in');
            void resultText.offsetWidth; // Trigger reflow
            resultText.classList.add('fade-in');
        }
    });

    // Handle example buttons
    exampleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const timeOffset = parseInt(button.dataset.time);
            const date = new Date(Date.now() + timeOffset);
            dateTimeInput.value = date.toISOString().slice(0, 16);
            const result = timeAgo(date);
            resultText.textContent = result;
            resultText.classList.remove('fade-in');
            void resultText.offsetWidth; // Trigger reflow
            resultText.classList.add('fade-in');
        });
    });

    // Show initial result
    resultText.textContent = timeAgo(now);
});
