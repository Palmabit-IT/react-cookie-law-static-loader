if (global === undefined) {
  var global = window;
}

function loadScript(url, callback) {

  var script = document.createElement("script")
  script.type = "text/javascript";

  if (script.readyState) {  //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

function render(props) {
  ReactDOM.render(
    React.createElement(global.ReactCookieLaw.CookieBanner, props, null),
    document.getElementById('cookie-banner')
  );
}

function renderBanner() {
  render({
    message: 'Lorem ipsum',
    onAccept: function () {
      eval(document.querySelector("script[type*=plain]._rcl").textContent);
    }
  });
}

function loadReact() {
  loadScript('https://unpkg.com/react@16/umd/react.production.min.js', loadReactDom);
}

function loadReactDom() {
  loadScript('https://unpkg.com/react-dom@16/umd/react-dom.production.min.js', loadReactCookieLaw);
}

function loadReactCookieLaw() {
  loadScript('https://unpkg.com/@palmabit/react-cookie-law@0.2.1/dist/index.js', renderBanner);
}

loadReact();
