import React from "react"
import { basicSetup, EditorView } from "codemirror"
import { EditorState } from "@codemirror/state"
import { shortCircuit, uniqValue, palindrome, delayLoop, retry } from "@/utils/tasks.js"

const createEditor = (id, doc) => {
  let state = EditorState.create({
    doc,
    extensions: [basicSetup],
  })

  new EditorView({
    state,
    parent: document.getElementById(id),
  })
}

const editors = {
  "Замыкание": shortCircuit,
  "Уникальное значение": uniqValue,
  "Палиндром": palindrome,
  "Цикл задержки": delayLoop,
  "Retry": retry
}

function Code() {
  React.useEffect(() => {
    for(let key in editors) {
      createEditor(key, editors[key])
    }
  }, [])

  return (
    <div className="py-4 container-md">
      <h1 className="pb-5">JavaScript</h1>
      <hr />
      <h1 className="pb-5">Задачи</h1>

      {Object.keys(editors).map((key) => {
        return (
          <p>
            <h4>{key}</h4>
            <div id={key} />
            <br />
          </p>
        )
      })}
    </div>
  )
}

export default React.createElement(Code)
