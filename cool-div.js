const coolDivTemplate = document.createElement("template");
coolDivTemplate.innerHTML = `
  <style>
    :host {
      display: inline-block;
      border: 1px solid yellow;
      background-color: lightgreen;
      padding: 10px;
    }

    div {
      width: 500px;
      height: 500px;
      color: darkblue;
      background-color: lightseagreen;
      border: 1px dotted chartreuse;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2em;
    }
  </style>
  <div>Fancy Div</div>
`;

class CoolDiv extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(coolDivTemplate.content.cloneNode(true));
  }

  simulateMessage = () => {
    this.dispatchEvent(
      new CustomEvent("onSimpleMessage", {
        detail: { message: `The time is: ${new Date().toLocaleTimeString()}` },
      })
    );
    setTimeout(this.simulateMessage, Math.floor(Math.random() * 6000));
  };

  connectedCallback() {
    this.simulateMessage();
  }
}

customElements.define("cool-div", CoolDiv);
