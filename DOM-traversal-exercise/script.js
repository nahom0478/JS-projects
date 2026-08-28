function logNextSiblingText(listItem) {
  const nextSibling = listItem.nextElementSibling;

  if (nextSibling) {
    console.log(nextSibling.textContent);
  } else {
    console.log("No more items");
  }
}

const item1 = document.getElementById("item1");
const item3 = document.getElementById("item3");
