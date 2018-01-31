# React Bind `this` #

Tired of the following in your React class constructors?

```js
this.handleClick = this.handleClick.bind(this)
this.onToggle = this.onToggle.bind(this)
this.onChange = this.onChange.bind(this)
```

Use `react-bind-this` and you can do the following instead:

```js
bindThis(this, 'handleClick', 'onToggle', 'onChange')
```

Done! :)

## Usage ##

Require this module as follows:

```js
const bindThis = require('react-bind-this')
```

And use inside your constructor function:

```js
class MyComponent extends React.Component {

  constructor(props) {
    super(props)
    bindThis(this, 'handleClick', 'onToggle', 'onChange')
  }

}
```

## Author ##

Andrew Chilton.

## License ##

ISC.

(Ends)
