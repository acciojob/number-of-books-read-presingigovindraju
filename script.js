const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// const numberOfBooksRead = () => {
//   // write your code here
// };
let  numberOfBooksRead = 0;
library.map((library)=>{
	if(library.readingStatus) numberOfBooksRead++;
});

// Do not change the code below

// alert(numberOfBooksRead());
