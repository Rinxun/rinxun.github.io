(this["webpackJsonprinxun-home"]=this["webpackJsonprinxun-home"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(11),r=n.n(c),o=(n(70),n(71),n(114)),l=n(116),s=n(118),j=n(123),b=n(84),d=n(45),u=n(25),m=n(115),h=n(121),O=n(56),x=n.n(O),p=n(57),f=n.n(p),g=n(2),v="\u6df1\u5733\u9e9f\u52cb\u79d1\u6280\u6709\u9650\u516c\u53f8",y="\u9e9f\u52cb\u79d1\u6280",N="Shenzhen Rinxun Technology Ltd.",w=2021,F=[{title:"Github",link:"https://github.com/Rinxun",icon:Object(g.jsx)(x.a,{})},{title:"Email",link:"mailto:hello@rinxun.com",icon:Object(g.jsx)(f.a,{})}],k=[{key:"/",labelEN:"Home",labelCN:"\u9996\u9875"},{key:"partners",labelEN:"Partners",labelCN:"\u5408\u4f5c\u4f19\u4f34"},{key:"join",labelEN:"Join us",labelCN:"\u52a0\u5165\u6211\u4eec"},{key:"about",labelEN:"About",labelCN:"\u4e86\u89e3\u6211\u4eec"}],S=Object(o.a)((function(e){return{item:{"&:hover":{backgroundColor:e.colors.sidebarHighLight}},title:{fontSize:14},subTitle:{fontSize:10}}}));function A(){var e=S(),t=window.location,n=Object(i.useState)(0),a=Object(d.a)(n,2),c=a[0],r=a[1];return Object(i.useEffect)((function(){k.forEach((function(e,t){window.location.pathname.includes(e.key)&&r(t)}))}),[t]),Object(g.jsx)(h.a,{value:c,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){e.preventDefault(),Object(u.b)(k[t].key),r(t)},"aria-label":"disabled tabs example",children:k.map((function(t){var n=t.key,i=t.labelCN,a=t.labelEN;return Object(g.jsx)(m.a,{className:e.item,label:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{component:"p",color:"primary",className:e.title,children:i}),Object(g.jsx)(b.a,{component:"p",color:"primary",className:e.subTitle,children:a})]})},n)}))})}var C=Object(i.memo)(A),E=n(117),I=n(122);function z(){return Object(g.jsx)(l.a,{container:!0,direction:"row",alignItems:"center",spacing:2,children:F.map((function(e){var t=e.link,n=e.title,a=e.icon;return Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(I.a,{title:Object(g.jsx)(b.a,{variant:"caption",children:n}),arrow:!0,children:Object(g.jsx)(E.a,{color:"primary",href:t,target:"__blank",children:Object(i.cloneElement)(a)})})},t)}))})}var D=Object(i.memo)(z),L=Object(o.a)((function(e){return{root:{padding:e.spacing(1,2,.25,2)}}}));var W=function(){var e=L();return Object(g.jsx)(s.a,{className:e.root,color:"transparent",elevation:1,children:Object(g.jsxs)(l.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:[Object(g.jsx)(l.a,{item:!0,xs:12,md:4,lg:3,children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{variant:"h4",color:"primary",component:"p",children:v}),Object(g.jsx)(b.a,{variant:"caption",color:"primary",component:"p",children:N})]})}),Object(g.jsxs)(j.a,{mdDown:!0,children:[Object(g.jsx)(l.a,{item:!0,xs:10,md:6,lg:7,children:Object(g.jsx)(C,{})}),Object(g.jsx)(l.a,{item:!0,xs:2,children:Object(g.jsx)(D,{})})]})]})})},B=n(85);var R=function(){return Object(g.jsx)(l.a,{container:!0,direction:"row",alignItems:"center",justify:"space-evenly",children:Object(g.jsx)(l.a,{item:!0,children:Object(g.jsxs)(b.a,{variant:"caption",color:"textSecondary",align:"center",children:["\xa9",(new Date).getFullYear()>w?"".concat(w,"-").concat((new Date).getFullYear()):(new Date).getFullYear(),Object(g.jsx)("wbr",{}),"\u2002",y,"\u2002\u7248\u6743\u6240\u6709 \xb7\u2002",Object(g.jsx)("wbr",{}),"All Rights Reserved"]})})})},T=Object(o.a)((function(e){return{root:{padding:e.spacing(.5,0),position:"fixed",bottom:0,width:"100%"}}}));function H(){var e=T();return Object(g.jsx)(B.a,{className:e.root,square:!0,variant:"outlined",children:Object(g.jsx)(l.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:Object(g.jsx)(R,{})})})}var P=Object(i.memo)(H),M=n(36),J=n.p+"static/media/NotFound.f7d6b2b2.jpg",Y=Object(o.a)((function(e){return{container:{marginTop:e.spacing(.5)},img:{maxWidth:"100%",margin:"auto",backgroundBlendMode:"multiply",mixBlendMode:"darken",zIndex:-1},font:{color:e.palette.primary.main,"& span":{fontSize:e.spacing(2)}},button:{textDecoration:"underline","&:hover":{textDecoration:"underline"}}}})),_=function(){var e=Y(),t=Object(i.useState)(6),n=Object(d.a)(t,2),a=n[0],c=n[1];return Object(i.useEffect)((function(){var e=setInterval((function(){c((function(e){return 1===e&&Object(u.b)("/",{replace:!0}),e-1}))}),[1e3]);return function(){clearInterval(e)}}),[]),Object(g.jsxs)(l.a,{className:e.container,container:!0,direction:"column",justify:"space-around",alignItems:"center",spacing:3,children:[Object(g.jsx)(l.a,{item:!0,xs:12,children:Object(g.jsx)(b.a,{className:e.font,variant:"h2",component:"p",children:"Page Not Found!"})}),Object(g.jsx)(l.a,{item:!0,xs:12,container:!0,justify:"center",alignItems:"center",children:Object(g.jsxs)(b.a,{className:e.font,variant:"body1",component:"p",children:[a,"\u79d2\u949f\u540e\u5c06\u5e26\u4f60\u8fd4\u56de\u9996\u9875..."]})}),Object(g.jsx)(l.a,{item:!0,xs:12,container:!0,justify:"center",alignItems:"center",children:Object(g.jsxs)(b.a,{className:e.font,variant:"body1",component:"p",children:["Redirect to Home Page in ",a," seconds..."]})}),Object(g.jsx)(l.a,{item:!0,xs:12,md:10,lg:7,children:Object(g.jsx)("img",{src:J,alt:"NotFound",className:e.img})})]})},q=Object(i.memo)(_),G=Object(M.a)((function(){return n.e(4).then(n.bind(null,124))})),V=Object(M.a)((function(){return n.e(5).then(n.bind(null,125))})),K=Object(M.a)((function(){return n.e(6).then(n.bind(null,126))})),Q=Object(M.a)((function(){return n.e(3).then(n.bind(null,127))})),U=Object(o.a)((function(e){return{root:{paddingTop:e.spacing(10)}}}));function X(){var e=U();return Object(g.jsx)("div",{className:e.root,children:Object(g.jsxs)(u.a,{primary:!1,children:[Object(g.jsx)(G,{path:"/"}),Object(g.jsx)(Q,{path:"about"}),Object(g.jsx)(V,{path:"join"}),Object(g.jsx)(K,{path:"partners"}),Object(g.jsx)(q,{default:!0})]})})}var Z=Object(i.memo)(X);function $(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(W,{}),Object(g.jsx)(Z,{}),Object(g.jsx)(P,{})]})}var ee=Object(i.memo)($),te=n(60),ne=n(59),ie=n(119),ae=n(120),ce=Object(ne.a)({overrides:{MuiButton:{root:{whiteSpace:"nowrap",minWidth:"max-content",fontWeight:600,fontFamily:"Dinpro",paddingTop:8,paddingBottom:8,paddingLeft:16,paddingRight:16}}},palette:{primary:{light:"#33ABB8",main:"#00A2A9",dark:"#0099A7"},secondary:{light:"#FF5722",main:"#FF5630",dark:"#F4511E"}},colors:{sidebarHighLight:"#00A2A925",sidebarActive:"#00A2A918",shadowHighLight:"#00A2A96C",tableRowHighLight:"#00A2A912",tableRowHighLightSecondary:"#FF563048"},typography:{useNextVariants:!0,h1:{fontSize:32,fontWeight:600},h2:{fontSize:27,fontWeight:600},h3:{fontSize:24,fontWeight:600},h4:{fontSize:21,fontWeight:600},body1:{fontSize:16,fontWeight:400},body2:{fontSize:16,fontWeight:600}}});var re=function(e){return function(t){return Object(g.jsxs)(ie.a,{theme:ce,children:[Object(g.jsx)(ae.a,{}),Object(g.jsx)(e,Object(te.a)({},t))]})}}((function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(ee,{})})})),oe=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,128)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(re,{})}),document.getElementById("root")),oe()}},[[82,1,2]]]);
//# sourceMappingURL=main.860f15b1.chunk.js.map