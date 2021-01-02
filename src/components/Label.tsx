import React, {Component} from 'react';
import './Label.css';
let classNames = require("classnames");

interface ILabelProps {
  title: string
  editable?: boolean
  onClose?: () => void
}

export default class Label extends Component<ILabelProps> {
  constructor(props: ILabelProps) {
    super(props)
  }

  render() {
    const classes = classNames({
      Label: true,
      "Label-editable": this.props.editable
    });
    return (
      <div className={classes}>
        {this.props.title}
        {this.props.editable &&
          <button className="Label-close" onClick={this.props.onClose}></button>
        }
      </div>
    )
  }
}