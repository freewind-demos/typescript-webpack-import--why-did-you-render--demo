/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';

const whyDidYouRender = require('@welldone-software/why-did-you-render');
whyDidYouRender(React, {
  trackAllPureComponents: true,
  // need set `logOnDifferentValues` to `true` if we want to log every render
  logOnDifferentValues: true,
});

console.log("### whyDidYouRender configured")
