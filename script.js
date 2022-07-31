'use strict';

function getDayBudget() {
    let money = prompt("Ваш бюджет на місяць? (грн)");
    let time = prompt("Введіть дату в форматі YYYY/MM/DD");

    if (typeof parseInt(money) != 'number' || money == null || isNaN(money)) {
        alert('Данні введено неправильно! Спробуйте ще раз.');
        getDayBudget();
        return;
    }


    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: 0,
        income: [],
        savings: true
    };

    let expenseFirst = prompt("Введіть обов'язкову статтю витрат в цьому місяці (1)");
    let expenseCostFirst = prompt("У скільки обійдеться? (грн)");

    let expenseSecond = prompt("Введіть обов'язкову статтю витрат в цьому місяці (2)");
    let expenseCostSecond = prompt("У скільки обійдеться? (грн)");

    appData.expenses = {
        expenseFirst: expenseCostFirst,
        expenseSecond: expenseCostSecond
    };

    let result = (parseInt(appData.expenses.expenseFirst) + parseInt(appData.expenses.expenseSecond)) / 30;

    if (result <= appData.budget) {
        alert('Ваш бюджет на день ' + Math.floor((parseInt(appData.expenses.expenseFirst) + parseInt(appData.expenses.expenseSecond)) / 30) + 'грн');
    } else {
        alert('Результат невірний, витрати перевищують дохід');
    }
}

getDayBudget();

