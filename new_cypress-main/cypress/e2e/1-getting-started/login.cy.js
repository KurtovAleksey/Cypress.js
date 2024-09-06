
describe('Проверка авторизации', function () {
    beforeEach('Начало теста', function(){
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Провыеряем цвет кнопки
    });

    this.afterEach('Конец теста', function(){
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик, и он виден для пользователя
    });

    it('Верный логин и выерный пароль', function () {

         cy.get('#mail').type('german@dolnikov.ru'); //Найти поле логин и ввести верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Найти поле пароль и ввести верный пароль

         cy.get('#loginButton').click();  //Найти кнопку Войти и нажать на неё
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Ппроверить, что авторизация прошла успешно
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользовотелю
 })

 it('Верный логин и не верный пароль', function () {

    cy.get('#mail').type('german@dolnikov.ru'); //Найти поле логин и ввести верный логин
    cy.get('#pass').type('iLoveqastudio2'); //Найти поле пароль и ввести верный пароль

    cy.get('#loginButton').click();  //Найти кнопку Войти и нажать на неё
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Ппроверить, что авторизация прошла успешно
    cy.get('#messageHeader').should('be.visible'); //Текст виден пользовотелю
}) 
it('Не верный логин и выерный пароль', function () {

    cy.get('#mail').type('garman@dolnikov.ru'); //Найти поле логин и ввести верный логин
    cy.get('#pass').type('iLoveqastudio1'); //Найти поле пароль и ввести верный пароль

    cy.get('#loginButton').click();  //Найти кнопку Войти и нажать на неё
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Ппроверить, что авторизация прошла успешно
    cy.get('#messageHeader').should('be.visible'); //Текст виден пользовотелю
})

it('проверка что в логине есть @', function () {

    cy.get('#mail').type('germandolnikov.ru'); //Найти поле логин и ввести логин без @
    cy.get('#pass').type('iLoveqastudio1'); //Найти поле пароль и ввести верный пароль

    cy.get('#loginButton').click();  //Найти кнопку Войти и нажать на неё
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Ппроверить, что авторизация прошла успешно
    cy.get('#messageHeader').should('be.visible'); //Текст виден пользовотелю
}) 

it('проверка вастановления пароля', function () {

 cy.get('#forgotEmailButton').click(); //Найти кнопку востановление пароля и нажать ее
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
 cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');

    cy.get('#messageHeader').should('be.visible'); //Текст виден пользовотелю
}) 
it('Верный логин строчные буквы и выерный пароль', function () {

    cy.get('#mail').type('GerMan@Dolnikov.ru'); //Найти поле логин и ввести верный логин
    cy.get('#pass').type('iLoveqastudio1'); //Найти поле пароль и ввести верный пароль

    cy.get('#loginButton').click();  //Найти кнопку Войти и нажать на неё
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Ппроверить, что авторизация прошла успешно
    cy.get('#messageHeader').should('be.visible'); //Текст виден пользовотелю
})
})
 
 
 

