(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(2),c=n.n(s),a=n(18),o=n.n(a),l=(n(26),n(20)),r=n(3),u=n(4),d=n(7),h=n(6),j=n(5),b=(n(9),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).delItem=i.delItem.bind(Object(j.a)(i)),i}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("li",{children:[this.props.type," \xa0",this.props.content,Object(i.jsx)("button",{onClick:this.delItem,className:"del-btn",children:"\u5220\u9664"})]})})}},{key:"delItem",value:function(){this.props.delItem(this.props.index)}}]),n}(s.Component));b.defaultProps={type:"\u672c\u5e2e\u83dc"};var p=b,O=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={isShow:!0},i.toToggle=i.toToggle.bind(Object(j.a)(i)),i}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:this.state.isShow?"show-text":"hide-text",children:"\u7528CSS3\u5b9e\u73b0React\u52a8\u753b"}),Object(i.jsx)("button",{onClick:this.toToggle,children:"\u5207\u6362\u4e0a\u65b9\u6587\u5b57"})]})}},{key:"toToggle",value:function(){this.setState({isShow:!this.state.isShow})}}]),n}(s.Component),v=n(19),x=n.n(v),m=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={inputValue:"",list:["\u7cd6\u918b\u91cc\u810a","\u7ea2\u70e7\u5e26\u9c7c"],isShow:!1},i}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{className:"title",children:"React Demo (2020-12-03 \u5468\u56db)"}),Object(i.jsxs)("div",{className:"section-box",children:[Object(i.jsxs)("div",{className:"form-row",children:[Object(i.jsx)("label",{htmlFor:"ipt",children:"\u83dc\u540d\uff1a"}),Object(i.jsx)("input",{id:"ipt",className:"ipt",onChange:this.inputChange.bind(this),value:this.state.inputValue})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:this.addList.bind(this),className:"add",children:"add"}),"(\u70b9\u51fbadd\u65b0\u589e\u5143\u7d20)"]})]}),Object(i.jsxs)("div",{className:"section-box",children:[Object(i.jsx)("p",{children:"\u7b14\u8bb0\uff1a"}),Object(i.jsx)("p",{children:"1.this.props\u53ef\u4ee5\u63a5\u6536\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"})]}),Object(i.jsx)("ol",{className:"list section-box",ref:function(e){return t.ulBox=e},children:this.state.list.map((function(e,n){return Object(i.jsx)(p,{index:n,content:e,delItem:t.delItem.bind(t)},n+e)}))}),Object(i.jsx)("div",{className:"section-box",children:Object(i.jsx)(O,{})})]})})}},{key:"componentDidMount",value:function(){var t=this;console.log("process.env",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),x.a.get("https://www.easy-mock.com/mock/5fc887be584b91646b4cf852/example/menu/list").then((function(e){t.setState({list:e.data.data})})).catch((function(t){}))}},{key:"inputChange",value:function(t){this.setState({inputValue:t.target.value})}},{key:"addList",value:function(){if(!this.state.inputValue)return console.log("\u6dfb\u52a0\u7a7a"),!1;this.setState({list:[].concat(Object(l.a)(this.state.list),[this.state.inputValue]),inputValue:""},(function(){}))}},{key:"delItem",value:function(t){var e=this.state.list;e.splice(t,1),this.setState({list:e}),console.log("index---02",t)}}]),n}(s.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),c(t),a(t)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),f()},9:function(t,e,n){}},[[44,1,2]]]);
//# sourceMappingURL=main.38e52a96.chunk.js.map