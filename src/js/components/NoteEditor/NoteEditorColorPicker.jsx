import React, { Component } from 'react'
import NoteEditorColor from './NoteEditorColor.jsx';
import colors from '../../storage/colors'

export class NoteEditorColorPicker extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='editor_interact_colors'>
        {colors.map((color, index) => {
          let active;
          if (color == this.props.color) active = 'active_color'; 
          else active = '';
          return <NoteEditorColor 
                  color={color} active={active} 
                  key={index} setColor={this.props.setColor}
                 />
          })
        }
      </div>
    )
  }
}

export default NoteEditorColorPicker
