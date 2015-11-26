import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';
import Animation from '../lib';

let app = deku(<div style="display:block;text-align:center;">
  <Animation type="bounceDown" duration='1s' iterations={3}>
    <h1>I am animated!</h1>
  </Animation>
</div>);

render(app, document.querySelector('main'));
