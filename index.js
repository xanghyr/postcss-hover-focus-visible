function hasAlready (parent, selector) {
  return parent.some(i => {
    return i.type === 'rule' && i.selectors.includes(selector)
  })
}

const DEFAULT_OPTS = {
  focusVisible: true,
  focus: false
};

module.exports = (opts = {}) => {

  const config = Object.assign({}, DEFAULT_OPTS, opts || {});

  return {

    postcssPlugin: 'postcss-hover-focus-visible',

    Rule: rule => {
      if (config.focusVisible) {
        
      }

      if (rule.selector.includes(':hover')) {
        let focuses = []
        for (let selector of rule.selectors) {
          if (selector.includes(':hover')) {
            let replaced = selector.replace(/:hover/g, ':focus-visible')
            if (!hasAlready(rule.parent, replaced)) {
              focuses.push(replaced)
            }
          }
        }
        if (focuses.length) {
          rule.selectors = rule.selectors.concat(focuses)
        }
      }
    }
  }
}
module.exports.postcss = true
