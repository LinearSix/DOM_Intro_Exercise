console.log("Javascript is alive!");

document.addEventListener('DOMContentLoaded', function() {

    // 1. Change the greeting from "Hello, There!" to "Hello, World!".
    document.getElementById("greeting").textContent = "Hello, World!";

    // 2. Set the background color of each `<li>` to `yellow`.
    const yellowLis = document.getElementsByTagName('li');
        for (let el of yellowLis) {
            // console.log(yellowLis[el]);
            el.style.backgroundColor = 'yellow';
        };

    //3. Create an image tag, set its `src` attribute to 
    // `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, 
    // and append the to the `#greeting` div.
    // let imgSelect;
    // const newImg = document.createElement('img')

    // newImg.setAttribute(`src`, `images/${imgSelect}.jpeg`)
    // greeting.appendChild(newImg);

    // 4. Create and add a ul element to the end of the body with a class of "todo-items"
    const todoList = document.createElement('ul')
    todoList.setAttribute('class', 'todo-items')

    // 5. Go through the array `['make coffee','eat donut','change diapers','drive to work']` 
    // and create an li element for each item e.g. `<li>make coffee</li>`;
    const getUl = document.getElementsByTagName('ul')[0];
    console.log(getUl);

    liArray = ['make coffee','eat donut','change diapers','drive to work'];
    let newLi = document.createElement("li");
    for (let i in liArray) {
        getUl.appendChild(newLi).textContent = liArray[i];
    };

    // 6. Add each newly created li element to your ul of class "todo-items"
    const todoClassLiArray = document.body.getElementsByTagName('li');
    for (let j of todoClassLiArray) {
          // console.log(todoClassLiArray[j]);
        j.className = 'todo-list';
    };

    // 4. Add the class of `selected` to an `<li>` when it is clicked. 
    // Remove it from any other `li`s as well.
    const unorderedList = document.getElementsByTagName('ul')[0];
    const foodImg = document.getElementsByTagName('img')[1];

    unorderedList.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'LI') {
            const listItems = unorderedList.children;
            for (const item of listItems) {
                item.setAttribute('class', '');
            };
            ev.target.setAttribute('class', 'selected');
            foodImg.setAttribute('src', `./images/${ev.target,textContent}.jpg`)
        };
    });

    const orangeDiv = document.getElementById('resize');
    orangeDiv.addEventListener('mouseenter', (ev) => {
        // let originalWidth = ev.target.style.width;
        ev.target.style.width = '400px';
    })

    orangeDiv.addEventListener('mouseleave', (ev) => {
        // let originalWidth = ev.target.style.width;
        ev.target.style.width = '200px';
    })

    // const resetBtn = document.getElementById('reset');
    // resetBtn.addEventListener('click', (ev) => {

    // })


    keyMap = {
        1: true,
        2: true,
        3: true
    };
    function numberPress(ev) {
        if(keyMap[ev.key]) {
            alert('numbers!');
        };
    };

    // const selectClassTodoArray = document.body.getElementsByTagName('li');
    // for (let j of selectClassTodoArray) {
    //     // console.log(todoClassLiArray[j]);
    //     j.addEventListener('click', (ev) => {
    //         for (let k of selectClassTodoArray) {
    //             k.removeAttribute('class', 'todo-list');
    //             k.removeAttribute('class', 'selected');
    //         };
    //         j.setAttribute('class', 'selected');
    //         imgSelect = (j.textContent);
    //     });
    // };
});