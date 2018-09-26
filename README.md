# React Cookie Law static loader

## Example

```html

<body>
  <div id="_rcl-banner"></div>

  <script crossorigin src="https://unpkg.com/@palmabit/react-cookie-law-static-loader@0.2.2/index.js"></script>

  <script>
    renderCookieBanner({
      elementId: '_rcl-banner', // default "_rcl-banner"
      props: {
        message: 'Lorem ipsum',
        // other @palmabit/react-cookie-law params
      }
    })
  </script>

  <script type="text/plain" class="_rcl">
      console.log('Custom script...');
  </script>

  <script type="text/plain" class="_rcl_preferences">
      console.log('Custom preferences script');
  </script>

  <script type="text/plain" class="_rcl_statistics">
      console.log('Custom statistics script');
  </script>

  <script type="text/plain" class="_rcl_marketing">
      console.log('Custom marketing script');
  </script>
</body>
```

# Author

[Palmabit](https://www.palmabit.com)

# Licence

[See the MIT License](http://opensource.org/licenses/MIT)
