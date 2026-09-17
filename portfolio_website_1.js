// DOM Element Selections for Contact Form
const searchInput = document.querySelector('#search');
const inputMsg = document.querySelector('.inputMsg');

const countrySelect = document.querySelector('#countrySelect');
const changeMsg = document.querySelector('.changeMsg');

const btnClick = document.querySelector('#clickEvent');
const msgClick = document.querySelector('.clickMsg');

const loginForm = document.querySelector('#loginForm');
const loginMsg = document.querySelector('.loginMsg');

// Input Event (Live Name Personalization)
searchInput.addEventListener("input", (event) => {
    if (event.target.value === "") {
        inputMsg.innerHTML = "...";
    } else {
        inputMsg.innerHTML = event.target.value;
    }
});

// Change Event (Dropdown Selection)
countrySelect.addEventListener("change", (event) => {
    if (event.target.value === "None") {
        changeMsg.innerHTML = "your project";
    } else {
        changeMsg.innerHTML = event.target.value;
    }
});

// Click Event (Availability check)
btnClick.addEventListener("click", (event) => {
    msgClick.innerHTML = "✅ I currently have time in my schedule to take on new projects this week!";
});

// Submit Event (Handling the form)
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    loginMsg.innerHTML = "Thank you! Your project details have been successfully received. I will email you shortly.";
});

// Keyup & createElement Event (Feature Wishlist)
const keyInput = document.querySelector('#keyInput');
const keyMsg = document.querySelector('.keyMsg');
const list = document.querySelector('.list');

keyInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); 
        
        if (event.target.value.trim() !== "") {
            keyMsg.innerHTML = `Added "${event.target.value}" to your wishlist.`;
            
            const newItem = document.createElement('li');
            newItem.innerHTML = event.target.value;
            list.append(newItem);
            
            event.target.value = ""; 
            
            setTimeout(() => {
                keyMsg.innerHTML = "";
            }, 2000);
        }
    }
});