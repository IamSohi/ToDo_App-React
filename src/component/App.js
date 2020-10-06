import React from "react";
import Nav from "./Nav";
import Container from "./Container";
import Form from "./Form";

class App extends React.Component {
    state = {
        todo_List: [
            {
                title: "Reading",
                date: "2020-10-17",
                description: "Read the first Chapter of Intelligent Inverstor"
            },
            {
                title: "Reading 2",
                date: "2020-10-11",
                description: "Read the Second Chapter of Intelligent Inverstor"
            },
            {
                title: "what is Lorem Ipsum?",
                date: "2020-10-07",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            },

        ],
    };

    handleSubmit = (todo) => {
        this.setState({ todo_List: [todo, ...this.state.todo_List] });
    }

    handleDelete = (index)=>{
        const {todo_List} = this.state;

        this.setState({
            todo_List: todo_List.filter((value, i)=>{
                return i !== index;
            })
        })
    }

    render() {

        const { todo_List } = this.state;
        return (
            <div className="app">
                <Nav />
                <div className="main">
                    <Container
                        todoData={todo_List} 
                        onDelete={this.handleDelete}
                        />
                    <Form onSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }

}

export default App;