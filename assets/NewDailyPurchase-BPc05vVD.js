var De=Object.defineProperty,Ie=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var pe=(c,t,s)=>t in c?De(c,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[t]=s,C=(c,t)=>{for(var s in t||(t={}))he.call(t,s)&&pe(c,s,t[s]);if(te)for(var s of te(t))xe.call(t,s)&&pe(c,s,t[s]);return c},R=(c,t)=>Ie(c,Ce(t));var ge=(c,t)=>{var s={};for(var i in c)he.call(c,i)&&t.indexOf(i)<0&&(s[i]=c[i]);if(c!=null&&te)for(var i of te(c))t.indexOf(i)<0&&xe.call(c,i)&&(s[i]=c[i]);return s};var U=(c,t,s)=>new Promise((i,w)=>{var m=u=>{try{N(s.next(u))}catch(D){w(D)}},g=u=>{try{N(s.throw(u))}catch(D){w(D)}},N=u=>u.done?i(u.value):Promise.resolve(u.value).then(m,g);N((s=s.apply(c,t)).next())});import{j as e}from"./pdfVendor-BbcmCwHY.js";import{a as o,d as ie,f as je,j as _e,u as Me}from"./reactVendor-BtoZ1Mrp.js";import{a as ne,u as oe,r as b,A as F,e as Ee,h as X,t as ve}from"./index-BxOzlEB9.js";import Se from"./DefaultDashboardNavbar-C139njHS.js";import{c as be,D as Le,C as Re,P as $e}from"./DailySaleAdminCustomerDailyRegister-KvEOegvT.js";import{c as fe,d as Ue,e as le,f as Ae,F as Be,b as Ye}from"./index.esm-DXJrkG9j.js";import{u as Fe}from"./useApiLoading-DFAi2-fZ.js";import{I as He}from"./uiVendor-DcbSD86H.js";import{F as Oe}from"./EllipsisVerticalIcon-CPwUE8mE.js";import{F as qe}from"./UserIcon-Cibh_Bek.js";import{F as Qe}from"./TrashIcon-BWWgc1UV.js";import{F as ze}from"./CustomerMilkPreferencesForm-DhRrHJOS.js";import{u as Ke}from"./useSubscription-CpPBpQyN.js";import{F as We,a as Ve}from"./milkTypeTotals-Dl9n5Qpf.js";import"./reduxVendor--FhXtTDf.js";import"./PlatformClassProvider-DDC1FPZc.js";import"./editorVendor-BpuE747s.js";import"./pdfFonts-RwszMTH2.js";import"./downloadAllBillsPdf-Cm_AhgAp.js";import"./index-D8cwjiJy.js";function Ge(w,i){var m=w,{title:c,titleId:t}=m,s=ge(m,["title","titleId"]);return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},s),c?o.createElement("title",{id:t},c):null,o.createElement("path",{d:"M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"}),o.createElement("path",{fillRule:"evenodd",d:"M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))}const Je=o.forwardRef(Ge),ye=c=>c!==""&&c!==null&&c!==void 0&&!Number.isNaN(Number(c)),Xe=c=>{const t=[];return c.forEach(s=>{const i=ye(s.morning),w=ye(s.evening),m=i?Number(s.morning):0,g=w?Number(s.evening):0;i&&w?(t.push(R(C({},s),{originalHadBoth:!0,dailyMilkQuantityInLiters:g,timePreference:"evening"})),t.push(R(C({},s),{originalHadBoth:!0,dailyMilkQuantityInLiters:m,timePreference:"morning"}))):!i&&w?t.push(R(C({},s),{originalHadBoth:!1,dailyMilkQuantityInLiters:g,timePreference:"evening"})):i&&!w&&t.push(R(C({},s),{originalHadBoth:!1,dailyMilkQuantityInLiters:m,timePreference:"morning"}))}),t},Ze=c=>{const{_id:t,milkTypeEntries:s,handleSaveAndCloseProductPopup:i}=c,w=t||c.purchaseId,{dispatch:m}=ne(),{isLoading:g}=Fe(),{t:N}=oe(),u=fe().shape({milkTypeEntries:Ue().of(fe().shape({selected:Ae(),morning:le().min(0).nullable(),evening:le().min(0).nullable(),pricePerUnit:le().min(0).required(N("purchase.milkPreferencesForm.priceRequired"))})).test("at-least-one-selected",N("purchase.milkPreferencesForm.atLeastOneSelected"),y=>y==null?void 0:y.some(p=>p.selected))}),D=p=>U(null,[p],function*({milkTypeEntries:y}){m(yield F({method:"PUT",apiUrl:`party/${w}/milk-preferences`,data:{milkPreferences:Xe(y.filter(k=>k.selected)).map(k=>{const x=k.originalHadBoth;return C({milkTypeId:k.milkTypeId,dailyMilkQuantityInLiters:1,timePreference:k.timePreference,pricePerUnit:k.pricePerUnit},w&&!x&&{_id:k._id})})},loader:!0,apiSuccessCallBack:()=>{i()}}))});return e.jsx(Be,{initialValues:{milkTypeEntries:s},validationSchema:u,enableReinitialize:!0,onSubmit:D,children:({values:y,handleChange:p,handleBlur:k,errors:x,touched:M})=>e.jsxs(Ye,{className:"flex flex-col h-[70vh] mb-0",children:[e.jsx("div",{className:"flex-1 pr-1 overflow-hidden",children:e.jsx("div",{className:"w-full h-full overflow-auto custom-scroll hide-scrollbar rounded-lg border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/60",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{className:"bg-gradient-to-r from-indigo-50 to-purple-50/60 shadow-sm",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-4 px-1 sticky left-0 bg-indigo-50/70 backdrop-blur-md"}),e.jsx("th",{className:"py-4 px-1 text-left text-gray-700 font-semibold",children:N("purchase.milkPreferencesForm.productColumn")}),e.jsx("th",{className:"py-4 px-1 text-center text-gray-700 font-semibold",children:e.jsx(He,{size:16,className:"mx-auto text-gray-900 font-extrabold"})})]})}),e.jsx("tbody",{children:((y==null?void 0:y.milkTypeEntries)||[]).map((q,_)=>{var B,S;return e.jsxs("tr",{className:`border-b border-gray-200\r
                    transition-all duration-200\r
                    hover:bg-gradient-to-r hover:from-indigo-50/40 hover:to-purple-50/40\r
                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]\r
                    hover:-translate-y-[1px]`,children:[e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(b.Checkbox,{color:"blue",ripple:!0,className:"p-0 hover:scale-105 transition-transform duration-150 outline-none",containerProps:{className:"px-1 m-0"},name:`milkTypeEntries[${_}].selected`,checked:((S=(B=y.milkTypeEntries)==null?void 0:B[_])==null?void 0:S.selected)||!1,onChange:p})})}),e.jsx("td",{className:"py-4 px-1 text-gray-900 font-medium tracking-wide break-after-all w-[30%]",children:q.name}),e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("input",{type:"number",placeholder:"",className:`w-[60px] px-0 py-2 text-center rounded-lg border border-gray-300\r
                                bg-gray-50 focus:bg-white\r
                                focus:ring-2 focus:ring-indigo-500\r
                                outline-none shadow-sm transition-all`,name:`milkTypeEntries[${_}].pricePerUnit`,min:1,step:"0.01",value:y.milkTypeEntries[_].pricePerUnit,onChange:p,onBlur:k,onWheel:E=>E.target.blur()})})})]},q._id||`milkType-${_}`)})})]})})}),x.milkTypeEntries&&M.milkTypeEntries&&e.jsx("p",{className:"text-red-500 text-sm mt-2 font-bold text-center",children:x.milkTypeEntries}),e.jsx("div",{className:"sticky bottom-0 backdrop-blur-md p-5 pt-7 pb-safe-5",children:e.jsx(b.Button,{type:"submit",className:"w-full bg-[#005ec4] hover:bg-[#004aa0] py-3 rounded-lg shadow-lg",disabled:g,children:N("purchase.milkPreferencesForm.updateButton")})})]})})},er=ie.memo(Ze),rr=ie.memo(function({entry:t,idx:s,dragProvided:i,dataKey:w,value:m,ctx:g}){const{tableBg:N,borderColor:u,canDrag:D,isAdmin:y,bulkPurchase:p,deliveryBoyAccessList:k,t:x,navigate:M,onQuantityChange:q,onSave:_,onOpenProductMenu:B,onNavigateToBillCard:S,onDeleteParty:E}=g;let T=s%2===0?N:"bg-white";if(!["auto-fill","auto","alternate","manual","update","auto-register"].includes(t.entryMode))T="bg-[#ffaeaee6]";else{const j=Number(t.quantityInLiters)||0,Y=Number(t.customerQuantityInLiters)||0;j===0?T="bg-red-200 border-l-4 border-red-500":j<Y?T="bg-yellow-400 border-l-4 border-yellow-800":j>Y?T="bg-green-200 border-l-4 border-green-500":t.entryMode==="manual"?T="bg-blue-200 border-l-4 border-blue-600":t.entryMode==="update"&&(T="bg-purple-100 border-l-4 border-purple-600")}return e.jsxs("tr",R(C({ref:i.innerRef},D?i.draggableProps:{}),{className:`border ${T} relative`,children:[D&&e.jsx("td",R(C({className:`px-1 py-1 text-center font-semibold border cursor-grab active:cursor-grabbing select-none ${u}`},D?i.dragHandleProps:{}),{children:"⋮⋮"})),e.jsx("td",{className:`px-1 py-1 text-center notranslate ${u}`,children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{children:s+1}),y&&e.jsx("div",{children:e.jsxs(b.Menu,{placement:"bottom-end",allowHover:!1,children:[e.jsx(b.MenuHandler,{children:e.jsx(b.IconButton,{variant:"text",className:`\r
                                        w-9 h-9 rounded-xl border border-gray-300\r
                                        bg-gray-50 hover:bg-gray-100\r
                                        active:scale-95\r
                                        transition-all duration-200\r
                                        shadow-sm hover:shadow-md\r
                                    `,children:e.jsx(Oe,{className:"w-5 h-5 text-gray-700"})})}),e.jsxs(b.MenuList,{className:`\r
                                    min-w-[200px]\r
                                    rounded-2xl\r
                                    border border-white/20\r
                                    bg-white/90\r
                                    backdrop-blur-xl\r
                                    shadow-[0_10px_40px_rgba(0,0,0,0.12)]\r
                                    p-2\r
                                    overflow-hidden\r
                                `,children:[e.jsxs(b.MenuItem,{onClick:()=>B(t),className:`\r
                                        flex items-center gap-3\r
                                        rounded-xl px-3 py-3\r
                                        transition-all duration-200\r
                                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50\r
                                        active:scale-[0.98]\r
                                        group\r
                                    `,children:[e.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center bg-blue-100 group-hover:bg-blue-200 transition-all duration-200",children:e.jsx(Je,{className:"w-5 h-5 text-blue-600"})}),e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:x("purchase.dailyRegisterTable.updateProduct")})]}),e.jsxs(b.MenuItem,{onClick:()=>{M(`/party/update/${t.purchaseId}`,{state:{navigate:window.location.pathname}})},className:`\r
                                        flex items-center gap-3\r
                                        rounded-xl px-3 py-3\r
                                        transition-all duration-200\r
                                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50\r
                                        active:scale-[0.98]\r
                                        group\r
                                        mt-1\r
                                    `,children:[e.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center bg-blue-100 group-hover:bg-blue-200 transition-all duration-200",children:e.jsx(qe,{className:"w-5 h-5 text-blue-600"})}),e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:x("purchase.dailyRegisterTable.editParty")})]}),e.jsxs(b.MenuItem,{onClick:()=>E(t),className:`\r
                                        flex items-center gap-3\r
                                        rounded-xl px-3 py-3\r
                                        transition-all duration-200\r
                                        hover:bg-red-50\r
                                        active:scale-[0.98]\r
                                        group\r
                                        mt-1\r
                                    `,children:[e.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center bg-red-100 group-hover:bg-red-200 transition-all duration-200",children:e.jsx(Qe,{className:"w-5 h-5 text-red-600"})}),e.jsx("span",{className:"text-sm font-semibold text-red-600",children:x("purchase.dailyRegisterTable.deleteParty")})]})]})]})})]})}),e.jsxs("td",{className:`px-1 py-1 notranslate cursor-pointer break-all ${u}`,children:[e.jsxs("span",{children:[e.jsx("b",{children:t.name})," - ",e.jsx("span",{className:"text-red-900 font-bold",children:t.milkType}),k.canViewMilkPrice?` ( ${t.pricePerUnit} )`:""]}),e.jsx("br",{}),(k.showPhone||(t==null?void 0:t.isShowPhoneToDeliveryBoy))&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"break-all",children:t.phone}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(t.phone),ve.success(x("purchase.dailyRegisterTable.phoneCopiedToast"))},className:"ml-2 text-blue-600 hover:text-blue-800",title:x("purchase.dailyRegisterTable.copyPhoneTitle"),children:e.jsx("i",{className:"fa-solid fa-copy"})}),e.jsx("br",{})]})]}),y&&e.jsx("td",{className:`px-1 py-1 cursor-pointer ${u}`,onClick:()=>S(t.purchaseId),children:e.jsx("div",{className:"flex justify-center",children:e.jsx(ze,{className:"w-5 text-blue-600"})})}),e.jsxs("td",{className:`px-1 py-1 text-center ${u} relative`,children:[e.jsx("input",{"data-daily-sale-key":w,type:"number",min:0,inputMode:"decimal",enterKeyHint:"next",disabled:!k.canEditList||(t==null?void 0:t.vacationMode),value:m,onChange:j=>q(t,j.target.value),onBlur:j=>{p||_(t,j.target.value)},onKeyDown:j=>{if(j.key==="Enter"){j.preventDefault();const Y=j.target,H=document.querySelectorAll("input[data-daily-sale-key]"),$=Array.from(H).findIndex(V=>V===Y),P=H[$+1];Y.blur(),setTimeout(()=>{P&&P.focus()},0)}},onWheel:j=>j.target.blur(),className:"w-10 sm:w-20 lg:w-20 font-extrabold text-center border rounded-md py-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"}),(t==null?void 0:t.vacationMode)&&e.jsx("div",{className:"absolute z-10 top-0 right-0 overflow-hidden w-[96px] h-[48px] pointer-events-none",children:e.jsx("div",{className:`\r
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
`})})]})]}))}),ar=c=>{var ue;const{appSelector:t,dispatch:s}=ne(),i=je(),{deliveryBoyId:w}=_e(),{userData:m}=Ee(),{t:g}=oe(),{dailyRegisterData:N,deliveryBoyAccess:u,adminData:D,dailySaleDate:y}=t(r=>r.app),p=(ue=D==null?void 0:D.data)==null?void 0:ue.moduleSettings,{entries:k=[],timePreference:x,handleUpdateCustomerMilkEntry:M,showDragColumn:q=!0,fetchRegister:_,estimate:B}=c,S=(u==null?void 0:u.data)||{},[E,T]=o.useState([]),[Q,j]=o.useState({}),[Y,H]=o.useState(!1),[$,P]=o.useState(null),[V,re]=o.useState(!1),A=o.useRef({}),l=o.useMemo(()=>x==="morning"?"bg-teal-50":"bg-blue-50",[x]),h=o.useMemo(()=>x==="morning"?"bg-teal-600":"bg-blue-600",[x]),n=o.useMemo(()=>x==="morning"?"border border-teal-600":"border border-blue-600",[x]);o.useEffect(()=>{T(k||[]),j({}),A.current={}},[k,x]);const I=o.useCallback(r=>`${r.purchaseId}_${r.milkTypeId}_${x}_${r.milkTimePreferenceId}`,[x]),ae=o.useCallback((r,a)=>{const d=a,v=I(r);if(!/^\d*\.?\d*$/.test(d))return;let f=d;if(f.length>1&&f.startsWith("0")&&!f.startsWith("0.")&&(f=f.replace(/^0+/,"")),j(K=>R(C({},K),{[v]:f})),A.current[v]=f,a==="")return;const L=Number(f);Number.isNaN(L)||L<0},[I,x]),G=o.useCallback(r=>{var d;const a=I(r);return Q[a]!==void 0?Q[a]:A.current[a]!==void 0?A.current[a]:B?["alternate"].includes(r==null?void 0:r.entryMode)||r!=null&&r.vacationMode?"":r==null?void 0:r.quantityInLiters:p!=null&&p.bulkPurchase?["alternate","auto-fill"].includes(r==null?void 0:r.entryMode)||r!=null&&r.vacationMode?"":r==null?void 0:r.quantityInLiters:["auto-fill","alternate"].includes(r==null?void 0:r.entryMode)?"":(d=r==null?void 0:r.quantityInLiters)!=null?d:""},[I,Q,B,p==null?void 0:p.bulkPurchase]),se=o.useMemo(()=>{let r=0;return E.forEach(a=>{var f,L,K;const d=I(a),v=(K=(L=(f=Q[d])!=null?f:A.current[d])!=null?L:a.quantityInLiters)!=null?K:0;(a.entryMode!=="auto-fill"||B&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1)||p!=null&&p.bulkPurchase&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1))&&(r+=Number(v)||0)}),r},[E,Q,I,B,p==null?void 0:p.bulkPurchase]),Z=o.useCallback(r=>{s({type:"APP_SET_CURRENT_MONTH",payload:X(),name:"currentMonth",meta:{type:"SET_CURRENT_MONTH"}});const a=[...new Set(E.map(d=>d.purchaseId))];s({type:"APP_SET_CUSTOMER_LIST_IN_BILL_CARD",payload:{customers:a.map(d=>({_id:d}))},name:"customerListInBillCard",meta:{type:"SET_CUSTOMER_LIST_IN_BILL_CARD"}}),i(`/party/bill/${r}`,{state:{navigate:window.location.pathname,purchaseId:r}})},[i,E,s]),W=(m==null?void 0:m.role)==="admin",ce=o.useCallback((r,a)=>{if(a===""&&(r!=null&&r._id))M({_id:r==null?void 0:r._id,purchaseId:r.purchaseId,milkTypeId:r.milkTypeId,quantityInLiters:0,milkTimePreference:x,pricePerUnit:r.pricePerUnit,mode:"delete"}),j({}),A.current={};else{if(Number.isNaN(+a)||+a<0||a===""||a===null||a===void 0)return;M({_id:r==null?void 0:r._id,purchaseId:r.purchaseId,milkTypeId:r.milkTypeId,quantityInLiters:a,milkTimePreference:x,pricePerUnit:r.pricePerUnit}),j({}),A.current={}}},[x,M]),ee=o.useCallback(()=>U(null,null,function*(){s(yield F({method:"POST",apiUrl:"party/register",data:{deliveryDate:y},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER",apiSuccessCallBack:()=>{H(!1)}}))}),[y]),J=(r,a)=>r.map(d=>{const v=a.filter(O=>{var me;return O.milkTypeId===d._id||((me=O.milkType)==null?void 0:me._id)===d._id}),f=v.find(O=>O.timePreference==="morning"),L=v.find(O=>O.timePreference==="evening"),K=(f==null?void 0:f._id)||(L==null?void 0:L._id)||null;return R(C({},d),{_id:K,milkTypeId:d._id,selected:v.length>0,morning:f?f.dailyMilkQuantityInLiters:1,evening:L?L.dailyMilkQuantityInLiters:1,pricePerUnit:v.length>0&&v[0].pricePerUnit||d.pricePerUnit})}),we=o.useCallback((r,a)=>U(null,null,function*(){s(yield F({apiUrl:"milkType",loader:!0,apiSuccessCallBack:v=>U(null,[v],function*({milkTypes:d}){if(a){r.milkTypeEntries=yield J(d,r.milkPreferences);const f=R(C({},r),{entries:void 0});H(f)}})}))}),[s]),de=o.useCallback(r=>U(null,null,function*(){s(yield F({apiUrl:`party/${r.purchaseId}`,loader:!0,apiSuccessCallBack:a=>U(null,null,function*(){yield we(a.customer,r.purchaseId)})}))}),[s]);o.useCallback(r=>U(null,null,function*(){s(yield F({method:"POST",apiUrl:"payment/customer/outstanding",loader:!0,data:{purchaseId:r.purchaseId},apiSuccessCallBack:a=>{const d=a==null?void 0:a.customer;d&&(s({type:"APP_SET_SELECTED_CUSTOMER_PAYMENT",payload:d,name:"selectedCustomerPayment",meta:{type:"SET_SELECTED_CUSTOMER_PAYMENT"}}),i(`/add/payment/bill/${d==null?void 0:d.purchaseId._id}/sales`,{state:{navigate:window.location.pathname}}))}}))}),[s]);const Ne=o.useCallback(()=>U(null,null,function*(){if($!=null&&$.purchaseId){re(!0);try{yield s(yield F({method:"POST",apiUrl:`party/moveToRecycleBin/${$.purchaseId}`,loader:!0,apiSuccessCallBack:()=>{P(null),_()}}))}finally{re(!1)}}}),[s,$,_]),ke=o.useCallback(r=>U(null,null,function*(){if(!r.destination)return;const a=[...E],[d]=a.splice(r.source.index,1);a.splice(r.destination.index,0,d),T(a),s(yield F({method:"POST",apiUrl:"dailyRegisterOrder/purchase",data:{customers:a.map((v,f)=>({purchaseId:v.purchaseId,milkTypeId:v.milkTypeId,milkTimePreferenceId:v.milkTimePreferenceId,registerIndex:f+1}))},loader:!0,apiSuccessCallBack:()=>_()}))}),[E,s,w,_]),Te=o.useCallback(()=>{const r=[];if(E.forEach(a=>{var O;const d=G(a),v=new Date(y),f=new Date;if(v.setHours(f.getHours(),f.getMinutes(),f.getSeconds(),f.getMilliseconds()),(d===""||d===null)&&(a!=null&&a._id)){r.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:0,milkTimePreference:x.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:v,deliveryDateIST:be(new Date(v)),mode:"delete"});return}if(d===""||d===null||d===void 0||Number.isNaN(+d)||+d<0)return;const L=+d,K=Number((O=a==null?void 0:a.quantityInLiters)!=null?O:0);a!=null&&a._id&&L===K||r.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:L,milkTimePreference:x.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:v,deliveryDateIST:be(new Date(v)),mode:a!=null&&a._id?"update":"create"})}),r.length===0){ve.error(g("purchase.dailyRegisterTable.noValidEntriesToast"));return}M({milkEntries:r,isBulkPurchase:!0}),j({}),A.current={}},[E,G,x,M,y,g]),z=q&&(S==null?void 0:S.canDragDrop),Pe=o.useMemo(()=>({tableBg:l,borderColor:n,canDrag:z,isAdmin:W,bulkPurchase:p==null?void 0:p.bulkPurchase,deliveryBoyAccessList:S,t:g,navigate:i,onQuantityChange:ae,onSave:ce,onOpenProductMenu:de,onNavigateToBillCard:Z,onDeleteParty:P}),[l,n,z,W,p==null?void 0:p.bulkPurchase,S,g,i,ae,ce,de,Z]);return x?e.jsxs("div",{className:"rounded-xl shadow-lg border border-gray-300 mb-6",children:[e.jsx("div",{className:`${h} text-white px-6 py-1 font-bold text-lg rounded-t-xl flex justify-between items-center gap-1`}),e.jsxs("table",{className:"min-w-full border-collapse text-sm",children:[e.jsx("thead",{className:`${h} text-white`,children:e.jsxs("tr",{className:n,children:[z&&e.jsx("th",{className:`px-1 py-1 border border-l-4 notranslate w-10 ${n}`,children:"⇅"}),e.jsx("th",{className:`px-2 py-3 w-5 border-l-4 ${n}`,children:"#"}),e.jsx("th",{className:`px-2 py-3 ${n}`,children:g("purchase.dailyRegisterTable.customerColumn")}),W&&e.jsx("th",{className:`px-2 py-3 ${n} w-5`,children:"#"}),e.jsx("th",{className:`px-1 py-1 ${n} w-10 sm:w-20 lg:w-20`,children:g("purchase.dailyRegisterTable.literColumn")})]})}),e.jsx(Le,{onDragEnd:z?ke:void 0,children:e.jsx(Re,{droppableId:"table-body",isDropDisabled:!z,children:r=>e.jsxs("tbody",R(C({ref:r.innerRef},r.droppableProps),{children:[E.map((a,d)=>e.jsx($e,{draggableId:`${a.purchaseId}_${a.milkTypeId}`,index:d,isDragDisabled:!z,children:v=>e.jsx(rr,{entry:a,idx:d,dragProvided:v,dataKey:I(a),value:G(a),ctx:Pe})},`${a.purchaseId}-${d}`)),r.placeholder]}))})}),e.jsx("tfoot",{className:"bg-gray-100 font-semibold",children:e.jsxs("tr",{children:[e.jsx("td",{colSpan:z?W?4:3:z?2:W?3:2,className:`px-2 py-2 text-center ${n}`,children:g("purchase.dailyRegisterTable.totalMilk")}),e.jsxs("td",{className:`px-2 py-2 text-center border notranslate ${n}`,children:[se.toFixed(2)," L"]})]})})]}),(p==null?void 0:p.bulkPurchase)&&S.canEditList&&e.jsx("div",{className:"flex justify-center gap-2 my-2",children:e.jsx(b.Button,{variant:"gradient",color:"pink",onClick:()=>Te(),children:g("purchase.dailyRegisterTable.addBulkPurchase")})}),e.jsx(b.Dialog,{open:Y,handler:()=>H(!1),className:"bg-transparent shadow-none border-none outline-none rounded-2xl w-[96%] sm:max-w-[620px] md:max-w-[600px] lg:max-w-[500px]",size:"xl",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[520px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs(b.DialogHeader,{className:"flex flex-col items-start gap-1 pb-4 border-b border-gray-200",children:[e.jsx(b.Typography,{className:"text-xl font-bold text-gray-900",children:g("purchase.dailyRegisterTable.selectProductTitle")}),e.jsx(b.Typography,{className:"text-sm text-gray-900 font-normal",children:g("purchase.dailyRegisterTable.selectProductSubtitle")})]}),e.jsx(b.DialogBody,{className:"pt-5 px-0 overflow-y-auto",children:e.jsx(er,R(C(C({},c),Y),{handleSaveAndCloseProductPopup:ee}))})]})]})}),e.jsxs(b.Dialog,{open:!!$,handler:()=>P(null),size:"xs",className:"rounded-2xl",children:[e.jsx(b.DialogHeader,{className:"text-[15px] font-bold text-gray-800 pb-2",children:g("purchase.dailyRegisterTable.deletePartyDialog.title")}),e.jsxs(b.DialogBody,{className:"pt-0",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:g("purchase.dailyRegisterTable.deletePartyDialog.message",{name:$==null?void 0:$.name})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(b.Button,{variant:"outlined",size:"sm",onClick:()=>P(null),className:"flex-1 rounded-xl border-gray-300 text-gray-600 normal-case",children:g("common.buttons.cancel")}),e.jsx(b.Button,{size:"sm",disabled:V,onClick:Ne,className:"flex-1 rounded-xl bg-red-600 normal-case",children:g(V?"purchase.dailyRegisterTable.deletePartyDialog.deleting":"purchase.dailyRegisterTable.deletePartyDialog.confirm")})]})]})]})]}):null},tr=ie.memo(ar),sr=c=>{const t=c instanceof Date?c:new Date(c);if(isNaN(t))return null;const s=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),i=5.5*60*60*1e3,w=new Date(s+i),m=w.getUTCFullYear(),g=String(w.getUTCMonth()+1).padStart(2,"0"),N=String(w.getUTCDate()).padStart(2,"0");let u=w.getUTCHours();const D=String(w.getUTCMinutes()).padStart(2,"0"),y=u>=12?"PM":"AM";return u=u%12||12,`${m}-${g}-${N} ${u}:${D} ${y}`},Pr=()=>{const c=o.useRef(null),t=je(),s=Me(),{dispatch:i,appSelector:w}=ne(),{t:m}=oe(),{blockIfAtLimit:g}=Ke(),{dailyPurchaseRegisterData:N,dailySaleDate:u,adminData:D,dailySaleSettings:y}=w(l=>l.app),[p,k]=o.useState(void 0),x=l=>{const h=(l==null?void 0:l.toLowerCase())||"both";return h==="morning"?"Morning":h==="evening"?"Evening":new Date().getHours()<12?"Morning":"Evening"};o.useEffect(()=>{var l,h;(h=(l=D==null?void 0:D.data)==null?void 0:l.generalSettings)!=null&&h.autoSelectShift?k(x("both")):k((y==null?void 0:y.selectedShift)||x("both"))},[]);const[M,q]=o.useState(!0),[_,B]=o.useState(""),[S,E]=o.useState(""),[T,Q]=o.useState({showDragColumn:!1,estimate:!1}),j=({deliveryDate:l})=>h=>U(null,null,function*(){h(yield F({method:"POST",apiUrl:"party/register",data:{deliveryDate:l},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER"}))}),Y=o.useCallback(()=>{u&&i(j({deliveryDate:u}))},[i,u]),H=o.useCallback(l=>U(null,null,function*(){const h=l==="prev"?X(u).subtract(1,"day").format("YYYY-MM-DD"):X(u).add(1,"day").format("YYYY-MM-DD");i({type:"APP_UPDATE_DAILY_SALE_DATE",payload:h,name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}})}),[i,u]),$=o.useCallback(l=>{const h=l.target.value;if(!h)return;const n=X(h,"YYYY-MM-DD");i({type:"APP_SET_DAILY_SALE_DATE",payload:n.format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}})},[i]),P=p==="Morning"?N==null?void 0:N.morning:N==null?void 0:N.evening;o.useEffect(()=>{const l=setTimeout(()=>{E(_)},300);return()=>clearTimeout(l)},[_]);const V=o.useMemo(()=>{if(!P)return[];const l=S.toLowerCase().trim();return l?P.filter(h=>{var I;return(((I=h.name)==null?void 0:I.toLowerCase())||"").includes(l)}):P},[P,S]),re=o.useCallback(ce=>U(null,[ce],function*({_id:l,purchaseId:h,milkTypeId:n,quantityInLiters:I,milkTimePreference:ae,mode:G="",pricePerUnit:se,isBulkPurchase:Z=!1,milkEntries:W}){if(Z){i(yield F({method:"POST",apiUrl:"purchaseMilkEntry",data:{milkEntries:W,isBulkSell:Z},loader:!0,apiSuccessCallBack:()=>{i(j({deliveryDate:u}))}}));return}const ee=new Date(u),J=new Date;ee.setHours(J.getHours(),J.getMinutes(),J.getSeconds(),J.getMilliseconds()),i(yield F({method:"POST",apiUrl:"purchaseMilkEntry",data:{milkEntries:[R(C(C({},l&&{_id:l}),G&&{mode:G}),{purchaseId:h,milkTypeId:n,quantityInLiters:I,pricePerUnit:se,deliveryDate:ee,deliveryDateIST:sr(new Date(ee)),milkTimePreference:ae.toLowerCase()})]},loader:!0,apiSuccessCallBack:()=>{i(j({deliveryDate:u}))}}))}),[i,u]),A=o.useMemo(()=>{if(!(P!=null&&P.length))return[];let l;T!=null&&T.estimate?l=P:l=P.filter(n=>["auto","manual","update"].includes(n==null?void 0:n.entryMode));const h={};return l.forEach(n=>{const I=M?`${(n==null?void 0:n.milkType)||"Milk"}`:`${(n==null?void 0:n.milkType)||"Milk"}_${(n==null?void 0:n.pricePerUnit)||0}`;h[I]||(h[I]={animalName:(n==null?void 0:n.milkType)||"Milk",totalLiter:0,pricePerUnit:(n==null?void 0:n.pricePerUnit)||0}),h[I].totalLiter+=Number((n==null?void 0:n.quantityInLiters)||0)}),Object.values(h)},[P,M,T==null?void 0:T.estimate]);if(o.useEffect(()=>(u||i({type:"APP_SET_DAILY_SALE_DATE",payload:X().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}}),()=>{i({type:"APP_UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY",payload:void 0,name:"dailyPurchaseRegisterData",meta:{type:"UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY"}})}),[]),o.useEffect(()=>{u&&i(j({deliveryDate:u}))},[u]),!!p)return e.jsxs(e.Fragment,{children:[e.jsx(Se,{back:!0,headerTitle:e.jsx("div",{className:"text-gray-900 font-bold text-sm flex items-center",children:m("purchase.dailyPurchase.headerTitle")}),onBack:()=>{var l;return t(((l=s==null?void 0:s.state)==null?void 0:l.navigate)||"/dashboard")},menu:e.jsx(e.Fragment,{children:e.jsxs(b.Menu,{placement:"bottom-end",children:[e.jsx(b.MenuHandler,{children:e.jsx(b.IconButton,{className:"w-[40px] h-[40px] rounded-full border border-[#ffffff]/30 bg-[#ffffff]/10 backdrop-blur-md text-[#ffffff] shadow-md transition-all hover:bg-[#ffffff]/20 p-0 flex justify-center items-center gap-2",children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical text-lg"})})}),e.jsxs(b.MenuList,{className:`\r
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
                        `,children:e.jsx("i",{className:"fa-solid fa-sliders text-white text-lg"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-white font-bold text-[15px] tracking-wide",children:m("purchase.dailyPurchase.menu.quickActions")}),e.jsx("div",{className:"text-white/80 text-[11px]",children:m("purchase.dailyPurchase.menu.quickActionsDesc")})]})]})]}),e.jsxs("div",{className:"p-3 flex flex-col gap-2 outline-none",children:[e.jsxs(b.MenuItem,{onClick:()=>{g("parties")||t("/party/add")},className:`\r
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
                            `,children:e.jsx("i",{className:"fa-solid fa-user-plus text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900",children:m("purchase.dailyPurchase.menu.addNewParty")}),e.jsx("div",{className:"text-[11px] text-gray-900",children:m("purchase.dailyPurchase.menu.addNewPartyDesc")})]})]}),e.jsx("i",{className:"fa-solid fa-angle-right text-gray-900 text-xs"})]}),e.jsx("div",{className:`\r
                        px-2 pt-2 pb-1\r
                        text-[11px]\r
                        uppercase tracking-[0.18em]\r
                        font-bold text-gray-900\r
                    `,children:m("purchase.dailyPurchase.menu.preferences")}),e.jsxs(b.MenuItem,{onClick:()=>Q(l=>R(C({},l),{showDragColumn:!l.showDragColumn})),className:`\r
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
                            `,children:e.jsx("i",{className:"fa-solid fa-grip-vertical text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900",children:m("purchase.dailyPurchase.menu.enableDrag")}),e.jsx("div",{className:"text-[11px] text-gray-900",children:m("purchase.dailyPurchase.menu.enableDragDesc")})]})]}),e.jsx(b.Checkbox,{checked:T.showDragColumn,onChange:()=>{},ripple:!1,className:"rounded-md",color:"indigo"})]})]})]})]})})}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-1 py-4 h-safe overflow-y-auto",children:[e.jsxs("div",{className:"flex mb-4 justify-between items-center px-4 py-3 bg-white/70 backdrop-blur-lg rounded-xl shadow-md border border-gray-200",children:[e.jsx("button",{onClick:()=>H("prev"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-left text-blue-700 text-[15px]"})}),e.jsxs("div",{className:"relative cursor-pointer",children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-800 tracking-wide",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:X(u).format("DD MMMM, YYYY")}),e.jsx("i",{className:"fa-solid fa-calendar-days"})]})}),e.jsx("input",{ref:c,type:"date",className:"absolute inset-0 opacity-0 cursor-pointer",value:u||"",onChange:$})]}),e.jsx("button",{onClick:()=>H("next"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-right text-blue-700 text-[15px]"})})]}),e.jsx("div",{className:"w-full pb-4",children:e.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{label:"Morning",displayLabel:m("purchase.dailyPurchase.morning"),icon:We,gradient:"from-yellow-900/40 to-yellow-300/10",border:"border-yellow-800",glow:"shadow-yellow-800",text:"text-yellow-900"},{label:"Evening",displayLabel:m("purchase.dailyPurchase.evening"),icon:Ve,gradient:"from-indigo-500/20 to-indigo-300/10",border:"border-indigo-400",glow:"shadow-indigo-400",text:"text-indigo-700"}].map(l=>{const h=p===l.label,n=l.icon;return e.jsxs("div",{onClick:()=>k(l.label),className:`
                    relative cursor-pointer rounded-lg p-[1px]
                    transition-all duration-300 group

                `,children:[e.jsx("div",{className:`
                        absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300
                        ${l.glow}
                    `}),e.jsxs("div",{className:`flex gap-2 items-center justify-center
                        relative rounded-lg px-2 py-2 backdrop-blur-xl
                        border transition-all duration-300

                        ${h?`${l.border} bg-gradient-to-br ${l.gradient} shadow-lg ${l.glow}`:"border-gray-200 bg-white/70"}
                    `,children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{className:`
                                p-2 rounded-lg transition-all duration-300
                                ${h?"bg-white/70 shadow-sm":"bg-gray-100"}
                            `,children:e.jsx(n,{className:`
                                    w-[15px] h-[15px]
                                    ${h?l.text:"text-gray-400"}
                                `})})}),e.jsx("div",{className:`
                            text-sm font-semibold tracking-wide
                            ${h?l.text:"text-gray-600"}
                        `,children:l.displayLabel})]})]},l.label)})})}),e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("input",{type:"text",placeholder:m("purchase.dailyPurchase.searchPlaceholder"),value:_,onChange:l=>B(l.target.value),className:`\r
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
                            `}),e.jsx("i",{className:"fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"})]})}),P&&P.length>0?e.jsxs(e.Fragment,{children:[e.jsx(tr,{timePreference:p==null?void 0:p.toLowerCase(),entries:[...V].sort((l,h)=>{var n,I;return((n=l.registerIndex)!=null?n:-1/0)-((I=h.registerIndex)!=null?I:-1/0)}),handleUpdateCustomerMilkEntry:re,fetchRegister:Y,estimate:T.estimate,showDragColumn:T.showDragColumn},"daily-register"),A.length>0&&e.jsx("div",{className:"flex justify-center mb-6",children:e.jsxs("label",{className:`\r
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
        `}),e.jsx(b.Switch,{id:"autoMilkEntry",name:"autoMilkEntry",checked:M,onChange:()=>q(!M),className:`\r
                peer scale-110\r
                checked:bg-gradient-to-r checked:from-blue-500 checked:to-purple-600\r
                checked:ring-4 checked:ring-purple-300/40\r
                transition-all duration-500\r
            `,label:""}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{className:"text-lg font-semibold text-gray-800 tracking-wide",children:m("purchase.dailyPurchase.combineByProduct")}),e.jsx("span",{className:"text-[11px] text-black italic",children:m("purchase.dailyPurchase.combineByProductDesc")})]})]})}),A.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`\r
                    w-9 h-9 rounded-xl\r
                    bg-gradient-to-br from-indigo-600 to-blue-600\r
                    flex items-center justify-center shadow-lg\r
                `,children:e.jsx("i",{className:"fa-solid fa-cubes text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[15px] font-bold text-gray-900",children:m("purchase.dailyPurchase.summaryTitle")}),e.jsx("div",{className:"text-[12px] text-gray-900",children:m("purchase.dailyPurchase.summarySubtitle")})]})]})}),e.jsx("div",{className:`\r
            grid grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            xl:grid-cols-4\r
            gap-5\r
        `,children:A.map(({animalName:l,totalLiter:h,pricePerUnit:n})=>e.jsxs("div",{className:`\r
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
                            `,children:l}),!M&&e.jsxs("div",{className:"text-[12px] text-indigo-600 font-bold mt-1",children:["₹ ",n," ",m("purchase.dailyPurchase.perLiter")]})]}),e.jsx("div",{className:"mt-2 flex items-end justify-between",children:e.jsxs("div",{className:"flex items-end gap-1",children:[e.jsx("span",{className:`\r
                                    text-[25px]\r
                                    font-extrabold\r
                                    text-gray-900\r
                                    leading-none\r
                                    notranslate\r
                                `,children:Number(h).toFixed(2)}),e.jsx("span",{className:`\r
                                    text-[13px]\r
                                    text-gray-500\r
                                    mt-3\r
                                    font-semibold\r
                                `,children:m("purchase.dailyPurchase.literUnit")})]})}),e.jsx("div",{className:`\r
                            mt-2 h-px\r
                            bg-gradient-to-r\r
                            from-transparent\r
                            via-gray-300\r
                            to-transparent\r
                        `}),e.jsxs("div",{className:`\r
                            mt-2 text-[12px]\r
                            text-gray-900\r
                            flex items-center gap-1\r
                        `,children:[e.jsx("i",{className:"fa-solid fa-chart-line text-indigo-500"}),m("purchase.dailyPurchase.totalPurchased")]})]})]},`${l}_${n||"merge"}`))})]})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center space-y-2",children:[e.jsx("div",{className:"bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-full shadow-sm mb-3",children:e.jsx("i",{className:"fa-solid fa-users-slash text-red-400 text-3xl"})}),e.jsx("h3",{className:"text-gray-800 font-semibold text-base",children:m("purchase.dailyPurchase.emptyTitle")}),e.jsx("p",{className:"text-sm text-gray-500",children:m("purchase.dailyPurchase.emptyDesc")})]})]})]})};export{sr as convertToIST_AMPM,Pr as default};
