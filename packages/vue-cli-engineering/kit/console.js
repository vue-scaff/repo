// Use Foreach
import foreach from './foreach';

/**
 * Console Extension - Message
 * ========== ========== ==========
 */
export default (options = {}) => {
  // Preset
  const preset = Object.assign(
    {
      log: {
        label: '调试',
        color: 'green',
      },

      warn: {
        label: '警告',
        color: 'orange',
      },

      error: {
        label: '错误',
        color: 'red',
      },
    },
    options
  );

  // Set Styles
  const css = (color = 'green') => `background: ${color}; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;`;

  // Set Binding
  const bind = (name, label, color) => ({ [name]: console.log.bind(console, `%c${label}`, css(color)) });

  // Set Target
  const target = {};

  // Preset Loop
  foreach(preset, ({ label, color }, name) => Object.assign(target, bind(name, label, color)));

  // Export
  return target;
};
