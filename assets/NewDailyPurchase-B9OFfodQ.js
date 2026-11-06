var Ie=Object.defineProperty,Ce=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var pe=(c,t,s)=>t in c?Ie(c,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[t]=s,I=(c,t)=>{for(var s in t||(t={}))he.call(t,s)&&pe(c,s,t[s]);if(le)for(var s of le(t))xe.call(t,s)&&pe(c,s,t[s]);return c},R=(c,t)=>Ce(c,_e(t));var ge=(c,t)=>{var s={};for(var i in c)he.call(c,i)&&t.indexOf(i)<0&&(s[i]=c[i]);if(c!=null&&le)for(var i of le(c))t.indexOf(i)<0&&xe.call(c,i)&&(s[i]=c[i]);return s};var U=(c,t,s)=>new Promise((i,w)=>{var p=u=>{try{N(s.next(u))}catch(D){w(D)}},g=u=>{try{N(s.throw(u))}catch(D){w(D)}},N=u=>u.done?i(u.value):Promise.resolve(u.value).then(p,g);N((s=s.apply(c,t)).next())});import{j as e}from"./pdfVendor-B9Kjg85e.js";import{a as n,d as ne,f as ve,k as Me,u as Ee}from"./reactVendor-CSrEHl5U.js";import{a as oe,u as ce,r as f,A as F,g as Se,h as J,t as we,D as be}from"./index-Bwo22056.js";import Le from"./DefaultDashboardNavbar-MlNEWGGx.js";import{c as fe,D as Re,C as $e,P as Ue}from"./DailySaleAdminCustomerDailyRegister-CQDyzZ5R.js";import{c as ye,d as Ae,e as ie,f as Be,F as Ye,b as Fe}from"./index.esm-B5ZB_Z-_.js";import{u as He}from"./useApiLoading-DPZrQBk_.js";import{I as Oe}from"./uiVendor-CXWy3A-7.js";import{F as qe}from"./EllipsisVerticalIcon-CfB92YUd.js";import{F as Qe}from"./UserIcon-DhJ-ofUC.js";import{F as ze}from"./TrashIcon-Dkqawd9z.js";import{F as Ke}from"./CustomerMilkPreferencesForm--orevQMM.js";import{u as We}from"./useSubscription-CceQGOxZ.js";import{F as Ve,a as Ge}from"./milkTypeTotals-BXvn4Ki_.js";import"./reduxVendor-7CqTj3FH.js";import"./PlatformClassProvider-CccCrKvk.js";import"./editorVendor--afPEr7m.js";import"./pdfFonts-BRv3Cu7p.js";import"./downloadAllBillsPdf-CW_nVb6S.js";import"./index-BbonhqSZ.js";import"./index-DywX51Id.js";function Je(w,i){var p=w,{title:c,titleId:t}=p,s=ge(p,["title","titleId"]);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},s),c?n.createElement("title",{id:t},c):null,n.createElement("path",{d:"M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"}),n.createElement("path",{fillRule:"evenodd",d:"M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))}const Xe=n.forwardRef(Je),je=c=>c!==""&&c!==null&&c!==void 0&&!Number.isNaN(Number(c)),Ze=c=>{const t=[];return c.forEach(s=>{const i=je(s.morning),w=je(s.evening),p=i?Number(s.morning):0,g=w?Number(s.evening):0;i&&w?(t.push(R(I({},s),{originalHadBoth:!0,dailyMilkQuantityInLiters:g,timePreference:"evening"})),t.push(R(I({},s),{originalHadBoth:!0,dailyMilkQuantityInLiters:p,timePreference:"morning"}))):!i&&w?t.push(R(I({},s),{originalHadBoth:!1,dailyMilkQuantityInLiters:g,timePreference:"evening"})):i&&!w&&t.push(R(I({},s),{originalHadBoth:!1,dailyMilkQuantityInLiters:p,timePreference:"morning"}))}),t},er=c=>{const{_id:t,milkTypeEntries:s,handleSaveAndCloseProductPopup:i}=c,w=t||c.purchaseId,{dispatch:p}=oe(),{isLoading:g}=He(),{t:N}=ce(),u=ye().shape({milkTypeEntries:Ae().of(ye().shape({selected:Be(),morning:ie().min(0).nullable(),evening:ie().min(0).nullable(),pricePerUnit:ie().min(0).required(N("purchase.milkPreferencesForm.priceRequired"))})).test("at-least-one-selected",N("purchase.milkPreferencesForm.atLeastOneSelected"),y=>y==null?void 0:y.some(h=>h.selected))}),D=h=>U(null,[h],function*({milkTypeEntries:y}){p(yield F({method:"PUT",apiUrl:`party/${w}/milk-preferences`,data:{milkPreferences:Ze(y.filter(k=>k.selected)).map(k=>{const x=k.originalHadBoth;return I({milkTypeId:k.milkTypeId,dailyMilkQuantityInLiters:1,timePreference:k.timePreference,pricePerUnit:k.pricePerUnit},w&&!x&&{_id:k._id})})},loader:!0,apiSuccessCallBack:()=>{i()}}))});return e.jsx(Ye,{initialValues:{milkTypeEntries:s},validationSchema:u,enableReinitialize:!0,onSubmit:D,children:({values:y,handleChange:h,handleBlur:k,errors:x,touched:_})=>e.jsxs(Fe,{className:"flex flex-col h-[70vh] mb-0",children:[e.jsx("div",{className:"flex-1 pr-1 overflow-hidden",children:e.jsx("div",{className:"w-full h-full overflow-auto custom-scroll hide-scrollbar rounded-lg border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/60",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{className:"bg-gradient-to-r from-indigo-50 to-purple-50/60 shadow-sm",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-4 px-1 sticky left-0 bg-indigo-50/70 backdrop-blur-md"}),e.jsx("th",{className:"py-4 px-1 text-left text-gray-700 font-semibold",children:N("purchase.milkPreferencesForm.productColumn")}),e.jsx("th",{className:"py-4 px-1 text-center text-gray-700 font-semibold",children:e.jsx(Oe,{size:16,className:"mx-auto text-gray-900 font-extrabold"})})]})}),e.jsx("tbody",{children:((y==null?void 0:y.milkTypeEntries)||[]).map((q,C)=>{var B,E;return e.jsxs("tr",{className:`border-b border-gray-200\r
                    transition-all duration-200\r
                    hover:bg-gradient-to-r hover:from-indigo-50/40 hover:to-purple-50/40\r
                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]\r
                    hover:-translate-y-[1px]`,children:[e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(f.Checkbox,{color:"blue",ripple:!0,className:"p-0 hover:scale-105 transition-transform duration-150 outline-none",containerProps:{className:"px-1 m-0"},name:`milkTypeEntries[${C}].selected`,checked:((E=(B=y.milkTypeEntries)==null?void 0:B[C])==null?void 0:E.selected)||!1,onChange:h})})}),e.jsx("td",{className:"py-4 px-1 text-gray-900 font-medium tracking-wide break-after-all w-[30%]",children:q.name}),e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("input",{type:"number",placeholder:"",className:`w-[60px] px-0 py-2 text-center rounded-lg border border-gray-300\r
                                bg-gray-50 focus:bg-white\r
                                focus:ring-2 focus:ring-indigo-500\r
                                outline-none shadow-sm transition-all`,name:`milkTypeEntries[${C}].pricePerUnit`,min:1,step:"0.01",value:y.milkTypeEntries[C].pricePerUnit,onChange:h,onBlur:k,onWheel:M=>M.target.blur()})})})]},q._id||`milkType-${C}`)})})]})})}),x.milkTypeEntries&&_.milkTypeEntries&&e.jsx("p",{className:"text-red-500 text-sm mt-2 font-bold text-center",children:x.milkTypeEntries}),e.jsx("div",{className:"sticky bottom-0 backdrop-blur-md p-5 pt-7 pb-safe-5",children:e.jsx(f.Button,{type:"submit",className:"w-full bg-[#005ec4] hover:bg-[#004aa0] py-3 rounded-lg shadow-lg",disabled:g,children:N("purchase.milkPreferencesForm.updateButton")})})]})})},rr=ne.memo(er),ar=ne.memo(function({entry:t,idx:s,dragProvided:i,dataKey:w,value:p,ctx:g}){const{tableBg:N,borderColor:u,canDrag:D,isAdmin:y,bulkPurchase:h,deliveryBoyAccessList:k,t:x,navigate:_,onQuantityChange:q,onSave:C,onOpenProductMenu:B,onNavigateToBillCard:E,onDeleteParty:M}=g;let T=s%2===0?N:"bg-white";if(!["auto-fill","auto","alternate","manual","update","auto-register"].includes(t.entryMode))T="bg-[#ffaeaee6]";else{const j=Number(t.quantityInLiters)||0,Y=Number(t.customerQuantityInLiters)||0;j===0?T="bg-red-200 border-l-4 border-red-500":j<Y?T="bg-yellow-400 border-l-4 border-yellow-800":j>Y?T="bg-green-200 border-l-4 border-green-500":t.entryMode==="manual"?T="bg-blue-200 border-l-4 border-blue-600":t.entryMode==="update"&&(T="bg-purple-100 border-l-4 border-purple-600")}return e.jsxs("tr",R(I({ref:i.innerRef},D?i.draggableProps:{}),{className:`border ${T} relative`,children:[D&&e.jsx("td",R(I({className:`px-1 py-1 text-center font-semibold border cursor-grab active:cursor-grabbing select-none ${u}`},D?i.dragHandleProps:{}),{children:"⋮⋮"})),e.jsx("td",{className:`px-1 py-1 text-center notranslate ${u}`,children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{children:s+1}),y&&e.jsx("div",{children:e.jsxs(f.Menu,{placement:"bottom-end",allowHover:!1,children:[e.jsx(f.MenuHandler,{children:e.jsx(f.IconButton,{variant:"text",className:`\r
                                        w-9 h-9 rounded-xl border border-gray-300\r
                                        bg-gray-50 hover:bg-gray-100\r
                                        active:scale-95\r
                                        transition-all duration-200\r
                                        shadow-sm hover:shadow-md\r
                                    `,children:e.jsx(qe,{className:"w-5 h-5 text-gray-700"})})}),e.jsxs(f.MenuList,{className:`\r
                                    min-w-[200px]\r
                                    rounded-2xl\r
                                    border border-white/20\r
                                    bg-white/90\r
                                    backdrop-blur-xl\r
                                    shadow-[0_10px_40px_rgba(0,0,0,0.12)]\r
                                    p-2\r
                                    overflow-hidden\r
                                `,children:[e.jsxs(f.MenuItem,{onClick:()=>B(t),className:`\r
                                        flex items-center gap-3\r
                                        rounded-xl px-3 py-3\r
                                        transition-all duration-200\r
                                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50\r
                                        active:scale-[0.98]\r
                                        group\r
                                    `,children:[e.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center bg-blue-100 group-hover:bg-blue-200 transition-all duration-200",children:e.jsx(Xe,{className:"w-5 h-5 text-blue-600"})}),e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:x("purchase.dailyRegisterTable.updateProduct")})]}),e.jsxs(f.MenuItem,{onClick:()=>{_(`/party/update/${t.purchaseId}`,{state:{navigate:window.location.pathname}})},className:`\r
                                        flex items-center gap-3\r
                                        rounded-xl px-3 py-3\r
                                        transition-all duration-200\r
                                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50\r
                                        active:scale-[0.98]\r
                                        group\r
                                        mt-1\r
                                    `,children:[e.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center bg-blue-100 group-hover:bg-blue-200 transition-all duration-200",children:e.jsx(Qe,{className:"w-5 h-5 text-blue-600"})}),e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:x("purchase.dailyRegisterTable.editParty")})]}),e.jsxs(f.MenuItem,{onClick:()=>M(t),className:`\r
                                        flex items-center gap-3\r
                                        rounded-xl px-3 py-3\r
                                        transition-all duration-200\r
                                        hover:bg-red-50\r
                                        active:scale-[0.98]\r
                                        group\r
                                        mt-1\r
                                    `,children:[e.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center bg-red-100 group-hover:bg-red-200 transition-all duration-200",children:e.jsx(ze,{className:"w-5 h-5 text-red-600"})}),e.jsx("span",{className:"text-sm font-semibold text-red-600",children:x("purchase.dailyRegisterTable.deleteParty")})]})]})]})})]})}),e.jsxs("td",{className:`px-1 py-1 notranslate cursor-pointer break-all ${u}`,children:[e.jsxs("span",{children:[e.jsx("b",{children:t.name})," - ",e.jsx("span",{className:"text-red-900 font-bold",children:t.milkType}),k.canViewMilkPrice?` ( ${t.pricePerUnit} )`:""]}),e.jsx("br",{}),(k.showPhone||(t==null?void 0:t.isShowPhoneToDeliveryBoy))&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"break-all",children:t.phone}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(t.phone),we.success(x("purchase.dailyRegisterTable.phoneCopiedToast"))},className:"ml-2 text-blue-600 hover:text-blue-800",title:x("purchase.dailyRegisterTable.copyPhoneTitle"),children:e.jsx("i",{className:"fa-solid fa-copy"})}),e.jsx("br",{})]})]}),y&&e.jsx("td",{className:`px-1 py-1 cursor-pointer ${u}`,onClick:()=>E(t.purchaseId),children:e.jsx("div",{className:"flex justify-center",children:e.jsx(Ke,{className:"w-5 text-blue-600"})})}),e.jsxs("td",{className:`px-1 py-1 text-center ${u} relative`,children:[e.jsx("input",{"data-daily-sale-key":w,type:"number",min:0,inputMode:"decimal",enterKeyHint:"next",disabled:!k.canEditList||(t==null?void 0:t.vacationMode),value:p,onChange:j=>q(t,j.target.value),onBlur:j=>{h||C(t,j.target.value)},onKeyDown:j=>{if(j.key==="Enter"){j.preventDefault();const Y=j.target,H=document.querySelectorAll("input[data-daily-sale-key]"),$=Array.from(H).findIndex(V=>V===Y),P=H[$+1];Y.blur(),setTimeout(()=>{P&&P.focus()},0)}},onWheel:j=>j.target.blur(),className:"w-10 sm:w-20 lg:w-20 font-extrabold text-center border rounded-md py-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"}),(t==null?void 0:t.vacationMode)&&e.jsx("div",{className:"absolute z-10 top-0 right-0 overflow-hidden w-[96px] h-[48px] pointer-events-none",children:e.jsx("div",{className:`\r
    absolute\r
    top-[25px]\r
    left-[20px]\r
    rotate-[47deg]\r
    w-[140%]\r
    h-[10px]\r
    text-center\r
    bg-gradient-to-r from-pink-600 via-white to-pink-600\r
    bg-[length:200%_100%]\r
    animate-[shimmer_3s_linear_infinite]\r
    text-white\r
    text-[10px]\r
    font-bold\r
    tracking-wider\r
    py-0.5\r
border border-white/20 dark:border-white/10\r
`})})]})]}))}),tr=c=>{var ue;const{appSelector:t,dispatch:s}=oe(),i=ve(),{deliveryBoyId:w}=Me(),{userData:p}=Se(),{t:g}=ce(),{dailyRegisterData:N,deliveryBoyAccess:u,adminData:D,dailySaleDate:y}=t(r=>r.app),h=(ue=D==null?void 0:D.data)==null?void 0:ue.moduleSettings,{entries:k=[],timePreference:x,handleUpdateCustomerMilkEntry:_,showDragColumn:q=!0,fetchRegister:C,estimate:B}=c,E=(u==null?void 0:u.data)||{},[M,T]=n.useState([]),[Q,j]=n.useState({}),[Y,H]=n.useState(!1),[$,P]=n.useState(null),[V,re]=n.useState(!1),A=n.useRef({}),X=n.useMemo(()=>x==="morning"?"bg-teal-50":"bg-blue-50",[x]),l=n.useMemo(()=>x==="morning"?"bg-teal-600":"bg-blue-600",[x]),m=n.useMemo(()=>x==="morning"?"border border-teal-600":"border border-blue-600",[x]);n.useEffect(()=>{T(k||[]),j({}),A.current={}},[k,x]);const o=n.useCallback(r=>`${r.purchaseId}_${r.milkTypeId}_${x}_${r.milkTimePreferenceId}`,[x]),S=n.useCallback((r,a)=>{const d=a,v=o(r);if(!/^\d*\.?\d*$/.test(d))return;let b=d;if(b.length>1&&b.startsWith("0")&&!b.startsWith("0.")&&(b=b.replace(/^0+/,"")),j(W=>R(I({},W),{[v]:b})),A.current[v]=b,a==="")return;const L=Number(b);Number.isNaN(L)||L<0},[o,x]),Z=n.useCallback(r=>{var d;const a=o(r);return Q[a]!==void 0?Q[a]:A.current[a]!==void 0?A.current[a]:B?["alternate"].includes(r==null?void 0:r.entryMode)||r!=null&&r.vacationMode?"":r==null?void 0:r.quantityInLiters:h!=null&&h.bulkPurchase?["alternate","auto-fill"].includes(r==null?void 0:r.entryMode)||r!=null&&r.vacationMode?"":r==null?void 0:r.quantityInLiters:["auto-fill","alternate"].includes(r==null?void 0:r.entryMode)?"":(d=r==null?void 0:r.quantityInLiters)!=null?d:""},[o,Q,B,h==null?void 0:h.bulkPurchase]),ae=n.useMemo(()=>{let r=0;return M.forEach(a=>{var b,L,W;const d=o(a),v=(W=(L=(b=Q[d])!=null?b:A.current[d])!=null?L:a.quantityInLiters)!=null?W:0;(a.entryMode!=="auto-fill"||B&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1)||h!=null&&h.bulkPurchase&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1))&&(r+=Number(v)||0)}),r},[M,Q,o,B,h==null?void 0:h.bulkPurchase]),te=n.useCallback(r=>{s({type:"APP_SET_CURRENT_MONTH",payload:J(),name:"currentMonth",meta:{type:"SET_CURRENT_MONTH"}});const a=[...new Set(M.map(d=>d.purchaseId))];s({type:"APP_SET_CUSTOMER_LIST_IN_BILL_CARD",payload:{customers:a.map(d=>({_id:d}))},name:"customerListInBillCard",meta:{type:"SET_CUSTOMER_LIST_IN_BILL_CARD"}}),i(`/party/bill/${r}`,{state:{navigate:window.location.pathname,purchaseId:r}})},[i,M,s]),z=(p==null?void 0:p.role)==="admin",se=n.useCallback((r,a)=>{if(a===""&&(r!=null&&r._id))_({_id:r==null?void 0:r._id,purchaseId:r.purchaseId,milkTypeId:r.milkTypeId,quantityInLiters:0,milkTimePreference:x,pricePerUnit:r.pricePerUnit,mode:"delete"}),j({}),A.current={};else{if(Number.isNaN(+a)||+a<0||a===""||a===null||a===void 0)return;_({_id:r==null?void 0:r._id,purchaseId:r.purchaseId,milkTypeId:r.milkTypeId,quantityInLiters:a,milkTimePreference:x,pricePerUnit:r.pricePerUnit}),j({}),A.current={}}},[x,_]),Ne=n.useCallback(()=>U(null,null,function*(){s(yield F({method:"POST",apiUrl:"party/register",data:{deliveryDate:y},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER",apiSuccessCallBack:()=>{H(!1)}}))}),[y]),ee=(r,a)=>r.map(d=>{const v=a.filter(O=>{var me;return O.milkTypeId===d._id||((me=O.milkType)==null?void 0:me._id)===d._id}),b=v.find(O=>O.timePreference==="morning"),L=v.find(O=>O.timePreference==="evening"),W=(b==null?void 0:b._id)||(L==null?void 0:L._id)||null;return R(I({},d),{_id:W,milkTypeId:d._id,selected:v.length>0,morning:b?b.dailyMilkQuantityInLiters:1,evening:L?L.dailyMilkQuantityInLiters:1,pricePerUnit:v.length>0&&v[0].pricePerUnit||d.pricePerUnit})}),G=n.useCallback((r,a)=>U(null,null,function*(){s(yield F({apiUrl:"milkType",loader:!0,apiSuccessCallBack:v=>U(null,[v],function*({milkTypes:d}){if(a){r.milkTypeEntries=yield ee(d,r.milkPreferences);const b=R(I({},r),{entries:void 0});H(b)}})}))}),[s]),de=n.useCallback(r=>U(null,null,function*(){s(yield F({apiUrl:`party/${r.purchaseId}`,loader:!0,apiSuccessCallBack:a=>U(null,null,function*(){yield G(a.customer,r.purchaseId)})}))}),[s]);n.useCallback(r=>U(null,null,function*(){s(yield F({method:"POST",apiUrl:"payment/customer/outstanding",loader:!0,data:{purchaseId:r.purchaseId},apiSuccessCallBack:a=>{const d=a==null?void 0:a.customer;d&&(s({type:"APP_SET_SELECTED_CUSTOMER_PAYMENT",payload:d,name:"selectedCustomerPayment",meta:{type:"SET_SELECTED_CUSTOMER_PAYMENT"}}),i(`/add/payment/bill/${d==null?void 0:d.purchaseId._id}/sales`,{state:{navigate:window.location.pathname}}))}}))}),[s]);const ke=n.useCallback(()=>U(null,null,function*(){if($!=null&&$.purchaseId){re(!0);try{yield s(yield F({method:"POST",apiUrl:`party/moveToRecycleBin/${$.purchaseId}`,loader:!0,apiSuccessCallBack:()=>{P(null),C()}}))}finally{re(!1)}}}),[s,$,C]),Te=n.useCallback(r=>U(null,null,function*(){if(!r.destination)return;const a=[...M],[d]=a.splice(r.source.index,1);a.splice(r.destination.index,0,d),T(a),s(yield F({method:"POST",apiUrl:"dailyRegisterOrder/purchase",data:{customers:a.map((v,b)=>({purchaseId:v.purchaseId,milkTypeId:v.milkTypeId,milkTimePreferenceId:v.milkTimePreferenceId,registerIndex:b+1}))},loader:!0,apiSuccessCallBack:()=>C()}))}),[M,s,w,C]),Pe=n.useCallback(()=>{const r=[];if(M.forEach(a=>{var O;const d=Z(a),v=new Date(y),b=new Date;if(v.setHours(b.getHours(),b.getMinutes(),b.getSeconds(),b.getMilliseconds()),(d===""||d===null)&&(a!=null&&a._id)){r.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:0,milkTimePreference:x.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:v,deliveryDateIST:fe(new Date(v)),mode:"delete"});return}if(d===""||d===null||d===void 0||Number.isNaN(+d)||+d<0)return;const L=+d,W=Number((O=a==null?void 0:a.quantityInLiters)!=null?O:0);a!=null&&a._id&&L===W||r.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:L,milkTimePreference:x.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:v,deliveryDateIST:fe(new Date(v)),mode:a!=null&&a._id?"update":"create"})}),r.length===0){we.error(g("purchase.dailyRegisterTable.noValidEntriesToast"));return}_({milkEntries:r,isBulkPurchase:!0}),j({}),A.current={}},[M,Z,x,_,y,g]),K=q&&(E==null?void 0:E.canDragDrop),De=n.useMemo(()=>({tableBg:X,borderColor:m,canDrag:K,isAdmin:z,bulkPurchase:h==null?void 0:h.bulkPurchase,deliveryBoyAccessList:E,t:g,navigate:i,onQuantityChange:S,onSave:se,onOpenProductMenu:de,onNavigateToBillCard:te,onDeleteParty:P}),[X,m,K,z,h==null?void 0:h.bulkPurchase,E,g,i,S,se,de,te]);return x?e.jsxs("div",{className:"rounded-xl shadow-lg border border-gray-300 mb-6",children:[e.jsx("div",{className:`${l} text-white px-6 py-1 font-bold text-lg rounded-t-xl flex justify-between items-center gap-1`}),e.jsxs("table",{className:"min-w-full border-collapse text-sm",children:[e.jsx("thead",{className:`${l} text-white`,children:e.jsxs("tr",{className:m,children:[K&&e.jsx("th",{className:`px-1 py-1 border border-l-4 notranslate w-10 ${m}`,children:"⇅"}),e.jsx("th",{className:`px-2 py-3 w-5 border-l-4 ${m}`,children:"#"}),e.jsx("th",{className:`px-2 py-3 ${m}`,children:g("purchase.dailyRegisterTable.customerColumn")}),z&&e.jsx("th",{className:`px-2 py-3 ${m} w-5`,children:"#"}),e.jsx("th",{className:`px-1 py-1 ${m} w-10 sm:w-20 lg:w-20`,children:g("purchase.dailyRegisterTable.literColumn")})]})}),e.jsx(Re,{onDragEnd:K?Te:void 0,children:e.jsx($e,{droppableId:"table-body",isDropDisabled:!K,children:r=>e.jsxs("tbody",R(I({ref:r.innerRef},r.droppableProps),{children:[M.map((a,d)=>e.jsx(Ue,{draggableId:`${a.purchaseId}_${a.milkTypeId}`,index:d,isDragDisabled:!K,children:v=>e.jsx(ar,{entry:a,idx:d,dragProvided:v,dataKey:o(a),value:Z(a),ctx:De})},`${a.purchaseId}-${d}`)),r.placeholder]}))})}),e.jsx("tfoot",{className:"bg-gray-100 font-semibold",children:e.jsxs("tr",{children:[e.jsx("td",{colSpan:K?z?4:3:K?2:z?3:2,className:`px-2 py-2 text-center ${m}`,children:g("purchase.dailyRegisterTable.totalMilk")}),e.jsxs("td",{className:`px-2 py-2 text-center border notranslate ${m}`,children:[ae.toFixed(2)," L"]})]})})]}),(h==null?void 0:h.bulkPurchase)&&E.canEditList&&e.jsx("div",{className:"flex justify-center gap-2 my-2",children:e.jsx(f.Button,{variant:"gradient",color:"pink",onClick:()=>Pe(),children:g("purchase.dailyRegisterTable.addBulkPurchase")})}),e.jsx(be,{open:Y,handler:()=>H(!1),className:"bg-transparent shadow-none border-none outline-none rounded-2xl w-[96%] sm:max-w-[620px] md:max-w-[600px] lg:max-w-[500px]",size:"xl",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[520px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs(f.DialogHeader,{className:"flex flex-col items-start gap-1 pb-4 border-b border-gray-200",children:[e.jsx(f.Typography,{className:"text-xl font-bold text-gray-900",children:g("purchase.dailyRegisterTable.selectProductTitle")}),e.jsx(f.Typography,{className:"text-sm text-gray-900 font-normal",children:g("purchase.dailyRegisterTable.selectProductSubtitle")})]}),e.jsx(f.DialogBody,{className:"pt-5 px-0 overflow-y-auto",children:e.jsx(rr,R(I(I({},c),Y),{handleSaveAndCloseProductPopup:Ne}))})]})]})}),e.jsxs(be,{open:!!$,handler:()=>P(null),size:"xs",className:"rounded-2xl",children:[e.jsx(f.DialogHeader,{className:"text-[15px] font-bold text-gray-800 pb-2",children:g("purchase.dailyRegisterTable.deletePartyDialog.title")}),e.jsxs(f.DialogBody,{className:"pt-0",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:g("purchase.dailyRegisterTable.deletePartyDialog.message",{name:$==null?void 0:$.name})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(f.Button,{variant:"outlined",size:"sm",onClick:()=>P(null),className:"flex-1 rounded-xl border-gray-300 text-gray-600 normal-case",children:g("common.buttons.cancel")}),e.jsx(f.Button,{size:"sm",disabled:V,onClick:ke,className:"flex-1 rounded-xl bg-red-600 normal-case",children:g(V?"purchase.dailyRegisterTable.deletePartyDialog.deleting":"purchase.dailyRegisterTable.deletePartyDialog.confirm")})]})]})]})]}):null},sr=ne.memo(tr),lr=c=>{const t=c instanceof Date?c:new Date(c);if(isNaN(t))return null;const s=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),i=5.5*60*60*1e3,w=new Date(s+i),p=w.getUTCFullYear(),g=String(w.getUTCMonth()+1).padStart(2,"0"),N=String(w.getUTCDate()).padStart(2,"0");let u=w.getUTCHours();const D=String(w.getUTCMinutes()).padStart(2,"0"),y=u>=12?"PM":"AM";return u=u%12||12,`${p}-${g}-${N} ${u}:${D} ${y}`},Ir=()=>{var X;const c=n.useRef(null),t=ve(),s=Ee(),{dispatch:i,appSelector:w}=oe(),{t:p}=ce(),{blockIfAtLimit:g}=We(),{dailyPurchaseRegisterData:N,dailySaleDate:u,adminData:D,dailySaleSettings:y}=w(l=>l.app),[h,k]=n.useState(void 0),x=l=>{const m=(l==null?void 0:l.toLowerCase())||"both";return m==="morning"?"Morning":m==="evening"?"Evening":new Date().getHours()<12?"Morning":"Evening"};n.useEffect(()=>{var l,m;(m=(l=D==null?void 0:D.data)==null?void 0:l.generalSettings)!=null&&m.autoSelectShift?k(x("both")):k((y==null?void 0:y.selectedShift)||x("both"))},[]);const[_,q]=n.useState(!0),[C,B]=n.useState(""),[E,M]=n.useState(""),[T,Q]=n.useState({showDragColumn:!1,estimate:!1}),j=({deliveryDate:l})=>m=>U(null,null,function*(){m(yield F({method:"POST",apiUrl:"party/register",data:{deliveryDate:l},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER"}))}),Y=n.useCallback(()=>{u&&i(j({deliveryDate:u}))},[i,u]),H=n.useCallback(l=>U(null,null,function*(){const m=l==="prev"?J(u).subtract(1,"day").format("YYYY-MM-DD"):J(u).add(1,"day").format("YYYY-MM-DD");i({type:"APP_UPDATE_DAILY_SALE_DATE",payload:m,name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}})}),[i,u]),$=n.useCallback(l=>{const m=l.target.value;if(!m)return;const o=J(m,"YYYY-MM-DD");i({type:"APP_SET_DAILY_SALE_DATE",payload:o.format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}})},[i]),P=h==="Morning"?N==null?void 0:N.morning:N==null?void 0:N.evening;n.useEffect(()=>{const l=setTimeout(()=>{M(C)},300);return()=>clearTimeout(l)},[C]);const V=n.useMemo(()=>{if(!P)return[];const l=E.toLowerCase().trim();return l?P.filter(m=>{var S;return(((S=m.name)==null?void 0:S.toLowerCase())||"").includes(l)}):P},[P,E]),re=n.useCallback(Ne=>U(null,[Ne],function*({_id:l,purchaseId:m,milkTypeId:o,quantityInLiters:S,milkTimePreference:Z,mode:ae="",pricePerUnit:te,isBulkPurchase:z=!1,milkEntries:se}){if(z){i(yield F({method:"POST",apiUrl:"purchaseMilkEntry",data:{milkEntries:se,isBulkSell:z},loader:!0,apiSuccessCallBack:()=>{i(j({deliveryDate:u}))}}));return}const ee=new Date(u),G=new Date;ee.setHours(G.getHours(),G.getMinutes(),G.getSeconds(),G.getMilliseconds()),i(yield F({method:"POST",apiUrl:"purchaseMilkEntry",data:{milkEntries:[R(I(I({},l&&{_id:l}),ae&&{mode:ae}),{purchaseId:m,milkTypeId:o,quantityInLiters:S,pricePerUnit:te,deliveryDate:ee,deliveryDateIST:lr(new Date(ee)),milkTimePreference:Z.toLowerCase()})]},loader:!0,apiSuccessCallBack:()=>{i(j({deliveryDate:u}))}}))}),[i,u]),A=n.useMemo(()=>{if(!(P!=null&&P.length))return[];let l;T!=null&&T.estimate?l=P:l=P.filter(o=>["auto","manual","update"].includes(o==null?void 0:o.entryMode));const m={};return l.forEach(o=>{const S=_?`${(o==null?void 0:o.milkType)||"Milk"}`:`${(o==null?void 0:o.milkType)||"Milk"}_${(o==null?void 0:o.pricePerUnit)||0}`;m[S]||(m[S]={animalName:(o==null?void 0:o.milkType)||"Milk",totalLiter:0,pricePerUnit:(o==null?void 0:o.pricePerUnit)||0}),m[S].totalLiter+=Number((o==null?void 0:o.quantityInLiters)||0)}),Object.values(m)},[P,_,T==null?void 0:T.estimate]);if(n.useEffect(()=>(u||i({type:"APP_SET_DAILY_SALE_DATE",payload:J().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}}),()=>{i({type:"APP_UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY",payload:void 0,name:"dailyPurchaseRegisterData",meta:{type:"UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY"}})}),[]),n.useEffect(()=>{u&&i(j({deliveryDate:u}))},[u]),!!h)return e.jsxs(e.Fragment,{children:[e.jsx(Le,{back:!0,headerTitle:e.jsx("div",{className:"text-gray-900 font-bold text-sm flex items-center",children:p("purchase.dailyPurchase.headerTitle")}),backTo:((X=s==null?void 0:s.state)==null?void 0:X.navigate)||"/dashboard",menu:e.jsx(e.Fragment,{children:e.jsxs(f.Menu,{placement:"bottom-end",children:[e.jsx(f.MenuHandler,{children:e.jsx(f.IconButton,{className:"w-[40px] h-[40px] rounded-full border border-[#ffffff]/30 bg-[#ffffff]/10 backdrop-blur-md text-[#ffffff] shadow-md transition-all hover:bg-[#ffffff]/20 p-0 flex justify-center items-center gap-2",children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical text-lg"})})}),e.jsxs(f.MenuList,{className:`\r
                    min-w-[270px]\r
                    p-0\r
                    overflow-hidden\r
                    rounded-3xl\r
                    border border-white/30\r
                    bg-white/80\r
                    backdrop-blur-2xl\r
                    shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]\r
                `,children:[e.jsxs("div",{className:`\r
                    relative overflow-hidden\r
                    px-5 py-4\r
                    bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500\r
                `,children:[e.jsx("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-xl"}),e.jsxs("div",{className:"relative flex items-center gap-3",children:[e.jsx("div",{className:`\r
                            w-11 h-11 rounded-2xl\r
                            bg-white/15\r
                            border border-white/20\r
                            flex items-center justify-center\r
                            shadow-lg\r
                        `,children:e.jsx("i",{className:"fa-solid fa-sliders text-white text-lg"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-white font-bold text-[15px] tracking-wide",children:p("purchase.dailyPurchase.menu.quickActions")}),e.jsx("div",{className:"text-white/80 text-[11px]",children:p("purchase.dailyPurchase.menu.quickActionsDesc")})]})]})]}),e.jsxs("div",{className:"p-3 flex flex-col gap-2 outline-none",children:[e.jsxs(f.MenuItem,{onClick:()=>{g("parties")||t("/party/add")},className:`\r
                            rounded-2xl\r
                            px-4 py-3\r
                            transition-all duration-300\r
                            hover:bg-indigo-50\r
                            active:scale-[0.98]\r
                            flex items-center justify-between\r
                            border border-transparent\r
                            hover:border-indigo-100\r
                        `,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`\r
                                w-10 h-10 rounded-xl\r
                                bg-gradient-to-br from-indigo-500 to-blue-500\r
                                flex items-center justify-center\r
                                shadow-md\r
                            `,children:e.jsx("i",{className:"fa-solid fa-user-plus text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900",children:p("purchase.dailyPurchase.menu.addNewParty")}),e.jsx("div",{className:"text-[11px] text-gray-900",children:p("purchase.dailyPurchase.menu.addNewPartyDesc")})]})]}),e.jsx("i",{className:"fa-solid fa-angle-right text-gray-900 text-xs"})]}),e.jsx("div",{className:`\r
                        px-2 pt-2 pb-1\r
                        text-[11px]\r
                        uppercase tracking-[0.18em]\r
                        font-bold text-gray-900\r
                    `,children:p("purchase.dailyPurchase.menu.preferences")}),e.jsxs(f.MenuItem,{onClick:()=>Q(l=>R(I({},l),{showDragColumn:!l.showDragColumn})),className:`\r
                            rounded-2xl\r
                            px-4 py-3\r
                            transition-all duration-300\r
                            hover:bg-slate-50\r
                            active:scale-[0.98]\r
                            flex items-center justify-between\r
                            border border-transparent\r
                            hover:border-slate-200\r
                        `,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`\r
                                w-10 h-10 rounded-xl\r
                                bg-gradient-to-br from-pink-700 to-pink-900\r
                                flex items-center justify-center\r
                                shadow-md\r
                            `,children:e.jsx("i",{className:"fa-solid fa-grip-vertical text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900",children:p("purchase.dailyPurchase.menu.enableDrag")}),e.jsx("div",{className:"text-[11px] text-gray-900",children:p("purchase.dailyPurchase.menu.enableDragDesc")})]})]}),e.jsx(f.Checkbox,{checked:T.showDragColumn,onChange:()=>{},ripple:!1,className:"rounded-md",color:"indigo"})]})]})]})]})})}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-1 py-4 h-safe overflow-y-auto",children:[e.jsxs("div",{className:"flex mb-4 justify-between items-center px-4 py-3 bg-white/70 backdrop-blur-lg rounded-xl shadow-md border border-gray-200",children:[e.jsx("button",{onClick:()=>H("prev"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-left text-blue-700 text-[15px]"})}),e.jsxs("div",{className:"relative cursor-pointer",children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-800 tracking-wide",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:J(u).format("DD MMMM, YYYY")}),e.jsx("i",{className:"fa-solid fa-calendar-days"})]})}),e.jsx("input",{ref:c,type:"date",className:"absolute inset-0 opacity-0 cursor-pointer",value:u||"",onChange:$})]}),e.jsx("button",{onClick:()=>H("next"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-right text-blue-700 text-[15px]"})})]}),e.jsx("div",{className:"w-full pb-4",children:e.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{label:"Morning",displayLabel:p("purchase.dailyPurchase.morning"),icon:Ve,gradient:"from-yellow-900/40 to-yellow-300/10",border:"border-yellow-800",glow:"shadow-yellow-800",text:"text-yellow-900"},{label:"Evening",displayLabel:p("purchase.dailyPurchase.evening"),icon:Ge,gradient:"from-indigo-500/20 to-indigo-300/10",border:"border-indigo-400",glow:"shadow-indigo-400",text:"text-indigo-700"}].map(l=>{const m=h===l.label,o=l.icon;return e.jsxs("div",{onClick:()=>k(l.label),className:`
                    relative cursor-pointer rounded-lg p-[1px]
                    transition-all duration-300 group

                `,children:[e.jsx("div",{className:`
                        absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300
                        ${l.glow}
                    `}),e.jsxs("div",{className:`flex gap-2 items-center justify-center
                        relative rounded-lg px-2 py-2 backdrop-blur-xl
                        border transition-all duration-300

                        ${m?`${l.border} bg-gradient-to-br ${l.gradient} shadow-lg ${l.glow}`:"border-gray-200 bg-white/70"}
                    `,children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{className:`
                                p-2 rounded-lg transition-all duration-300
                                ${m?"bg-white/70 shadow-sm":"bg-gray-100"}
                            `,children:e.jsx(o,{className:`
                                    w-[15px] h-[15px]
                                    ${m?l.text:"text-gray-400"}
                                `})})}),e.jsx("div",{className:`
                            text-sm font-semibold tracking-wide
                            ${m?l.text:"text-gray-600"}
                        `,children:l.displayLabel})]})]},l.label)})})}),e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("input",{type:"text",placeholder:p("purchase.dailyPurchase.searchPlaceholder"),value:C,onChange:l=>B(l.target.value),className:`\r
                                w-full\r
                                pl-10\r
                                pr-4\r
                                py-2.5\r
                                rounded-lg\r
                                border border-gray-300\r
                                bg-white\r
                                shadow-sm\r
                                focus:outline-none\r
                                focus:ring-2\r
                                focus:ring-blue-400\r
                                text-sm\r
                            `}),e.jsx("i",{className:"fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"})]})}),P&&P.length>0?e.jsxs(e.Fragment,{children:[e.jsx(sr,{timePreference:h==null?void 0:h.toLowerCase(),entries:[...V].sort((l,m)=>{var o,S;return((o=l.registerIndex)!=null?o:-1/0)-((S=m.registerIndex)!=null?S:-1/0)}),handleUpdateCustomerMilkEntry:re,fetchRegister:Y,estimate:T.estimate,showDragColumn:T.showDragColumn},"daily-register"),A.length>0&&e.jsx("div",{className:"flex justify-center mb-6",children:e.jsxs("label",{className:`\r
            group relative flex items-center gap-4 px-6 py-4\r
            bg-white/10 border border-white/20 backdrop-blur-xl\r
            shadow-xl shadow-purple-300/20\r
            rounded-3xl cursor-pointer select-none\r
            transition-all duration-500\r
\r
            hover:bg-white/20 hover:border-purple-300/40\r
            hover:shadow-[0_15px_45px_rgba(0,0,0,0.12)]\r
            hover:-translate-y-1\r
        `,children:[e.jsx("div",{className:`\r
            absolute inset-0 -z-10 rounded-3xl\r
            bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20\r
            blur-2xl opacity-40\r
            transition-all duration-700\r
            group-hover:opacity-60 group-hover:blur-[42px]\r
        `}),e.jsx(f.Switch,{id:"autoMilkEntry",name:"autoMilkEntry",checked:_,onChange:()=>q(!_),className:`\r
                peer scale-110\r
                checked:bg-gradient-to-r checked:from-blue-500 checked:to-purple-600\r
                checked:ring-4 checked:ring-purple-300/40\r
                transition-all duration-500\r
            `,label:""}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{className:"text-lg font-semibold text-gray-800 tracking-wide",children:p("purchase.dailyPurchase.combineByProduct")}),e.jsx("span",{className:"text-[11px] text-black italic",children:p("purchase.dailyPurchase.combineByProductDesc")})]})]})}),A.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`\r
                    w-9 h-9 rounded-xl\r
                    bg-gradient-to-br from-indigo-600 to-blue-600\r
                    flex items-center justify-center shadow-lg\r
                `,children:e.jsx("i",{className:"fa-solid fa-cubes text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[15px] font-bold text-gray-900",children:p("purchase.dailyPurchase.summaryTitle")}),e.jsx("div",{className:"text-[12px] text-gray-900",children:p("purchase.dailyPurchase.summarySubtitle")})]})]})}),e.jsx("div",{className:`\r
            grid grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            xl:grid-cols-4\r
            gap-5\r
        `,children:A.map(({animalName:l,totalLiter:m,pricePerUnit:o})=>e.jsxs("div",{className:`\r
                        group relative overflow-hidden\r
                        rounded-lg border border-white/60\r
                        bg-white/70 backdrop-blur-xl\r
                        shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]\r
                        transition-all duration-500\r
                    `,children:[e.jsx("div",{className:`\r
                        absolute -inset-1 opacity-0\r
                        bg-gradient-to-r\r
                        from-indigo-500\r
                        via-blue-500\r
                        to-cyan-400\r
                        blur-xl transition duration-700\r
                    `}),e.jsx("div",{className:`\r
                        relative h-1.5\r
                        bg-gradient-to-r\r
                        from-indigo-600\r
                        to-blue-600\r
                    `}),e.jsxs("div",{className:"relative p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:`\r
                                text-[16px]\r
                                uppercase\r
                                tracking-widest\r
                                text-gray-900\r
                                font-semibold\r
                            `,children:l}),!_&&e.jsxs("div",{className:"text-[12px] text-indigo-600 font-bold mt-1",children:["₹ ",o," ",p("purchase.dailyPurchase.perLiter")]})]}),e.jsx("div",{className:"mt-2 flex items-end justify-between",children:e.jsxs("div",{className:"flex items-end gap-1",children:[e.jsx("span",{className:`\r
                                    text-[25px]\r
                                    font-extrabold\r
                                    text-gray-900\r
                                    leading-none\r
                                    notranslate\r
                                `,children:Number(m).toFixed(2)}),e.jsx("span",{className:`\r
                                    text-[13px]\r
                                    text-gray-500\r
                                    mt-3\r
                                    font-semibold\r
                                `,children:p("purchase.dailyPurchase.literUnit")})]})}),e.jsx("div",{className:`\r
                            mt-2 h-px\r
                            bg-gradient-to-r\r
                            from-transparent\r
                            via-gray-300\r
                            to-transparent\r
                        `}),e.jsxs("div",{className:`\r
                            mt-2 text-[12px]\r
                            text-gray-900\r
                            flex items-center gap-1\r
                        `,children:[e.jsx("i",{className:"fa-solid fa-chart-line text-indigo-500"}),p("purchase.dailyPurchase.totalPurchased")]})]})]},`${l}_${o||"merge"}`))})]})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center space-y-2",children:[e.jsx("div",{className:"bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-full shadow-sm mb-3",children:e.jsx("i",{className:"fa-solid fa-users-slash text-red-400 text-3xl"})}),e.jsx("h3",{className:"text-gray-800 font-semibold text-base",children:p("purchase.dailyPurchase.emptyTitle")}),e.jsx("p",{className:"text-sm text-gray-500",children:p("purchase.dailyPurchase.emptyDesc")})]})]})]})};export{lr as convertToIST_AMPM,Ir as default};
