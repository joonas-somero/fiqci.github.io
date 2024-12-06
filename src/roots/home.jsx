import React from 'react'
import { Home } from '../components/Home'
import { injectComponent } from '../utils/root'

const component = <Home />
const rootId = 'home'

injectComponent(component, rootId)
