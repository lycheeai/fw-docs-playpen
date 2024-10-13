"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[583],{6866:(e,r,i)=>{i.r(r),i.d(r,{default:()=>g});i(6540);var o=i(781),n=i(8774),s=i(1227),l=i(4848);const t=s.Ay.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`,d=s.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 160px;

  gap: 100px;
`,a=s.Ay.div`
  position: relative;

  display: flex;
  flex-direction: column;

  background-image: url('/img/hero-bg.jpg');
  background-size: cover;
  background-position: center;

  width: 100%;

  padding: 120px 160px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(200, 200, 200, 0.7), rgba(200, 200, 200, 0.4));
    backdrop-filter: blur(5px);
    z-index: 1;
  }

  h1 {
    font-size: 48px;
    color: #0338BE;
    z-index: 2;
  }

  p {
    font-size: 20px;
    z-index: 2;
  }

  a {
    z-index: 2;
  }

  gap: 32px;
`,c=s.Ay.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`,p=s.Ay.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`,x=s.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  gap: 16px;
`,h=s.Ay.a`
  display: flex;
  flex-direction: column;

  padding: 18px 20px;

  border: 1px solid #e0e0e0;
  border-radius: 2px;

  transition: border-color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  color: inherit;

  ${e=>{let{disabled:r}=e;return r&&s.AH`
    opacity: 0.5;
    cursor: not-allowed;
  `}}

  &:hover {
    border-color: #0042FF;
    background-color: #CED9FC;
    text-decoration: none;
    color: inherit;
  }
`,u=(0,s.Ay)(n.A)`
  display: inline-block;

  background-color: rgb(0, 66, 255);
  color: #fff;

  border-radius: 2px;

  &:hover {
    background-color: rgb(3, 56, 190);
  }
`,f=(0,s.Ay)(n.A)`
  border-radius: 2px;
`,b=s.Ay.div`
  display: flex;
  gap: 16px;
`;function g(){return(0,l.jsx)(o.A,{title:"Welcome",description:"Description will go into a meta tag in <head />",children:(0,l.jsxs)(t,{children:[(0,l.jsxs)(a,{children:[(0,l.jsxs)(c,{children:[(0,l.jsx)("h1",{children:"Let your imagination run wild"}),(0,l.jsx)("p",{children:"Build any storefront you can imagine using our flexible headless APIs."})]}),(0,l.jsxs)(b,{children:[(0,l.jsx)(u,{className:"button button--primary",to:"/storefront/getting-started/",children:"Get started"}),(0,l.jsx)(f,{className:"button button--secondary",to:"/storefront/showcase/",children:"Examples"})]})]}),(0,l.jsx)(d,{children:(0,l.jsxs)(p,{children:[(0,l.jsx)("h2",{children:"All APIs"}),(0,l.jsxs)(x,{children:[(0,l.jsxs)(h,{href:"/storefront/",children:[(0,l.jsx)("h3",{children:"Storefront"}),(0,l.jsx)("p",{children:"Build a custom storefront for your brand."})]}),(0,l.jsxs)(h,{href:"/webhooks/",children:[(0,l.jsx)("h3",{children:"Webhooks"}),(0,l.jsx)("p",{children:"Receive notifications for key events on your shop."})]}),(0,l.jsxs)(h,{disabled:!0,children:[(0,l.jsx)("h3",{children:"Platform Apps"}),(0,l.jsx)("p",{children:"(coming soon)"})]})]})]})})]})})}}}]);