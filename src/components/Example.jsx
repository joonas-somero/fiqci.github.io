import React from "react"

export const ExampleComponent = ({ text }) =>
  <div className="border-4 border-dotted border-red-600 p-4 m-4">
    <p>{text}</p>
    <div className="text-xs m-4">
      <p>For details, see</p>
      <ul className="list-disc list-inside">
        <li>src/components/Example.jsx</li>
        <li>src/roots/exampleCard.jsx</li>
        <li>content/index.md</li>
      </ul>
    </div>
  </div>
