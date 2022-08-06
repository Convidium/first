'use strict';

let appData = {
    budget: 0,
    timeData: 0,
    expenses: {},
    optionalExpenses: 0,
    income: [],
    savings: false
};

let result;


    function start() {
        let money = prompt("Ваш бюджет на місяць? (грн)");
        let time = prompt("Введіть дату в форматі YYYY/MM/DD");

        while (typeof parseInt(money) != 'number' || money == null || isNaN(money)) {
            alert('Данні введено неправильно! Спробуйте ще раз.');
            return start();

        }

        appData = {
            budget: money,
            timeData: time,
            expenses: {},
            optionalExpenses: 0,
            income: [],
            savings: false
        };

        detectDayBudget();
    }





    function detectDayBudget() {
        let expenseCosts = [];
        for (let i = 1; i <= 2; i++) {
            let expense = prompt("Введіть обов'язкову статтю витрат в цьому місяці (" + i + ")");

            if (expense == null || expense == '') {
                alert('Данні введено неправильно! Спробуйте ще раз.');
                return start();
            }

            let expenseCost = prompt("У скільки обійдеться? (грн)");

            if (expenseCost == null || typeof parseInt(expenseCost) != 'number' || expenseCost == '') {
                alert('Данні введено неправильно! Спробуйте ще раз.');
                return start();
            }

            appData.expenses[expense] = expenseCost;
            expenseCosts.push(expenseCost);

        }

        result = (parseInt(expenseCosts[0]) + (parseInt(expenseCosts[1]))) / 30;


        if (result <= appData.budget) {
            appData.savings = true;
            alert('Ваш бюджет на день ' + result + ' грн');
        } else {
            alert('Результат невірний, витрати перевищують дохід');
        }

        detectLevel();
    }


    function detectLevel() {
        if (result > 18000) {
            alert("У вас високий рівень доходів");
        } else if (result < 18000 && result > 10000) {
            alert("У вас середній рівень доходів");
        } else if (result < 10000) {
            alert("У вас низький рівень доходів");
        }

        appData.dayBudget = alert(parseInt(result) + " грн");

    }


function checkSavings() {
    if (appData.savings == true) {
        let save = prompt("Яка сума депозиту?");
        let percent = prompt("Під який процент?");

        appData.monthIncome = parseInt(save) / 100 * parseInt(percent);
        alert(appData.monthIncome + " грн");
    } else {
        alert("У вас немає доступних коштів");
    }
}

document.getElementById('getDayBudget').onclick = start;

document.getElementById('checkSavings').onclick = checkSavings;
