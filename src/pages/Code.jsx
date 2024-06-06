import React from "react"
import {basicSetup, EditorView} from "codemirror"
import {EditorState} from "@codemirror/state"
import {shortCircuit, uniqValue, palindrome} from "@/utils/tasks.js"

const createEditor = (id, doc) => {
  let state = EditorState.create({
    doc,
    extensions: [
      basicSetup,
    ]
  })
  
  new EditorView({
    state,
    parent: document.getElementById(id)
  })
}

function Code() {
  React.useEffect(() => {
    console.log("React")

    createEditor("editor", shortCircuit)
    createEditor("editor2", uniqValue)
    createEditor("editor3", palindrome)
  }, [])

  return (
    <div className="py-4 container-md">
      <h1 className="pb-5">Алгоритмы и структуры данных на JavaScript</h1>
      <hr />
      <h1 className="pb-5">Задачи</h1>

      <h4>Замыкание</h4>
      <div id="editor" />
      <br />
      <h4>Уникальное значение</h4>
      <div id="editor2" />
      <br />
      <h4>Палиндром</h4>
      <div id="editor3" />
    </div>
  )
}

export default React.createElement(Code)
