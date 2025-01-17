import React from 'react'
import { ExampleComponent } from '../components/Example'
import { injectComponent } from '../utils/root'

const exampleBlogs = {
  component: <ExampleComponent text="The blog cards go here" />,
  rootId: 'blog-cards'
}
const exampleEvents = {
  component: <ExampleComponent text="The event cards go here" />,
  rootId: 'event-cards'
}

/*
  See 'content/index.html' for an example on
  how to pass these to the Liquid template
*/

injectComponent(exampleBlogs.component, exampleBlogs.rootId)
injectComponent(exampleEvents.component, exampleEvents.rootId)
