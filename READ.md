`***Test Run`
Please put this command before you run the test--> `npm install`
To run the entire test suite ---> `npx cypress run`
Also use `npx cypress open` to open test runner dashboard.

`***Project Structure`
For Ui:
   Tests ---> under `integration` folder
   Page Locaters ---> under `pages` folder as `homepage-lovcater.js` and `loginpage-locator.js`
   I have added customized functions in `commands.js` file under `support` folder
   I configured intellisense for customized functions in `index.d.ts` file under `support` folder
