var q=Object.defineProperty,B=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var P=(o,s,t)=>s in o?q(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,T=(o,s)=>{for(var t in s||(s={}))M.call(s,t)&&P(o,t,s[t]);if(D)for(var t of D(s))Q.call(s,t)&&P(o,t,s[t]);return o},k=(o,s)=>B(o,L(s));var f=(o,s,t)=>new Promise((x,u)=>{var h=i=>{try{d(t.next(i))}catch(r){u(r)}},g=i=>{try{d(t.throw(i))}catch(r){u(r)}},d=i=>i.done?x(i.value):Promise.resolve(i.value).then(h,g);d((t=t.apply(o,s)).next())});import{j as e}from"./pdfVendor-BbcmCwHY.js";import{f as H,a as l}from"./reactVendor-BtoZ1Mrp.js";import{u as I,a as F,L as R,A as $}from"./index-DxhAWHb7.js";import{F as G}from"./index-48H7IaRX.js";import z from"./PaymentHistory-lnhnFdeJ.js";import{D as U}from"./DashboardHeader-CN1ievF5.js";import{C as J}from"./CustomerQrDialog-XmJnqJjc.js";import"./reduxVendor--FhXtTDf.js";import"./uiVendor-C4Svfq-D.js";import"./useApiLoading-EXR7nZtC.js";import"./ClockIcon-CSE-GJA3.js";import"./PlatformClassProvider-z-ULMl1H.js";import"./index-BWeukDIL.js";import"./customerQr-BliuMwZj.js";function lr(){var w,N,j,_,C;const o=H(),{t:s}=I(),{appSelector:t,dispatch:x}=F(),[u,h]=l.useState(!1),[g,d]=l.useState(!1),{loginData:i,selectedAdmin:r}=t(a=>a.app),c=(i==null?void 0:i.admins)||[],b=l.useCallback(a=>{x({type:"APP_SET_SELECTED_ADMIN",payload:a,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[x]),y=l.useCallback(()=>{h(!0)},[]);l.useEffect(()=>{!r&&c.length>0&&b(c[0])},[c,r,b]),l.useEffect(()=>{R.requestPermissions(),S()},[]),l.useEffect(()=>{f(null,null,function*(){yield x(yield $({apiUrl:"auth/customer/session",loader:!1,apiSuccessCallBack:a=>{const{user:n}=a,m=k(T({},i),{role:n.role,user:n,admins:n.admins||[]});if(x({type:"APP_SET_LOGIN_DATA",payload:m,name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),r!=null&&r._id){const p=((n==null?void 0:n.admins)||[]).find(O=>O._id===r._id);p&&b(p)}}}))})},[]);const v=()=>{var a;(a=r==null?void 0:r.customer)!=null&&a._id&&o(`/customerBill/${r.customer._id}`)},S=()=>f(null,null,function*(){try{return(yield G.requestPermissions()).publicStorage==="granted"?!0:(yield Permissions.request({name:"photos"})).state==="granted"}catch(a){return console.error("Permission error:",(a==null?void 0:a.message)||a),!1}}),E=l.useMemo(()=>{var n,m;const a=[{icon:"fa-file-invoice",label:s("dashboard.customerDashboard.viewBillTitle"),onClick:v},{icon:"fa-indian-rupee-sign",label:s("dashboard.customerDashboard.paymentsTitle"),onClick:y},{icon:"fa-qrcode",label:s("qr.customer.myQrTitle"),onClick:()=>d(!0)}];return(n=r==null?void 0:r.settings)!=null&&n.allowOtherSaleOrder&&((m=r==null?void 0:r.settings)==null?void 0:m.allowCounterSale)!==!1&&a.push({icon:"fa-basket-shopping",label:s("dashboard.customerDashboard.myOrdersTitle"),onClick:()=>o("/myOrders")}),a},[s,r,o]);return e.jsxs(e.Fragment,{children:[e.jsx(U,{roleLabel:s("dashboard.header.roleCustomer"),identityName:((w=r==null?void 0:r.customer)==null?void 0:w.name)||s("dashboard.header.roleCustomer"),identityRole:s("dashboard.header.roleCustomer"),menuItems:E}),e.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(c==null?void 0:c.length)>1&&e.jsx("div",{className:"px-3 sm:px-4",children:e.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:c.map((a,n)=>{var p;const m=(r==null?void 0:r._id)===a._id;return e.jsx("div",{className:"min-w-[160px] sm:min-w-0",children:e.jsx("div",{onClick:()=>b(a),className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${m?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:e.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${m?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:a.name}),e.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((p=a.company)==null?void 0:p.companyName)||s("dashboard.customerDashboard.noCompany")}),e.jsx("p",{className:"text-xs text-gray-900 truncate",children:a.phone||s("dashboard.customerDashboard.noPhone")})]})})})},a._id)})})}),r&&e.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:e.jsxs("div",{className:`\r
        grid\r
        grid-cols-1\r
        sm:grid-cols-2\r
        md:grid-cols-3\r
        lg:grid-cols-4\r
        gap-4 sm:gap-6\r
        `,children:[e.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:v,className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500\r
                    shadow-[0_10px_40px_rgba(251,191,36,0.35)] transition-all duration-500`,children:e.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[e.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 opacity-20 blur-3xl rounded-full"}),e.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-yellow-600 to-amber-500\r
                            text-white shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-file-invoice text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:s("dashboard.customerDashboard.viewBillTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:s("dashboard.customerDashboard.viewBillDesc")})]})]})})}),e.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:y,className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500\r
                    shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all duration-500`,children:e.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[e.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-blue-400 opacity-20 blur-3xl rounded-full"}),e.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-blue-500 to-indigo-700\r
                            text-white shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-indian-rupee-sign text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:s("dashboard.customerDashboard.paymentsTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:s("dashboard.customerDashboard.paymentsDesc")})]})]})})}),((N=r==null?void 0:r.customer)==null?void 0:N._id)&&e.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:()=>d(!0),className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500\r
                    shadow-[0_10px_40px_rgba(99,102,241,0.35)] transition-all duration-500`,children:e.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[e.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-indigo-400 opacity-20 blur-3xl rounded-full"}),e.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-indigo-500 to-blue-700\r
                            text-white shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-qrcode text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:s("qr.customer.myQrTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:s("qr.customer.myQrDesc")})]})]})})})]})})]}),e.jsx(J,{open:g,onClose:()=>d(!1),customer:r==null?void 0:r.customer,adminId:r==null?void 0:r._id,companyName:((j=r==null?void 0:r.company)==null?void 0:j.companyName)||(r==null?void 0:r.name)}),u&&((_=r==null?void 0:r.customer)!=null&&_._id)?e.jsx(z,{open:u,onClose:()=>h(!1),customerId:(C=r==null?void 0:r.customer)==null?void 0:C._id,userAdminId:r==null?void 0:r._id}):""]})}export{lr as CustomerDashboard,lr as default};
