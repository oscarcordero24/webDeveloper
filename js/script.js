
import { fetchJson, updateNthChildValue, updateCSSVariable } from "./functions.js";

const dashboardBtn = document.getElementById('dashboard'),
      settingsBtn = document.getElementById('settings'),
      addItemBtn = document.getElementById('add-item'),
      removeItemBtn = document.getElementById('remove-item'),
      logoutBtn = document.getElementById('logout'),
      menuBtn = document.getElementById('menu'),
      rating = document.getElementsByClassName('rating')[0],
      block = document.getElementsByClassName('block'),
      counter = document.querySelector('.counter'),
      target = +counter.getAttribute('data-target'),
      dataTable = document.getElementById('data-table'),
      totalCostNum = document.getElementById('cost-number'),
      totalCostIcon = document.getElementById('cost-icon');

// Initialize Page
initialize()

// Get data and work with it
getJsonData()

/*=============== Functions in Main file ==================*/

// Initialize elements and some functions
function initialize(){
    let sidebarButtons = [];
        sidebarButtons.push(dashboardBtn);
        sidebarButtons.push(settingsBtn);
        sidebarButtons.push(addItemBtn);
        sidebarButtons.push(removeItemBtn);

    dashboardBtn.addEventListener('click', function() {
        dashboardBtn.classList.add('active');
        sidebarButtons.forEach((item) => {
            if (item != dashboardBtn) {
                item.classList.remove('active');
            }
        })
    });

    settingsBtn.addEventListener('click', function() {
        settingsBtn.classList.add('active');
        sidebarButtons.forEach((item) => {
            if (item != settingsBtn) {
                item.classList.remove('active');
            }
        })
    });

    addItemBtn.addEventListener('click', function() {
        addItemBtn.classList.add('active');
        sidebarButtons.forEach((item) => {
            if (item != addItemBtn) {
                item.classList.remove('active');
            };
        })
    });

    removeItemBtn.addEventListener('click', function() {
        removeItemBtn.classList.add('active');
        sidebarButtons.forEach((item) => {
            if (item != removeItemBtn) {
                item.classList.remove('active');
            }
        })
    });

    logoutBtn.addEventListener('click', function() {
        sidebarButtons.forEach((item) => {
            item.classList.remove('active');
        })
    })

    menuBtn.addEventListener('click', function(){
        document.getElementById('body').classList.toggle('active');
    });

    counter.innerText = target;

    /* const NumberCounter = () => {
        const value = +counter.innerText;
        if (value < target) {
            counter.innerText = Math.ceil(value + 1);
            setTimeout(() => {
                NumberCounter()
            },15)
        }
    }

    NumberCounter() */

    for (var i = 1; i < 50; i++) {
        let degree = -90;
        degree += 3.6 * i;
        rating.innerHTML += "<div class='block'></div>";
        block[i].style.transform = "rotate(" + degree + "deg)";
        block[i].style.animationDelay = `${i/60}s`;
    }

    if (target <= 33) {
        updateCSSVariable('--block-color', '#0f0');
        updateCSSVariable('--block-shadow', '#0f0');
    } else if (target <= 67) {
        updateCSSVariable('--block-color', 'rgb(255, 145, 0)');
        updateCSSVariable('--block-shadow', 'rgb(255, 145, 0)');
    } else {
        updateCSSVariable('--block-color', '#f00');
        updateCSSVariable('--block-shadow', '#f00');
    }

    updateNthChildValue((Math.ceil(target/2)+1))

}

// Main function to work with data
function main(data) {
    // First database
    let database_1 = data['database-1'];

    // Populate table
    createTable(database_1);

    // Get total cost
    let totalCost = database_1.map(item => item.cost).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let totalCostString = new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(totalCost);

    let totalCostArrow = (totalCost > 0) ? "arrow_upward" : "arrow_downward";    
    totalCostNum.innerHTML = `${totalCostString}<span class='material-symbols-outlined' id='cost-icon'>${totalCostArrow}</span>`;
    
    if (totalCost > 0) {
        totalCostNum.style.color = "#f00";
        totalCostIcon.style.color = "f00";
    }
}

// Create table
function createTable (data) {
    data.forEach(element => {

        let newRow = document.createElement('tr');

        let costString = new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(element.cost);

        newRow.innerHTML += `<td>${element.name}</td>
                             <td>${element.level}</td>
                             <td>${costString}</td>
                             <td>${(element.scope === true)?"Yes":"No"}</td>`; 
        
        dataTable.childNodes[3].appendChild(newRow);

    });
}

// Move Gauge Meter
function updateGauge() {
    
}

// Initialize Json Data
function getJsonData() {
    fetchJson('../json/database.json', main, function(){});
}


