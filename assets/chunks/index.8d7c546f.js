import{d as L,o,x as l,y as N,a0 as T,v as z,n as V,b as e,D,c as r,C as I,z as u,a1 as _,E as h,t as g,F as j,a as w,a2 as A,T as E}from"./framework.a23d502a.js";import{s as i,F as O,a as d,b as m,c as G,d as H,e as W,i as Y,f as q,g as J}from"./index.b18870e2.js";import{u as K,a as Q}from"./index.d2a34494.js";const R={message:{type:[String,Object],default:()=>null},type:i("default",t=>O.includes(t)),close:d(),duration:m(2500),round:d(),icon:G(),color:i(),background:i(),offset:m(20),placement:i("top",t=>["top","top-left","top-right","bottom","bottom-left","bottom-right"].includes(t)),zIndex:m(),closeBtn:{type:[String,Object],default:()=>null},onClose:H()},U={key:0,class:"f-message__before_icon"},X={key:2,class:"f-message__text"},Z=L({name:"FMessage",__name:"message",props:R,setup(t,{expose:v}){const y=t,{classList:b,style:B,visible:k,isPosition:F,offsetStyle:C,offsetVal:S,onBeforeLeave:M,onAfterLeave:P,clearTimer:c,startTime:f,handelClose:p}=K(y,"message");return v({offsetVal:S}),(s,a)=>(o(),l(E,{mode:"out-in",appear:"",name:"f-message-fade"+(e(F)?"-top":"-bottom"),onBeforeLeave:e(M),onAfterLeave:e(P)},{default:N(()=>[T(z("div",{class:V(e(b)),style:D([e(C),e(B)]),onMouseleave:a[1]||(a[1]=(...n)=>e(f)&&e(f)(...n)),onMouseenter:a[2]||(a[2]=(...n)=>e(c)&&e(c)(...n))},[s.icon?(o(),r("div",U,[I(e(W),{icon:s.icon,size:16},null,8,["icon"])])):u("",!0),_(s.message)?(o(),l(h(s.message),{key:1})):(o(),r("div",X,g(s.message),1)),s.close?(o(),r("div",{key:3,class:"f-message__close",onClick:a[0]||(a[0]=(...n)=>e(p)&&e(p)(...n))},[e(Y)(s.closeBtn)?(o(),r(j,{key:0},[w(g(s.closeBtn),1)],64)):(o(),l(e(q),{key:1,icon:s.closeBtn,size:15,color:"#a4a4a4"},null,8,["icon"]))])):u("",!0)],38),[[A,e(k)]])]),_:1},8,["name","onBeforeLeave","onAfterLeave"]))}}),{Message:$}=Q(Z,"message"),oe=J($,"FMessage");export{oe as F};
