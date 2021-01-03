import React, {Component} from 'react';
import './Button.css';

type ButtonTypes = "delete" | "ok" | "cancel";
type ButtonSizes = "big";

interface IProps {
  type?: ButtonTypes
  size?: ButtonSizes,
  onClick?: () => void
}

export default class Button extends Component<IProps> {
  render() {
    let classes = 'Button';
    if (this.props.type) {
      classes += ' Button-'+this.props.type;
    }
    if (this.props.size) {
      classes += ' Button-'+this.props.size;
    }
    return (
      <button className={classes} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}