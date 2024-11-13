import React from 'react'
import { ServiceStatus } from '../components/ServiceStatus'
import { injectComponent } from '../utils/root'

const component = <ServiceStatus />
const rootId = 'service-status'

injectComponent(component, rootId)
