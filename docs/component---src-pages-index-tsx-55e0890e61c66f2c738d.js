(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EBzK:function(e,t,a){e.exports={homePage:"index-module--homePage--mAY_-",cursor:"index-module--cursor--27oYX",me:"index-module--me--1HERa",info:"index-module--info--WT3Zs",hi:"index-module--hi--1f9Mv",name:"index-module--name--1-snk",jobTitle:"index-module--jobTitle--3PBoD",socials:"index-module--socials--345id",social:"index-module--social---UL5X"}},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("PIHY"),l=a("EBzK"),c=a.n(l),h=a("U1wR"),s=a.n(h),m=0,r=0,d=null,u=null,g=null,w=null,p=null,f=null,v=null,E=null,b=70;t.default=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=function(){E.clearRect(0,0,v.width,v.height),E.globalCompositeOperation="source-over",E.drawImage(p,0,0),E.globalCompositeOperation="source-in",E.drawImage(d,0,0),w.clearRect(0,0,g.width,g.height),w.globalCompositeOperation="source-over",w.fillStyle="#1c1c1e",w.fillRect(0,0,g.width,g.height),w.globalCompositeOperation="lighten",w.drawImage(v,0,0,v.width,v.height,0,0,g.width,g.height)},l=function(e){var t=g.getBoundingClientRect();m=((e.clientX||e.pageX)-t.left)/t.width*d.width,r=((e.clientY||e.pageY)-t.top)/t.height*d.height},h=function(e){var t=g.getBoundingClientRect(),n=((e.clientX||e.pageX)-t.left)/t.width*d.width,i=((e.clientY||e.pageY)-t.top)/t.height*d.height;if(u.style.left=(e.clientX||e.pageX)+"px",u.style.top=(e.clientY||e.pageY)+"px",1===e.buttons){for(var o=Math.max(Math.abs((n-m)/2),Math.abs((i-r)/2)),l=(n-m)/o,c=(i-r)/o,h=1;h<=o;h++)f.beginPath(),f.arc(m+l*h,r+c*h,b,0,2*Math.PI),f.fill();a()}m=n,r=i},x=function(e){var t=g.getBoundingClientRect(),n=((e.clientX||e.pageX)-t.left)/t.width*d.width,i=((e.clientY||e.pageY)-t.top)/t.height*d.height;f.beginPath(),f.arc(n,i,b,0,2*Math.PI),f.fill(),a()},k=function(){window.innerWidth>600?(g.height=window.innerHeight-118,g.width=g.height/1.2202097235):(g.width=window.innerWidth-60,g.height=1.2202097235*g.width),a()},y=function(e){91===e.keyCode?(b=Math.max(10,b-10),u.style.width=u.style.height=b*(g.width/d.width)*2+"px"):93===e.keyCode&&(b=Math.min(100,b+10),u.style.width=u.style.height=b*(g.width/d.width)*2+"px")};return Object(n.useEffect)((function(){return(d=new Image).src=s.a,d.onload=function(){g=e.current,u=t.current,w=g.getContext("2d"),p=document.createElement("canvas"),f=p.getContext("2d"),v=document.createElement("canvas"),E=v.getContext("2d"),p.width=v.width=d.width,p.height=v.height=d.height,f.lineWidth=180,f.lineCap="round",f.moveTo(d.width,.15*d.height),f.lineTo(0,.6*d.height),f.stroke(),f.moveTo(0,.2*d.height),f.lineTo(d.width,.75*d.height),f.stroke(),k(),u.style.width=u.style.height=b*(g.width/d.width)*2+"px",document.addEventListener("mousedown",l),document.addEventListener("mousemove",h),document.addEventListener("mouseup",x),window.addEventListener("resize",k),document.addEventListener("keypress",y)},function(){document.removeEventListener("mousedown",l),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",x),window.removeEventListener("resize",k),document.removeEventListener("keypress",y)}}),[]),i.a.createElement("main",{className:c.a.homePage},i.a.createElement(o.a,{title:"Home"}),i.a.createElement("div",{className:c.a.cursor,ref:t}),i.a.createElement("div",{className:"container"},i.a.createElement("section",{className:c.a.info},i.a.createElement("div",{className:c.a.hi},"Hi, I'm"),i.a.createElement("div",{className:c.a.name},"Hossein"),i.a.createElement("div",{className:c.a.jobTitle},"Web Developer")),i.a.createElement("canvas",{className:c.a.me,ref:e}),i.a.createElement("footer",null,i.a.createElement("ul",{className:c.a.socials},i.a.createElement("li",{className:c.a.social},i.a.createElement("a",{target:"_blank",href:"https://github.com/hmak-me"},"GitHub")),i.a.createElement("li",{className:c.a.social},i.a.createElement("a",{target:"_blank",href:"https://linkedin.com/in/hmak-me"},"LinkedIn")),i.a.createElement("li",{className:c.a.social},i.a.createElement("a",{target:"_blank",href:"https://twitter.com/hmakme"},"Twitter")),i.a.createElement("li",{className:c.a.social},i.a.createElement("a",{target:"_blank",href:"https://instagram.com/hmak.me"},"Instagram"))))))}},U1wR:function(e,t,a){e.exports=a.p+"static/me-290d2651a1e9e8658a7b380605aa1c96.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-55e0890e61c66f2c738d.js.map