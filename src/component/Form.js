import React from "react";



export default class Form extends React.Component {
    initialState = {
        title: null,
        date: null,
        description: null
    }
    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        if (this.state.title !== null) {
            this.props.onSubmit(this.state)
            this.setState(this.initialState)
        } else {
            return;
        }

    }

    render() {
        return (
            <div className="form">
                <form>
                    <h1>What To do?</h1>

                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title..."
                        onChange={this.handleChange}
                    />
                    <input
                        type="date"
                        name="date"
                        id="date"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        id="description"
                        maxLength="255"
                        placeholder="Description..."
                        onChange={this.handleChange}

                    />
                    <input
                        type="button"
                        value="Add"
                        onClick={this.submitForm}
                    />

                </form>
            </div>

        );
    }


}