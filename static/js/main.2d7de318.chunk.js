(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),o=n.n(i),a=n(9),c=n.n(a),r=(n(16),n(8)),m=n.n(r),h=n(10),l=n(2),d=n(4),b=n(3),u=n(6),j=n(5),p=(n(18),function e(){Object(l.a)(this,e),this.searchMovies=function(e){return new Promise((function(t,n){fetch("http://www.omdbapi.com/?s="+e+"&apikey=cda9abc8").then((function(e){t(e.json())}))}))}}),v=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={animationCss:s.props.nominated?"new-item":"",beingRemoved:!1},s}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.movie;return console.log(this.state.beingRemoved),Object(s.jsxs)("li",{className:"my-3 row text-center "+this.state.animationCss,children:[Object(s.jsx)("div",{className:"col-5",children:Object(s.jsx)("img",{src:t.Poster,className:"img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}",alt:"No Image"})}),Object(s.jsxs)("div",{className:"col-7",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("p",{className:"movieTitle",children:[t.Title," (",t.Year,")"]})}),Object(s.jsx)("div",{className:"col",children:this.props.nominated?Object(s.jsx)("button",{type:"button",className:"btn btn-danger m-3",onClick:function(){e.props.onClick(t)},children:"Remove"}):this.props.check(t)?Object(s.jsx)("button",{type:"button",className:"btn btn-primary ",disabled:!0,children:"Nominate"}):Object(s.jsx)("button",{type:"button",className:"btn btn-primary ",onClick:function(){e.props.onClick(t)},children:"Nominate"})})]})]})}}]),n}(i.Component),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.movies.map((function(t){return Object(s.jsx)(v,{movie:t,onClick:e.props.onClick,check:e.props.check,nominated:e.props.nominated},t.imdbID)}));return Object(s.jsx)("ul",{className:"p-1",children:t})}}]),n}(i.Component),f=(new p,function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).searchMovies=function(){var e=Object(h.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?s="+t+"&type=movie&apikey=cda9abc8").then((function(e){return e.json()})).then((function(e){s.setState({movies:e.Search})}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.onTextChange=function(e){var t=e.target.value;s.setState({searchText:t}),t.length>0&&s.searchMovies(t)},s.nominateMovie=function(e){var t=s.state.nominees;s.state.nominees.length<5&&(t.push(e),s.setState({nominees:t}))},s.removeNomination=function(e){for(var t=s.state.nominees,n=0;n<s.state.nominees.length;n++)e.imdbID==s.state.nominees[n].imdbID&&(t.splice(n,1),s.setState({nominees:t}))},s.checkNominated=function(e){for(var t=0;t<s.state.nominees.length;t++)if(e.imdbID==s.state.nominees[t].imdbID)return!0;return!1},s.state={nominees:[],searchText:"",movies:[]},s.searchMovies=s.searchMovies.bind(Object(b.a)(s)),s.onTextChange=s.onTextChange.bind(Object(b.a)(s)),s.nominateMovie=s.nominateMovie.bind(Object(b.a)(s)),s.removeNomination=s.removeNomination.bind(Object(b.a)(s)),s.checkNominated=s.checkNominated.bind(Object(b.a)(s)),s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("nominees"),t=JSON.parse(e);t&&this.setState({nominees:t})}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.nominees);localStorage.setItem("nominees",e)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container text-light",children:[5==this.state.nominees.length&&Object(s.jsx)("div",{className:"alert alert-primary sticky-top",role:"alert",children:Object(s.jsx)("strong",{children:"You are done picking your 5 movie nominees."})}),Object(s.jsx)("h1",{className:"my-5",children:"The Shoppies"}),Object(s.jsx)("div",{className:"row bg-dark p-4 m-0",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("form",{className:"form-group",children:[Object(s.jsx)("label",{children:"Movie Titles"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"searchbox",id:"search","aria-describedby":"helpId",placeholder:"Search",onChange:this.onTextChange})]})})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col bg-dark m-3 p-4",children:[Object(s.jsxs)("h4",{className:"mb-4",children:['Results for "',this.state.searchText,'"']}),"undefined"!==typeof this.state.movies&&this.state.movies.length>0&&Object(s.jsx)(O,{movies:this.state.movies,onClick:this.nominateMovie,nominees:this.state.nominees,check:this.checkNominated,nominated:!1})]}),Object(s.jsxs)("div",{className:"col bg-dark m-3 p-4",children:[Object(s.jsx)("h4",{className:"mb-4",children:"Nominations"}),this.state.nominees.length>0&&Object(s.jsx)(O,{movies:this.state.nominees,onClick:this.removeNomination,nominated:!0})]})]})]})}}]),n}(i.Component)),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),o(e),a(e)}))};n(19);c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.2d7de318.chunk.js.map