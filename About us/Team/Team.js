// Team members data
const founders = [
    {
        name: 'Shravan',
        role: 'Student / Developer ',
       // image: 'https://via.placeholder.com/80'
    },
    {
        name: 'Sumeet',
        role: 'Student / Developer',
       // image: 'https://via.placeholder.com/80'
    }
];

const contentCreators = [
    {
        name: 'Akshay',
        role: 'Student / Editor',
       // image: 'https://via.placeholder.com/80'
    },
    {
        name: 'Vedant',
        role: 'Student / Social Media Handler',
       // image: 'https://via.placeholder.com/80'
    },
    {
        name: 'Sahil',
        role: 'Student / Content Creator',
       // image: 'https://via.placeholder.com/80'
    },
    {
        name: 'Om',
        role: 'Student / Fitness Trainer',
       // image: 'https://via.placeholder.com/80'
    }
];

// Function to create member card
function createMemberCard(member) {
    return `
        <div class="member-card">
            <div class="member-content">
                <div class="member-info">
             
                    <div class="member-details">
                        <h3>${member.name}</h3>
                        <p>${member.role}</p>
                    </div>
                </div>
                <svg class="chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    `;
}

// Render team members
document.addEventListener('DOMContentLoaded', () => {
    const foundersList = document.getElementById('foundersList');
    const creatorsList = document.getElementById('creatorsList');

    // Render founders
    foundersList.innerHTML = founders.map(founder => createMemberCard(founder)).join('');

    // Render content creators
    creatorsList.innerHTML = contentCreators.map(creator => createMemberCard(creator)).join('');

    // Add click event listeners to cards
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', () => {
            console.log('Card clicked:', card.querySelector('h3').textContent);
        });
    });
});
