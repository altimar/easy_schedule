(this.webpackJsonpeasy_schedule=this.webpackJsonpeasy_schedule||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),s=n(8),o=n.n(s),l=n(9),c=n(7),h=(n(27),n(6)),d=n(2),u=n(3),p=n(5),j=n(4),b=(n(28),n(29),n(30),n(31),n(32)),y=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=b({Label:!0,"Label-editable":this.props.editable});return Object(a.jsxs)("div",{className:e,children:[this.props.title,this.props.editable&&Object(a.jsx)("button",{className:"Label-close",onClick:this.props.onClose})]})}}]),n}(r.Component),v=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Entry",onClick:this.props.onClick,children:[Object(a.jsx)("div",{className:"Entry-title",children:this.props.title}),Object(a.jsx)("div",{className:"Entry-participant-list",children:this.props.participants&&this.props.participants.map((function(e){return Object(a.jsx)(y,{title:e},"participant_"+e)}))})]})}}]),n}(r.Component),O=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"EntryList",children:this.props.entries&&this.props.entries.map((function(t){return Object(a.jsx)(v,{title:t.title,participants:t.participants,onClick:function(){return e.props.onSelect&&e.props.onSelect(t.id)}},"entry_"+t.title)}))})}}]),n}(r.Component),m=(n(33),n(10)),f=(n(34),function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onParticipantEdit=function(e){var t=e.target.value.trim();if("Enter"===e.key&&""!==t){var n=[].concat(Object(m.a)(a.state.values),[t]);a.setState({values:n}),a.props.onChange&&a.props.onChange(n),e.target.value=""}},a.onParticipantClose=function(e){var t=Object.assign([],a.state.values);t.splice(e,1),a.setState({values:t}),a.props.onChange&&a.props.onChange(t)},a.state={values:Object.assign([],a.props.values)},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"ListInput",children:[this.state.values&&this.state.values.map((function(t,n){return Object(a.jsx)(y,{title:t,editable:!0,onClose:function(){return e.onParticipantClose(n)}},"value_"+t)})),Object(a.jsx)("input",{type:"text",onKeyPress:this.onParticipantEdit})]})}}]),n}(r.Component)),C=(n(35),function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e="Button";return this.props.type&&(e+=" Button-"+this.props.type),this.props.size&&(e+=" Button-"+this.props.size),Object(a.jsx)("button",{className:e,onClick:this.props.onClick,children:this.props.children})}}]),n}(r.Component)),k=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onTitleChangeHandler=function(e){a.setState({title:e.target.value})},a.onParticipantsChange=function(e){a.setState({participants:e})},a.onCloseClick=function(){a.props.onCancel&&a.props.onCancel()},a.onSaveClick=function(){a.props.onSave&&a.props.onSave(a.state)},a.onDeleteClick=function(){a.props.onDelete&&a.props.onDelete(a.state)},a.state=a.props.entry?Object.assign({},a.props.entry):{id:0,title:"",participants:[]},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"EntryModal",children:[Object(a.jsxs)("div",{className:"EntryModal-title",children:[0===this.state.id?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",Object(a.jsx)("button",{className:"EntryModal-close",onClick:this.onCloseClick})]}),Object(a.jsxs)("div",{className:"EntryModal-body",children:[Object(a.jsxs)("div",{className:"EntryModal-row",children:[Object(a.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:this.onTitleChangeHandler})]}),Object(a.jsxs)("div",{className:"EntryModal-row",children:[Object(a.jsx)("label",{children:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438: "}),Object(a.jsx)(f,{values:this.state.participants,onChange:this.onParticipantsChange})]})]}),Object(a.jsxs)("div",{className:"EntryModal-footer",children:[Object(a.jsx)(C,{onClick:this.onSaveClick,type:"ok",children:"Save"}),Object(a.jsx)(C,{onClick:this.props.onCancel,type:"cancel",children:"Close"}),0!==this.state.id&&Object(a.jsx)(C,{onClick:this.onDeleteClick,type:"delete",children:"Delete"})]})]})}}]),n}(r.Component),M="ADD_ENTRY",S="UPDATE_ENTRY",g="DELETE_ENTRY";var x={addEntry:function(e){return{type:M,entry:e}},updateEntry:function(e){return{type:S,entry:e}},deleteEntry:function(e){return{type:g,id:e.id}}};var E=Object(l.b)((function(e){return{schedule:e.schedule}}),x)(function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onEntrySelect=function(e){for(var t=0;t<a.state.schedule.entries.length;t++)a.state.schedule.entries[t].id===e&&a.setState({is_modal:!0,edited_entry:Object(h.a)({},a.state.schedule.entries[t])})},a.onModalCancel=function(){a.setState({is_modal:!1})},a.onModalSave=function(e){e.title.length>0&&(a.setState({is_modal:!1}),0===e.id?a.props.addEntry(e):a.props.updateEntry(e))},a.onModalDelete=function(e){a.setState({is_modal:!1}),a.props.deleteEntry(e)},a.onAddButtonClick=function(){a.setState({is_modal:!0,edited_entry:{id:0,title:"",participants:[]}})},a.state={is_modal:!0,schedule:Object(h.a)({},a.props.schedule),edited_entry:{id:0,title:"",participants:[]}},a}return Object(u.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({schedule:Object(h.a)({},e.schedule)})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("h1",{children:"Easy Schedule"})}),Object(a.jsx)(C,{type:"ok",size:"big",onClick:this.onAddButtonClick,children:"Add entry"}),Object(a.jsx)(O,{entries:this.state.schedule.entries,onSelect:this.onEntrySelect}),this.state.is_modal&&Object(a.jsx)(k,{entry:this.state.edited_entry,onCancel:this.onModalCancel,onSave:this.onModalSave,onDelete:this.onModalDelete},this.state.edited_entry.id)]})}}]),n}(r.Component)),A={entries:[]};var D=Object(c.b)({schedule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{entries:[].concat(Object(m.a)(e.entries),[t.entry])};case S:for(var n=Object(h.a)({},e),a=0;a<n.entries.length;a++)n.entries[a].id===t.entry.id&&(n.entries[a]=Object(h.a)({},t.entry));return n;case g:return e.entries=e.entries.filter((function(e){return e.id!==t.id})),Object(h.a)({},e);default:return e}}}),N=["Abigail","Alexandra","Alison","Amanda","Amelia","Amy","Andrea","Angela","Anna","Anne","Audrey","Ava","Bella","Bernadette","Carol","Caroline","Carolyn","Chloe","Claire","Deirdre","Diana","Diane","Donna","Dorothy","Elizabeth","Ella","Emily","Emma","Faith","Felicity","Fiona","Gabrielle","Grace","Hannah","Heather","Irene","Jan","Jane","Jasmine","Jennifer","Jessica","Joan","Joanne","Julia","Karen","Katherine","Kimberly","Kylie","Lauren","Leah","Lillian","Lily","Lisa","Madeleine","Maria","Mary","Megan","Melanie","Michelle","Molly","Natalie","Nicola","Olivia","Penelope","Pippa","Rachel","Rebecca","Rose","Ruth","Sally","Samantha","Sarah","Sonia","Sophie","Stephanie","Sue","Theresa","Tracey","Una","Vanessa","Victoria","Virginia","Wanda","Wendy","Yvonne","Zoe"],B=["Adam","Adrian","Alan","Alexander","Andrew","Anthony","Austin","Benjamin","Blake","Boris","Brandon","Brian","Cameron","Carl","Charles","Christian","Christopher","Colin","Connor","Dan","David","Dominic","Dylan","Edward","Eric","Evan","Frank","Gavin","Gordon","Harry","Ian","Isaac","Jack","Jacob","Jake","James","Jason","Joe","John","Jonathan","Joseph","Joshua","Julian","Justin","Keith","Kevin","Leonard","Liam","Lucas","Luke","Matt","Max","Michael","Nathan","Neil","Nicholas","Oliver","Owen","Paul","Peter","Phil","Piers","Richard","Robert","Ryan","Sam","Sean","Sebastian","Simon","Stephen","Steven","Stewart","Thomas","Tim","Trevor","Victor","Warren","William"],J=["Abraham","Allan","Alsop","Anderson","Arnold","Avery","Bailey","Baker","Ball","Bell","Berry","Black","Blake","Bond","Bower","Brown","Buckland","Burgess","Butler","Cameron","Campbell","Carr","Chapman","Churchill","Clark","Clarkson","Coleman","Cornish","Davidson","Davies","Dickens","Dowd","Duncan","Dyer","Edmunds","Ellison","Ferguson","Fisher","Forsyth","Fraser","Gibson","Gill","Glover","Graham","Grant","Gray","Greene","Hamilton","Hardacre","Harris","Hart","Hemmings","Henderson","Hill","Hodges","Howard","Hudson","Hughes","Hunter","Ince","Jackson","James","Johnston","Jones","Kelly","Kerr","King","Knox","Lambert","Langdon","Lawrence","Lee","Lewis","Lyman","MacDonald","Mackay","Mackenzie","MacLeod","Manning","Marshall","Martin","Mathis","May","McDonald","McLean","McGrath","Metcalfe","Miller","Mills","Mitchell","Morgan","Morrison","Murray","Nash","Newman","Nolan","North","Ogden","Oliver","Paige","Parr","Parsons","Paterson","Payne","Peake","Peters","Piper","Poole","Powell","Pullman","Quinn","Rampling","Randall","Rees","Reid","Roberts","Robertson","Ross","Russell","Rutherford","Sanderson","Scott","Sharp","Short","Simpson","Skinner","Slater","Smith","Springer","Stewart","Sutherland","Taylor","Terry","Thomson","Tucker","Turner","Underwood","Vance","Vaughan","Walker","Wallace","Walsh","Watson","Welch","White","Wilkins","Wilson","Wright","Young"];function P(){return J[Math.floor(Math.random()*J.length)]}function L(e,t,n,a){for(var r={id:e,title:t,participants:[]},i=0;i<Math.floor(Math.random()*(a-n+1))+n;i++)r.participants.push(i%2===0?N[Math.floor(Math.random()*B.length)]+" "+P():B[Math.floor(Math.random()*B.length)]+" "+P());return r}var R,_,w,H=Object(c.c)(D,(R=5,_=2,w=6,{schedule:function(){for(var e={entries:[]},t=0;t<R;t++)e.entries.push(L(t+1,"Dance "+(t+1).toString(),_,w));return e}()}));o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(l.a,{store:H,children:Object(a.jsx)(E,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.88afe631.chunk.js.map