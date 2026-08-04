var S=Object.defineProperty,j=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var E=(l,e,i)=>e in l?S(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,u=(l,e)=>{for(var i in e||(e={}))T.call(e,i)&&E(l,i,e[i]);if(D)for(var i of D(e))k.call(e,i)&&E(l,i,e[i]);return l},b=(l,e)=>j(l,B(e));var f=(l,e,i)=>new Promise((t,o)=>{var n=d=>{try{r(i.next(d))}catch(c){o(c)}},p=d=>{try{r(i.throw(d))}catch(c){o(c)}},r=d=>d.done?t(d.value):Promise.resolve(d.value).then(n,p);r((i=i.apply(l,e)).next())});import{j as a}from"./pdfVendor-DdAo4azW.js";import{f as C,a as m}from"./reactVendor-BrBFq9LG.js";import{u as P,a as L,b as Y,A as g,h as I}from"./index-B81976vM.js";import{D as M}from"./DashboardHeader-DE5SulVc.js";import"./reduxVendor-C8DwjTzm.js";import"./uiVendor-EdgAqaye.js";import"./PlatformClassProvider-DxCGnQda.js";function K(){var _;const l=C(),{t:e}=P(),{appSelector:i,dispatch:t}=L(),{loginData:o={}}=i(s=>s.app),n=(o==null?void 0:o.admins)||[],{userData:p}=Y(),{selectedAdmin:r}=i(s=>s.app),d=m.useCallback(s=>f(null,null,function*(){t(yield g({apiUrl:`auth/admin?userAdminId=${s}`,storeActionType:"SET_ADMIN_DATA",storeKey:"adminData",loader:!0}))}),[t]),c=m.useCallback(s=>{t({type:"APP_SET_SELECTED_ADMIN",payload:s,name:"selectedAdmin",meta:{type:"SET_SELECTED_ADMIN"}})},[t]),A=m.useCallback(s=>f(null,null,function*(){t(yield g({apiUrl:`deliveryBoy/access/${s}`,storeActionType:"FETCH_DELIVERY_BOY_ACCESS",storeKey:"deliveryBoyAccess",loader:!0}))}),[t]);m.useEffect(()=>{r||(c(n[0]),d(n[0]._id))},[n,r]),m.useEffect(()=>{f(null,null,function*(){yield t(yield g({apiUrl:"auth/deliveryBoy/session",loader:!1,apiSuccessCallBack:s=>{var y;const h=((y=s==null?void 0:s.user)==null?void 0:y.admins)||[];if(h.length&&(t({type:"APP_SET_LOGIN_DATA",payload:b(u({},o),{user:b(u({},o==null?void 0:o.user),{admins:h})}),name:"loginData",meta:{type:"SET_LOGIN_DATA"}}),r!=null&&r._id)){const x=h.find(N=>N._id===r._id);x&&c(x)}}}))})},[]);const v=()=>{(p==null?void 0:p.role)==="admin-delivery-boy"&&(t({type:"APP_SET_DELIVERY_BOY_ACCESS_FOR_ADMIN",payload:{data:{canEditList:!1,canDragDrop:!1,canViewMilkPrice:!1,viewAndEditDailySale:!1,viewDailySaleMilkPrice:!1,showPhone:!1,showName:!1,showBillColumn:!1}},name:"deliveryBoyAccess",meta:{type:"SET_DELIVERY_BOY_ACCESS_FOR_ADMIN"}}),t({type:"APP_UPDATE_DAILY_SALE_DATE",payload:I().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}}),l(`/deliveryBoy/register/${r.deliveryBoy._id}`))};m.useEffect(()=>{r&&A(r.deliveryBoy._id)},[r]);const w=m.useMemo(()=>[{icon:"fa-bottle-water",label:e("dashboard.deliveryBoyDashboard.dailySaleTitle"),onClick:v}],[e,r]);return a.jsxs(a.Fragment,{children:[a.jsx(M,{roleLabel:e("dashboard.header.roleDeliveryBoy"),identityName:((_=r==null?void 0:r.deliveryBoy)==null?void 0:_.name)||e("dashboard.header.roleDeliveryBoy"),identityRole:e("dashboard.header.roleDeliveryBoy"),menuItems:w}),a.jsxs("div",{className:"relative px-0 py-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 h-safe overflow-y-auto",children:[(n==null?void 0:n.length)>1&&a.jsx("div",{className:"px-3 sm:px-4",children:a.jsx("div",{className:`\r
        flex sm:grid\r
        sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4\r
        gap-4 sm:gap-6\r
        overflow-x-auto sm:overflow-visible\r
        no-scrollbar py-2\r
    `,children:n.map((s,h)=>{var x;const y=(r==null?void 0:r._id)===s._id;return a.jsx("div",{className:"min-w-[160px] sm:min-w-0",children:a.jsx("div",{onClick:()=>c(s),className:`
                            relative cursor-pointer rounded-lg p-[1px] transition-all duration-500
                            ${y?"bg-gradient-to-br from-blue-500 via-indigo-900 to-purple-500":"bg-transparent"}
                        `,children:a.jsx("div",{className:`
                                rounded-xl h-full backdrop-blur-xl border transition-all duration-500
                                flex flex-col items-center text-center
                                p-4 sm:p-6 gap-3 sm:gap-4
                                ${y?"bg-white/95 border-white/40":"bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl"}
                            `,children:a.jsxs("div",{className:"space-y-1 w-full",children:[a.jsx("h3",{className:"text-xs sm:text-sm font-extrabold text-gray-900 truncate",children:s.name}),a.jsx("p",{className:"text-[10px] sm:text-xs text-gray-900 truncate",children:((x=s.company)==null?void 0:x.companyName)||e("dashboard.deliveryBoyDashboard.noCompany")}),a.jsx("p",{className:"text-xs text-gray-900 truncate",children:s.phone||e("dashboard.deliveryBoyDashboard.noPhone")})]})})})},s._id)})})}),r&&a.jsx("div",{className:"relative z-10 px-3 sm:px-4 mt-4",children:a.jsx("div",{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            lg:grid-cols-4\r
            gap-4 sm:gap-6\r
        `,children:a.jsx("div",{className:"min-w-[260px] sm:min-w-0",children:a.jsx("div",{onClick:()=>v(),className:`relative cursor-pointer rounded-lg p-[1px]\r
                    bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600\r
                    shadow-[0_10px_40px_rgba(236,72,153,0.35)] transition-all duration-500`,children:a.jsxs("div",{className:`\r
                        rounded-lg h-full\r
                        bg-white/80 backdrop-blur-2xl\r
                        border border-white/40\r
                        p-5 flex items-center gap-4\r
                    `,children:[a.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-pink-400 opacity-20 blur-3xl rounded-full"}),a.jsx("div",{className:`\r
                            w-14 h-14 sm:w-16 sm:h-16\r
                            flex items-center justify-center\r
                            rounded-2xl\r
                            bg-gradient-to-br from-pink-500 to-pink-600\r
                            text-white shadow-lg\r
                        `,children:a.jsx("i",{className:"fa-solid fa-bottle-water text-xl sm:text-2xl"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-sm sm:text-base font-semibold text-gray-900",children:e("dashboard.deliveryBoyDashboard.dailySaleTitle")}),a.jsx("p",{className:"text-xs text-gray-900",children:e("dashboard.deliveryBoyDashboard.dailySaleDesc")})]})]})})})})})]})]})}export{K as DeliveryBoyDashboard,K as default};
