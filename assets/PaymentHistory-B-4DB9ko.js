var y=(n,i,a)=>new Promise((c,l)=>{var x=s=>{try{r(a.next(s))}catch(o){l(o)}},m=s=>{try{r(a.throw(s))}catch(o){l(o)}},r=s=>s.done?c(s.value):Promise.resolve(s.value).then(x,m);r((a=a.apply(n,i)).next())});import{j as e}from"./pdfVendor-BbcmCwHY.js";import{a as h}from"./reactVendor-BtoZ1Mrp.js";import{a as b,u as g,r as u,h as f,A as j}from"./index-CBJZ-RIQ.js";import{u as N}from"./useApiLoading-CxxzWs-l.js";import{F as v}from"./ClockIcon-CSE-GJA3.js";import"./reduxVendor--FhXtTDf.js";import"./uiVendor-C4Svfq-D.js";const D=({open:n,onClose:i,customerId:a,userAdminId:c})=>{const{dispatch:l,appSelector:x}=b(),{isLoading:m}=N(),{t:r}=g(),s=x(t=>{var d;return(d=t.app)==null?void 0:d.paymentLog}),o=(s==null?void 0:s.customerPaymentLog)||[],p=()=>y(null,null,function*(){l(yield j({method:"POST",apiUrl:"payment/customer/log",data:{customerId:a,userAdminId:c},storeKey:"paymentLog",storeActionType:"FETCH_CUSTOMER_PAYMENT_LOG",loader:!0}))});return h.useEffect(()=>(n&&a&&p(),()=>{l({type:"APP_CLEAR_PAYMENT_LOG",payload:void 0,name:"paymentLog",meta:{type:"CLEAR_PAYMENT_LOG"}})}),[n]),e.jsx(u.Dialog,{open:n,handler:()=>i(),className:"bg-transparent shadow-none border-none outline-none w-[96%] sm:max-w-[520px]",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[480px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx(u.DialogHeader,{className:"flex items-center justify-between gap-3 pb-4 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:e.jsx(v,{className:"h-5 w-5 text-blue-600"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold  text-[18px] text-gray-900",children:r("customer.paymentHistory.title")}),e.jsx("p",{className:"text-xs text-gray-900",children:r("customer.paymentHistory.subtitle")})]})]})}),e.jsxs(u.DialogBody,{className:"max-h-[420px] overflow-y-auto",children:[m&&e.jsx("p",{className:"text-center text-gray-900 py-10",children:r("customer.paymentHistory.loading")}),!m&&o.length===0&&e.jsx("p",{className:"text-center text-gray-800 py-10 font-bold",children:r("customer.paymentHistory.empty")}),e.jsx("div",{className:"space-y-3",children:o.map(t=>{var d;return e.jsxs("div",{className:`\r
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
            `,children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-semibold text-gray-900",children:["₹",t.amount,(t==null?void 0:t.method)&&e.jsxs("span",{className:"text-[11px] font-medium ml-1 text-gray-500",children:["(",t.method,")"]})]}),e.jsx("p",{className:"text-xs text-gray-900",children:f(t.createdAt).format("DD MMM YYYY • hh:mm A")}),((d=t==null?void 0:t.performedBy)==null?void 0:d.role)==="staff"&&e.jsx("p",{className:"text-[10px] font-medium text-indigo-600 mt-0.5",children:r("customer.paymentHistory.addedByStaff",{name:t.performedBy.name})})]}),e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("div",{className:`\r
                text-green-600\r
                text-xs\r
                font-medium\r
                bg-green-50\r
                px-3\r
                py-1\r
                rounded-full\r
                `,children:r("customer.paymentHistory.received")}),(t==null?void 0:t.source)&&e.jsx("div",{className:`
                    text-[10px]
                    font-medium
                    px-2
                    py-[2px]
                    rounded-full
                    ${t.source==="ADVANCE"?"bg-purple-50 text-purple-600":"bg-blue-50 text-blue-600"}
                    `,children:(t==null?void 0:t.source)==="ADVANCE"?r("customer.paymentHistory.source.advance"):r("customer.paymentHistory.source.bill")})]})]},t._id)})})]})]})]})})};export{D as default};
