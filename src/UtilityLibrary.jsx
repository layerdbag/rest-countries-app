

const combine = (...names) => names.filter(name => name).join(' ');

// UTILITIES

// eslint-disable-next-line react/prop-types
export const Flow = ({ className, component: Component = 'div', ...rest }) => (
  <Component className={combine( 'flow', className)} {...rest} />
);

// eslint-disable-next-line react/prop-types
export const Wrapper = ({ className, component: Component = 'div', ...rest }) => (
  <Component className={combine( 'wrapper', className)} {...rest} />
);

// eslint-disable-next-line react/prop-types
export const Splitter = ({ className, component: Component = 'div', ...rest }) => (
  <Component className={combine( 'splitter', className)} {...rest} />
);

// eslint-disable-next-line react/prop-types
export const VisuallyHidden = ({ className, component: Component = 'div', ...rest }) => (
  <Component className={combine( 'visually-hidden', className)} {...rest} />
);


// BLOCKS

// eslint-disable-next-line react/prop-types
export const Button = ({ className, component: Component = 'button', ...other }) => (
  <Component className={combine( 'button', className)} {...other} />
);

// eslint-disable-next-line react/prop-types
export const Pill = ({ className, component: Component = 'span', ...other }) => (
  <Component className={combine( 'pill', className)} {...other} />
);



