(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(9),r=n.n(l),c=(n(17),n(7)),o=n.n(c),s=n(11),u=n(1),d=n(2),m=n(5),h=n(3),j=n(6),b=(n(19),n(10)),v=n(4),f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={name:null,belt:null},n.handleChange=function(e){n.setState(Object(v.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),console.log(n.state),n.props.addNinja(Object(b.a)({},n.state))},n}return Object(j.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"name"}," Name: "),i.a.createElement("input",{id:"name",type:"text",onChange:this.handleChange}),i.a.createElement("label",{htmlFor:"name"}," Belt: "),i.a.createElement("input",{id:"belt",type:"text",onChange:this.handleChange}),i.a.createElement("button",null,"Subit")))}}]),t}(a.Component),p=function(e){var t=e.ninjas,n=e.deleteNinja,a=t.map((function(e){return i.a.createElement("div",{className:"ninja",key:e.id},i.a.createElement("div",null," name : ",e.name),i.a.createElement("div",null," belt : ",e.belt),i.a.createElement("button",{onClick:function(){n(e.id)}},"Delete"))}));return i.a.createElement("div",{className:"ninja-list"},a)},E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={name:"Amar",ninjas:[]},n.addNinja=function(e){e.id=n.idValue.next().value;var t=[].concat(Object(s.a)(n.state.ninjas),[e]);n.setState({ninjas:t})},n.deleteNinja=function(e){var t=n.state.ninjas.filter((function(t){return t.id!==e}));n.setState({ninjas:t})},n.idValue=t.idGenerator(),n}return Object(j.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app-content"},i.a.createElement("h1",null,"Hello Ninjas!!!!"),i.a.createElement(p,{ninjas:this.state.ninjas,deleteNinja:this.deleteNinja}),i.a.createElement(f,{addNinja:this.addNinja}))}}],[{key:"idGenerator",value:o.a.mark((function e(){var t,n=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:0,n.length>1&&void 0!==n[1]?n[1]:1;case 2:return e.next=5,t++;case 5:e.next=2;break;case 7:case"end":return e.stop()}}),e)}))}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.042fbded.chunk.js.map