# small-ajax.js

Tired of writing huge XHR Objects or Fetch API Headers When Requesting To An EndPoint?
Well Small AJAX is just for you!


## Usage
### GET Request
Data will be added as URL Parameters
```js
smallajax.get( 
  /* URL */ '/test.php',
  /* DATA */ {foo: 'bar'},
  /* Callback */ function() {});

```

### POST Request
Data will be added to Request Body
```js
smallajax.post( 
  /* URL */ '/test.php',
  /* DATA */ {foo: 'bar'},
  /* Callback */ function() {});

```

Kabeers Network - Helpful things that make life radically easier.
