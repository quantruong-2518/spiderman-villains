// GET ELEMENTS
const cards = document.getElementsByClassName("card");
const selectedName = document.getElementById("selected-name");

/**
 * GET VILLAIN BY CARD INDEX
 * @param {*} cardIndex
 * @returns
 */
const showNameByIndex = (cardIndex) => {
  switch (cardIndex) {
    case 0:
      return "Dr Octopus";
    case 1:
      return "Mysterio";
    case 2:
      return "Electro";
    case 3:
      return "Green Goblin";
  }
};

/**
 * Add event to listen the click for each card
 */
[].forEach.call(cards, (card, index) => {
  card.addEventListener("click", () => {
    selectedName.innerText = `Selected Villain: ${showNameByIndex(index)}`;
  });
});
