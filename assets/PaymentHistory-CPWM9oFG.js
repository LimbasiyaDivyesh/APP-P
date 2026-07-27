var h=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var p=(r,l)=>{var a={};for(var s in r)g.call(r,s)&&l.indexOf(s)<0&&(a[s]=r[s]);if(r!=null&&h)for(var s of h(r))l.indexOf(s)<0&&f.call(r,s)&&(a[s]=r[s]);return a};var y=(r,l,a)=>new Promise((s,i)=>{var d=o=>{try{n(a.next(o))}catch(c){i(c)}},x=o=>{try{n(a.throw(o))}catch(c){i(c)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(d,x);n((a=a.apply(r,l)).next())});import{j as e}from"./uiVendor-Dy6p_79k.js";import{a as m}from"./reactVendor-BrBFq9LG.js";import{a as j,u as N,r as u,h as v,A as w}from"./index-B6EveHNx.js";import{u as A}from"./useApiLoading-DCJuNwqF.js";function E(i,s){var d=i,{title:r,titleId:l}=d,a=p(d,["title","titleId"]);return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":l},a),r?m.createElement("title",{id:l},r):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}))}const L=m.forwardRef(E),M=({open:r,onClose:l,customerId:a,userAdminId:s})=>{const{dispatch:i,appSelector:d}=j(),{isLoading:x}=A(),{t:n}=N(),{paymentLog:o}=d(t=>t.app),c=(o==null?void 0:o.customerPaymentLog)||[],b=()=>y(null,null,function*(){i(yield w({method:"POST",apiUrl:"payment/customer/log",data:{customerId:a,userAdminId:s},storeKey:"paymentLog",storeActionType:"FETCH_CUSTOMER_PAYMENT_LOG",loader:!0}))});return m.useEffect(()=>(r&&a&&b(),()=>{i({type:"APP_CLEAR_PAYMENT_LOG",payload:void 0,name:"paymentLog",meta:{type:"CLEAR_PAYMENT_LOG"}})}),[r]),e.jsx(u.Dialog,{open:r,handler:()=>l(),className:"bg-transparent shadow-none border-none outline-none w-[96%] sm:max-w-[520px]",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[480px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx(u.DialogHeader,{className:"flex items-center justify-between gap-3 pb-4 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:e.jsx(L,{className:"h-5 w-5 text-blue-600"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold  text-[18px] text-gray-900",children:n("customer.paymentHistory.title")}),e.jsx("p",{className:"text-xs text-gray-900",children:n("customer.paymentHistory.subtitle")})]})]})}),e.jsxs(u.DialogBody,{className:"max-h-[420px] overflow-y-auto",children:[x&&e.jsx("p",{className:"text-center text-gray-900 py-10",children:n("customer.paymentHistory.loading")}),!x&&c.length===0&&e.jsx("p",{className:"text-center text-gray-800 py-10 font-bold",children:n("customer.paymentHistory.empty")}),e.jsx("div",{className:"space-y-3",children:c.map(t=>e.jsxs("div",{className:`\r
            group\r
            !mt-2\r
            p-4\r
            py-2\r
            rounded-xl\r
            bg-white/80\r
            backdrop-blur-md\r
            border border-gray-200\r
            hover:border-blue-400\r
            hover:shadow-lg\r
            transition\r
            flex\r
            justify-between\r
            items-center\r
            `,children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-semibold text-gray-900",children:["₹",t.amount,(t==null?void 0:t.method)&&e.jsxs("span",{className:"text-[11px] font-medium ml-1 text-gray-500",children:["(",t.method,")"]})]}),e.jsx("p",{className:"text-xs text-gray-900",children:v(t.createdAt).format("DD MMM YYYY • hh:mm A")})]}),e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("div",{className:`\r
                text-green-600\r
                text-xs\r
                font-medium\r
                bg-green-50\r
                px-3\r
                py-1\r
                rounded-full\r
                `,children:n("customer.paymentHistory.received")}),(t==null?void 0:t.source)&&e.jsx("div",{className:`
                    text-[10px]
                    font-medium
                    px-2
                    py-[2px]
                    rounded-full
                    ${t.source==="ADVANCE"?"bg-purple-50 text-purple-600":"bg-blue-50 text-blue-600"}
                    `,children:(t==null?void 0:t.source)==="ADVANCE"?n("customer.paymentHistory.source.advance"):n("customer.paymentHistory.source.bill")})]})]},t._id))})]})]})]})})};export{L as F,M as P};
