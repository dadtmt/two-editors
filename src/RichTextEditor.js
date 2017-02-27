import React, { Component } from 'react'
import Editor from 'draft-js-plugins-editor'
import createRichButtonsPlugin from 'draft-js-richbuttons-plugin'
import { EditorState } from 'draft-js'

const richButtonsPlugin = createRichButtonsPlugin()
const { BoldButton, H1Button } = richButtonsPlugin

const plugins = [richButtonsPlugin]

export default class RichTextEditor extends Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = { editorState: EditorState.createEmpty() }
  }

  handleChange(editorState) {
    this.setState({ editorState })
  }

  render() {

    return (
      <div style={{
        border: '1px black solid',
        textAlign: 'left',
        margin: '20px 25%',
        padding: '10px 10px'
      }}>
          <BoldButton />
          <H1Button />
          <p />
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleChange}
            plugins={plugins}
          />
      </div>
    )
  }
}
