//your code here!
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('infi-list');
  let itemCount = 10;

  // Function to add items to the list
  const addItems = (count) => {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = Item ${itemCount + i + 1};
      list.appendChild(listItem);
    }
    itemCount += count;
  };

  // Add initial 10 items
  addItems(10);

  // Check if the user is at the bottom of the list
  const isBottom = (element) => {
    return element.scrollHeight - element.scrollTop === element.clientHeight;
  };

  // Handle scroll event
  list.addEventListener('scroll', () => {
    if (isBottom(list)) {
      addItems(2); // Add 2 more items
    }
  });
});
