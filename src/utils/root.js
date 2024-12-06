import { createRoot } from 'react-dom/client'

export const injectComponent = (component, rootId) => {
  document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById(rootId)

    if (rootElement instanceof Element) {
      const root = createRoot(rootElement)
      root.render(component)
    }
  })
}
