// var items = document.querySelector('#items');


// var itemArray = [
//     {
//         img: "https://unsplash.it/256/256",
//         alt: "unsplash",
//         title: "Unsplash photo",
//         cost: 100,
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, earum."
//     }
// ];

// function displayItems(arr){
//     for(var i = 0; i < arr.lenght; i++){
//     console.log(arr[i].alt);
//         var item = `
//                     <li data-sku="00${i +1}">
//                     <input type="checkbox">
//                     <img src="${arr[i].img}" alt="${arr[i].alt}">
//                     <h3>${arr[i].title}</h3>
//                     <p>${arr[i].cost}</p>
//                     <p>${arr[i].desc}</p>
//                     </li>`;

//         item.innerHTML += item;
//     }
// }
// displayItems(itemArray);
// // prompt('help');

var items = document.querySelector('#items');
var photo = document.querySelectorAll('li')
var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "is it working?",
        title: "Unsplash Photo",
        cost: 100,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, saepe?"
    },
    {
        img: "http://unsplash.it/256/256?image=216",
        alt: "image 206",
        title: "Another Unsplash Photo",
        cost: 75,
        desc:"Another image that I'm selling using other people's work."
    },
    {
        img: "http://unsplash.it/256/256?image=209",
        alt: "image 209",
        title: "Yet Another Image!",
        cost: 95,
        desc:"Another Image!"
    },
    {
        img: "http://unsplash.it/256/256?image=208",
        alt: "image 208",
        title: "Even more Unsplash Photo",
        cost: 55,
        desc:"Peoples work!"
    },
    {
        img: "http://unsplash.it/256/256?image=103",
        alt: "image 103",
        title: "Yet Another Image!",
        cost: 63,
        desc:"Another Image!"
    },
    {
        img: "http://unsplash.it/256/256?image=201",
        alt: "image 201",
        title: "Yet Another Image!",
        cost: 12,
        desc:"Another Image!"
    },
    {
        img: "http://unsplash.it/256/256?image=212",
        alt: "image 212",
        title: "Yet Another Image!",
        cost: 72,
        desc:"Another Image!"
    },
];

function displayItems(arr){
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[i].alt);
        var item = `
            <li data-sku="${i}">
            <input type="checkbox" name="" id="">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
            </li>`;
        items.innerHTML += item;
    }
    
}
displayItems(itemArray);
// console.log(items.children);
// function addListener(arr, objArr){
//     for(var i = 0; i < arr.length; i++){
//     //  console.log(arr[i]);
//      arr[i].addEventListener('click', function(evt){
         
//          this.classList.toggle('selected');
//         //  this.fristElementChild.checked = true;
//          (this.firstElementChild.checked) ? 
//             this.firstElementChild.checked = false :
//             this.firstElementChild.checked = true;
//         //  console.log(this.firstElementChild.checked);
//         console.log(this.dataset.sku);
//         // console.log(this.dataset.sku);
//         // console.log(Array.from(arr).slice(this.dataset.sku));


//         // selectedArray.push(arr[this.dataset.sku]);
        
//         // console.log(selectedArray);
//      });
//  }

// //  selectedArray.push();
// }
// addListener(items.children, itemArray);
function addListener(arr, objArr){
    for(var i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', function(evt, arr){
            // console.log(this.firstElementChild.checked);
            this.classList.toggle('selected');
            
            // this.firstElementChild.checked = true;
            
            // ternary operator 
            (this.firstElementChild.checked) ? 
            this.firstElementChild.checked = false :
            this.firstElementChild.checked = true;
            
            // console.log(this.dataset.sku,parseInt( this.dataset.sku) + 1);
            selectedArray.push(objArr.slice(this.dataset, parseInt(this.dataset.sku)+ 1)[0]);
            console.log(selectedArray);
            // console.log(this);
            // selectedArray.push(arr[this.dataset.sku]);
            // console.log(Array.from(arr));
            console.log(Array.from(arr).slice(this.dataset.sku));

            // console.log(selectedArray);
        });
    }
    // console.log(arr);
}
addListener(items.children);