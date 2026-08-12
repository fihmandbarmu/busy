// Data for our business services
const servicesData = [
    {
        title: "Strategic Consulting",
        description: "We help you identify new market opportunities and streamline your business operations."
    },
    {
        title: "Digital Marketing",
        description: "Boost your online presence with our targeted SEO and social media campaigns."
    },
    {
        title: "IT Support",
        description: "24/7 technical support and infrastructure management to keep your business running smoothly."
    }
];

// Function to load services into the HTML
function loadServices() {
    const container = document.getElementById('service-container');
    
    // Loop through our data array and create HTML elements for each service
    servicesData.forEach(service => {
        // Create a new div for the card
        const card = document.createElement('div');
        card.className = 'service-card';
        
        // Add the content inside the card
        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        
        // Append the card to our container on the page
        container.appendChild(card);
    });
}

// Function to handle the contact form submission
function handleFormSubmit(event) {
    // Prevent the page from refreshing when the form is submitted
    event.preventDefault();
    
    // Grab the values the user typed in
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Show a success message (In a real app, you would send this data to a server here)
    alert(`Thank you, ${name}! We have received your message and will reply to ${email} shortly.`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
}

// Wait for the HTML to fully load, then run our functions
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    
    // Listen for when the form is submitted
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleFormSubmit);
});
