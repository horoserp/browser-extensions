const grid = document.getElementsByClassName("grid-container")[0];

fetch("./assets/data.json")
  .then((response) => response.json())
  .then((data) => {
    for (const extension of data) {
      const extensionCard = document.createElement("article");
      extensionCard.classList.add("card");
      grid.appendChild(extensionCard);
      const details = Object.assign(document.createElement("div"), {
        className: "details-container",
      });
      extensionCard.appendChild(details);
      details.appendChild(
        Object.assign(document.createElement("img"), {
          className: "card-logo",
        })
      ).src = extension.logo;
      const content = Object.assign(document.createElement("div"), {
        className: "content-container",
      });
      details.appendChild(content);
      content.appendChild(
        Object.assign(document.createElement("h1"), {
          className: "card-title",
        })
      ).innerHTML = extension.name;
      content.appendChild(
        Object.assign(document.createElement("p"), {
          className: "card-text",
        })
      ).innerHTML = extension.description;
      const buttons = Object.assign(document.createElement("div"), {
        className: "button-container",
      });
      extensionCard.appendChild(buttons);
      buttons.appendChild(
        Object.assign(document.createElement("button"), {
          className: "card-button",
        })
      ).innerHTML = "Remove";
      buttons.appendChild(
        Object.assign(document.createElement("button"), {
          className: "card-toggle",
        })
      ).innerHTML = "Toggle";
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));
const element = document.createElement("div").classList.add("my-class");
