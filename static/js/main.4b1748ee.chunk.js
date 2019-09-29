(window.webpackJsonptodoapp=window.webpackJsonptodoapp||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(8),c=r.n(a),i=(r(14),r(6)),s=r(1),l=r(2),p=r(4),u=r(3),d=r(5),f=function(e){function t(){var e,r;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(r=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).newTodoRef=n.a.createRef(),r.handleAddToDo=function(e){if(e.preventDefault(),""!==r.newTodoRef.current.value){var t=Date.now(),o={index:t,key:t,task:r.newTodoRef.current.value,complete:!1};r.props.updateToDo(t,o),e.currentTarget.reset()}},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"add-todo",onSubmit:this.handleAddToDo},n.a.createElement("input",{ref:this.newTodoRef,type:"text",placeholder:"Add something to do"})," ",n.a.createElement("button",{type:"submit"},"+"))}}]),t}(n.a.Component);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var m=function(e){function t(){var e,r;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(r=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleToggleTodo=function(e){e.preventDefault();var t=e.currentTarget.id,o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r.props.todo);o.complete=!o.complete,r.props.updateToDo(t,o)},r.handleDeleteToDo=function(e){e.preventDefault();var t=e.currentTarget.id;r.props.deleteToDo(t)},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.index,r=e.task,o=e.complete,a=e.key;return n.a.createElement("div",{className:"todo-item ".concat(o?"checked":"not-checked")},n.a.createElement("input",{type:"checkbox",key:"".concat(a),id:"".concat(t),checked:o}),n.a.createElement("label",{id:"".concat(t),htmlFor:"".concat(t),onClick:this.handleToggleTodo},r))}}]),t}(n.a.Component);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var b=function(e){function t(){var e,r;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(r=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).filterTodos=function(e){var t=Object.keys(r.props.todos).map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r.props.todos[e])}));return"completed"===e&&(t=t.filter((function(e){return!0===e.complete}))),"open"===e&&(t=t.filter((function(e){return!1===e.complete}))),t},r.renderTodos=function(e){return n.a.createElement("div",{className:"todo-list"},e.map((function(e){return n.a.createElement(m,{key:e.index,todo:e,updateToDo:r.props.updateToDo,deleteToDo:r.props.deleteToDo})})))},r.renderNoToDos=function(){return n.a.createElement("div",{className:"no-todos"},"Nothing to do!")},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.filterTodos(this.props.filter);return e.length?this.renderTodos(e):this.renderNoToDos()}}]),t}(n.a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.todos).reduce((function(t,r){return e.props.todos[r]&&!0===e.props.todos[r].complete?t+1:t}),0),r=Object.keys(this.props.todos).reduce((function(t,r){return e.props.todos[r]&&!1===e.props.todos[r].complete?t+1:t}),0);return n.a.createElement("div",{className:"stats"},n.a.createElement("div",{className:"stats-completed card"},n.a.createElement("h3",null,"Completed"),n.a.createElement("p",null,t)),n.a.createElement("div",{className:"stats-remaining card"},n.a.createElement("h3",null,"Remaining"),n.a.createElement("p",null,r)))}}]),t}(n.a.Component),y=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(p.a)(this,Object(u.a)(t).call(this,e))).changeActiveFilter=function(e){r.list.current.childNodes.forEach((function(e){e.classList.contains("active")&&e.classList.toggle("active")}));var t=e.currentTarget.classList[0];r.props.updateFilter(t),e.currentTarget.classList.toggle("active")},r.list=n.a.createRef(),r.all=n.a.createRef(),r.open=n.a.createRef(),r.completed=n.a.createRef(),r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("ul",{className:"filter-list",ref:this.list},n.a.createElement("li",{ref:this.all,className:"all active",onClick:this.changeActiveFilter},"All"),n.a.createElement("li",{ref:this.open,className:"open",onClick:this.changeActiveFilter},"Open"),n.a.createElement("li",{ref:this.completed,className:"completed",onClick:this.changeActiveFilter},"Completed"))}}]),t}(n.a.Component);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){function t(){var e,r;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(r=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={todos:{1:{index:1,key:1,task:"Feed the cat",complete:!0},2:{index:2,key:2,task:"Walk the cat",complete:!1},3:{index:3,key:3,task:"Play with the cat",complete:!1}},filter:"all"},r.updateToDo=function(e,t){var o=g({},r.state.todos);o[e]=t||void 0,r.setState({todos:o})},r.deleteToDo=function(e){var t=g({},r.state.todos);t[e]=null,r.setState({todos:t})},r.updateFilter=function(e){var t=e;r.setState({filter:t})},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"todo-container"},n.a.createElement("h1",{className:"main-heading"},"Happy Cat To Do List"),n.a.createElement("p",{className:"sub-heading"},"Happy cats mean completed todos"),n.a.createElement(f,{updateToDo:this.updateToDo}),n.a.createElement(y,{updateFilter:this.updateFilter}),n.a.createElement(b,{filter:this.state.filter,todos:this.state.todos,updateToDo:this.updateToDo,deleteToDo:this.deleteToDo}),n.a.createElement(v,{todos:this.state.todos}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,r){e.exports=r(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4b1748ee.chunk.js.map