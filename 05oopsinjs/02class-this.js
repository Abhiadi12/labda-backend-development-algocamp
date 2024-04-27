//this refers to the calling context.  except from one case.

let iphone = {
  price: 100,
  rating: 4.9,
  display() {
    console.log("inside first", this);
  },
};

let mackbook = {
  price: 1000,
  rating: 4.6,
  display: function () {
    console.log("inside first", this);
  },
};

let iphone1 = {
  price: 100,
  rating: 4.9,
  display: () => {
    console.log("inside first", this);
  },
};

iphone.display();
mackbook.display();
iphone1.display();

console.log("this in global space: ", this);
/*
 -> incase of arrow functions this does't refers to the calling site.
*/
