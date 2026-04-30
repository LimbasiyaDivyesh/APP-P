var h=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var b=(r,o)=>{var a={};for(var t in r)p.call(r,t)&&o.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&h)for(var t of h(r))o.indexOf(t)<0&&y.call(r,t)&&(a[t]=r[t]);return a};var g=(r,o,a)=>new Promise((t,d)=>{var i=n=>{try{l(a.next(n))}catch(c){d(c)}},m=n=>{try{l(a.throw(n))}catch(c){d(c)}},l=n=>n.done?t(n.value):Promise.resolve(n.value).then(i,m);l((a=a.apply(r,o)).next())});import{r as x,u as f,j as e,b as u,h as j,A as N}from"./index-rAa2RaTK.js";import{u as v}from"./useApiLoading-kMSb6AYq.js";function w(d,t){var i=d,{title:r,titleId:o}=i,a=b(i,["title","titleId"]);return x.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":o},a),r?x.createElement("title",{id:o},r):null,x.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}))}const A=x.forwardRef(w),C=({open:r,onClose:o,customerId:a,userAdminId:t})=>{const{dispatch:d,appSelector:i}=f(),{isLoading:m}=v(),{paymentLog:l}=i(s=>s.app),n=(l==null?void 0:l.customerPaymentLog)||[],c=()=>g(null,null,function*(){d(yield N({method:"POST",apiUrl:"payment/customer/log",data:{customerId:a,userAdminId:t},storeKey:"paymentLog",storeActionType:"FETCH_CUSTOMER_PAYMENT_LOG",loader:!0}))});return x.useEffect(()=>(r&&a&&c(),()=>{d({type:"APP_CLEAR_PAYMENT_LOG",payload:void 0,name:"paymentLog",meta:{type:"CLEAR_PAYMENT_LOG"}})}),[r]),e.jsx(u.Dialog,{open:r,handler:()=>o(),className:"bg-transparent shadow-none border-none outline-none w-[96%] sm:max-w-[520px]",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[480px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx(u.DialogHeader,{className:"flex items-center justify-between gap-3 pb-4 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:e.jsx(A,{className:"h-5 w-5 text-blue-600"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold  text-[18px] text-gray-900",children:"Payment History"}),e.jsx("p",{className:"text-xs text-gray-900",children:"Customer payment records"})]})]})}),e.jsxs(u.DialogBody,{className:"max-h-[420px] overflow-y-auto",children:[m&&e.jsx("p",{className:"text-center text-gray-900 py-10",children:"Loading payments..."}),!m&&n.length===0&&e.jsx("p",{className:"text-center text-gray-800 py-10 font-bold",children:"No payment history found"}),e.jsx("div",{className:"space-y-3",children:n.map(s=>e.jsxs("div",{className:`\r
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
            `,children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-semibold text-gray-900",children:["₹",s.amount,(s==null?void 0:s.method)&&e.jsxs("span",{className:"text-[11px] font-medium ml-1 text-gray-500",children:["(",s.method,")"]})]}),e.jsx("p",{className:"text-xs text-gray-900",children:j(s.createdAt).format("DD MMM YYYY • hh:mm A")})]}),e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("div",{className:`\r
                text-green-600\r
                text-xs\r
                font-medium\r
                bg-green-50\r
                px-3\r
                py-1\r
                rounded-full\r
                `,children:"Received"}),(s==null?void 0:s.source)&&e.jsx("div",{className:`
                    text-[10px]
                    font-medium
                    px-2
                    py-[2px]
                    rounded-full
                    ${s.source==="ADVANCE"?"bg-purple-50 text-purple-600":"bg-blue-50 text-blue-600"}
                    `,children:(s==null?void 0:s.source)==="ADVANCE"?"Advance Payment":"Bill Pay"})]})]},s._id))})]})]})]})})};export{A as F,C as P};
