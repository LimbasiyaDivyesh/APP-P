var A=Object.defineProperty,B=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var w=(i,a,l)=>a in i?A(i,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[a]=l,D=(i,a)=>{for(var l in a||(a={}))k.call(a,l)&&w(i,l,a[l]);if(v)for(var l of v(a))T.call(a,l)&&w(i,l,a[l]);return i},_=(i,a)=>B(i,S(a));var g=(i,a,l)=>new Promise((t,n)=>{var o=d=>{try{r(l.next(d))}catch(c){n(c)}},h=d=>{try{r(l.throw(d))}catch(c){n(c)}},r=d=>d.done?t(d.value):Promise.resolve(d.value).then(o,h);r((l=l.apply(i,a)).next())});import{j as e}from"./pdfVendor-BbcmCwHY.js";import{f as C,a as m}from"./reactVendor-BtoZ1Mrp.js";import{u as P,a as Y,e as L,A as b,h as M}from"./index-BxOzlEB9.js";import{D as I}from"./DashboardHeader-CrT7YTuQ.js";import"./reduxVendor--FhXtTDf.js";import"./uiVendor-DcbSD86H.js";import"./PlatformClassProvider-DDC1FPZc.js";function K(){var f;const i=C(),{t:a}=P(),{appSelector:l,dispatch:t}=Y(),{loginData:n={}}=l(s=>s.app),o=(n==null?void 0:n.admins)||[],{userData:h}=L(),{selectedAdmin:r}=l(s=>s.app),d=m.useCallback(s=>g(null,null,function*(){t(yield b({apiUrl:`auth/admin?userAdminId=${s}`,storeActionType:"SET_ADMIN_DATA",storeKey:"adminData",loader:!0}))}),[t]),c=m.useCallback(s=>{t({type:"APP_SET_SELECTED_ADMIN",payload:s,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[t]),N=m.useCallback(s=>g(null,null,function*(){t(yield b({apiUrl:`deliveryBoy/access/${s}`,storeActionType:"FETCH_DELIVERY_BOY_ACCESS",storeKey:"deliveryBoyAccess",loader:!0}))}),[t]);m.useEffect(()=>{r||(c(o[0]),d(o[0]._id))},[o,r]),m.useEffect(()=>{g(null,null,function*(){yield t(yield b({apiUrl:"auth/deliveryBoy/session",loader:!1,apiSuccessCallBack:s=>{const{user:x}=s,p=_(D({},n),{role:x.role,user:x,admins:x.admins||[]});if(t({type:"APP_SET_LOGIN_DATA",payload:p,name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),r!=null&&r._id){const y=((x==null?void 0:x.admins)||[]).find(E=>E._id===r._id);d(r._id),y&&c(y)}}}))})},[]);const u=()=>{(h==null?void 0:h.role)==="admin-delivery-boy"&&(t({type:"APP_SET_DELIVERY_BOY_ACCESS_FOR_ADMIN",payload:{data:{canEditList:!1,canDragDrop:!1,canViewMilkPrice:!1,viewAndEditDailySale:!1,viewDailySaleMilkPrice:!1,showPhone:!1,showName:!1,showBillColumn:!1,allowPastDateEdit:!1}},name:"deliveryBoyAccess",meta:{type:"SET_DELIVERY_BOY_ACCESS_FOR_ADMIN"}}),t({type:"APP_UPDATE_DAILY_SALE_DATE",payload:M().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}}),i(`/deliveryBoy/register/${r.deliveryBoy._id}`))};m.useEffect(()=>{r&&N(r.deliveryBoy._id)},[r]);const j=m.useMemo(()=>[{icon:"fa-bottle-water",label:a("dashboard.deliveryBoyDashboard.dailySaleTitle"),onClick:u}],[a,r]);return e.jsxs(e.Fragment,{children:[e.jsx(I,{roleLabel:a("dashboard.header.roleDeliveryBoy"),identityName:((f=r==null?void 0:r.deliveryBoy)==null?void 0:f.name)||a("dashboard.header.roleDeliveryBoy"),identityRole:a("dashboard.header.roleDeliveryBoy"),menuItems:j}),e.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(o==null?void 0:o.length)>1&&e.jsx("div",{className:"px-3 sm:px-4",children:e.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:o.map((s,x)=>{var y;const p=(r==null?void 0:r._id)===s._id;return e.jsx("div",{className:"min-w-[160px] sm:min-w-0",children:e.jsx("div",{onClick:()=>{c(s),d(s._id)},className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${p?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:e.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${p?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:e.jsxs("div",{className:"space-y-1 w-full",children:[e.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:s.name}),e.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((y=s.company)==null?void 0:y.companyName)||a("dashboard.deliveryBoyDashboard.noCompany")}),e.jsx("p",{className:"text-xs text-gray-900 truncate",children:s.phone||a("dashboard.deliveryBoyDashboard.noPhone")})]})})})},s._id)})})}),r&&e.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:e.jsxs("div",{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            lg:grid-cols-4\r
            gap-4 sm:gap-6\r
        `,children:[(o==null?void 0:o.length)>1&&e.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:()=>i("/deliveryBoy/myDelivery"),className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-teal-400 via-emerald-500 to-green-600\r
                    shadow-[0_10px_40px_rgba(16,185,129,0.35)] transition-all duration-500`,children:e.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[e.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-emerald-400 opacity-20 blur-3xl rounded-full"}),e.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-emerald-500 to-green-600\r
                            text-white shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-truck-fast text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:a("dashboard.deliveryBoyDashboard.myDeliveryTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:a("dashboard.deliveryBoyDashboard.myDeliveryDesc")})]})]})})}),e.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:()=>u(),className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600\r
                    shadow-[0_10px_40px_rgba(236,72,153,0.35)] transition-all duration-500`,children:e.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[e.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-pink-400 opacity-20 blur-3xl rounded-full"}),e.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-pink-500 to-pink-600\r
                            text-white shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-bottle-water text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:a("dashboard.deliveryBoyDashboard.dailySaleTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:a("dashboard.deliveryBoyDashboard.dailySaleDesc")})]})]})})}),e.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:e.jsx("div",{onClick:()=>i("/deliveryBoy/myPackaging"),className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-indigo-400 via-indigo-500 to-blue-600\r
                    shadow-[0_10px_40px_rgba(79,70,229,0.35)] transition-all duration-500`,children:e.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[e.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-indigo-400 opacity-20 blur-3xl rounded-full"}),e.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-indigo-500 to-blue-600\r
                            text-white shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-box text-xl sm:text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:a("dashboard.deliveryBoyDashboard.myPackagingTitle")}),e.jsx("p",{className:"text-xs text-gray-900",children:a("dashboard.deliveryBoyDashboard.myPackagingDesc")})]})]})})})]})})]})]})}export{K as DeliveryBoyDashboard,K as default};
