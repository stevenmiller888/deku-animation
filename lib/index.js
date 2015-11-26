/** @jsx element */

import animations from './animations';
import element from 'virtual-element';

/**
 * Animation.
 */

export default {
  propTypes: {
    timingFunction: { type: 'string' },
    iterations: { type: 'number' },
    duration: { type: 'string' },
    type: { type: 'string' }
  },

  render({ props, state }, updateState) {
    let { type, duration, iterations, timingFunction, children } = props;
    let animation = animations[type];

    // Defaults.
    timingFunction = timingFunction || animation.timingFunction;
    iterations = iterations || animation.iterations;
    duration = duration || animation.duration;

    // Construct animation property.
    let style = `animation: ${duration} ${timingFunction} ${iterations} ${type}`;

    // Define `attrs`.
    let attrs = {
      class: 'Animation',
      style: style,
      type: type
    };

    return <div { ...attrs }>
      {children}
    </div>
  }
};
