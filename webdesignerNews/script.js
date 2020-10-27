// const ul = document.querySelector(".list");
// console.log("ul", ul);

// const list = document.querySelectorAll("li");
// console.log(list);

// const newList = [...list];
// console.log(newList);

// const barca = newList.filter(item => item.innerText === "Barcelona");
// const real = newList.filter(item => item.innerText === "Real");
// const btn = document.querySelector("button");
// console.log(barca);

// const colorIndigo = item => {
//   item.style.color = "indigo";
// };
// barca.map(colorIndigo);

// barca.map(item => (item.style.color = "green"));
// barca.map(item => item.classList.add("Sevilla"));

// const hidereal = () => {
//   real.forEach(item =>
//     item.style.display === "none"
//       ? (item.style.display = "block")
//       : (item.style.display = "none")
//   );
//   btn.textContent === "Hide me"
//     ? (btn.textContent = "Show me")
//     : (btn.textcontent = "Hide me");
// };

// Task 2

// const firstValue = document.getElementById("first");
// const secondValue = document.getElementById("second");
// const answer = document.getElementById("answer");

// const sum = () => {
//   const value1 = +firstValue.value;
//   const value2 = +secondValue.value;
//   const sum = value1 + value2;
//   answer.textContent = `Answer: ${sum}`;
// };

// const multiplicationFunction = () => {
//   const X = +firstValue.value;
//   const Y = +secondValue.value;
//   const XY = X * Y;
//   answer.textContent = `Answer: ${XY}`;
// };

// const divide = () => {
//   const k = +firstValue.value;
//   const m = +second.value;
//   const kDivm = k / m;
//   answer.textContent = `Answer: ${kDivm}`;
// };

// multiply.addEventListener("click", multiplicationFunction);
// division.addEventListener("click", divide);

// const vids = [
//   {
//     description: "hello",
//     title: "test",
//     img: "#",
//     thumbnails: { default: { url: "http://placehold.it/64x64" } }
//   },
//   {
//     description: "hello1",
//     title: "test1",
//     img: "#",
//     thumbnails: { default: { url: "http://placehold.it/64x64" } }
//   },
//   {
//     description: "hello2",
//     title: "test2",
//     img: "#",
//     thumbnails: { default: { url: "http://placehold.it/64x64" } }
//   },
//   {
//     description: "hello2",
//     title: "test2",
//     img: "#",
//     thumbnails: { default: { url: "http://placehold.it/64x64" } }
//   },
//   {
//     description: "hello2",
//     title: "test2",
//     img: "#",
//     thumbnails: { default: { url: "http://placehold.it/64x64" } }
//   }
// ];

// const create = (item, parent) => {
//   const node = document.createElement(item);
//   if (parent) {
//     parent.appendChild(node);
//   }
//   return node;
// };

// const createVideoElement = element => {
// pirveli varianti
// const div = document.createElement("div");
// const p = document.createElement("p");
// const h4 = document.createElement("h4");
// const img = document.createElement("img");

// meore varianti
// const div = create("div")
// const p = create("p", div)
// const h4 = create("h4", div)
// const img = create("img", div)

// div.classList.add("movie");
// p.classList.add("pclass");
// p.innerText = element.description;
// h4.innerText = element.title;
// img.src = element.thumbnails.default.url;

// pirveli variantis append
//   div.append(p, h4, img);

//   return div;
// };

// function loadResults(array) {
//   array.forEach(element => {
//     const div = createVideoElement(element);
//     document.querySelector(".videos").appendChild(div);
//   });
// }

// loadResults(vids);

// const users = [
//   {
//     firstName: "Lexo",
//     lastName: "Xizanishvili",
//     age: 35,
//     isRegistered: true,
//     address: "Varketili"
//   },
//   {
//     firstName: "Harry",
//     lastName: "Maguire",
//     age: 23,
//     isRegistered: false,
//     address: "Vake"
//   },
//   {
//     firstName: "Per",
//     lastName: "Mertesaker",
//     age: 25,
//     isRegistered: true,
//     address: "Varketili"
//   },
//   {
//     firstName: "Jesse",
//     lastName: "Lingard",
//     age: 33,
//     isRegistered: false,
//     address: "Saburtalo"
//   },
//   {
//     firstName: "Anthony",
//     lastName: "Pattis",
//     age: 43,
//     isRegistered: true,
//     address: "Saburtalo"
//   },
//   {
//     firstName: "Peter",
//     lastName: "Pettegrew",
//     age: 22,
//     isRegistered: false,
//     address: "Varketili"
//   },
//   {
//     firstName: "Aragon",
//     lastName: "Son of Arathorn",
//     age: 65,
//     isRegistered: true,
//     address: "Varketili"
//   },
//   {
//     firstName: "Jay Jay",
//     lastName: "Okocha",
//     age: 65,
//     isRegistered: true,
//     address: "Vake"
//   }
// ];

// const create = (item, parent) => {
//   const node = document.createElement(item);
//   if (parent) {
//     parent.appendChild(node);
//   }
//   return node;
// };

// const createData = data => {
//   const divi = document.createElement("div");
//   const h1 = document.createElement("h1");
//   const h2 = document.createElement("h2");
//   const h3 = document.createElement("h3");
//   const h4 = document.createElement("h4");
//   const paragraph = document.createElement("p");
//   h1.innerText = users.firstname;
//   h2.innerText = users.lastname;
//   h3.innerText = users.age;
//   h4.innerText = users.isRegistered;
//   paragraph.innerText = users.address;
//   divi.append(h1, h2, h3, h4, p);
//   return divi;
// };

// function loadResults(array) {
//   array.forEach(data => {
//     const newDiv = createData(data);
//     document.querySelector("#yvela").appendChild(newDiv);
//   });
// }

// loadResults(users);
// function loadResults(array) {
//   array.forEach(element => {
//     const div = createVideoElement(element);
//     document.querySelector(".videos").appendChild(div);
//   });
// }

// loadResults(vids);

// document.getElementsByClassName('header-nav-list').style.paddingLeft:  "3px;"




const news = [
  {
    title: "Quickly Turn Transform to Pixel Grid On/Off in Adobe Photoshop",
    votes: 28,
    clicked: 30,
    date: 11,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039294/PS-TurnPixelGrid-OnOff-article-img-cedc-140x112.png"
  },
  {
    title: "Building a Search Engine from Scratch",
    votes: 39,
    clicked: 13,
    date: 13,
    imageUrl: "https://www.webdesignernews.com/images/cats/5.png"
  },
  {
    title: "18 Christmas Gifts for Designers",
    votes: 37,
    clicked: 40,
    date: 14,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039459/18-Christmas-gifts-designers-will-instantly-fall-in-love-with-bfb9-140x112.png"
  },
  {
    title: "15 Web Design Books of 2019",
    votes: 42,
    clicked: 52,
    date: 16,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039955/books-background-5c0c-140x112.jpg"
  },
  {
    title: "6 Impressive Benefits to Invest in Mobile App UX Design",
    votes: 51,
    clicked: 51,
    date: 24,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039955/books-background-5c0c-140x112.jpg"
  },
  {
    title: "15 Web Design Books of 2019",
    votes: 42,
    clicked: 52,
    date: 16,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039125/UX-764c-140x112.png"
  },
]

const news = [
  {
    title: "Quickly Turn Transform to Pixel Grid On/Off in Adobe Photoshop",
    votes: 28,
    clicked: 30,
    date: 11,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039294/PS-TurnPixelGrid-OnOff-article-img-cedc-140x112.png",
    source: "veerle.duoh.com",
    sourceImage: "https://veerle.duoh.com/favicon.ico"
  },
  {
    title: "Building a Search Engine from Scratch",
    votes: 39,
    clicked: 13,
    date: 13,
    imageUrl: "https://www.webdesignernews.com/images/cats/5.png",
    source: "0X65.DEV",
    sourceImage: "https://0x65.dev/favicon.ico"
  },
  {
    title: "18 Christmas Gifts for Designers",
    votes: 37,
    clicked: 40,
    date: 14,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039459/18-Christmas-gifts-designers-will-instantly-fall-in-love-with-bfb9-140x112.png",
    source: "designladder.com",
    sourceImage: "https://designladder.com/wp-content/uploads/2018/12/cropped-DESIGNLADDER-Favicon-1-32x32.png"

  },
  {
    title: "15 Web Design Books of 2019",
    votes: 42,
    clicked: 52,
    date: 16,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039955/books-background-5c0c-140x112.jpg",
    source: "designladder.com",
    sourceImage: "https://designladder.com/wp-content/uploads/2018/12/cropped-DESIGNLADDER-Favicon-1-32x32.png"
  },
  {
    title: "6 Impressive Benefits to Invest in Mobile App UX Design",
    votes: 51,
    clicked: 51,
    date: 24,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039955/books-background-5c0c-140x112.jpg",
    source: "designladder.com",
    sourceImage: "https://designladder.com/wp-content/uploads/2018/12/cropped-DESIGNLADDER-Favicon-1-32x32.png"
  },
  {
    title: "15 Web Design Books of 2019",
    votes: 42,
    clicked: 52,
    date: 16,
    imageUrl: "https://webdesignernews.s3.amazonaws.com/post_images/3039125/UX-764c-140x112.png",
    source: "designladder.com",
    sourceImage: "https://designladder.com/wp-content/uploads/2018/12/cropped-DESIGNLADDER-Favicon-1-32x32.png"
  },
]

const lists = [
  "img",
  "link",
  "favorite",
  "comments",
  "share",
  "time"
]

const create = (item, parent) => {
  const node = document.createElement(item)
  if (parent) {
    parent.appendChild(node)
  }
  return node
}

const createListItems = (parent, element) => {
  let li
  let a
  lists.forEach(item => {
    switch (item) {
      case "img":
        const firstli = create("li", parent)
        const img = create("img", firstli)
        img.classList.add("box-second-image")
        img.src = element.sourceImage
        break;
      case "link":
        li = create("li", parent)
        a = create("a", li)
        a.href = `https://${element.source}`
        a.target = "_blank"
        a.innerText = element.source
        break;
      case "favorite":
        li = create("li", parent)
        a = create("a", li)
        a.href = "#"
        a.innerText = "Favorite"
        break;
      case "comments":
        li = create("li", parent)
        a = create("a", li)
        a.href = "#"
        a.innerText = "Comments"
        break;
      case "share":
        li = create("li", parent)
        a = create("a", li)
        a.href = "#"
        a.innerText = "Share"
        break;
      case "time":
        li = create("li", parent)
        a = create("a", li)
        a.href = "#"
        // a.innerText = "13 Hours Ago"
        a.innerText = `${element.date} Hours Ago`
        break;
      default:
        li = create("li", parent)
        a = create("a", li)
        a.href = "#"
        a.innerText = "Default"
    }
  })
}


const createNewsElement = (element) => {
  // first div
  const boxDiv = create("div")
  const box1 = create("div", boxDiv)
  const like = create("img", box1)
  const span = create("span", box1)
  const dislike = create("img", box1)

  boxDiv.classList.add("box")
  box1.classList.add("box-1-div")
  dislike.classList.add("like-dislike")
  like.classList.add("like-dislike")

  span.innerText = element.votes
  like.src = "like.png"
  dislike.src = "unlike.png"

  // second
  const box2 = create("div", boxDiv)
  const img = create("img", box2)
  box2.classList.add("box-2-div")
  img.classList.add("box-main-image")
  img.src = element.imageUrl

  // third

  const box3 = create("div", boxDiv)
  const h1 = create("h1", box3)
  const a = create("a", h1)
  const ul = create("ul", box3)
  ul.classList.add("information")
  h1.classList.add("heading")
  a.href = "#"
  a.innerText = element.title
  createListItems(ul, element)
  return boxDiv
}

const loadResults = (arr) => {
  arr.forEach(element => {
    const box = createNewsElement(element)
    document.querySelector("#boxes").appendChild(box)
  })
}

loadResults(news)

const handleFilter = (type) => {
  const box = document.querySelector("#boxes")
  let newArr
  if (type === "date") {
    newArr = news.sort((a, b) => a[type] > b[type] ? 1 : -1)
  } else {
    newArr = news.sort((a, b) => a[type] > b[type] ? -1 : 1)
  }
  while (box.firstChild) {
    box.removeChild(box.firstChild)
  }
  loadResults(newArr)
}

document.querySelector("#most-voted").addEventListener('click', () => {
  handleFilter("votes")
})

document.querySelector("#latest").addEventListener('click', () => {
  handleFilter("date")
})

document.querySelector("#most-clicked").addEventListener('click', () => {
  handleFilter("clicked")
})

document.querySelector("#input-search-field").addEventListener('input', function () {
  const newArr = news.filter(item => item.title.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()))
  const box = document.querySelector("#boxes")
  while (box.firstChild) {
    box.removeChild(box.firstChild)
  }
  loadResults(newArr)
})
