
/* EX11) Write a function to add a new link into the navbar */

let addNewLinkToNavBar = () => {
    let navBar = document.querySelector(".nav-scroller > .nav")
    let newNavBarElement = document.createElement("a");
    newNavBarElement.classList.add("p-2.text-muted")
    newNavBarElement.href = "#";
    newNavBarElement.innerText = "I am the new link ----Yeah---";
    navBar.appendChild(newNavBarElement)
}
addNewLinkToNavBar();

/* EX12) Write a function to change the color of the main title */

let changeColorOfH1 = (event) => {
    let hh1 = document.querySelector("h1");
    hh1.style.color = event;
}
changeColorOfH1("yellow");


/* EX13) Write a function to change the background of the jumbotron */

let changeColorOfJumbotron = () => {
    let jumbotron1 = document.querySelector(".jumbotron") 
    jumbotron1.style.setProperty("background-color", "black", "important") 
}
changeColorOfJumbotron() 


/* EX14) Write a function to remove all the links under "Elsewhere" */

let removeAllLinksUnderElseWhere = () => {
    let githubLink = document.querySelectorAll(".p-4 > .list-unstyled:last-child > li")[12]
    let twitterLink = document.querySelectorAll(".p-4 > .list-unstyled:last-child > li")[13]
    let facebookLink = document.querySelectorAll(".p-4 > .list-unstyled:last-child > li")[14]
    githubLink.remove();
    twitterLink.remove();
    facebookLink.remove();
}
removeAllLinksUnderElseWhere();


/* EX15) Write a function to change the column size for heading in jumbotron */

let changeColumnSizeofJumbotron = () => {
    let h1Column = document.querySelector(".col-md-6:first-of-type");
    h1Column.classList.add("col-md-12")
}
changeColumnSizeofJumbotron();

/* EX16) Write a function to remove the "Search" magnifying glass icon */

let removeSearchGlass = () => {
    let svgGlass = document.querySelector("svg:first-of-type");
    svgGlass.remove();
}
removeSearchGlass();

/* EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post */

let trimBlogposts = () => {
    let blogPost1 = document.querySelector(".blog-post:nth-of-type(1)")
    let blogPost2 = document.querySelector(".blog-post:nth-of-type(2)")
    let blogPost3 = document.querySelector(".blog-post:nth-of-type(3)")
    let newblogPost1 = blogPost1.innerText.substring(50);
    blogPost1.innerText = newblogPost1;
    let newblogPost2 = blogPost2.innerText.substring(50);
    blogPost2.innerText = newblogPost2;
    let newblogPost3 = blogPost3.innerText.substring(50);
    blogPost3.innerText = newblogPost3;
    
}
trimBlogposts();


/* EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title) */


let addNewBlogPost = () => {
    let newerButton = document.querySelector("a.btn.disabled");
    let blogSection = document.querySelector(".col-md-8.blog-main")
    let newBlogpost4 = document.createElement("div")
    newBlogpost4.innerText = "Hello"
    blogSection.appendChild(newBlogpost4);
}


let newerButtonEventListener = () => {
    let newerButton = document.querySelector("a.btn.disabled");
    newerButton.addEventListener("click", addNewBlogPost)
    newerButton.classList.remove("disabled")

}


window.onload = function(){
    newerButtonEventListener()
    h1AlertEventListener()
    removeOldBlogpostEventListener()
}



/*  EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post */

let removeOldBlogpost = () => {
    let lastBlogpost = document.querySelector(".col-md-8.blog-main > div:last-of-type")
    lastBlogpost.remove();
}

let removeOldBlogpostEventListener = () => {
    let olderButton = document.querySelector(".btn.btn-outline-primary");
    olderButton.addEventListener("click", removeOldBlogpost)
}




/* EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name */

/* 
let authorEventListener = () => {
    document.querySelector("h1").addEventListener("click", h1Alert())
}
 */

let h1Alert = () => {
    alert("hello")
}

let h1AlertEventListener = () => { 
document.querySelector("h1").addEventListener("click", h1Alert);
}



/*
    JS Exercises


*/
