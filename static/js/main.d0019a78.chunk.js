(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),l=n.n(r),o=(n(15),n(9)),c=n(1),s=n(2),d=n(4),u=n(3),m=(n(6),function(){return i.a.createElement("div",{className:"nav"},"MY TODOS")}),p=function(e){return i.a.createElement("div",{className:"todos"},i.a.createElement("span",{id:"closebtn",onClick:function(){return e.onDelete(e.index)}},"\xd7"),i.a.createElement("h1",null,e.data.title),i.a.createElement("hr",null),i.a.createElement("p",null,e.data.description),i.a.createElement("span",null,e.data.date))},h=function(e){var t=e.todos.map((function(t,n){return i.a.createElement("div",{key:n,className:"inner-container"},i.a.createElement(p,{data:t,onDelete:e.onDelete,index:n}))}));return i.a.createElement("div",{className:"container"},t)},f=function(e){return i.a.createElement(h,{todos:e.todoData,onDelete:e.onDelete})},v=n(8),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).initialState={title:null,date:null,description:null},e.state=e.initialState,e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(v.a)({},a,i))},e.submitForm=function(){null!==e.state.title&&(e.props.onSubmit(e.state),e.setState(e.initialState))},e}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"form"},i.a.createElement("form",null,i.a.createElement("h1",null,"What To do?"),i.a.createElement("input",{type:"text",name:"title",id:"title",placeholder:"Title...",onChange:this.handleChange}),i.a.createElement("input",{type:"date",name:"date",id:"date",onChange:this.handleChange}),i.a.createElement("input",{type:"text",name:"description",id:"description",maxLength:"255",placeholder:"Description...",onChange:this.handleChange}),i.a.createElement("input",{type:"button",value:"Add",onClick:this.submitForm})))}}]),n}(i.a.Component),b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={todo_List:[{title:"Reading",date:"2020-10-17",description:"Read the first Chapter of Intelligent Inverstor"},{title:"Reading 2",date:"2020-10-11",description:"Read the Second Chapter of Intelligent Inverstor"},{title:"what is Lorem Ipsum?",date:"2020-10-07",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}]},e.handleSubmit=function(t){e.setState({todo_List:[t].concat(Object(o.a)(e.state.todo_List))})},e.handleDelete=function(t){var n=e.state.todo_List;e.setState({todo_List:n.filter((function(e,n){return n!==t}))})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.todo_List;return i.a.createElement("div",{className:"app"},i.a.createElement(m,null),i.a.createElement("div",{className:"main"},i.a.createElement(f,{todoData:e,onDelete:this.handleDelete}),i.a.createElement(E,{onSubmit:this.handleSubmit})))}}]),n}(i.a.Component);l.a.render(i.a.createElement(b,null),document.getElementById("root"))},6:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.d0019a78.chunk.js.map