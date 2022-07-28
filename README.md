## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 

  - What needs to live in a persistence layer?

- Is there some state we need to initialize?

- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)




## HTML Setup 

### (this is a list of things that need an id in our HTML)

- three dropdowns <select>

  - why? to figure out what the user selected

  - how? `dropdown.addEventListener('', () => {})`

  - how? how do we get access to "what the user selected?" `const selection = dropdown.value`

  - why? to figure out how many times the user changd this item

  - how? `timesWaterChanged++`

- three <img> tags

  - why? to display what the user selected in the dropdowns

  - how? `myImg.src = 'the-img.png'`

- <div> for slogans

  - why? a place to display the array of slogans

  - how? it gets complicated!

- <p> tag to display "times changed" stuff

  - why? a place to display the times changed state

  - how? `pTag.textContent = `you changed water ${timesWaterChanged} times`, etc'

- <input /> to hold the new slogan

  - why? so we know what the user typed

  - how? `const newSlogan = myInput.value`

- add slogan <button>

  - why? so we know when the user is "done" with their slogan. we don't want to add it to the array until they are done.

  - how? `button.addEventListener('click', () => { do stuff })`




## State

- slogans is an array of strings: ['the city of dreams']

- timesWaterChanged is a number: (0)

- timesCityChanged is a number: (0)

- timesCountryChanged is a number: (0)

<!-- - water: ''

- skyline: ''

- country: '' -->




## Events

### this is the most important part

- the user changes one of the three <select>s

  - on change (`dropdown.addEventListener('', () => {})`)

  - the image should change over to the side (`myImg.src = 'the-img.png'`)

  - the state of timesChanged for this item should increment (`timesWaterChanged++`)

  - update the DOM to show the user the new timesChanged: (`pTag.textContent = `you changed water ${timesWaterChanged} times`)

- (stretch goal) user types into the new city name <input />

  - city name updates as the user types

    - input.addEventListener('change', () => {})

    - (get) we get what the user typed from input.value

    - (set) change the header's textContent to the input's value

- user clicks the 'add slogan' <button> (if you wrap it in a <form>, it will happen on `enter`)

  - what they typed is added to the displayed list of slogans

    - (get) we figure out what the user typed (`input.value`)

    - (set) set the slogan div to include this slogan (it gets complicated)



## Limited number of tools

- document.getElementById

- myEl.textContent = 'new stuff'

- myEl.classList.add('new class')

- myEl.style.background = 'magenta'

- myState++

- let myState = 'initial state'

- myState = 'new state'

- addEventListener

- myInput.value

- for (let fruit of fruits) {}

- const pTag = document.createElement('p') // this creates a new p tag

- div.append(pTag) // displays it to the user



## user stories (vertical slices, features)

- user should be able to change the dropdowns and see the updated image to the side

- user should be able to change the dropdowns and see how many times they clicked on a dropdown

- user should be able to submit a new slogan and see it added to the list

- user should be able to see the city name change as they type in the city name inputIf you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?

  - What needs to live in a persistence layer?

- Is there some state we need to initialize?

- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

## HTML Setup

### (this is a list of things that need an id in our HTML)

- three dropdowns <select>

  - why? to figure out what the user selected

  - how? `dropdown.addEventListener('', () => {})`

  - how? how do we get access to "what the user selected?" `const selection = dropdown.value`

  - why? to figure out how many times the user changd this item

  - how? `timesWaterChanged++`

- three <img> tags

  - why? to display what the user selected in the dropdowns

  - how? `myImg.src = 'the-img.png'`

- <div> for slogans

  - why? a place to display the array of slogans

  - how? it gets complicated!

- <p> tag to display "times changed" stuff

  - why? a place to display the times changed state

  - how? `pTag.textContent =`you changed water ${timesWaterChanged} times`, etc'

- <input /> to hold the new slogan

  - why? so we know what the user typed

  - how? `const newSlogan = myInput.value`

- add slogan <button>

  - why? so we know when the user is "done" with their slogan. we don't want to add it to the array until they are done.

  - how? `button.addEventListener('click', () => { do stuff })`

## State

- slogans is an array of strings: ['the city of dreams']

- timesWaterChanged is a number: (0)

- timesCityChanged is a number: (0)

- timesCountryChanged is a number: (0)

<!-- - water: ''

- skyline: ''

- country: '' -->

## Events

### this is the most important part

- the user changes one of the three <select>s

  - on change (`dropdown.addEventListener('', () => {})`)

  - the image should change over to the side (`myImg.src = 'the-img.png'`)

  - the state of timesChanged for this item should increment (`timesWaterChanged++`)

  - update the DOM to show the user the new timesChanged: (`pTag.textContent =`you changed water ${timesWaterChanged} times`)

- (stretch goal) user types into the new city name <input />

  - city name updates as the user types

    - input.addEventListener('change', () => {})

    - (get) we get what the user typed from input.value

    - (set) change the header's textContent to the input's value

- user clicks the 'add slogan' <button> (if you wrap it in a <form>, it will happen on `enter`)

  - what they typed is added to the displayed list of slogans

    - (get) we figure out what the user typed (`input.value`)

    - (set) set the slogan div to include this slogan (it gets complicated)

## Limited number of tools

- document.getElementById

- myEl.textContent = 'new stuff'

- myEl.classList.add('new class')

- myEl.style.background = 'magenta'

- myState++

- let myState = 'initial state'

- myState = 'new state'

- addEventListener

- myInput.value

- for (let fruit of fruits) {}

- const pTag = document.createElement('p') // this creates a new p tag

- div.append(pTag) // displays it to the user

## user stories (vertical slices, features)

- user should be able to change the dropdowns and see the updated image to the side

- user should be able to change the dropdowns and see how many times they clicked on a dropdown

- user should be able to submit a new slogan and see it added to the list

- user should be able to see the city name change as they type in the city name input
