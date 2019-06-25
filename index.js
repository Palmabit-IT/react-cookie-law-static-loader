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

function render(props, elementId) {
  ReactDOM.render(
    React.createElement(global.ReactCookieLaw.CookieBanner, props, null),
    document.getElementById(elementId || '_rcl-banner')
  );
}
function renderBanner(options) {
  options = options || {};
  options.props = options.props || {};
  var onAccept = options.props.onAccept || function () { }
  var onAcceptPreferences = options.props.onAcceptPreferences || function () { }
  var onAcceptStatistics = options.props.onAcceptStatistics || function () { }
  var onAcceptMarketing = options.props.onAcceptMarketing || function () { }

  options.props.onAccept = function () {
    var elm = document.querySelector("script[type*=plain]._rcl");
    elm && eval(elm.textContent);
    onAccept()
  };
  options.props.onAcceptPreferences = function () {
    var elm = document.querySelector("script[type*=plain]._rcl_preferences")
    elm && eval(elm.textContent);
    onAcceptPreferences()
  };
  options.props.onAcceptStatistics = function () {
    var elm = document.querySelector("script[type*=plain]._rcl_statistics")
    elm && eval(elm.textContent);
    onAcceptStatistics()
  };
  options.props.onAcceptMarketing = function () {
    var elm = document.querySelector("script[type*=plain]._rcl_marketing")
    elm && eval(elm.textContent);
    onAcceptMarketing()
  };

  render(options.props, options.elementId);
}

function loadReact(options) {
  loadScript('https://unpkg.com/react@16/umd/react.production.min.js', function () {
    loadReactDom(options);
  });
}

function loadReactDom(options) {
  loadScript('https://unpkg.com/react-dom@16/umd/react-dom.production.min.js', function () {
    loadReactCookieLaw(options);
  });
}

function loadReactCookieLaw(options) {
  loadScript('https://unpkg.com/@palmabit/react-cookie-law@0.2.5/dist/index.js', function () {
    renderBanner(options);
  });
}

var renderCookieBanner = loadReact;
