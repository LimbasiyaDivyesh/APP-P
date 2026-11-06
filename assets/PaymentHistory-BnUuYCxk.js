var y=(d,n,o)=>new Promise((c,m)=>{var x=r=>{try{s(o.next(r))}catch(l){m(l)}},i=r=>{try{s(o.throw(r))}catch(l){m(l)}},s=r=>r.done?c(r.value):Promise.resolve(r.value).then(x,i);s((o=o.apply(d,n)).next())});import{j as e}from"./pdfVendor-B9Kjg85e.js";import{a as p}from"./reactVendor-CSrEHl5U.js";import{a as g,u as f,D as j,r as h,h as N,A as v}from"./index-Bwo22056.js";import{u as w}from"./useApiLoading-DPZrQBk_.js";import{F as A}from"./ClockIcon-Bq0n80uQ.js";import"./reduxVendor-7CqTj3FH.js";import"./uiVendor-CXWy3A-7.js";const Y=({open:d,onClose:n,customerId:o,userAdminId:c})=>{const{dispatch:m,appSelector:x}=g(),{isLoading:i}=w(),{t:s}=f(),r=x(t=>{var a;return(a=t.app)==null?void 0:a.paymentLog}),l=(r==null?void 0:r.customerPaymentLog)||[],b=()=>y(null,null,function*(){m(yield v({method:"POST",apiUrl:"payment/customer/log",data:{customerId:o,userAdminId:c},storeKey:"paymentLog",storeActionType:"FETCH_CUSTOMER_PAYMENT_LOG",loader:!0}))});return p.useEffect(()=>(d&&o&&b(),()=>{m({type:"APP_CLEAR_PAYMENT_LOG",payload:void 0,name:"paymentLog",meta:{type:"CLEAR_PAYMENT_LOG"}})}),[d]),e.jsx(j,{open:d,handler:()=>n(),className:"bg-transparent shadow-none border-none outline-none w-[96%] sm:max-w-[520px]",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[480px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx(h.DialogHeader,{className:"flex items-center justify-between gap-3 pb-4 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:e.jsx(A,{className:"h-5 w-5 text-blue-600"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold  text-[18px] text-gray-900",children:s("customer.paymentHistory.title")}),e.jsx("p",{className:"text-xs text-gray-900",children:s("customer.paymentHistory.subtitle")})]})]})}),e.jsxs(h.DialogBody,{className:"max-h-[420px] overflow-y-auto",children:[i&&e.jsx("p",{className:"text-center text-gray-900 py-10",children:s("customer.paymentHistory.loading")}),!i&&l.length===0&&e.jsx("p",{className:"text-center text-gray-800 py-10 font-bold",children:s("customer.paymentHistory.empty")}),e.jsx("div",{className:"space-y-3",children:l.map(t=>{var u;const a=(t==null?void 0:t.source)==="DELETE";return e.jsxs("div",{className:`
            group
            !mt-2
            p-4
            py-2
            rounded-xl
            bg-white/80
            backdrop-blur-md
            border border-gray-200
            ${a?"!border-red-200 hover:!border-red-400":"hover:border-blue-400"}
            hover:shadow-lg
            transition
            flex
            justify-between
            items-center
            `,children:[e.jsxs("div",{children:[e.jsxs("p",{className:`font-semibold ${a?"text-red-600":"text-gray-900"}`,children:[a?"-":"","₹",t.amount,(t==null?void 0:t.method)&&e.jsxs("span",{className:"text-[11px] font-medium ml-1 text-gray-500",children:["(",t.method,")"]})]}),e.jsx("p",{className:"text-xs text-gray-900",children:N(t.createdAt).format("DD MMM YYYY • hh:mm A")}),((u=t==null?void 0:t.performedBy)==null?void 0:u.role)==="staff"&&e.jsx("p",{className:"text-[10px] font-medium text-indigo-600 mt-0.5",children:s("customer.paymentHistory.addedByStaff",{name:t.performedBy.name})})]}),e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("div",{className:`
                ${a?"text-red-600 bg-red-50":"text-green-600 bg-green-50"}
                text-xs
                font-medium
                px-3
                py-1
                rounded-full
                `,children:s(a?"customer.paymentHistory.deleted":"customer.paymentHistory.received")}),(t==null?void 0:t.source)&&!a&&e.jsx("div",{className:`
                    text-[10px]
                    font-medium
                    px-2
                    py-[2px]
                    rounded-full
                    ${t.source==="ADVANCE"?"bg-purple-50 text-purple-600":"bg-blue-50 text-blue-600"}
                    `,children:(t==null?void 0:t.source)==="ADVANCE"?s("customer.paymentHistory.source.advance"):s("customer.paymentHistory.source.bill")})]})]},t._id)})})]})]})]})})};export{Y as default};
