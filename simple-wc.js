const simpleHtml = document.createElement("template");
simpleHtml.innerHTML = `
  <style>
    :host {
      display: inline-block;
      border: 1px solid red;
      background-color: lightblue;
      padding: 10px;
    }

    div {
      width: 500px;
      height: 500px;
      color: white;
      background-color: rebeccaPurple;
      border: 1px dotted chartreuse;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2em;
    }
  </style>
  <div>Hello World!</div>
`;

class Simple extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "closed" });
    this._root.appendChild(simpleHtml.content.cloneNode(true));
  }
}

customElements.define("simple-wc", Simple);
