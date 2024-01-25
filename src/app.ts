import '@webcomponents/webcomponentsjs'
import 'core-js/modules/es.global-this'
import 'whatwg-fetch'
import { SimpleElement }  from './simple-element'
customElements.define("simple-element", SimpleElement);
let simpleElement;
window["simpleElement"] = () => simpleElement ? simpleElement : simpleElement = document.getElementById("simple-element");
