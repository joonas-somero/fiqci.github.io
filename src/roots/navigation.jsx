import React from 'react'
import { NavigationHeader } from '../components/NavigationHeader'
import { injectComponent } from '../utils/root'

const component = <NavigationHeader />
const rootId = 'navigation-header'

injectComponent(component, rootId)
