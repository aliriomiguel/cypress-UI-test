# cypress-UI-test

You have to implement the following Web automated checks over our DEMO ONLINE SHOP: https://www.demoblaze.com/index.html

- Customer navigation through product categories: Phones, Laptops and Monitors

- Navigate to "Laptop" → "Sony vaio i5" and click on "Add to cart". Accept pop up confirmation.

- Navigate to "Laptop" → "Dell i7 8gb" and click on "Add to cart". Accept pop up confirmation.

- Navigate to "Cart" → Delete "Dell i7 8gb" from cart. 

- Click on "Place order".

- Fill in all web form fields.

- Click on "Purchase"

- Capture and log purchase Id and Amount.

- Assert purchase amount equals expected.

- Click on "Ok"

FoA install dependencies

```
npm install
```

For this repo you can just execute this command on the console

```
npm run test
```
You'll see the execution on the console.

In case you want to see the UI while executing you can use the cypress console

```
npx cypress open
```
From there you can select the feature and execute it (I recommend using chrome)


If you want a full report of the execution you can execute this command in console

```
node cucumber-html-report.js
```

A report will be generated in reports/cucumber-html-report.html/index.html


