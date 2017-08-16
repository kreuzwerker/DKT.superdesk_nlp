import React from 'react';
import { createStore } from 'redux'
import nlpModule from './client';
import {TopbarMenuEntry, ShowEntitiesToggle} from './client/components';
import reducers from './client/reducers'

configureModule.$inject = ['extensionPointsProvider'];
function configureModule(extensionPointsProvider) {

    const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    // store needs to be set as a prop because we're not using a Provider
    extensionPointsProvider.register('authoring-topbar', TopbarMenuEntry, {store: store}, ['item']);
    extensionPointsProvider.register('authoring-sticky-detailed', ShowEntitiesToggle, {store: store});
}

function runModule() {
    console.log("running superdesk-nlp");
}

export default nlpModule
    .config(configureModule)
    .run(runModule);
