import React from 'react'
import { GetStarted } from '../components/GetStarted.jsx'
import { injectComponent } from '../utils/root'

const component = <GetStarted />
const rootId = 'get-started'

injectComponent(component, rootId)
