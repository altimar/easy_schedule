(this.webpackJsonpeasy_schedule=this.webpackJsonpeasy_schedule||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),l=n.n(i),o=n(37),s=(n(119),n(11)),c=n(14),d=(n(120),n(121),n(122),n(6)),u=n(49),p=n(192),h=n(196),b=n(197),f=n(207),j=n(80),O=n(206),m=n(2);function y(e){var t={},n={};e.bad_participants&&e.bad_participants.length&&(e.bad_participants.forEach((function(e){t[e]=!0})),n={backgroundColor:"#fdd"});var a=function(t){t.stopPropagation(),e.onCollapseExpand&&e.onCollapseExpand()};return Object(m.jsx)(u.b,{draggableId:e.entry_id.toString(),index:e.index,children:function(r){return Object(m.jsx)(h.a,Object(s.a)(Object(s.a)(Object(s.a)({className:"Entry",onClick:e.onClick},r.draggableProps),r.dragHandleProps),{},{ref:r.innerRef,children:Object(m.jsxs)(b.a,{style:n,children:[Object(m.jsxs)("div",{className:"Entry-title",children:[Object(m.jsx)(O.a,{className:Object(d.a)("Entry-expand",{"Entry-expandOpen":e.expanded}),onClick:a,"aria-expanded":e.expanded,"aria-label":"show more",children:Object(m.jsx)(j.a,{})}),e.title]}),Object(m.jsx)(f.a,{in:e.expanded,timeout:"auto",unmountOnExit:!0,children:Object(m.jsx)("div",{className:"Entry-participant-list",children:e.participants&&e.participants.map((function(e){var n=t[e]?"secondary":"primary";return Object(m.jsx)(p.a,{label:e,color:n},e)}))})})]})}))}})}function v(e){var t=function(e){var t=void 0,n=[];return e.forEach((function(e){n.push([]),t&&e.participants.forEach((function(e){t&&-1!==t.participants.indexOf(e)&&(n[n.length-1].push(e),n[n.length-2].push(e))})),t=e})),n}(e.entries);return Object(m.jsx)(u.a,{onDragEnd:function(t){var n=t.destination,a=t.source,r=t.draggableId;n&&e.onRearrange&&n.index!==a.index&&e.onRearrange(+r,n.index)},children:Object(m.jsx)(u.c,{droppableId:"1",children:function(n){return Object(m.jsxs)("div",Object(s.a)(Object(s.a)({className:"EntryList",ref:n.innerRef},n.droppableProps),{},{children:[e.entries&&e.entries.map((function(n,a){return Object(m.jsx)(y,{entry_id:n.id,index:a,title:n.title,participants:n.participants,bad_participants:t[a],expanded:n.expanded,onClick:function(){return e.onSelect&&e.onSelect(n.id)},onCollapseExpand:function(){return e.onCollapseExpand&&e.onCollapseExpand(n)}},"entry_"+n.title)})),n.placeholder]}))}})})}var g=n(15),C=n(195),x=n(198),k=n(201),S=n(199),D=n(200),E=n(185),w=n(85),A=n(4),P=n(57),B=n(58),R=n(86),_=n(84),I=n(208),N=n(87),M=n(193),T=n(189),K=n(184),F=n(33),J=n(188),V=n(209),W=n(41),U=n.n(W),L=["allowDuplicates","alwaysShowPlaceholder","blurBehavior","children","chipRenderer","classes","className","clearInputValueOnChange","dataSource","dataSourceConfig","defaultValue","delayBeforeAdd","disabled","disableUnderline","error","filter","FormHelperTextProps","fullWidth","fullWidthInput","helperText","id","InputProps","inputRef","InputLabelProps","inputValue","label","newChipKeyCodes","newChipKeys","onBeforeAdd","onAdd","onBlur","onDelete","onChange","onFocus","onKeyDown","onKeyPress","onKeyUp","onUpdateInput","placeholder","readOnly","required","rootRef","value","variant"],H={standard:I.a,filled:N.a,outlined:M.a},$=8,G=46,Y=37,X=39,q=function(e){Object(R.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(P.a)(this,n),(a=t.call(this,e)).state={chips:[],errorText:void 0,focusedChip:null,inputValue:"",isClean:!0,isFocused:!1,chipsUpdated:!1,prevPropsValue:[]},a.focus=function(){a.actualInput.focus(),null!=a.state.focusedChip&&a.setState({focusedChip:null})},a.handleInputBlur=function(e){a.props.onBlur&&a.props.onBlur(e),a.setState({isFocused:!1}),null!=a.state.focusedChip&&a.setState({focusedChip:null});var t,n=e.target.value;switch(a.props.blurBehavior){case"add-or-clear":t={clearInputOnFail:!0};case"add":if(a.props.delayBeforeAdd){var r=(a.props.value||a.state.chips).length;a.inputBlurTimeout=setTimeout((function(){var e=(a.props.value||a.state.chips).length;r===e?a.handleAddChip(n,t):a.clearInput()}),150)}else a.handleAddChip(n,t);break;case"clear":a.clearInput()}},a.handleInputFocus=function(e){a.setState({isFocused:!0}),a.props.onFocus&&a.props.onFocus(e)},a.handleKeyDown=function(e){var t=a.state.focusedChip;if(a._keyPressed=!1,a._preventChipCreation=!1,!a.props.onKeyDown||(a.props.onKeyDown(e),!e.isDefaultPrevented())){var n=a.props.value||a.state.chips;if(a.props.newChipKeyCodes.indexOf(e.keyCode)>=0||a.props.newChipKeys.indexOf(e.key)>=0)!1!==a.handleAddChip(e.target.value)&&e.preventDefault();else switch(e.keyCode){case $:""===e.target.value&&(null!=t?(a.handleDeleteChip(n[t],t),t>0&&a.setState({focusedChip:t-1})):a.setState({focusedChip:n.length-1}));break;case G:""===e.target.value&&null!=t&&(a.handleDeleteChip(n[t],t),t<=n.length-1&&a.setState({focusedChip:t}));break;case Y:null==t&&""===e.target.value&&n.length?a.setState({focusedChip:n.length-1}):null!=t&&t>0&&a.setState({focusedChip:t-1});break;case X:null!=t&&t<n.length-1?a.setState({focusedChip:t+1}):a.setState({focusedChip:null});break;default:a.setState({focusedChip:null})}}},a.handleKeyUp=function(e){!a._preventChipCreation&&(a.props.newChipKeyCodes.indexOf(e.keyCode)>=0||a.props.newChipKeys.indexOf(e.key)>=0)&&a._keyPressed?a.clearInput():a.updateInput(e.target.value),a.props.onKeyUp&&a.props.onKeyUp(e)},a.handleKeyPress=function(e){a._keyPressed=!0,a.props.onKeyPress&&a.props.onKeyPress(e)},a.handleUpdateInput=function(e){null==a.props.inputValue&&a.updateInput(e.target.value),a.props.onUpdateInput&&a.props.onUpdateInput(e)},a.setActualInputRef=function(e){a.actualInput=e,a.props.inputRef&&a.props.inputRef(e)},e.defaultValue&&(a.state.chips=e.defaultValue),a.labelRef=r.a.createRef(),a.input=r.a.createRef(),a}return Object(B.a)(n,[{key:"componentDidMount",value:function(){"outlined"===this.props.variant&&(this.labelNode=l.a.findDOMNode(this.labelRef.current),this.forceUpdate())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.inputBlurTimeout)}},{key:"blur",value:function(){this.input&&this.actualInput.blur()}},{key:"handleAddChip",value:function(e,t){var n=this;if(this.props.onBeforeAdd&&!this.props.onBeforeAdd(e))return this._preventChipCreation=!0,null!=t&&t.clearInputOnFail&&this.clearInput(),!1;this.clearInput();var a=this.props.value||this.state.chips;if(this.props.dataSourceConfig){var r;if("string"===typeof e)r={},Object(A.a)(r,this.props.dataSourceConfig.text,e),Object(A.a)(r,this.props.dataSourceConfig.value,e),e=r;return!this.props.allowDuplicates&&a.some((function(t){return t[n.props.dataSourceConfig.value]===e[n.props.dataSourceConfig.value]}))||(this.props.value&&this.props.onAdd?this.props.onAdd(e):this.updateChips([].concat(Object(g.a)(this.state.chips),[e]))),!0}return e.trim().length>0&&((this.props.allowDuplicates||-1===a.indexOf(e))&&(this.props.value&&this.props.onAdd?this.props.onAdd(e):this.updateChips([].concat(Object(g.a)(this.state.chips),[e]))),!0)}},{key:"handleDeleteChip",value:function(e,t){if(this.props.value)this.props.onDelete&&this.props.onDelete(e,t);else{var n=this.state.chips.slice();if(n.splice(t,1)){var a=this.state.focusedChip;this.state.focusedChip===t?a=null:this.state.focusedChip>t&&(a=this.state.focusedChip-1),this.updateChips(n,{focusedChip:a})}}}},{key:"updateChips",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setState(Object(s.a)({chips:e,chipsUpdated:!0},t)),this.props.onChange&&this.props.onChange(e)}},{key:"clearInput",value:function(){this.updateInput("")}},{key:"updateInput",value:function(e){this.setState({inputValue:e})}},{key:"render",value:function(){var e,t=this,n=this.props,a=(n.allowDuplicates,n.alwaysShowPlaceholder),i=(n.blurBehavior,n.children,n.chipRenderer),l=void 0===i?Q:i,o=n.classes,c=n.className,d=(n.clearInputValueOnChange,n.dataSource,n.dataSourceConfig),u=(n.defaultValue,n.delayBeforeAdd,n.disabled),p=n.disableUnderline,h=n.error,b=(n.filter,n.FormHelperTextProps),f=n.fullWidth,j=n.fullWidthInput,O=n.helperText,y=n.id,v=n.InputProps,g=void 0===v?{}:v,C=(n.inputRef,n.InputLabelProps),x=void 0===C?{}:C,k=n.inputValue,S=n.label,D=(n.newChipKeyCodes,n.newChipKeys,n.onBeforeAdd,n.onAdd,n.onBlur,n.onDelete,n.onChange,n.onFocus,n.onKeyDown,n.onKeyPress,n.onKeyUp,n.onUpdateInput,n.placeholder),E=n.readOnly,P=n.required,B=n.rootRef,R=n.value,_=n.variant,I=Object(w.a)(n,L),N=R||this.state.chips,M=null!=k?k:this.state.inputValue,K=(this.props.value||M).length>0||M.length>0,F=null!=x.shrink?x.shrink:null!=S&&(K||this.state.isFocused||N.length>0),W=N.map((function(e,n){var a=d?e[d.value]:e;return l({value:a,text:d?e[d.text]:e,chip:e,isDisabled:!!u,isReadOnly:E,isFocused:t.state.focusedChip===n,handleClick:function(){return t.setState({focusedChip:n})},handleDelete:function(){return t.handleDeleteChip(e,n)},className:o.chip},n)})),$={};$.label=this.props.label,"outlined"===_&&($.notched=F),"standard"!==_?$.startAdornment=Object(m.jsx)(r.a.Fragment,{children:W}):g.disableUnderline=!0;var G=H[_];return Object(m.jsxs)(J.a,Object(s.a)(Object(s.a)({ref:B,fullWidth:f,className:U()(c,o.root,Object(A.a)({},o.marginDense,"dense"===I.margin)),error:h,required:N.length>0?void 0:P,onClick:this.focus,disabled:u,variant:_},I),{},{children:[S&&Object(m.jsx)(T.a,Object(s.a)(Object(s.a)({htmlFor:y,classes:{root:U()(o[_],o.label),shrink:o.labelShrink},shrink:F,focused:this.state.isFocused,variant:_,ref:this.labelRef,required:P},x),{},{children:S})),Object(m.jsxs)("div",{className:U()(o[_],o.chipContainer,(e={},Object(A.a)(e,o.focused,this.state.isFocused),Object(A.a)(e,o.underline,!p&&"standard"===_),Object(A.a)(e,o.disabled,u),Object(A.a)(e,o.labeled,null!=S),Object(A.a)(e,o.error,h),e)),children:["standard"===_&&W,Object(m.jsx)(G,Object(s.a)(Object(s.a)({ref:this.input,classes:{input:U()(o.input,o[_]),root:U()(o.inputRoot,o[_])},id:y,value:M,onChange:this.handleUpdateInput,onKeyDown:this.handleKeyDown,onKeyPress:this.handleKeyPress,onKeyUp:this.handleKeyUp,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,inputRef:this.setActualInputRef,disabled:u,fullWidth:j,placeholder:!K&&(F||null==S)||a?D:null,readOnly:E},g),$))]}),O&&Object(m.jsx)(V.a,Object(s.a)(Object(s.a)({},b),{},{className:b?U()(b.className,o.helperText):o.helperText,children:O}))]}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=null;return e.value&&e.value.length!==t.prevPropsValue.length&&(n={prevPropsValue:e.value},e.clearInputValueOnChange&&(n.inputValue="")),e.clearInputValueOnChange&&e.value&&e.value.length!==t.prevPropsValue.length&&(n={prevPropsValue:e.value,inputValue:""}),e.disabled&&(n=Object(s.a)(Object(s.a)({},n),{},{focusedChip:null})),!t.chipsUpdated&&e.defaultValue&&(n=Object(s.a)(Object(s.a)({},n),{},{chips:e.defaultValue})),n}}]),n}(r.a.Component);q.defaultProps={allowDuplicates:!1,blurBehavior:"clear",clearInputValueOnChange:!1,delayBeforeAdd:!1,disableUnderline:!1,newChipKeyCodes:[13],newChipKeys:["Enter"],variant:"standard"};var z=Object(K.a)((function(e){var t="light"===e.palette.mode,n=t?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{root:{},inputRoot:{display:"inline-flex",flexWrap:"wrap",flex:1,marginTop:0,minWidth:70,"&$outlined,&$filled":{boxSizing:"border-box"},"&$outlined":{paddingTop:14},"&$filled":{paddingTop:28}},input:{display:"inline-block",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",appearance:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",float:"left",flex:1},chipContainer:{display:"flex",flexFlow:"row wrap",cursor:"text",marginBottom:-2,minHeight:40,"&$labeled&$standard":{marginTop:18}},outlined:{"& input":{height:16,paddingTop:4,paddingBottom:12,marginTop:4,marginBottom:4}},standard:{},filled:{"& input":{height:22,marginBottom:4,marginTop:4,paddingTop:0},"$marginDense & input":{height:26}},labeled:{},label:{top:4,"&$outlined&:not($labelShrink)":{top:2,"$marginDense &":{top:5}},"&$filled&:not($labelShrink)":{top:15,"$marginDense &":{top:20}}},labelShrink:{top:0},helperText:{marginBottom:-20},focused:{},disabled:{},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary[t?"dark":"light"]),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(n),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:not($disabled):not($focused):not($error):before":{borderBottom:"2px solid ".concat(e.palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(n)}},"&$disabled:before":{borderBottomStyle:"dotted"}},error:{"&:after":{backgroundColor:e.palette.error.main,transform:"scaleX(1)"}},chip:{margin:"0 8px 8px 0",float:"left"},marginDense:{}}}),{name:"WAMuiChipInput"})(q),Q=function(e,t){e.value;var n=e.text,a=e.isFocused,r=e.isDisabled,i=e.isReadOnly,l=e.handleClick,o=e.handleDelete,s=e.className;return Object(m.jsx)(p.a,{className:s,style:{pointerEvents:r||i?"none":void 0,backgroundColor:a?F.a[300]:void 0},onClick:l,onDelete:o,label:n},t)},Z=n(178),ee=n(31);function te(e){var t=e.entry?Object.assign({},e.entry):{id:0,title:"",participants:[],expanded:!0},n=Object(a.useState)(t),r=Object(c.a)(n,2),i=r[0],l=r[1];var o=Object(ee.a)(),d=Object(Z.a)(o.breakpoints.down("sm"));return Object(m.jsxs)(x.a,{open:e.open,fullScreen:d,onClose:e.onCancel,children:[Object(m.jsx)(S.a,{children:0===i.id?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442"}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(E.a,{margin:"dense",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:",type:"text",fullWidth:!0,value:i.title,onChange:function(e){l(Object(s.a)(Object(s.a)({},i),{},{title:e.target.value}))}}),Object(m.jsx)(z,{label:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438:",variant:"outlined",margin:"dense",fullWidth:!0,defaultValue:i.participants,onChange:function(e){l(Object(s.a)(Object(s.a)({},i),{},{participants:e}))},onPaste:function(e){var t=e.clipboardData.getData("Text").replaceAll(/\t/g," ").replaceAll(/\s{2,}/g," "),n=t.split(/\n/);n.length>1?l(Object(s.a)(Object(s.a)({},i),{},{participants:[].concat(Object(g.a)(i.participants),Object(g.a)(n))})):e.target.value=t,e.preventDefault()}})]}),Object(m.jsxs)(k.a,{children:[0!==i.id&&Object(m.jsx)(C.a,{onClick:function(){e.onDelete&&e.onDelete(i)},color:"secondary",children:"Delete"}),Object(m.jsx)(C.a,{onClick:e.onCancel,children:"Close"}),Object(m.jsx)(C.a,{onClick:function(){e.onSave&&e.onSave(i),l(Object(s.a)(Object(s.a)({},i),{},{id:0,title:"",participants:[]}))},children:"Save"})]})]})}var ne="ADD_ENTRY",ae="UPDATE_ENTRY",re="DELETE_ENTRY",ie="REARRANGE_ENTRY",le="NEW_PROJECT",oe="COLLAPSE_EXPAND_ENTRY",se="EMPTY_PROJECT",ce="DEMO_PROJECT",de="NewProject",ue="Edit",pe=n(191),he=n(202),be=n(205),fe=n(204),je=n(203),Oe=n.p+"static/media/empty_schedule.b845eebc.svg",me=n.p+"static/media/demo_schedule.25022235.svg",ye=n(51),ve=n.n(ye);function ge(e){function t(t){e.onOk&&e.onOk(t)}return Object(m.jsxs)(he.a,{children:[Object(m.jsx)("h1",{children:"Create a new schedule project"}),Object(m.jsxs)(pe.a,{container:!0,justifyContent:"center",spacing:10,children:[Object(m.jsx)(pe.a,{item:!0,children:Object(m.jsx)(h.a,{className:ve.a.project_type_card,onClick:function(){t(se)},children:Object(m.jsxs)(je.a,{children:[Object(m.jsx)(fe.a,{component:"img",className:ve.a.schedule_media,image:Oe,title:"Empty schedule image"}),Object(m.jsx)(be.a,{title:"Blank"}),Object(m.jsx)(b.a,{children:"Create blank schedule."})]})})}),Object(m.jsx)(pe.a,{item:!0,children:Object(m.jsx)(h.a,{className:ve.a.project_type_card,onClick:function(){return t(ce)},children:Object(m.jsxs)(je.a,{children:[Object(m.jsx)(fe.a,{className:ve.a.schedule_media,image:me,title:"Demo schedule image"}),Object(m.jsx)(be.a,{title:"Demo"}),Object(m.jsx)(b.a,{children:"Create demo schedule with random data."})]})})})]})]})}var Ce=function(e){var t=Object(ee.a)(),n=Object(Z.a)(t.breakpoints.down("sm"));return Object(m.jsxs)(x.a,{open:e.open,fullScreen:n,onClose:e.onCancel,children:[Object(m.jsx)(S.a,{children:e.title}),Object(m.jsx)(D.a,{children:e.children})]})};var xe=n(183),ke=n(83),Se=n(182),De=Object(ke.a)(),Ee={addEntry:function(e){return{type:ne,entry:e}},updateEntry:function(e){return{type:ae,entry:e}},deleteEntry:function(e){return{type:re,id:e.id}},rearrangeEntry:function(e,t){return{type:ie,id:e,index:t}},newProject:function(e){return{type:le,project_type:e}},collapseExpandEntry:function(e){return{type:oe,entry:e}}};var we=Object(o.b)((function(e){return{schedule:e.schedule}}),Ee)((function(e){var t=Object(a.useState)({modal:"",schedule:Object(s.a)({},e.schedule),edited_entry:{id:0,title:"",participants:[],expanded:!0}}),n=Object(c.a)(t,2),r=n[0],i=n[1];function l(){i(Object(s.a)(Object(s.a)({},r),{},{modal:""}))}function o(t){i(Object(s.a)(Object(s.a)({},r),{},{modal:""})),e.newProject(t)}return Object(a.useEffect)((function(){i(Object(s.a)(Object(s.a)({},r),{},{schedule:Object(s.a)({},e.schedule)}))}),[e]),Object(m.jsx)(Se.a,{theme:De,children:Object(m.jsxs)("div",{className:"App",children:[""===r.schedule.title?Object(m.jsx)(ge,{onOk:o}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("header",{className:"App-header",children:Object(m.jsx)("h1",{children:r.schedule.title})}),Object(m.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){i(Object(s.a)(Object(s.a)({},r),{},{modal:ue,edited_entry:{id:0,title:"",participants:[],expanded:!0}}))},children:"Add entry"}),Object(m.jsx)(v,{entries:r.schedule.entries,onSelect:function(e){for(var t=0;t<r.schedule.entries.length;t++)r.schedule.entries[t].id===e&&i(Object(s.a)(Object(s.a)({},r),{},{modal:ue,edited_entry:Object(s.a)({},r.schedule.entries[t])}))},onRearrange:e.rearrangeEntry,onCollapseExpand:e.collapseExpandEntry}),Object(m.jsx)(C.a,{variant:"contained",color:"secondary",onClick:function(){i(Object(s.a)(Object(s.a)({},r),{},{modal:de}))},children:"New project"}),Object(m.jsx)(te,{open:r.modal===ue,entry:r.edited_entry,onCancel:l,onSave:function(t){t.title.length>0&&(i(Object(s.a)(Object(s.a)({},r),{},{modal:""})),0===t.id?e.addEntry(t):e.updateEntry(t))},onDelete:function(t){i(Object(s.a)(Object(s.a)({},r),{},{modal:""})),e.deleteEntry(t)}},r.edited_entry.id),Object(m.jsx)(Ce,{open:r.modal===de,onCancel:l,title:"New Schedule",children:Object(m.jsx)(ge,{onOk:o})})]}),Object(m.jsx)(xe.a,{})]})})})),Ae=n(25),Pe=["Abigail","Alexandra","Alison","Amanda","Amelia","Amy","Andrea","Angela","Anna","Anne","Audrey","Ava","Bella","Bernadette","Carol","Caroline","Carolyn","Chloe","Claire","Deirdre","Diana","Diane","Donna","Dorothy","Elizabeth","Ella","Emily","Emma","Faith","Felicity","Fiona","Gabrielle","Grace","Hannah","Heather","Irene","Jan","Jane","Jasmine","Jennifer","Jessica","Joan","Joanne","Julia","Karen","Katherine","Kimberly","Kylie","Lauren","Leah","Lillian","Lily","Lisa","Madeleine","Maria","Mary","Megan","Melanie","Michelle","Molly","Natalie","Nicola","Olivia","Penelope","Pippa","Rachel","Rebecca","Rose","Ruth","Sally","Samantha","Sarah","Sonia","Sophie","Stephanie","Sue","Theresa","Tracey","Una","Vanessa","Victoria","Virginia","Wanda","Wendy","Yvonne","Zoe"],Be=["Adam","Adrian","Alan","Alexander","Andrew","Anthony","Austin","Benjamin","Blake","Boris","Brandon","Brian","Cameron","Carl","Charles","Christian","Christopher","Colin","Connor","Dan","David","Dominic","Dylan","Edward","Eric","Evan","Frank","Gavin","Gordon","Harry","Ian","Isaac","Jack","Jacob","Jake","James","Jason","Joe","John","Jonathan","Joseph","Joshua","Julian","Justin","Keith","Kevin","Leonard","Liam","Lucas","Luke","Matt","Max","Michael","Nathan","Neil","Nicholas","Oliver","Owen","Paul","Peter","Phil","Piers","Richard","Robert","Ryan","Sam","Sean","Sebastian","Simon","Stephen","Steven","Stewart","Thomas","Tim","Trevor","Victor","Warren","William"],Re=["Abraham","Allan","Alsop","Anderson","Arnold","Avery","Bailey","Baker","Ball","Bell","Berry","Black","Blake","Bond","Bower","Brown","Buckland","Burgess","Butler","Cameron","Campbell","Carr","Chapman","Churchill","Clark","Clarkson","Coleman","Cornish","Davidson","Davies","Dickens","Dowd","Duncan","Dyer","Edmunds","Ellison","Ferguson","Fisher","Forsyth","Fraser","Gibson","Gill","Glover","Graham","Grant","Gray","Greene","Hamilton","Hardacre","Harris","Hart","Hemmings","Henderson","Hill","Hodges","Howard","Hudson","Hughes","Hunter","Ince","Jackson","James","Johnston","Jones","Kelly","Kerr","King","Knox","Lambert","Langdon","Lawrence","Lee","Lewis","Lyman","MacDonald","Mackay","Mackenzie","MacLeod","Manning","Marshall","Martin","Mathis","May","McDonald","McLean","McGrath","Metcalfe","Miller","Mills","Mitchell","Morgan","Morrison","Murray","Nash","Newman","Nolan","North","Ogden","Oliver","Paige","Parr","Parsons","Paterson","Payne","Peake","Peters","Piper","Poole","Powell","Pullman","Quinn","Rampling","Randall","Rees","Reid","Roberts","Robertson","Ross","Russell","Rutherford","Sanderson","Scott","Sharp","Short","Simpson","Skinner","Slater","Smith","Springer","Stewart","Sutherland","Taylor","Terry","Thomson","Tucker","Turner","Underwood","Vance","Vaughan","Walker","Wallace","Walsh","Watson","Welch","White","Wilkins","Wilson","Wright","Young"];function _e(){return Re[Math.floor(Math.random()*Re.length)]}function Ie(e,t,n,a){for(var r={id:e,title:t,participants:[],expanded:!0},i=0;i<Math.floor(Math.random()*(a-n+1))+n;i++)r.participants.push(i%2===0?Pe[Math.floor(Math.random()*Be.length)]+" "+_e():Be[Math.floor(Math.random()*Be.length)]+" "+_e());return r}var Ne={title:"",entries:[]},Me=1;function Te(e,t){switch(e){case ce:return Object(s.a)(Object(s.a)({},(n=5,a=2,r=6,function(){for(var e={title:"",entries:[]},t=0;t<n;t++)e.entries.push(Ie(t+1,"Dance "+(t+1).toString(),a,r));return e}())),{},{title:"Demo schedule "+t.toString()});case se:default:return{title:"New schedule "+t.toString(),entries:[]}}var n,a,r}var Ke=Object(Ae.c)({schedule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return e.entries=e.entries.map((function(e){return e.id===t.entry.id&&(e.expanded=!e.expanded),e})),Object(s.a)({},e);case le:return Te(t.project_type,Me++);case ne:var n=0;return e.entries.forEach((function(e){e.id>n&&(n=e.id)})),t.entry.id=n+1,console.log(t.entry.id),{entries:[].concat(Object(g.a)(e.entries),[t.entry])};case ae:for(var a=Object(s.a)({},e),r=0;r<a.entries.length;r++)a.entries[r].id===t.entry.id&&(a.entries[r]=Object(s.a)({},t.entry));return a;case re:return e.entries=e.entries.filter((function(e){return e.id!==t.id})),Object(s.a)({},e);case ie:for(var i,l=-1,o=0;o<e.entries.length;o++)if(e.entries[o].id===t.id){l=o;break}if(-1===l)return e;var d=e.entries.splice(l,1),u=Object(c.a)(d,1);return i=u[0],e.entries.splice(t.index,0,i),Object(s.a)({},e);default:return e}}});var Fe,Je="easy-schedule",Ve=Object.assign({},function(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(n){return}}(Je)),We=Object(Ae.a)((Fe=Je,function(e){return function(t){return function(n){t(n),function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(a){}}(Fe,e.getState())}}})),Ue=Object(Ae.e)(Ke,Ve,We);l.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(o.a,{store:Ue,children:Object(m.jsx)(we,{})})}),document.getElementById("root"))},51:function(e,t,n){e.exports={project_type_card:"styles_project_type_card__usLlG",schedule_media:"styles_schedule_media__1CzQm"}}},[[125,1,2]]]);
//# sourceMappingURL=main.9c5aea1c.chunk.js.map