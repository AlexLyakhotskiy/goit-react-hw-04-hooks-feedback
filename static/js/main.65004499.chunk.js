(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={text:"Statistics_text__cCFmg"}},,,function(e,t,n){e.exports={wrapper:"FeedbackOptions_wrapper__3_6EB",button:"FeedbackOptions_button__1tH2J"}},,function(e,t,n){e.exports={title:"Section_title__1Z4yV"}},function(e,t,n){e.exports={title:"Notification_title__2c8ee"}},function(e,t,n){e.exports={Container:"Container_Container__5KmH-"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),s=n.n(r),i=(n(14),n(3)),o=n(2),u=n.n(o),l=n(0),b=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:u.a.text,children:["Good: ",t]}),Object(l.jsxs)("p",{className:u.a.text,children:["Neutral: ",n]}),Object(l.jsxs)("p",{className:u.a.text,children:["Bad: ",c]}),Object(l.jsxs)("p",{className:u.a.text,children:["Total: ",a]}),Object(l.jsxs)("p",{className:u.a.text,children:["Positive feedback: ",r,"%"]})]})};b.defaultProps={positivePercentage:0};var d=b,j=n(5),x=n.n(j),p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)("div",{className:x.a.wrapper,children:t.map((function(e){return Object(l.jsx)("button",{className:x.a.button,onClick:function(){return n(e)},type:"button",children:e},e)}))})},h=n(7),f=n.n(h),O=function(e){var t=e.title,n=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:f.a.title,children:t}),n]})},m=n(8),v=n.n(m),_=function(e){var t=e.message;return Object(l.jsx)("h3",{className:v.a.title,children:t})},g=n(9),k=n.n(g),N=function(e){var t=e.children;return Object(l.jsx)("div",{className:k.a.Container,children:t})};var w=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),s=Object(i.a)(r,2),o=s[0],u=s[1],b=Object(c.useState)(0),j=Object(i.a)(b,2),x=j[0],h=j[1],f=function(){return[n,o,x].reduce((function(e,t){return e+t}),0)};return Object(l.jsxs)(N,{children:[Object(l.jsx)(O,{title:"Please leave feedback",children:Object(l.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":h((function(e){return e+1}))}}})}),Object(l.jsx)(O,{title:"Statistics",children:f()?Object(l.jsx)(d,{good:n,neutral:o,bad:x,total:f(),positivePercentage:Math.round(n/f()*100)}):Object(l.jsx)(_,{message:"No feedback given"})})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.65004499.chunk.js.map