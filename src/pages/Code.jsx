import React from "react"
import {basicSetup, EditorView} from "codemirror"
import {EditorState} from "@codemirror/state"


function Code() {
  React.useEffect(() => {
    console.log("React")

    let state = EditorState.create({
      extensions: [
        basicSetup,
      ]
    })
    
    new EditorView({
      state,
      parent: document.getElementById("editor")
    })
  }, [])

  return (
    <div className="py-4 container-md">
      <h1 className="pb-5">Алгоритмы и структуры данных на JavaScript</h1>
      <hr />
      <h1 className="pb-5">Задачи</h1>
      <div id="editor"></div>
    </div>
  )
}

export default React.createElement(Code)
