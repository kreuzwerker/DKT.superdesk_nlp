import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import nlpModule from "./client";
import { TopbarMenuEntry, ShowEntitiesToggle } from "./client/components";
import reducers from "./client/reducers";

configure.$inject = ["apiProvider", "authoringWidgetsProvider"];
function configure(apiProvider, authoringWidgetsProvider) {
  // configure API
  apiProvider.api("entity_extraction", {
    type: "http",
    backend: {
      rel: "entity_extraction"
    }
  });

  authoringWidgetsProvider.widget("spacy", {
    icon: "marked-star",
    label: gettext("Semantic Analysis"),
    template: "spacy-widget.html",
    order: 7,
    needEditable: true,
    side: "right",
    display: {
      authoring: true,
      packages: true,
      killedItem: false,
      legalArchive: false,
      archived: false,
      picture: true,
      personal: true
    }
  });
}

run.$inject = ["api", "extensionPoints", "authoringWorkspace", "editor3"];
function run(api, extensionPoints, authoringWorkspace, editor3) {
  console.log("running superdesk-spacy");

  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [
    createLogger(),
    thunkMiddleware.withExtraArgument({ api, authoringWorkspace })
  ];

  const store = createStore(reducers, applyMiddleware.apply(null, middlewares));

  // store needs to be set as a prop because we're not using react's <Provider ...>
  extensionPoints.register(
    "authoring-topbar",
    TopbarMenuEntry,
    { store: store, editor: editor3 },
    ["item"]
  );
  extensionPoints.register("authoring-sticky-detailed", ShowEntitiesToggle, {
    store: store
  });
}

cacheIncludedTemplates.$inject = ["$templateCache"];
function cacheIncludedTemplates($templateCache) {
  $templateCache.put(
    "spacy-widget.html",
    require("./client/views/spacy-widget.html")
  );
}

export default nlpModule
  .config(configure)
  .run(cacheIncludedTemplates)
  .run(run);
