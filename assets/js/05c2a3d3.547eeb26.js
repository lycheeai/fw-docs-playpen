"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[118],{2861:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>x,frontMatter:()=>f,metadata:()=>u,toc:()=>h});var r=o(4848),n=o(8453),i=(o(6540),o(1227));const s=i.Ay.h3`
    position: absolute;
    bottom: 0;
    left: 20px;
    font-size: 24px;
    font-weight: bold;

    transition: opacity 0.3s ease-in-out;
    opacity: 0;

    z-index: 3;
    color: white;
`,a=i.Ay.a`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 4px;
    border: 1px solid #e0e0e0;
    padding: 20px;

    width: 300px;
    height: 200px;
    overflow: hidden;

    &::before {
        z-index: 1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${e=>e.image});
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease-in-out;
    }

    &::after {
        z-index: 2;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
        width: 100%;
        height: 100%;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

    &:hover::before {
        transform: scale(1.1);
    }

    &:hover::after {
        opacity: 1;
    }

    &:hover ${s} {
        opacity: 1;
    }
`,c=i.Ay.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;

    width: 100%;
`,l=e=>{let{image:t,title:o,href:n}=e;return(0,r.jsx)(a,{image:t,href:n,target:"_blank",children:(0,r.jsx)(s,{children:o})})};function p(){return(0,r.jsxs)(c,{children:[(0,r.jsx)(l,{image:"/img/pages/page0.png",title:"Vercel commerce",href:"https://fw-commerce.vercel.app/"}),(0,r.jsx)(l,{image:"/img/pages/page1.png",title:"Three.js",href:"https://cylon.vercel.app/"}),(0,r.jsx)(l,{image:"/img/pages/page2.png",title:"Scroll-driven animation",href:"https://lfg-livid.vercel.app/"})]})}const f={title:"Showcase",slug:"/storefront/showcase"},d=void 0,u={id:"storefront/storefront-showcase",title:"Showcase",description:"",source:"@site/docs/storefront/storefront-showcase.mdx",sourceDirName:"storefront",slug:"/storefront/showcase",permalink:"/storefront/showcase",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Showcase",slug:"/storefront/showcase"},sidebar:"storefront",previous:{title:"Getting Started",permalink:"/storefront/getting-started"},next:{title:"How to setup checkout",permalink:"/storefront/checkout"}},g={},h=[];function m(e){return(0,r.jsx)(p,{})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var r=o(6540);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);