(this.webpackJsonpcomplete_mui_system=this.webpackJsonpcomplete_mui_system||[]).push([[0],{167:function(e,t,n){},168:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(15),r=n.n(i),c=(n(167),n(168),n(5)),o=n(4),l=Object(c.a)({sideMenu:{display:"flex",flexDirection:"column",position:"absolute",left:"0px",width:"320px",height:"100%",backgroundColor:"#253053"}})((function(e){var t=e.classes;return Object(o.jsx)("div",{className:t.sideMenu})})),s=n(143),u=n(239),j=n(258),d=n(259),b=n(240),m=n(241),O=n(242),p=n(148),g=n(198),f=n(243),h=n(117),x=n.n(h),v=n(118),C=n.n(v),y=n(119),S=n.n(y),I=n(72),N=n.n(I),k=Object(u.a)((function(e){return{root:{backgroundColor:"#fff",transform:"translateZ(0)"},searchInput:{opacity:"0.6",padding:"0px ".concat(e.spacing(1),"px"),fontSize:"0.8rem","&:hover":{backgroundColor:"#f2f2f2"},"& .MuiSvgIcon-root":{marginRight:e.spacing(1)}}}}));function P(){var e=k();return Object(o.jsx)(b.a,{position:"static",className:e.root,children:Object(o.jsx)(m.a,{children:Object(o.jsxs)(O.a,{container:!0,alignItems:"center",children:[Object(o.jsx)(O.a,{item:!0,children:Object(o.jsx)(p.a,{placeholder:"Search topics",className:e.searchInput,startAdornment:Object(o.jsx)(N.a,{fontSize:"small"})})}),Object(o.jsx)(O.a,{item:!0,sm:!0}),Object(o.jsxs)(O.a,{item:!0,children:[Object(o.jsx)(g.a,{children:Object(o.jsx)(f.a,{badgeContent:4,color:"secondary",children:Object(o.jsx)(x.a,{fontSize:"small"})})}),Object(o.jsx)(g.a,{children:Object(o.jsx)(f.a,{badgeContent:3,color:"primary",children:Object(o.jsx)(C.a,{fontSize:"small"})})}),Object(o.jsx)(g.a,{children:Object(o.jsx)(S.a,{})})]})]})})})}var T=n(13),A=n(23),D=n(54),M=n(61);var w=Object(u.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"80%",margin:e.spacing(1)}}}}));function B(e){var t=w(),n=(e.children,Object(D.a)(e,["children"]));return Object(o.jsx)("form",Object(T.a)(Object(T.a)({className:t.root,autoComplete:"off"},n),{},{children:e.children}))}var E=n(244);var F=n(201),z=n(203),R=n(269),H=n(246),J=n(262);var W=n(202),L=n(207),q=n(270),G=n(205);var _=n(264);var V=n(120),Y=n(22),Z=n(260);var $=n(249),K=Object(u.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var Q=Object(u.a)((function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.secondary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.main}}}}));var U={Input:function(e){var t=e.name,n=e.label,a=e.value,i=e.error,r=void 0===i?null:i,c=e.onChange,l=Object(D.a)(e,["name","label","value","error","onChange"]);return Object(o.jsx)(E.a,Object(T.a)(Object(T.a)({variant:"outlined",label:n,name:t,value:a,onChange:c},l),r&&{error:!0,helperText:r}))},RadioGroup:function(e){var t=e.name,n=e.label,a=e.value,i=e.onChange,r=e.items;return Object(o.jsxs)(F.a,{children:[Object(o.jsx)(z.a,{children:n}),Object(o.jsx)(R.a,{row:!0,name:t,values:a,onChange:i,children:r.map((function(e){return Object(o.jsx)(H.a,{value:e.id,control:Object(o.jsx)(J.a,{}),label:e.title},e.id)}))})]})},Select:function(e){var t=e.name,n=e.label,a=e.value,i=e.error,r=void 0===i?null:i,c=e.onChange,l=e.options;return Object(o.jsxs)(F.a,Object(T.a)(Object(T.a)({variant:"outlined"},r&&{error:!0}),{},{children:[Object(o.jsx)(W.a,{children:n}),Object(o.jsxs)(L.a,{label:n,name:t,value:a,onChange:c,children:[Object(o.jsx)(q.a,{value:"",children:"None"}),l.map((function(e){return Object(o.jsx)(q.a,{value:e.id,children:e.title},e.id)}))]}),r&&Object(o.jsx)(G.a,{children:r})]}))},Checkbox:function(e){var t=e.name,n=e.label,a=e.value,i=e.onChange;return Object(o.jsx)(F.a,{children:Object(o.jsx)(H.a,{control:Object(o.jsx)(_.a,{name:t,color:"primary",checked:a,onChange:function(e){return i(function(e,t){return{target:{name:e,value:t}}}(t,e.target.checked))}}),label:n})})},DatePicker:function(e){var t=e.name,n=e.label,a=e.value,i=e.onChange;return Object(o.jsx)(Y.a,{utils:V.a,children:Object(o.jsx)(Z.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",label:n,formate:"MMM/dd/yyyy",name:t,value:a,onChange:function(e){return i(function(e,t){return{target:{name:e,value:t}}}(t,e))}})})},Button:function(e){var t=e.text,n=e.size,a=e.color,i=e.variant,r=e.onClick,c=Object(D.a)(e,["text","size","color","variant","onClick"]),l=K();return Object(o.jsx)($.a,Object(T.a)(Object(T.a)({variant:i||"contained",size:n||"large",color:a||"primary",onClick:r},c),{},{classes:{root:l.root,label:l.label},children:t}))},ActionButton:function(e){var t=e.color,n=e.children,a=e.onClick,i=Q();return Object(o.jsx)($.a,{className:"".concat(i.root," ").concat(i[t]),onClick:a,children:n})}},X="employees",ee="employeeId";function te(e){var t=ne();e.id=function(){null==localStorage.getItem(ee)&&localStorage.setItem(ee,"0");var e=parseInt(localStorage.getItem(ee));return localStorage.setItem(ee,(++e).toString()),e}(),t.push(e),localStorage.setItem(X,JSON.stringify(t))}function ne(){null==localStorage.getItem(X)&&localStorage.setItem(X,JSON.stringify([]));var e=JSON.parse(localStorage.getItem(X)),t=[{id:"1",title:"Development"},{id:"2",title:"Marketing"},{id:"3",title:"Accounting"},{id:"4",title:"HR"}];return e.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{department:t[e.departmentId-1].title})}))}var ae=[{id:"male",title:"Male"},{id:"Female",title:"Female"},{id:"other",title:"other"}],ie={id:0,fullName:"",email:"",mobile:"",city:"",gender:"male",departmentId:"",hireDate:new Date,isPermanent:!1};function re(e){var t=e.addOrEdit,n=e.recordForEdit,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=Object(T.a)({},s);if("fullName"in e&&(t.fullName=e.fullName?"":"This field is required."),"email"in e&&(t.email=/$^|.+@.+..+/.test(e.email)?"":"Email is not valid."),"mobile"in e&&(t.mobile=e.mobile.length>9?"":"Minimum 10 numbers required."),"departmentId"in e&&(t.departmentId=0!=e.departmentId.length?"":"This field is required."),u(Object(T.a)({},t)),e==c)return Object.values(t).every((function(e){return""==e}))},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,i=Object(a.useState)(e),r=Object(A.a)(i,2),c=r[0],o=r[1],l=Object(a.useState)({}),s=Object(A.a)(l,2),u=s[0],j=s[1],d=function(e){var a=e.target,i=a.name,r=a.value;o(Object(T.a)(Object(T.a)({},c),{},Object(M.a)({},i,r))),t&&n(Object(M.a)({},i,r))},b=function(){o(e),j({})};return{values:c,setValues:o,errors:u,setErrors:j,handleInputChange:d,resetForm:b}}(ie,!0,i),c=r.values,l=r.setValues,s=r.errors,u=r.setErrors,j=r.handleInputChange,d=r.resetForm;return Object(a.useEffect)((function(){null!=n&&l(Object(T.a)({},n))}),[n]),Object(o.jsx)(B,{onSubmit:function(e){e.preventDefault(),i()&&t(c,d)},children:Object(o.jsxs)(O.a,{container:!0,children:[Object(o.jsxs)(O.a,{item:!0,xs:6,children:[Object(o.jsx)(U.Input,{name:"fullName",label:"Full Name",value:c.fullName,onChange:j,error:s.fullName}),Object(o.jsx)(U.Input,{name:"email",label:"Email",value:c.email,onChange:j,error:s.email}),Object(o.jsx)(U.Input,{name:"mobile",label:"Mobile",value:c.mobile,onChange:j,error:s.mobile}),Object(o.jsx)(U.Input,{name:"city",label:"City",value:c.city,onChange:j})]}),Object(o.jsxs)(O.a,{item:!0,xs:6,children:[Object(o.jsx)(U.RadioGroup,{name:"gender",label:"Gender",values:c.gender,onChange:j,items:ae}),Object(o.jsx)(U.Select,{name:"departmentId",label:"Department",value:c.departmentId,onChange:j,options:[{id:"1",title:"Development"},{id:"2",title:"Marketing"},{id:"3",title:"Accounting"},{id:"4",title:"HR"}],error:s.departmentId}),Object(o.jsx)(U.DatePicker,{name:"hireDate",label:"Hire Date",value:c.hireDate,onChange:j}),Object(o.jsx)(U.Checkbox,{name:"isPermanent",label:"Permanent Employee",value:c.isPermanent,onChange:j}),Object(o.jsxs)("div",{children:[Object(o.jsx)(U.Button,{type:"submit",text:"Submit"}),Object(o.jsx)(U.Button,{text:"Reset",color:"default",onClick:d})]})]})]})})}var ce=n(140),oe=n.n(ce),le=n(97),se=n(251),ue=n(98),je=Object(u.a)((function(e){return{root:{backgroundColor:"#fdfdff"},PageHeader:{padding:e.spacing(4),display:"flex",marginBottom:e.spacing(2)},pageIcon:{display:"Inline-block",padding:e.spacing(2),color:"#3c44b1"},pageTitle:{paddingLeft:e.spacing(4),"& .MuiTypography-subtitle2":{opacity:"0.6"}}}}));function de(e){var t=je(),n=e.title,a=e.subTitle,i=e.icon;return Object(o.jsx)(le.a,{elevation:0,square:!0,className:t.root,children:Object(o.jsxs)("div",{className:t.PageHeader,children:[Object(o.jsx)(se.a,{className:t.pageIcon,children:i}),Object(o.jsxs)("div",{className:t.pageTitle,children:[Object(o.jsx)(ue.a,{variant:"h6",component:"div",children:n}),Object(o.jsx)(ue.a,{variant:"subtitle2",component:"div",children:a})]})]})})}var be=n(250),me=n(257),Oe=n(254),pe=n(255),ge=n(252),fe=n(253),he=n(267),xe=n(263),ve=Object(u.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}}));function Ce(e,t,n){var i=ve(),r=[5,10,25],c=Object(a.useState)(0),l=Object(A.a)(c,2),s=l[0],u=l[1],j=Object(a.useState)(r[s]),d=Object(A.a)(j,2),b=d[0],m=d[1],O=Object(a.useState)(),p=Object(A.a)(O,2),g=p[0],f=p[1],h=Object(a.useState)(),x=Object(A.a)(h,2),v=x[0],C=x[1],y=function(e,t){u(t)},S=function(e){m(parseInt(e.target.value,10)),u(0)};function I(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}return{TblContainer:function(e){return Object(o.jsx)(ge.a,{className:i.table,children:e.children})},TblHead:function(e){return Object(o.jsx)(fe.a,{children:Object(o.jsx)(Oe.a,{children:t.map((function(e){return Object(o.jsx)(pe.a,{sortDirection:v===e.id&&g,children:e.disableSorting?e.label:Object(o.jsx)(he.a,{active:v===e.id,direction:v===e.id?g:"asc",onClick:function(){var t;t=e.id,f(v===t&&"asc"===g?"desc":"asc"),C(t)},children:e.label})},e.id)}))})})},TblPagination:function(){return Object(o.jsx)(xe.a,{component:"div",page:s,rowsPerPageOptions:r,rowsPerPage:b,count:e.length,onChangePage:y,onChangeRowsPerPage:S})},recordsAfterPagingAndSorting:function(){return function(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!=a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}(n.fn(e),function(e,t){return"dsc"===e?function(e,n){return I(e,n,t)}:function(e,n){return-I(e,n,t)}}(g,v)).slice(s*b,(s+1)*b)}}}var ye=n(141),Se=n.n(ye),Ie=n(265),Ne=n(256),ke=n(247),Pe=n(79),Te=n.n(Pe),Ae=Object(u.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{paddingRight:"0px"}}}));function De(e){var t=e.title,n=e.children,a=e.openPopup,i=e.setOpenPopup,r=Ae();return Object(o.jsxs)(Ie.a,{open:a,maxWidth:"md",className:{paper:r.dialogWrapper},children:[Object(o.jsx)(Ne.a,{className:r.dialogTitle,children:Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)(ue.a,{variant:"h6",component:"div",style:{flexGrow:1},children:t}),Object(o.jsx)(U.ActionButton,{color:"secondary",onClick:function(){i(!1)},children:Object(o.jsx)(Te.a,{})})]})}),Object(o.jsx)(ke.a,{dividers:!0,children:n})]})}var Me=n(142),we=n.n(Me),Be=n(266),Ee=n(261),Fe=Object(u.a)((function(e){return{root:{top:e.spacing(9)}}}));function ze(e){var t=e.notify,n=e.setNotify,a=Fe(),i=function(e,a){"clickaway"!==a&&n(Object(T.a)(Object(T.a)({},t),{},{isOpen:!1}))};return Object(o.jsx)(Be.a,{className:a.root,open:t.isOpen,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:i,children:Object(o.jsx)(Ee.a,{severity:t.type,onClose:i,children:t.message})})}var Re=n(248),He=n(139),Je=n.n(He),We=Object(u.a)((function(e){return{dialog:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{textAlign:"center"},dialogContent:{textAlign:"center"},dialogAction:{justifyContent:"center"},titleIcon:{backgroundColor:e.palette.secondary.light,color:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.light,cursor:"default"},"& .MuiSvgIcon-root":{fontSize:"8rem"}}}}));function Le(e){var t=e.confirmDialog,n=e.setConfirmDialog,a=We();return Object(o.jsxs)(Ie.a,{open:t.isOpen,classes:{paper:a.dialog},children:[Object(o.jsx)(Ne.a,{className:a.dialogTitle,children:Object(o.jsx)(g.a,{disableRipple:!0,className:a.titleIcon,children:Object(o.jsx)(Je.a,{})})}),Object(o.jsxs)(ke.a,{className:a.dialogContent,children:[Object(o.jsx)(ue.a,{variant:"h6",children:t.title}),Object(o.jsx)(ue.a,{variant:"subtitle2",children:t.subTitle})]}),Object(o.jsxs)(Re.a,{className:a.dialogAction,children:[Object(o.jsx)(U.Button,{text:"No",color:"default",onClick:function(){return n(Object(T.a)(Object(T.a)({},t),{},{isOpen:!1}))}}),Object(o.jsx)(U.Button,{text:"Yes",color:"secondary",onClick:t.onConfirm})]})]})}var qe=Object(u.a)((function(e){return{pageContent:{margin:e.spacing(5),padding:e.spacing(3)},searchInput:{width:"75%"},newButton:{position:"absolute",right:"10px"}}})),Ge=[{id:"fullName",label:"Employee Name"},{id:"email",label:"Email Address (personal)"},{id:"mobile",label:"Mobile Number"},{id:"deparment",label:"Department",disableSorting:!0},{id:"actions",label:"Actions",disableSorting:!0}];function _e(){var e=qe(),t=Object(a.useState)(null),n=Object(A.a)(t,2),i=n[0],r=n[1],c=Object(a.useState)(ne()),l=Object(A.a)(c,2),s=l[0],u=l[1],j=Object(a.useState)({fn:function(e){return e}}),d=Object(A.a)(j,2),b=d[0],O=d[1],p=Object(a.useState)(!1),g=Object(A.a)(p,2),f=g[0],h=g[1],x=Object(a.useState)({isOpen:!1,message:"",type:""}),v=Object(A.a)(x,2),C=v[0],y=v[1],S=Object(a.useState)({isOpen:!1,title:"",subTitle:""}),I=Object(A.a)(S,2),k=I[0],P=I[1],D=Ce(s,Ge,b),M=D.TblContainer,w=D.TblHead,B=D.TblPagination,E=D.recordsAfterPagingAndSorting,F=function(e){P(Object(T.a)(Object(T.a)({},k),{},{isOpen:!1})),function(e){var t=ne();t=t.filter((function(t){return t.id!=e})),localStorage.setItem(X,JSON.stringify(t))}(e),u(ne()),y({isOpen:!0,message:"Deleted Successful",type:"error"})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(de,{title:"New Employee",subTitle:"Form design with validation",icon:Object(o.jsx)(oe.a,{fontSize:"large"})}),Object(o.jsxs)(le.a,{className:e.pageContent,children:[Object(o.jsxs)(m.a,{children:[Object(o.jsx)(U.Input,{label:"Search Employees",className:e.searchInput,InputProps:{startAdorment:Object(o.jsx)(be.a,{position:"start",children:Object(o.jsx)(N.a,{})})},onChange:function(e){var t=e.target;O({fn:function(e){return""==t.value?e:e.filter((function(e){return e.fullName.toLowerCase().includes(t.value)}))}})}}),Object(o.jsx)(U.Button,{text:"Add New",variant:"outlined",className:e.newButton,startIcon:Object(o.jsx)(Se.a,{}),onClick:function(){h(!0),r(null)}})]}),Object(o.jsxs)(M,{children:[Object(o.jsx)(w,{}),Object(o.jsx)(me.a,{children:E().map((function(e){return Object(o.jsxs)(Oe.a,{children:[Object(o.jsx)(pe.a,{children:e.fullName}),Object(o.jsx)(pe.a,{children:e.email}),Object(o.jsx)(pe.a,{children:e.mobile}),Object(o.jsx)(pe.a,{children:e.department}),Object(o.jsxs)(pe.a,{children:[Object(o.jsx)(U.ActionButton,{color:"primary",onClick:function(){!function(e){r(e),h(!0)}(e)},children:Object(o.jsx)(we.a,{fontSize:"small"})}),Object(o.jsx)(U.ActionButton,{color:"secondary",onClick:function(){P({isOpen:!0,title:"Are you sure to delete this record?",subTitle:"You can't undo this operation",onConfirm:function(){F(e.id)}})},children:Object(o.jsx)(Te.a,{fontSize:"small"})})]})]},e.id)}))})]}),Object(o.jsx)(B,{})]}),Object(o.jsx)(De,{title:"Employee Form",openPopup:f,setOpenPopup:h,children:Object(o.jsx)(re,{recordForEdit:i,addOrEdit:function(e,t){0==e.id?te(e):function(e){var t=ne(),n=t.findIndex((function(t){return t.id==e.id}));t[n]=Object(T.a)({},e),localStorage.setItem(X,JSON.stringify(t))}(e),t(),r(null),h(!1),u(ne()),y({isOpen:!0,message:"Submitted Successful",type:"success"})}})}),Object(o.jsx)(ze,{notify:C,setNotify:y}),Object(o.jsx)(Le,{confirmDialog:k,setConfirmDialog:P})]})}var Ve=Object(s.a)({palette:{primary:{main:"#333996",light:"#3c44b126"},secondary:{main:"#f83245",light:"#f8324526"},background:{default:"#f4f5fd"}},overrides:{MuiAppBar:{root:{transform:"translateZ(0)"}}},props:{MuiIconButton:{disableRipple:!0}}}),Ye=Object(u.a)({appMain:{paddingLeft:"320px",width:"100%"}});var Ze=function(){var e=Ye();return Object(o.jsxs)(j.a,{theme:Ve,children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:e.appMain,children:[Object(o.jsx)(P,{}),Object(o.jsx)(_e,{})]}),Object(o.jsx)(d.a,{})]})},$e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,271)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};r.a.render(Object(o.jsx)(Ze,{}),document.getElementById("root")),$e()}},[[197,1,2]]]);
//# sourceMappingURL=main.b601917a.chunk.js.map