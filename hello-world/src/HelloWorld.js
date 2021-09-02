import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      oldNumber: {type: Number}
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
     
  }

  __increment() {
    this.counter += 1;
    this.ChangeColor(this.counter);
  }

  __decrement(){

    if(this.counter>0){
        this.counter -=1;
        this.ChangeColor(this.counter);
    }
    
    

  }


  colors = ["#FFC0CB","#EE82EE","#800080","#6A5ACD","#4B0082",
"#FFA07A","#FF0000","	#8B0000","#FFA500","#FF8C00","#FF4500"];

    ChangeColor(count) {
      
      document.body.style.backgroundColor = this.colors[count];

    }
  
  

  render() {
    return html`
      <h2 data-count=${this.counter}>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement}>decrement</button>

    `;
  }
}
