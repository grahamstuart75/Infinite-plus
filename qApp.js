
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

// Show Note Section in Question Paper
document.getElementById('noteButton').addEventListener('click', () => {
    const note = document.getElementById('note');
    note.classList.toggle('hidden');
});

// Theme Toggle
const themeButton = document.getElementById('toggleTheme');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeButton.textContent = document.body.classList.contains('light') ? 'Switch to Dark Theme' : 'Switch to Light Theme';
});
