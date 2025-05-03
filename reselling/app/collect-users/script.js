document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = new URLSearchParams(formData).toString();

        try {
            // Assuming Web3 Forms provides a function for handling form data
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data,
            });

            if (response.ok) {
                const result = await response.text();
                alert('Signup successful: ' + result);
            } else {
                alert('Signup failed');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    });
});