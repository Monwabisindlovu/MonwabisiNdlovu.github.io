const projects = document.querySelector('.projects');
const skills = document.querySelector('.skills');

projects.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        alert(`You clicked on ${e.target.textContent} project`);
    }
});

skills.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        alert(`You clicked on ${e.target.textContent} skill`);
    }
});
