import React, { Component } from 'react'
import Editor from 'draft-js-plugins-editor'
import createRichButtonsPlugin from 'draft-js-richbuttons-plugin'
import { EditorState } from 'draft-js'



export default class RichTextEditor extends Component {

  constructor() {
    super()
    // instantiate plugins, plugin components on the component instance
    const richButtonsPlugin = createRichButtonsPlugin()
    const { BoldButton, H1Button } = richButtonsPlugin
    this.plugins = [richButtonsPlugin]
    this.components = { BoldButton, H1Button }

    this.handleChange = this.handleChange.bind(this)
    this.state = { editorState: EditorState.createEmpty() }
  }

  handleChange(editorState) {
    this.setState({ editorState })
  }

  render() {
    const { BoldButton, H1Button } = this.components;

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
            plugins={this.plugins}
          />
      </div>
    )
  }
}
