var T=Object.defineProperty,S=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(i,r,t)=>r in i?T(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,_=(i,r)=>{for(var t in r||(r={}))B.call(r,t)&&j(i,t,r[t]);if(N)for(var t of N(r))L.call(r,t)&&j(i,t,r[t]);return i},D=(i,r)=>S(i,k(r));var b=(i,r,t)=>new Promise((c,x)=>{var p=o=>{try{s(t.next(o))}catch(n){x(n)}},m=o=>{try{s(t.throw(o))}catch(n){x(n)}},s=o=>o.done?c(o.value):Promise.resolve(o.value).then(p,m);s((t=t.apply(i,r)).next())});import{j as e}from"./pdfVendor-DdAo4azW.js";import{f as H,a as d}from"./reactVendor-BrBFq9LG.js";import{u as I,a as M,L as O,A as q}from"./index-CB3hMB_3.js";import{F}from"./index-ZS-RKy3j.js";import R from"./PaymentHistory-BLz9QvMs.js";import{D as $}from"./DashboardHeader-D7cvvQlo.js";import"./reduxVendor-C8DwjTzm.js";import"./uiVendor-EdgAqaye.js";import"./useApiLoading-RWchyzx7.js";import"./ClockIcon-CCcvREjO.js";import"./PlatformClassProvider-DSflfbFw.js";function ee(){var y,v,w;const i=H(),{t:r}=I(),{appSelector:t,dispatch:c}=M(),[x,p]=d.useState(!1),{loginData:m,selectedAdmin:s}=t(a=>a.app),o=(m==null?void 0:m.admins)||[],n=d.useCallback(a=>{c({type:"APP_SET_SELECTED_ADMIN",payload:a,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[c]),g=d.useCallback(()=>{p(!0)},[]);d.useEffect(()=>{!s&&o.length>0&&n(o[0])},[o,s,n]),d.useEffect(()=>{O.requestPermissions(),P()},[]),d.useEffect(()=>{b(null,null,function*(){yield c(yield q({apiUrl:"auth/customer/session",loader:!1,apiSuccessCallBack:a=>{const{user:l}=a,h=D(_({},m),{role:l.role,user:l,admins:l.admins||[]});if(c({type:"APP_SET_LOGIN_DATA",payload:h,name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),s!=null&&s._id){const u=((l==null?void 0:l.admins)||[]).find(E=>E._id===s._id);u&&n(u)}}}))})},[]);const f=()=>{var a;(a=s==null?void 0:s.customer)!=null&&a._id&&i(`/customerBill/${s.customer._id}`)},P=()=>b(null,null,function*(){try{return(yield F.requestPermissions()).publicStorage==="granted"?!0:(yield Permissions.request({name:"photos"})).state==="granted"}catch(a){return console.error("Permission error:",(a==null?void 0:a.message)||a),!1}}),C=d.useMemo(()=>[{icon:"fa-file-invoice",label:r("dashboard.customerDashboard.viewBillTitle"),onClick:f},{icon:"fa-indian-rupee-sign",label:r("dashboard.customerDashboard.paymentsTitle"),onClick:g}],[r,s]);return e.jsxs(e.Fragment,{children:[e.jsx($,{roleLabel:r("dashboard.header.roleCustomer"),identityName:((y=s==null?void 0:s.customer)==null?void 0:y.name)||r("dashboard.header.roleCustomer"),identityRole:r("dashboard.header.roleCustomer"),menuItems:C}),e.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(o==null?void 0:o.length)>1&&e.jsx("div",{className:"px-3 sm:px-4",children:e.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:o.map((a,l)=>{var u;const h=(s==null?void 0:s._id)===a._id;return e.jsx("div",{className:"min-w-[160px] sm:min-w-0",children:e.jsx("div",{onClick:()=>n(a),className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${h?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:e.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${h?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:a.name}),e.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((u=a.company)==null?void 0:u.companyName)||r("dashboard.customerDashboard.noCompany")}),e.jsx("p",{className:"text-xs text-gray-900 truncate",children:a.phone||r("dashboard.customerDashboard.noPhone")})]})})})},a._id)})})}),s&&e.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:e.jsxs("div",{className:`\r
        grid\r
        grid-cols-1\r
        sm:grid-cols-2\r
        md:grid-cols-3\r
        lg:grid-cols-4\r
        gap-4 sm:gap-6\r
        `,children:[e.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:f,className:`relative cursor-pointer rounded-lg p-[1px]\r
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
                        `,children:e.jsx("i",{className:"fa-solid fa-file-invoice text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:r("dashboard.customerDashboard.viewBillTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:r("dashboard.customerDashboard.viewBillDesc")})]})]})})}),e.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:g,className:`relative cursor-pointer rounded-lg p-[1px]\r
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
                        `,children:e.jsx("i",{className:"fa-solid fa-indian-rupee-sign text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:r("dashboard.customerDashboard.paymentsTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:r("dashboard.customerDashboard.paymentsDesc")})]})]})})})]})})]}),x&&((v=s==null?void 0:s.customer)!=null&&v._id)?e.jsx(R,{open:x,onClose:()=>p(!1),customerId:(w=s==null?void 0:s.customer)==null?void 0:w._id,userAdminId:s==null?void 0:s._id}):""]})}export{ee as CustomerDashboard,ee as default};
