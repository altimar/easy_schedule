(this.webpackJsonpeasy_schedule=this.webpackJsonpeasy_schedule||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),s=n(10),o=n.n(s),l=n(9),c=(n(32),n(3)),d=n(4),u=n(5),h=n(7),p=n(6),j=(n(33),n(34),n(35),n(36),n(37)),b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=j({Label:!0,"Label-editable":this.props.editable});return Object(a.jsxs)("div",{className:e,children:[this.props.title,this.props.editable&&Object(a.jsx)("button",{className:"Label-close",onClick:this.props.onClose})]})}}]),n}(r.Component),y=n(12),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)(y.b,{draggableId:this.props.entry_id.toString(),index:this.props.index,children:function(t){return Object(a.jsxs)("div",Object(c.a)(Object(c.a)(Object(c.a)({className:"Entry",onClick:e.props.onClick},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:[Object(a.jsx)("div",{className:"Entry-title",children:e.props.title}),Object(a.jsx)("div",{className:"Entry-participant-list",children:e.props.participants&&e.props.participants.map((function(e){return Object(a.jsx)(b,{title:e},"participant_"+e)}))})]}))}})}}]),n}(r.Component),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onDragEnd=function(t){var n=t.destination,a=t.source,r=t.draggableId;n&&e.props.onRearrange&&n.index!==a.index&&e.props.onRearrange(+r,n.index)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)(y.a,{onDragEnd:this.onDragEnd,children:Object(a.jsx)(y.c,{droppableId:"1",children:function(t){return Object(a.jsxs)("div",Object(c.a)(Object(c.a)({className:"EntryList",ref:t.innerRef},t.droppableProps),{},{children:[e.props.entries&&e.props.entries.map((function(t,n){return Object(a.jsx)(v,{entry_id:t.id,index:n,title:t.title,participants:t.participants,onClick:function(){return e.props.onSelect&&e.props.onSelect(t.id)}},"entry_"+t.title)})),t.placeholder]}))}})})}}]),n}(r.Component),f=(n(38),n(14)),m=(n(39),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onParticipantEdit=function(e){var t=e.target.value.trim();if("Enter"===e.key&&""!==t){var n=[].concat(Object(f.a)(a.state.values),[t]);a.setState({values:n}),a.props.onChange&&a.props.onChange(n),e.target.value=""}},a.onParticipantClose=function(e){var t=Object.assign([],a.state.values);t.splice(e,1),a.setState({values:t}),a.props.onChange&&a.props.onChange(t)},a.state={values:Object.assign([],a.props.values)},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"ListInput",children:[this.state.values&&this.state.values.map((function(t,n){return Object(a.jsx)(b,{title:t,editable:!0,onClose:function(){return e.onParticipantClose(n)}},"value_"+t)})),Object(a.jsx)("input",{type:"text",onKeyPress:this.onParticipantEdit})]})}}]),n}(r.Component)),g=(n(40),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e="Button";return this.props.type&&(e+=" Button-"+this.props.type),this.props.size&&(e+=" Button-"+this.props.size),Object(a.jsx)("button",{className:e,onClick:this.props.onClick,children:this.props.children})}}]),n}(r.Component)),C=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onTitleChangeHandler=function(e){a.setState({title:e.target.value})},a.onParticipantsChange=function(e){a.setState({participants:e})},a.onCloseClick=function(){a.props.onCancel&&a.props.onCancel()},a.onSaveClick=function(){a.props.onSave&&a.props.onSave(a.state)},a.onDeleteClick=function(){a.props.onDelete&&a.props.onDelete(a.state)},a.state=a.props.entry?Object.assign({},a.props.entry):{id:0,title:"",participants:[]},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"EntryModal",children:[Object(a.jsxs)("div",{className:"EntryModal-title",children:[0===this.state.id?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",Object(a.jsx)("button",{className:"EntryModal-close",onClick:this.onCloseClick})]}),Object(a.jsxs)("div",{className:"EntryModal-body",children:[Object(a.jsxs)("div",{className:"EntryModal-row",children:[Object(a.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:this.onTitleChangeHandler})]}),Object(a.jsxs)("div",{className:"EntryModal-row",children:[Object(a.jsx)("label",{children:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438: "}),Object(a.jsx)(m,{values:this.state.participants,onChange:this.onParticipantsChange})]})]}),Object(a.jsxs)("div",{className:"EntryModal-footer",children:[Object(a.jsx)(g,{onClick:this.onSaveClick,type:"ok",children:"Save"}),Object(a.jsx)(g,{onClick:this.props.onCancel,type:"cancel",children:"Close"}),0!==this.state.id&&Object(a.jsx)(g,{onClick:this.onDeleteClick,type:"delete",children:"Delete"})]})]})}}]),n}(r.Component),S="ADD_ENTRY",k="UPDATE_ENTRY",x="DELETE_ENTRY",M="REARRANGE_ENTRY";var E={addEntry:function(e){return{type:S,entry:e}},updateEntry:function(e){return{type:k,entry:e}},deleteEntry:function(e){return{type:x,id:e.id}},rearrangeEntry:function(e,t){return{type:M,id:e,index:t}}};var A=Object(l.b)((function(e){return{schedule:e.schedule}}),E)(function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onEntrySelect=function(e){for(var t=0;t<a.state.schedule.entries.length;t++)a.state.schedule.entries[t].id===e&&a.setState({is_modal:!0,edited_entry:Object(c.a)({},a.state.schedule.entries[t])})},a.onModalCancel=function(){a.setState({is_modal:!1})},a.onModalSave=function(e){e.title.length>0&&(a.setState({is_modal:!1}),0===e.id?a.props.addEntry(e):a.props.updateEntry(e))},a.onModalDelete=function(e){a.setState({is_modal:!1}),a.props.deleteEntry(e)},a.onAddButtonClick=function(){a.setState({is_modal:!0,edited_entry:{id:0,title:"",participants:[]}})},a.state={is_modal:!1,schedule:Object(c.a)({},a.props.schedule),edited_entry:{id:0,title:"",participants:[]}},a}return Object(u.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({schedule:Object(c.a)({},e.schedule)})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("h1",{children:"Easy Schedule"})}),Object(a.jsx)(g,{type:"ok",size:"big",onClick:this.onAddButtonClick,children:"Add entry"}),Object(a.jsx)(O,{entries:this.state.schedule.entries,onSelect:this.onEntrySelect,onRearrange:this.props.rearrangeEntry}),this.state.is_modal&&Object(a.jsx)(C,{entry:this.state.edited_entry,onCancel:this.onModalCancel,onSave:this.onModalSave,onDelete:this.onModalDelete},this.state.edited_entry.id)]})}}]),n}(r.Component)),D=n(8),N=n(20),P={entries:[]};var R=Object(D.c)({schedule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{entries:[].concat(Object(f.a)(e.entries),[t.entry])};case k:for(var n=Object(c.a)({},e),a=0;a<n.entries.length;a++)n.entries[a].id===t.entry.id&&(n.entries[a]=Object(c.a)({},t.entry));return n;case x:return e.entries=e.entries.filter((function(e){return e.id!==t.id})),Object(c.a)({},e);case M:for(var r,i=-1,s=0;s<e.entries.length;s++)if(e.entries[s].id===t.id){i=s;break}if(-1===i)return e;var o=e.entries.splice(i,1),l=Object(N.a)(o,1);return r=l[0],e.entries.splice(t.index,0,r),Object(c.a)({},e);default:return e}}}),J=["Abigail","Alexandra","Alison","Amanda","Amelia","Amy","Andrea","Angela","Anna","Anne","Audrey","Ava","Bella","Bernadette","Carol","Caroline","Carolyn","Chloe","Claire","Deirdre","Diana","Diane","Donna","Dorothy","Elizabeth","Ella","Emily","Emma","Faith","Felicity","Fiona","Gabrielle","Grace","Hannah","Heather","Irene","Jan","Jane","Jasmine","Jennifer","Jessica","Joan","Joanne","Julia","Karen","Katherine","Kimberly","Kylie","Lauren","Leah","Lillian","Lily","Lisa","Madeleine","Maria","Mary","Megan","Melanie","Michelle","Molly","Natalie","Nicola","Olivia","Penelope","Pippa","Rachel","Rebecca","Rose","Ruth","Sally","Samantha","Sarah","Sonia","Sophie","Stephanie","Sue","Theresa","Tracey","Una","Vanessa","Victoria","Virginia","Wanda","Wendy","Yvonne","Zoe"],B=["Adam","Adrian","Alan","Alexander","Andrew","Anthony","Austin","Benjamin","Blake","Boris","Brandon","Brian","Cameron","Carl","Charles","Christian","Christopher","Colin","Connor","Dan","David","Dominic","Dylan","Edward","Eric","Evan","Frank","Gavin","Gordon","Harry","Ian","Isaac","Jack","Jacob","Jake","James","Jason","Joe","John","Jonathan","Joseph","Joshua","Julian","Justin","Keith","Kevin","Leonard","Liam","Lucas","Luke","Matt","Max","Michael","Nathan","Neil","Nicholas","Oliver","Owen","Paul","Peter","Phil","Piers","Richard","Robert","Ryan","Sam","Sean","Sebastian","Simon","Stephen","Steven","Stewart","Thomas","Tim","Trevor","Victor","Warren","William"],L=["Abraham","Allan","Alsop","Anderson","Arnold","Avery","Bailey","Baker","Ball","Bell","Berry","Black","Blake","Bond","Bower","Brown","Buckland","Burgess","Butler","Cameron","Campbell","Carr","Chapman","Churchill","Clark","Clarkson","Coleman","Cornish","Davidson","Davies","Dickens","Dowd","Duncan","Dyer","Edmunds","Ellison","Ferguson","Fisher","Forsyth","Fraser","Gibson","Gill","Glover","Graham","Grant","Gray","Greene","Hamilton","Hardacre","Harris","Hart","Hemmings","Henderson","Hill","Hodges","Howard","Hudson","Hughes","Hunter","Ince","Jackson","James","Johnston","Jones","Kelly","Kerr","King","Knox","Lambert","Langdon","Lawrence","Lee","Lewis","Lyman","MacDonald","Mackay","Mackenzie","MacLeod","Manning","Marshall","Martin","Mathis","May","McDonald","McLean","McGrath","Metcalfe","Miller","Mills","Mitchell","Morgan","Morrison","Murray","Nash","Newman","Nolan","North","Ogden","Oliver","Paige","Parr","Parsons","Paterson","Payne","Peake","Peters","Piper","Poole","Powell","Pullman","Quinn","Rampling","Randall","Rees","Reid","Roberts","Robertson","Ross","Russell","Rutherford","Sanderson","Scott","Sharp","Short","Simpson","Skinner","Slater","Smith","Springer","Stewart","Sutherland","Taylor","Terry","Thomson","Tucker","Turner","Underwood","Vance","Vaughan","Walker","Wallace","Walsh","Watson","Welch","White","Wilkins","Wilson","Wright","Young"];function _(){return L[Math.floor(Math.random()*L.length)]}function w(e,t,n,a){for(var r={id:e,title:t,participants:[]},i=0;i<Math.floor(Math.random()*(a-n+1))+n;i++)r.participants.push(i%2===0?J[Math.floor(Math.random()*B.length)]+" "+_():B[Math.floor(Math.random()*B.length)]+" "+_());return r}var H,T,W,G,I="easy-schedule",K=Object.assign((H=5,T=2,W=6,{schedule:function(){for(var e={entries:[]},t=0;t<H;t++)e.entries.push(w(t+1,"Dance "+(t+1).toString(),T,W));return e}()}),function(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(n){return}}(I)),F=Object(D.a)((G=I,function(e){return function(t){return function(n){t(n),function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(a){}}(G,e.getState())}}})),V=Object(D.e)(R,K,F);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(l.a,{store:V,children:Object(a.jsx)(A,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3466b568.chunk.js.map