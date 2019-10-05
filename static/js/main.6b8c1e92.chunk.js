(window.webpackJsonptodoapp=window.webpackJsonptodoapp||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(8),c=o.n(a),i=(o(14),o(6)),s=o(1),l=o(2),p=o(4),u=o(3),d=o(5),f=function(e){function t(){var e,o;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(o=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).newTodoRef=n.a.createRef(),o.handleAddToDo=function(e){if(e.preventDefault(),""!==o.newTodoRef.current.value){var t=Date.now(),r={index:t,key:t,task:o.newTodoRef.current.value,complete:!1};o.props.updateToDo(t,r),e.currentTarget.reset()}},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"add-todo",onSubmit:this.handleAddToDo},n.a.createElement("input",{ref:this.newTodoRef,type:"text",placeholder:"Add something to do"})," ",n.a.createElement("button",{type:"submit"},"+"))}}]),t}(n.a.Component),h=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(p.a)(this,Object(u.a)(t).call(this,e))).changeActiveFilter=function(e){o.list.current.childNodes.forEach((function(e){e.classList.contains("active")&&e.classList.toggle("active")}));var t=e.currentTarget.classList[0];o.props.updateFilter(t),e.currentTarget.classList.toggle("active")},o.list=n.a.createRef(),o.all=n.a.createRef(),o.open=n.a.createRef(),o.completed=n.a.createRef(),o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("ul",{className:"filter-list",ref:this.list},n.a.createElement("li",{ref:this.all,className:"all active",onClick:this.changeActiveFilter},"All"),n.a.createElement("li",{ref:this.open,className:"open",onClick:this.changeActiveFilter},"Open"),n.a.createElement("li",{ref:this.completed,className:"completed",onClick:this.changeActiveFilter},"Completed"))}}]),t}(n.a.Component);function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}var O=function(e){function t(){var e,o;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(o=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleToggleTodo=function(e){e.preventDefault();var t=e.currentTarget.id,r=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(o,!0).forEach((function(t){Object(i.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o.props.todo);r.complete=!r.complete,o.props.updateToDo(t,r)},o.handleDeleteToDo=function(e){e.preventDefault();var t=e.currentTarget.id,r=e.currentTarget;console.log(r),o.props.deleteToDo(t)},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.index,o=e.task,r=e.complete,a=e.key;return n.a.createElement("div",{className:"todo-item ".concat(r?"checked":"not-checked")},n.a.createElement("input",{type:"checkbox",key:"".concat(a),id:"".concat(t),checked:r}),n.a.createElement("label",{id:"".concat(t),htmlFor:"".concat(t),onClick:this.handleToggleTodo},o),n.a.createElement("span",{id:"".concat(t),className:"remove-todo",onClick:this.handleDeleteToDo},"X"))}}]),t}(n.a.Component);function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}var v=function(e){function t(){var e,o;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(o=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).filterTodos=function(e){var t=Object.keys(o.props.todos).map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(o,!0).forEach((function(t){Object(i.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o.props.todos[e])}));return"completed"===e&&(t=t.filter((function(e){return!0===e.complete}))),"open"===e&&(t=t.filter((function(e){return!1===e.complete}))),t},o.renderTodos=function(e){return n.a.createElement("div",{className:"todo-list"},e.map((function(e){return n.a.createElement(O,{key:e.index,todo:e,updateToDo:o.props.updateToDo,deleteToDo:o.props.deleteToDo})})))},o.renderNoToDos=function(){return n.a.createElement("div",{className:"no-todos"},"Nothing to do!")},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.filterTodos(this.props.filter);return e.length?this.renderTodos(e):this.renderNoToDos()}}]),t}(n.a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.todos).reduce((function(t,o){return e.props.todos[o]&&!0===e.props.todos[o].complete?t+1:t}),0),o=Object.keys(this.props.todos).reduce((function(t,o){return e.props.todos[o]&&!1===e.props.todos[o].complete?t+1:t}),0);return n.a.createElement("div",{className:"stats"},n.a.createElement("div",{className:"stats-completed card"},n.a.createElement("h3",null,"Completed"),n.a.createElement("p",null,t)),n.a.createElement("div",{className:"stats-remaining card"},n.a.createElement("h3",null,"Remaining"),n.a.createElement("p",null,o)))}}]),t}(n.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f,{updateToDo:this.props.updateToDo}),n.a.createElement(h,{updateFilter:this.props.updateFilter}),n.a.createElement(v,{filter:this.props.filter,todos:this.props.todos,updateToDo:this.props.updateToDo,deleteToDo:this.props.deleteToDo}),n.a.createElement(j,{todos:this.props.todos}))}}]),t}(n.a.Component);function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function D(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?g(o,!0).forEach((function(t){Object(i.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var T=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(p.a)(this,Object(u.a)(t).call(this,e))).updateToDo=function(e,t){var r=D({},o.state.todos);r[e]=t||void 0,o.setState({todos:r})},o.deleteToDo=function(e){var t=D({},o.state.todos);delete t[e],o.setState({todos:t})},o.updateFilter=function(e){var t=e;o.setState({filter:t})},o.state={todos:{1:{index:1,key:1,task:"Feed the cat",complete:!0},2:{index:2,key:2,task:"Walk the cat",complete:!1},3:{index:3,key:3,task:"Play with the cat",complete:!1}},filter:"all"},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"todo-container"},n.a.createElement("h1",{className:"main-heading"},"Happy Cat To Do List"),n.a.createElement("p",{className:"sub-heading"},"Happy cats mean completed todos"),n.a.createElement(y,{filter:this.state.filter,todos:this.state.todos,updateToDo:this.updateToDo,deleteToDo:this.deleteToDo,updateFilter:this.updateFilter}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,o){e.exports=o(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.6b8c1e92.chunk.js.map