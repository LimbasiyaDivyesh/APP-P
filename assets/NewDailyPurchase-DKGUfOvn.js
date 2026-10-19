var De=Object.defineProperty,Ie=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var me=(o,t,l)=>t in o?De(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l,C=(o,t)=>{for(var l in t||(t={}))pe.call(t,l)&&me(o,l,t[l]);if(se)for(var l of se(t))he.call(t,l)&&me(o,l,t[l]);return o},E=(o,t)=>Ie(o,Ce(t));var xe=(o,t)=>{var l={};for(var i in o)pe.call(o,i)&&t.indexOf(i)<0&&(l[i]=o[i]);if(o!=null&&se)for(var i of se(o))t.indexOf(i)<0&&he.call(o,i)&&(l[i]=o[i]);return l};var L=(o,t,l)=>new Promise((i,N)=>{var u=b=>{try{g(l.next(b))}catch(D){N(D)}},p=b=>{try{g(l.throw(b))}catch(D){N(D)}},g=b=>b.done?i(b.value):Promise.resolve(b.value).then(u,p);g((l=l.apply(o,t)).next())});import{j as e}from"./pdfVendor-BbcmCwHY.js";import{a as n,d as ie,f as ye,j as _e,u as Me}from"./reactVendor-BtoZ1Mrp.js";import{a as ne,u as oe,r as y,A as F,e as Ee,h as X,t as je}from"./index-BAoUhbdS.js";import Se from"./DefaultDashboardNavbar-ByhKVaKa.js";import{c as ge,D as Le,C as Re,P as $e}from"./DailySaleAdminCustomerDailyRegister-IZLd-3SW.js";import{c as be,d as Ue,e as le,f as Ae,F as Be,b as Ye}from"./index.esm-DXJrkG9j.js";import{u as Fe}from"./useApiLoading-_eKBXcI6.js";import{I as He}from"./uiVendor-C4Svfq-D.js";import{F as Oe}from"./EllipsisVerticalIcon-CPwUE8mE.js";import{F as qe}from"./UserIcon-Cibh_Bek.js";import{F as Qe}from"./TrashIcon-BWWgc1UV.js";import{F as ze}from"./CustomerMilkPreferencesForm-BhK0wV0Q.js";import{F as Ke,a as We}from"./milkTypeTotals-Dl9n5Qpf.js";import"./reduxVendor--FhXtTDf.js";import"./PlatformClassProvider-CxoQumth.js";import"./editorVendor-BpuE747s.js";import"./pdfFonts-RwszMTH2.js";import"./downloadAllBillsPdf-uUEzf6zZ.js";import"./index-Bba8zTcN.js";function Ve(N,i){var u=N,{title:o,titleId:t}=u,l=xe(u,["title","titleId"]);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},l),o?n.createElement("title",{id:t},o):null,n.createElement("path",{d:"M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"}),n.createElement("path",{fillRule:"evenodd",d:"M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))}const Ge=n.forwardRef(Ve),fe=o=>o!==""&&o!==null&&o!==void 0&&!Number.isNaN(Number(o)),Je=o=>{const t=[];return o.forEach(l=>{const i=fe(l.morning),N=fe(l.evening),u=i?Number(l.morning):0,p=N?Number(l.evening):0;i&&N?(t.push(E(C({},l),{originalHadBoth:!0,dailyMilkQuantityInLiters:p,timePreference:"evening"})),t.push(E(C({},l),{originalHadBoth:!0,dailyMilkQuantityInLiters:u,timePreference:"morning"}))):!i&&N?t.push(E(C({},l),{originalHadBoth:!1,dailyMilkQuantityInLiters:p,timePreference:"evening"})):i&&!N&&t.push(E(C({},l),{originalHadBoth:!1,dailyMilkQuantityInLiters:u,timePreference:"morning"}))}),t},Xe=o=>{const{_id:t,milkTypeEntries:l,handleSaveAndCloseProductPopup:i}=o,N=t||o.purchaseId,{dispatch:u}=ne(),{isLoading:p}=Fe(),{t:g}=oe(),b=be().shape({milkTypeEntries:Ue().of(be().shape({selected:Ae(),morning:le().min(0).nullable(),evening:le().min(0).nullable(),pricePerUnit:le().min(0).required(g("purchase.milkPreferencesForm.priceRequired"))})).test("at-least-one-selected",g("purchase.milkPreferencesForm.atLeastOneSelected"),f=>f==null?void 0:f.some(x=>x.selected))}),D=x=>L(null,[x],function*({milkTypeEntries:f}){u(yield F({method:"PUT",apiUrl:`party/${N}/milk-preferences`,data:{milkPreferences:Je(f.filter(I=>I.selected)).map(I=>{const m=I.originalHadBoth;return C({milkTypeId:I.milkTypeId,dailyMilkQuantityInLiters:1,timePreference:I.timePreference,pricePerUnit:I.pricePerUnit},N&&!m&&{_id:I._id})})},loader:!0,apiSuccessCallBack:()=>{i()}}))});return e.jsx(Be,{initialValues:{milkTypeEntries:l},validationSchema:b,enableReinitialize:!0,onSubmit:D,children:({values:f,handleChange:x,handleBlur:I,errors:m,touched:U})=>e.jsxs(Ye,{className:"flex flex-col h-[70vh] mb-0",children:[e.jsx("div",{className:"flex-1 pr-1 overflow-hidden",children:e.jsx("div",{className:"w-full h-full overflow-auto custom-scroll hide-scrollbar rounded-lg border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/60",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{className:"bg-gradient-to-r from-indigo-50 to-purple-50/60 shadow-sm",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-4 px-1 sticky left-0 bg-indigo-50/70 backdrop-blur-md"}),e.jsx("th",{className:"py-4 px-1 text-left text-gray-700 font-semibold",children:g("purchase.milkPreferencesForm.productColumn")}),e.jsx("th",{className:"py-4 px-1 text-center text-gray-700 font-semibold",children:e.jsx(He,{size:16,className:"mx-auto text-gray-900 font-extrabold"})})]})}),e.jsx("tbody",{children:((f==null?void 0:f.milkTypeEntries)||[]).map((Y,_)=>{var R,S;return e.jsxs("tr",{className:`border-b border-gray-200\r
                    transition-all duration-200\r
                    hover:bg-gradient-to-r hover:from-indigo-50/40 hover:to-purple-50/40\r
                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]\r
                    hover:-translate-y-[1px]`,children:[e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(y.Checkbox,{color:"blue",ripple:!0,className:"p-0 hover:scale-105 transition-transform duration-150 outline-none",containerProps:{className:"px-1 m-0"},name:`milkTypeEntries[${_}].selected`,checked:((S=(R=f.milkTypeEntries)==null?void 0:R[_])==null?void 0:S.selected)||!1,onChange:x})})}),e.jsx("td",{className:"py-4 px-1 text-gray-900 font-medium tracking-wide break-after-all w-[30%]",children:Y.name}),e.jsx("td",{className:"py-4 px-1",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("input",{type:"number",placeholder:"",className:`w-[60px] px-0 py-2 text-center rounded-lg border border-gray-300\r
                                bg-gray-50 focus:bg-white\r
                                focus:ring-2 focus:ring-indigo-500\r
                                outline-none shadow-sm transition-all`,name:`milkTypeEntries[${_}].pricePerUnit`,min:1,step:"0.01",value:f.milkTypeEntries[_].pricePerUnit,onChange:x,onBlur:I,onWheel:k=>k.target.blur()})})})]},Y._id||`milkType-${_}`)})})]})})}),m.milkTypeEntries&&U.milkTypeEntries&&e.jsx("p",{className:"text-red-500 text-sm mt-2 font-bold text-center",children:m.milkTypeEntries}),e.jsx("div",{className:"sticky bottom-0 backdrop-blur-md p-5 pt-7 pb-safe-5",children:e.jsx(y.Button,{type:"submit",className:"w-full bg-[#005ec4] hover:bg-[#004aa0] py-3 rounded-lg shadow-lg",disabled:p,children:g("purchase.milkPreferencesForm.updateButton")})})]})})},Ze=ie.memo(Xe),er=ie.memo(function({entry:t,idx:l,dragProvided:i,dataKey:N,value:u,ctx:p}){const{tableBg:g,borderColor:b,canDrag:D,isAdmin:f,bulkPurchase:x,deliveryBoyAccessList:I,t:m,navigate:U,onQuantityChange:Y,onSave:_,onOpenProductMenu:R,onNavigateToBillCard:S,onDeleteParty:k}=p;let $=l%2===0?g:"bg-white";if(!["auto-fill","auto","alternate","manual","update","auto-register"].includes(t.entryMode))$="bg-[#ffaeaee6]";else{const P=Number(t.quantityInLiters)||0,B=Number(t.customerQuantityInLiters)||0;P===0?$="bg-red-200 border-l-4 border-red-500":P<B?$="bg-yellow-400 border-l-4 border-yellow-800":P>B?$="bg-green-200 border-l-4 border-green-500":t.entryMode==="manual"?$="bg-blue-200 border-l-4 border-blue-600":t.entryMode==="update"&&($="bg-purple-100 border-l-4 border-purple-600")}return e.jsxs("tr",E(C({ref:i.innerRef},D?i.draggableProps:{}),{className:`border ${$} relative`,children:[D&&e.jsx("td",E(C({className:`px-1 py-1 text-center font-semibold border cursor-grab active:cursor-grabbing select-none ${b}`},D?i.dragHandleProps:{}),{children:"⋮⋮"})),e.jsx("td",{className:`px-1 py-1 text-center notranslate ${b}`,children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{children:l+1}),f&&e.jsx("div",{children:e.jsxs(y.Menu,{placement:"bottom-end",allowHover:!1,children:[e.jsx(y.MenuHandler,{children:e.jsx(y.IconButton,{variant:"text",className:`\r
                                        w-9 h-9 rounded-xl border border-gray-300\r
                                        bg-gray-50 hover:bg-gray-100\r
                                        active:scale-95\r
                                        transition-all duration-200\r
                                        shadow-sm hover:shadow-md\r
                                    `,children:e.jsx(Oe,{className:"w-5 h-5 text-gray-700"})})}),e.jsxs(y.MenuList,{className:`\r
                                    min-w-[200px]\r
                                    rounded-2xl\r
                                    border border-white/20\r
                                    bg-white/90\r
                                    backdrop-blur-xl\r
                                    shadow-[0_10px_40px_rgba(0,0,0,0.12)]\r
                                    p-2\r
                                    overflow-hidden\r
                                `,children:[e.jsxs(y.MenuItem,{onClick:()=>R(t),className:`\r
                                        flex items-center gap-3\r
                                        rounded-xl px-3 py-3\r
                                        transition-all duration-200\r
                                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50\r
                                        active:scale-[0.98]\r
                                        group\r
                                    `,children:[e.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center bg-blue-100 group-hover:bg-blue-200 transition-all duration-200",children:e.jsx(Ge,{className:"w-5 h-5 text-blue-600"})}),e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:m("purchase.dailyRegisterTable.updateProduct")})]}),e.jsxs(y.MenuItem,{onClick:()=>{U(`/party/update/${t.purchaseId}`,{state:{navigate:window.location.pathname}})},className:`\r
                                        flex items-center gap-3\r
                                        rounded-xl px-3 py-3\r
                                        transition-all duration-200\r
                                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50\r
                                        active:scale-[0.98]\r
                                        group\r
                                        mt-1\r
                                    `,children:[e.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center bg-blue-100 group-hover:bg-blue-200 transition-all duration-200",children:e.jsx(qe,{className:"w-5 h-5 text-blue-600"})}),e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:m("purchase.dailyRegisterTable.editParty")})]}),e.jsxs(y.MenuItem,{onClick:()=>k(t),className:`\r
                                        flex items-center gap-3\r
                                        rounded-xl px-3 py-3\r
                                        transition-all duration-200\r
                                        hover:bg-red-50\r
                                        active:scale-[0.98]\r
                                        group\r
                                        mt-1\r
                                    `,children:[e.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center bg-red-100 group-hover:bg-red-200 transition-all duration-200",children:e.jsx(Qe,{className:"w-5 h-5 text-red-600"})}),e.jsx("span",{className:"text-sm font-semibold text-red-600",children:m("purchase.dailyRegisterTable.deleteParty")})]})]})]})})]})}),e.jsxs("td",{className:`px-1 py-1 notranslate cursor-pointer break-all ${b}`,children:[e.jsxs("span",{children:[e.jsx("b",{children:t.name})," - ",e.jsx("span",{className:"text-red-900 font-bold",children:t.milkType}),I.canViewMilkPrice?` ( ${t.pricePerUnit} )`:""]}),e.jsx("br",{}),(I.showPhone||(t==null?void 0:t.isShowPhoneToDeliveryBoy))&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"break-all",children:t.phone}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(t.phone),je.success(m("purchase.dailyRegisterTable.phoneCopiedToast"))},className:"ml-2 text-blue-600 hover:text-blue-800",title:m("purchase.dailyRegisterTable.copyPhoneTitle"),children:e.jsx("i",{className:"fa-solid fa-copy"})}),e.jsx("br",{})]})]}),f&&e.jsx("td",{className:`px-1 py-1 cursor-pointer ${b}`,onClick:()=>S(t.purchaseId),children:e.jsx("div",{className:"flex justify-center",children:e.jsx(ze,{className:"w-5 text-blue-600"})})}),e.jsxs("td",{className:`px-1 py-1 text-center ${b} relative`,children:[e.jsx("input",{"data-daily-sale-key":N,type:"number",min:0,inputMode:"decimal",enterKeyHint:"next",disabled:!I.canEditList||(t==null?void 0:t.vacationMode),value:u,onChange:P=>Y(t,P.target.value),onBlur:P=>{x||_(t,P.target.value)},onKeyDown:P=>{if(P.key==="Enter"){P.preventDefault();const B=P.target,Q=document.querySelectorAll("input[data-daily-sale-key]"),v=Array.from(Q).findIndex(W=>W===B),H=Q[v+1];B.blur(),setTimeout(()=>{H&&H.focus()},0)}},onWheel:P=>P.target.blur(),className:"w-10 sm:w-20 lg:w-20 font-extrabold text-center border rounded-md py-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"}),(t==null?void 0:t.vacationMode)&&e.jsx("div",{className:"absolute z-10 top-0 right-0 overflow-hidden w-[96px] h-[48px] pointer-events-none",children:e.jsx("div",{className:`\r
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
`})})]})]}))}),rr=o=>{var de;const{appSelector:t,dispatch:l}=ne(),i=ye(),{deliveryBoyId:N}=_e(),{userData:u}=Ee(),{t:p}=oe(),{dailyRegisterData:g,deliveryBoyAccess:b,adminData:D,dailySaleDate:f}=t(r=>r.app),x=(de=D==null?void 0:D.data)==null?void 0:de.moduleSettings,{entries:I=[],timePreference:m,handleUpdateCustomerMilkEntry:U,showDragColumn:Y=!0,fetchRegister:_,estimate:R}=o,S=(b==null?void 0:b.data)||{},[k,$]=n.useState([]),[A,P]=n.useState({}),[B,Q]=n.useState(!1),[v,H]=n.useState(null),[W,V]=n.useState(!1),s=n.useRef({}),h=n.useMemo(()=>m==="morning"?"bg-teal-50":"bg-blue-50",[m]),d=n.useMemo(()=>m==="morning"?"bg-teal-600":"bg-blue-600",[m]),T=n.useMemo(()=>m==="morning"?"border border-teal-600":"border border-blue-600",[m]);n.useEffect(()=>{$(I||[]),P({}),s.current={}},[I,m]);const O=n.useCallback(r=>`${r.purchaseId}_${r.milkTypeId}_${m}_${r.milkTimePreferenceId}`,[m]),Z=n.useCallback((r,a)=>{const c=a,w=O(r);if(!/^\d*\.?\d*$/.test(c))return;let j=c;if(j.length>1&&j.startsWith("0")&&!j.startsWith("0.")&&(j=j.replace(/^0+/,"")),P(K=>E(C({},K),{[w]:j})),s.current[w]=j,a==="")return;const M=Number(j);Number.isNaN(M)||M<0},[O,m]),ee=n.useCallback(r=>{var c;const a=O(r);return A[a]!==void 0?A[a]:s.current[a]!==void 0?s.current[a]:R?["alternate"].includes(r==null?void 0:r.entryMode)||r!=null&&r.vacationMode?"":r==null?void 0:r.quantityInLiters:x!=null&&x.bulkPurchase?["alternate","auto-fill"].includes(r==null?void 0:r.entryMode)||r!=null&&r.vacationMode?"":r==null?void 0:r.quantityInLiters:["auto-fill","alternate"].includes(r==null?void 0:r.entryMode)?"":(c=r==null?void 0:r.quantityInLiters)!=null?c:""},[O,A,R,x==null?void 0:x.bulkPurchase]),ae=n.useMemo(()=>{let r=0;return k.forEach(a=>{var j,M,K;const c=O(a),w=(K=(M=(j=A[c])!=null?j:s.current[c])!=null?M:a.quantityInLiters)!=null?K:0;(a.entryMode!=="auto-fill"||R&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1)||x!=null&&x.bulkPurchase&&(!["auto-fill","alternate"].includes(a==null?void 0:a.entryMode)||(a==null?void 0:a.vacationMode)===!1))&&(r+=Number(w)||0)}),r},[k,A,O,R,x==null?void 0:x.bulkPurchase]),te=n.useCallback(r=>{l({type:"APP_SET_CURRENT_MONTH",payload:X(),name:"currentMonth",meta:{type:"SET_CURRENT_MONTH"}});const a=[...new Set(k.map(c=>c.purchaseId))];l({type:"APP_SET_CUSTOMER_LIST_IN_BILL_CARD",payload:{customers:a.map(c=>({_id:c}))},name:"customerListInBillCard",meta:{type:"SET_CUSTOMER_LIST_IN_BILL_CARD"}}),i(`/party/bill/${r}`,{state:{navigate:window.location.pathname,purchaseId:r}})},[i,k,l]),re=(u==null?void 0:u.role)==="admin",G=n.useCallback((r,a)=>{if(a===""&&(r!=null&&r._id))U({_id:r==null?void 0:r._id,purchaseId:r.purchaseId,milkTypeId:r.milkTypeId,quantityInLiters:0,milkTimePreference:m,pricePerUnit:r.pricePerUnit,mode:"delete"}),P({}),s.current={};else{if(Number.isNaN(+a)||+a<0||a===""||a===null||a===void 0)return;U({_id:r==null?void 0:r._id,purchaseId:r.purchaseId,milkTypeId:r.milkTypeId,quantityInLiters:a,milkTimePreference:m,pricePerUnit:r.pricePerUnit}),P({}),s.current={}}},[m,U]),J=n.useCallback(()=>L(null,null,function*(){l(yield F({method:"POST",apiUrl:"party/register",data:{deliveryDate:f},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER",apiSuccessCallBack:()=>{Q(!1)}}))}),[f]),ve=(r,a)=>r.map(c=>{const w=a.filter(q=>{var ue;return q.milkTypeId===c._id||((ue=q.milkType)==null?void 0:ue._id)===c._id}),j=w.find(q=>q.timePreference==="morning"),M=w.find(q=>q.timePreference==="evening"),K=(j==null?void 0:j._id)||(M==null?void 0:M._id)||null;return E(C({},c),{_id:K,milkTypeId:c._id,selected:w.length>0,morning:j?j.dailyMilkQuantityInLiters:1,evening:M?M.dailyMilkQuantityInLiters:1,pricePerUnit:w.length>0&&w[0].pricePerUnit||c.pricePerUnit})}),we=n.useCallback((r,a)=>L(null,null,function*(){l(yield F({apiUrl:"milkType",loader:!0,apiSuccessCallBack:w=>L(null,[w],function*({milkTypes:c}){if(a){r.milkTypeEntries=yield ve(c,r.milkPreferences);const j=E(C({},r),{entries:void 0});Q(j)}})}))}),[l]),ce=n.useCallback(r=>L(null,null,function*(){l(yield F({apiUrl:`party/${r.purchaseId}`,loader:!0,apiSuccessCallBack:a=>L(null,null,function*(){yield we(a.customer,r.purchaseId)})}))}),[l]);n.useCallback(r=>L(null,null,function*(){l(yield F({method:"POST",apiUrl:"payment/customer/outstanding",loader:!0,data:{purchaseId:r.purchaseId},apiSuccessCallBack:a=>{const c=a==null?void 0:a.customer;c&&(l({type:"APP_SET_SELECTED_CUSTOMER_PAYMENT",payload:c,name:"selectedCustomerPayment",meta:{type:"SET_SELECTED_CUSTOMER_PAYMENT"}}),i(`/add/payment/bill/${c==null?void 0:c.purchaseId._id}/sales`,{state:{navigate:window.location.pathname}}))}}))}),[l]);const Ne=n.useCallback(()=>L(null,null,function*(){if(v!=null&&v.purchaseId){V(!0);try{yield l(yield F({method:"POST",apiUrl:`party/moveToRecycleBin/${v.purchaseId}`,loader:!0,apiSuccessCallBack:()=>{H(null),_()}}))}finally{V(!1)}}}),[l,v,_]),ke=n.useCallback(r=>L(null,null,function*(){if(!r.destination)return;const a=[...k],[c]=a.splice(r.source.index,1);a.splice(r.destination.index,0,c),$(a),l(yield F({method:"POST",apiUrl:"dailyRegisterOrder/purchase",data:{customers:a.map((w,j)=>({purchaseId:w.purchaseId,milkTypeId:w.milkTypeId,milkTimePreferenceId:w.milkTimePreferenceId,registerIndex:j+1}))},loader:!0,apiSuccessCallBack:()=>_()}))}),[k,l,N,_]),Te=n.useCallback(()=>{const r=[];if(k.forEach(a=>{var q;const c=ee(a),w=new Date(f),j=new Date;if(w.setHours(j.getHours(),j.getMinutes(),j.getSeconds(),j.getMilliseconds()),(c===""||c===null)&&(a!=null&&a._id)){r.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:0,milkTimePreference:m.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:w,deliveryDateIST:ge(new Date(w)),mode:"delete"});return}if(c===""||c===null||c===void 0||Number.isNaN(+c)||+c<0)return;const M=+c,K=Number((q=a==null?void 0:a.quantityInLiters)!=null?q:0);a!=null&&a._id&&M===K||r.push({_id:a==null?void 0:a._id,purchaseId:a.purchaseId,milkTypeId:a.milkTypeId,quantityInLiters:M,milkTimePreference:m.toLowerCase(),pricePerUnit:a.pricePerUnit,deliveryDate:w,deliveryDateIST:ge(new Date(w)),mode:a!=null&&a._id?"update":"create"})}),r.length===0){je.error(p("purchase.dailyRegisterTable.noValidEntriesToast"));return}U({milkEntries:r,isBulkPurchase:!0}),P({}),s.current={}},[k,ee,m,U,f,p]),z=Y&&(S==null?void 0:S.canDragDrop),Pe=n.useMemo(()=>({tableBg:h,borderColor:T,canDrag:z,isAdmin:re,bulkPurchase:x==null?void 0:x.bulkPurchase,deliveryBoyAccessList:S,t:p,navigate:i,onQuantityChange:Z,onSave:G,onOpenProductMenu:ce,onNavigateToBillCard:te,onDeleteParty:H}),[h,T,z,re,x==null?void 0:x.bulkPurchase,S,p,i,Z,G,ce,te]);return m?e.jsxs("div",{className:"rounded-xl shadow-lg border border-gray-300 mb-6",children:[e.jsx("div",{className:`${d} text-white px-6 py-1 font-bold text-lg rounded-t-xl flex justify-between items-center gap-1`}),e.jsxs("table",{className:"min-w-full border-collapse text-sm",children:[e.jsx("thead",{className:`${d} text-white`,children:e.jsxs("tr",{className:T,children:[z&&e.jsx("th",{className:`px-1 py-1 border border-l-4 notranslate w-10 ${T}`,children:"⇅"}),e.jsx("th",{className:`px-2 py-3 w-5 border-l-4 ${T}`,children:"#"}),e.jsx("th",{className:`px-2 py-3 ${T}`,children:p("purchase.dailyRegisterTable.customerColumn")}),re&&e.jsx("th",{className:`px-2 py-3 ${T} w-5`,children:"#"}),e.jsx("th",{className:`px-1 py-1 ${T} w-10 sm:w-20 lg:w-20`,children:p("purchase.dailyRegisterTable.literColumn")})]})}),e.jsx(Le,{onDragEnd:z?ke:void 0,children:e.jsx(Re,{droppableId:"table-body",isDropDisabled:!z,children:r=>e.jsxs("tbody",E(C({ref:r.innerRef},r.droppableProps),{children:[k.map((a,c)=>e.jsx($e,{draggableId:`${a.purchaseId}_${a.milkTypeId}`,index:c,isDragDisabled:!z,children:w=>e.jsx(er,{entry:a,idx:c,dragProvided:w,dataKey:O(a),value:ee(a),ctx:Pe})},`${a.purchaseId}-${c}`)),r.placeholder]}))})}),e.jsx("tfoot",{className:"bg-gray-100 font-semibold",children:e.jsxs("tr",{children:[e.jsx("td",{colSpan:z?re?4:3:z?2:re?3:2,className:`px-2 py-2 text-center ${T}`,children:p("purchase.dailyRegisterTable.totalMilk")}),e.jsxs("td",{className:`px-2 py-2 text-center border notranslate ${T}`,children:[ae.toFixed(2)," L"]})]})})]}),(x==null?void 0:x.bulkPurchase)&&S.canEditList&&e.jsx("div",{className:"flex justify-center gap-2 my-2",children:e.jsx(y.Button,{variant:"gradient",color:"pink",onClick:()=>Te(),children:p("purchase.dailyRegisterTable.addBulkPurchase")})}),e.jsx(y.Dialog,{open:B,handler:()=>Q(!1),className:"bg-transparent shadow-none border-none outline-none rounded-2xl w-[96%] sm:max-w-[620px] md:max-w-[600px] lg:max-w-[500px]",size:"xl",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[520px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs(y.DialogHeader,{className:"flex flex-col items-start gap-1 pb-4 border-b border-gray-200",children:[e.jsx(y.Typography,{className:"text-xl font-bold text-gray-900",children:p("purchase.dailyRegisterTable.selectProductTitle")}),e.jsx(y.Typography,{className:"text-sm text-gray-900 font-normal",children:p("purchase.dailyRegisterTable.selectProductSubtitle")})]}),e.jsx(y.DialogBody,{className:"pt-5 px-0 overflow-y-auto",children:e.jsx(Ze,E(C(C({},o),B),{handleSaveAndCloseProductPopup:J}))})]})]})}),e.jsxs(y.Dialog,{open:!!v,handler:()=>H(null),size:"xs",className:"rounded-2xl",children:[e.jsx(y.DialogHeader,{className:"text-[15px] font-bold text-gray-800 pb-2",children:p("purchase.dailyRegisterTable.deletePartyDialog.title")}),e.jsxs(y.DialogBody,{className:"pt-0",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:p("purchase.dailyRegisterTable.deletePartyDialog.message",{name:v==null?void 0:v.name})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(y.Button,{variant:"outlined",size:"sm",onClick:()=>H(null),className:"flex-1 rounded-xl border-gray-300 text-gray-600 normal-case",children:p("common.buttons.cancel")}),e.jsx(y.Button,{size:"sm",disabled:W,onClick:Ne,className:"flex-1 rounded-xl bg-red-600 normal-case",children:p(W?"purchase.dailyRegisterTable.deletePartyDialog.deleting":"purchase.dailyRegisterTable.deletePartyDialog.confirm")})]})]})]})]}):null},ar=ie.memo(rr),tr=o=>{const t=o instanceof Date?o:new Date(o);if(isNaN(t))return null;const l=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),i=5.5*60*60*1e3,N=new Date(l+i),u=N.getUTCFullYear(),p=String(N.getUTCMonth()+1).padStart(2,"0"),g=String(N.getUTCDate()).padStart(2,"0");let b=N.getUTCHours();const D=String(N.getUTCMinutes()).padStart(2,"0"),f=b>=12?"PM":"AM";return b=b%12||12,`${u}-${p}-${g} ${b}:${D} ${f}`},kr=()=>{const o=n.useRef(null),t=ye(),l=Me(),{dispatch:i,appSelector:N}=ne(),{t:u}=oe(),{dailyPurchaseRegisterData:p,dailySaleDate:g,adminData:b,dailySaleSettings:D}=N(s=>s.app),[f,x]=n.useState(void 0),I=s=>{const h=(s==null?void 0:s.toLowerCase())||"both";return h==="morning"?"Morning":h==="evening"?"Evening":new Date().getHours()<12?"Morning":"Evening"};n.useEffect(()=>{var s,h;(h=(s=b==null?void 0:b.data)==null?void 0:s.generalSettings)!=null&&h.autoSelectShift?x(I("both")):x((D==null?void 0:D.selectedShift)||I("both"))},[]);const[m,U]=n.useState(!0),[Y,_]=n.useState(""),[R,S]=n.useState(""),[k,$]=n.useState({showDragColumn:!1,estimate:!1}),A=({deliveryDate:s})=>h=>L(null,null,function*(){h(yield F({method:"POST",apiUrl:"party/register",data:{deliveryDate:s},loader:!0,storeKey:"dailyPurchaseRegisterData",storeActionType:"FETCH_DAILY_REGISTER"}))}),P=n.useCallback(()=>{g&&i(A({deliveryDate:g}))},[i,g]),B=n.useCallback(s=>L(null,null,function*(){const h=s==="prev"?X(g).subtract(1,"day").format("YYYY-MM-DD"):X(g).add(1,"day").format("YYYY-MM-DD");i({type:"APP_UPDATE_DAILY_SALE_DATE",payload:h,name:"dailySaleDate",meta:{type:"UPDATE_DAILY_SALE_DATE"}})}),[i,g]),Q=n.useCallback(s=>{const h=s.target.value;if(!h)return;const d=X(h,"YYYY-MM-DD");i({type:"APP_SET_DAILY_SALE_DATE",payload:d.format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}})},[i]),v=f==="Morning"?p==null?void 0:p.morning:p==null?void 0:p.evening;n.useEffect(()=>{const s=setTimeout(()=>{S(Y)},300);return()=>clearTimeout(s)},[Y]);const H=n.useMemo(()=>{if(!v)return[];const s=R.toLowerCase().trim();return s?v.filter(h=>{var T;return(((T=h.name)==null?void 0:T.toLowerCase())||"").includes(s)}):v},[v,R]),W=n.useCallback(re=>L(null,[re],function*({_id:s,purchaseId:h,milkTypeId:d,quantityInLiters:T,milkTimePreference:O,mode:Z="",pricePerUnit:ee,isBulkPurchase:ae=!1,milkEntries:te}){if(ae){i(yield F({method:"POST",apiUrl:"purchaseMilkEntry",data:{milkEntries:te,isBulkSell:ae},loader:!0,apiSuccessCallBack:()=>{i(A({deliveryDate:g}))}}));return}const G=new Date(g),J=new Date;G.setHours(J.getHours(),J.getMinutes(),J.getSeconds(),J.getMilliseconds()),i(yield F({method:"POST",apiUrl:"purchaseMilkEntry",data:{milkEntries:[E(C(C({},s&&{_id:s}),Z&&{mode:Z}),{purchaseId:h,milkTypeId:d,quantityInLiters:T,pricePerUnit:ee,deliveryDate:G,deliveryDateIST:tr(new Date(G)),milkTimePreference:O.toLowerCase()})]},loader:!0,apiSuccessCallBack:()=>{i(A({deliveryDate:g}))}}))}),[i,g]),V=n.useMemo(()=>{if(!(v!=null&&v.length))return[];let s;k!=null&&k.estimate?s=v:s=v.filter(d=>["auto","manual","update"].includes(d==null?void 0:d.entryMode));const h={};return s.forEach(d=>{const T=m?`${(d==null?void 0:d.milkType)||"Milk"}`:`${(d==null?void 0:d.milkType)||"Milk"}_${(d==null?void 0:d.pricePerUnit)||0}`;h[T]||(h[T]={animalName:(d==null?void 0:d.milkType)||"Milk",totalLiter:0,pricePerUnit:(d==null?void 0:d.pricePerUnit)||0}),h[T].totalLiter+=Number((d==null?void 0:d.quantityInLiters)||0)}),Object.values(h)},[v,m,k==null?void 0:k.estimate]);if(n.useEffect(()=>(g||i({type:"APP_SET_DAILY_SALE_DATE",payload:X().format("YYYY-MM-DD"),name:"dailySaleDate",meta:{type:"SET_DAILY_SALE_DATE"}}),()=>{i({type:"APP_UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY",payload:void 0,name:"dailyPurchaseRegisterData",meta:{type:"UPDATE_CUSTOMER_MILK_ENTRY_QUANTITY"}})}),[]),n.useEffect(()=>{g&&i(A({deliveryDate:g}))},[g]),!!f)return e.jsxs(e.Fragment,{children:[e.jsx(Se,{back:!0,headerTitle:e.jsx("div",{className:"text-gray-900 font-bold text-sm flex items-center",children:u("purchase.dailyPurchase.headerTitle")}),onBack:()=>{var s;return t(((s=l==null?void 0:l.state)==null?void 0:s.navigate)||"/dashboard")},menu:e.jsx(e.Fragment,{children:e.jsxs(y.Menu,{placement:"bottom-end",children:[e.jsx(y.MenuHandler,{children:e.jsx(y.IconButton,{className:"w-[40px] h-[40px] rounded-full border border-[#ffffff]/30 bg-[#ffffff]/10 backdrop-blur-md text-[#ffffff] shadow-md transition-all hover:bg-[#ffffff]/20 p-0 flex justify-center items-center gap-2",children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical text-lg"})})}),e.jsxs(y.MenuList,{className:`\r
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
                        `,children:e.jsx("i",{className:"fa-solid fa-sliders text-white text-lg"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-white font-bold text-[15px] tracking-wide",children:u("purchase.dailyPurchase.menu.quickActions")}),e.jsx("div",{className:"text-white/80 text-[11px]",children:u("purchase.dailyPurchase.menu.quickActionsDesc")})]})]})]}),e.jsxs("div",{className:"p-3 flex flex-col gap-2 outline-none",children:[e.jsxs(y.MenuItem,{onClick:()=>t("/party/add"),className:`\r
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
                            `,children:e.jsx("i",{className:"fa-solid fa-user-plus text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900",children:u("purchase.dailyPurchase.menu.addNewParty")}),e.jsx("div",{className:"text-[11px] text-gray-900",children:u("purchase.dailyPurchase.menu.addNewPartyDesc")})]})]}),e.jsx("i",{className:"fa-solid fa-angle-right text-gray-900 text-xs"})]}),e.jsx("div",{className:`\r
                        px-2 pt-2 pb-1\r
                        text-[11px]\r
                        uppercase tracking-[0.18em]\r
                        font-bold text-gray-900\r
                    `,children:u("purchase.dailyPurchase.menu.preferences")}),e.jsxs(y.MenuItem,{onClick:()=>$(s=>E(C({},s),{showDragColumn:!s.showDragColumn})),className:`\r
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
                            `,children:e.jsx("i",{className:"fa-solid fa-grip-vertical text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900",children:u("purchase.dailyPurchase.menu.enableDrag")}),e.jsx("div",{className:"text-[11px] text-gray-900",children:u("purchase.dailyPurchase.menu.enableDragDesc")})]})]}),e.jsx(y.Checkbox,{checked:k.showDragColumn,onChange:()=>{},ripple:!1,className:"rounded-md",color:"indigo"})]})]})]})]})})}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-1 py-4 h-safe overflow-y-auto",children:[e.jsxs("div",{className:"flex mb-4 justify-between items-center px-4 py-3 bg-white/70 backdrop-blur-lg rounded-xl shadow-md border border-gray-200",children:[e.jsx("button",{onClick:()=>B("prev"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-left text-blue-700 text-[15px]"})}),e.jsxs("div",{className:"relative cursor-pointer",children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-800 tracking-wide",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:X(g).format("DD MMMM, YYYY")}),e.jsx("i",{className:"fa-solid fa-calendar-days"})]})}),e.jsx("input",{ref:o,type:"date",className:"absolute inset-0 opacity-0 cursor-pointer",value:g||"",onChange:Q})]}),e.jsx("button",{onClick:()=>B("next"),className:"w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow",children:e.jsx("i",{className:"fa-solid fa-chevron-right text-blue-700 text-[15px]"})})]}),e.jsx("div",{className:"w-full pb-4",children:e.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{label:"Morning",displayLabel:u("purchase.dailyPurchase.morning"),icon:Ke,gradient:"from-yellow-900/40 to-yellow-300/10",border:"border-yellow-800",glow:"shadow-yellow-800",text:"text-yellow-900"},{label:"Evening",displayLabel:u("purchase.dailyPurchase.evening"),icon:We,gradient:"from-indigo-500/20 to-indigo-300/10",border:"border-indigo-400",glow:"shadow-indigo-400",text:"text-indigo-700"}].map(s=>{const h=f===s.label,d=s.icon;return e.jsxs("div",{onClick:()=>x(s.label),className:`
                    relative cursor-pointer rounded-lg p-[1px]
                    transition-all duration-300 group

                `,children:[e.jsx("div",{className:`
                        absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300
                        ${s.glow}
                    `}),e.jsxs("div",{className:`flex gap-2 items-center justify-center
                        relative rounded-lg px-2 py-2 backdrop-blur-xl
                        border transition-all duration-300

                        ${h?`${s.border} bg-gradient-to-br ${s.gradient} shadow-lg ${s.glow}`:"border-gray-200 bg-white/70"}
                    `,children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{className:`
                                p-2 rounded-lg transition-all duration-300
                                ${h?"bg-white/70 shadow-sm":"bg-gray-100"}
                            `,children:e.jsx(d,{className:`
                                    w-[15px] h-[15px]
                                    ${h?s.text:"text-gray-400"}
                                `})})}),e.jsx("div",{className:`
                            text-sm font-semibold tracking-wide
                            ${h?s.text:"text-gray-600"}
                        `,children:s.displayLabel})]})]},s.label)})})}),e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("input",{type:"text",placeholder:u("purchase.dailyPurchase.searchPlaceholder"),value:Y,onChange:s=>_(s.target.value),className:`\r
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
                            `}),e.jsx("i",{className:"fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"})]})}),v&&v.length>0?e.jsxs(e.Fragment,{children:[e.jsx(ar,{timePreference:f==null?void 0:f.toLowerCase(),entries:[...H].sort((s,h)=>{var d,T;return((d=s.registerIndex)!=null?d:-1/0)-((T=h.registerIndex)!=null?T:-1/0)}),handleUpdateCustomerMilkEntry:W,fetchRegister:P,estimate:k.estimate,showDragColumn:k.showDragColumn},"daily-register"),V.length>0&&e.jsx("div",{className:"flex justify-center mb-6",children:e.jsxs("label",{className:`\r
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
        `}),e.jsx(y.Switch,{id:"autoMilkEntry",name:"autoMilkEntry",checked:m,onChange:()=>U(!m),className:`\r
                peer scale-110\r
                checked:bg-gradient-to-r checked:from-blue-500 checked:to-purple-600\r
                checked:ring-4 checked:ring-purple-300/40\r
                transition-all duration-500\r
            `,label:""}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{className:"text-lg font-semibold text-gray-800 tracking-wide",children:u("purchase.dailyPurchase.combineByProduct")}),e.jsx("span",{className:"text-[11px] text-black italic",children:u("purchase.dailyPurchase.combineByProductDesc")})]})]})}),V.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`\r
                    w-9 h-9 rounded-xl\r
                    bg-gradient-to-br from-indigo-600 to-blue-600\r
                    flex items-center justify-center shadow-lg\r
                `,children:e.jsx("i",{className:"fa-solid fa-cubes text-white text-sm"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[15px] font-bold text-gray-900",children:u("purchase.dailyPurchase.summaryTitle")}),e.jsx("div",{className:"text-[12px] text-gray-900",children:u("purchase.dailyPurchase.summarySubtitle")})]})]})}),e.jsx("div",{className:`\r
            grid grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            xl:grid-cols-4\r
            gap-5\r
        `,children:V.map(({animalName:s,totalLiter:h,pricePerUnit:d})=>e.jsxs("div",{className:`\r
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
                            `,children:s}),!m&&e.jsxs("div",{className:"text-[12px] text-indigo-600 font-bold mt-1",children:["₹ ",d," ",u("purchase.dailyPurchase.perLiter")]})]}),e.jsx("div",{className:"mt-2 flex items-end justify-between",children:e.jsxs("div",{className:"flex items-end gap-1",children:[e.jsx("span",{className:`\r
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
                                `,children:u("purchase.dailyPurchase.literUnit")})]})}),e.jsx("div",{className:`\r
                            mt-2 h-px\r
                            bg-gradient-to-r\r
                            from-transparent\r
                            via-gray-300\r
                            to-transparent\r
                        `}),e.jsxs("div",{className:`\r
                            mt-2 text-[12px]\r
                            text-gray-900\r
                            flex items-center gap-1\r
                        `,children:[e.jsx("i",{className:"fa-solid fa-chart-line text-indigo-500"}),u("purchase.dailyPurchase.totalPurchased")]})]})]},`${s}_${d||"merge"}`))})]})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center space-y-2",children:[e.jsx("div",{className:"bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-full shadow-sm mb-3",children:e.jsx("i",{className:"fa-solid fa-users-slash text-red-400 text-3xl"})}),e.jsx("h3",{className:"text-gray-800 font-semibold text-base",children:u("purchase.dailyPurchase.emptyTitle")}),e.jsx("p",{className:"text-sm text-gray-500",children:u("purchase.dailyPurchase.emptyDesc")})]})]})]})};export{tr as convertToIST_AMPM,kr as default};
