import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement("simple-element")
export class SimpleElement extends LitElement {
  private _runMode: String = '';
  
  @property({ type: String })
  get runMode(){
    return this._runMode;
  }

  set runMode(rMode){
    const oldValue = this._runMode;
    this._runMode = rMode;
    this.requestUpdate("disabled", oldValue);
  }

  render() {
    return html`
      <div>
        This is from a simple element with param 
          <h2>${this.runMode}<h2>
      </div>
    `;
  }
}
