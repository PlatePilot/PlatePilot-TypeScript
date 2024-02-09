const addPlateDescription = document.getElementById("addplatedescription");
const closePlateDescription = document.getElementById("closeplatedescription");

const plateDescription = document.querySelector('.plate-description') as HTMLElement;
const connector = document.querySelector('.connector') as HTMLElement;
const addPlateButton = document.querySelector('.addplate-button') as HTMLElement;

addPlateDescription?.addEventListener('click', () => {
    plateDescription.style.display ='block';
    connector.style.display ='flex';
    addPlateButton.style.display ='none';
});

closePlateDescription?.addEventListener('click', () => {
    plateDescription.style.display ='none';
    connector.style.display ='none';
    addPlateButton.style.display ='flex';
});