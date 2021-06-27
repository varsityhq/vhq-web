import React, { Component } from "react";

export default class ButtonSelectGroup extends Component {
  onChange = (n) => {
    this.props.onChangeFn(n);
  };

  render() {
    if (this.props.template === "temp2") {
      return (
        <div className="v-b-s-group-2">
          {this.props.values.map((x, index) => (
            <PollBtn
              key={this.props.im + index}
              onChange={(n) => this.onChange(n)}
              checked={this.props.selected === x ? true : false}
              id={this.props.im + index}
              label={this.props.options[index]}
              value={x}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="v-b-s-group">
        {this.props.options.map((x, index) => (
          <PollBtn
            key={this.props.im + index}
            onChange={(n) => this.onChange(n)}
            checked={this.props.selected === x ? true : false}
            id={this.props.im + index}
            label={x}
          />
        ))}
      </div>
    );
  }
}

function PollBtn({ label, id, checked, value, onChange }) {
  return (
    <div className="v-poll-select">
      <input
        readOnly
        onChange={null}
        onClick={value ? () => onChange(value) : () => onChange(label)}
        checked={checked}
        type="checkbox"
        id={id}
      />
      <label htmlFor={id}></label>
      <span>{label}</span>
    </div>
  );
}
