import React from 'react';

//forked module from GitHub
const CheckBoxList = React.createClass({
    displayName: 'CheckBoxList',

    propTypes: {
        defaultData: React.PropTypes.array,
        onChange: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            data: this.props.defaultData || []
        };
    },

    handleItemChange: function(e) {
        var selectedValues = [],
            newData = [];

        this.state.data.forEach(function(item) {
            if(item.value === e.target.value) {
                item.checked = e.target.checked;
            }
            if(item.checked) {
                selectedValues.push(item.value);
            }
            newData.push(item);
        });

        this.setState({data: newData});

        if(this.props.onChange) {
            this.props.onChange(selectedValues);
        }
    },

    // uncheck all items in the list
    reset: function() {
        var newData = [];
        this.state.data.forEach(function(item) {
            item.checked = false;
            newData.push(item);
        });

        this.setState({data: newData});
    },

    render: function() {
        var options;

        options = this.state.data.map(function(item, index) {
            return (
                React.createElement("div", {key: 'chk-' + index, className: "checkbox"},
                    React.createElement("label", null,
                        React.createElement("input", {
                            type: "checkbox",
                            value: item.value,
                            onChange: this.handleItemChange,
                            onClick: this.props.onClick,
                            checked: item.checked ? true : false}), " ", item.label
                    )
                )
            );
        }.bind(this));

        return (
            React.createElement("div", null,
                options
            )
        );
    }
});

export class CheckboxListDecorated extends React.Component {
    render() {
        return (
            <div className="checkboxList">
				<span className="checkboxList__title">
					{this.props.title}
				</span>
                <CheckBoxList
                    defaultData={this.props.type}
                    onClick={this.props.onClick}
                />
            </div>
        )
    }
}