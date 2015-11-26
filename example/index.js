import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';
import Animation from '../lib';

let app = deku(<div style="display:block;text-align:center;margin-top: 200px;">
  <Animation type="circleAround" iterations={2}>
    <h1>I am animated!</h1>
  </Animation>
</div>);

render(app, document.querySelector('main'));
