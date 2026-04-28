var y=(s,p,d)=>new Promise((f,u)=>{var v=m=>{try{x(d.next(m))}catch(g){u(g)}},h=m=>{try{x(d.throw(m))}catch(g){u(g)}},x=m=>m.done?f(m.value):Promise.resolve(m.value).then(v,h);x((d=d.apply(s,p)).next())});import{r as i,d as ie,u as de,R as U,h as T,A as V,j as e,b as r,C as A,F as I,D as _,k as F}from"./index-DhMoevdU.js";import ce from"./DefaultDashboardNavbar-CJfjq9ZE.js";import{P,F as me}from"./AllPaymentList-BRu5K0Gx.js";import{S as ue,s as he}from"./index-Cf3qZt6L.js";import"./UserIcon-IXnMdWGP.js";const xe=()=>`
<div class="invoice-footer">
<p style="margin:0">
<b>info@snsdairy.com</b> | <b>Smart n Simple Dairy - All In One</b>
</p>
</div>
`,ge=({month:s,paymentType:p,payments:d=[],adminData:f})=>{const u=p==="sales"?"Sales Payment Report":"Purchase Payment Report";let v=0,h=0,x=0,m=0;const g=d.map((n,k)=>{const w=n.customerId||n.supplierId||n.customerDetail||n.supplierDetail||{},S=n.totalBilled||n.totalPurchased||0,N=n.totalPaid||0,R=Math.max(S-N,0),b=n.previousRemainingAmount||0;return v+=b,h+=S,x+=N,m+=R,`
<tr>
<td class="center">${k+1}</td>
<td class="name">${w.name||"-"}</td>
<td class="amount">${b.toLocaleString("en-IN")}</td>
<td class="amount">${S.toLocaleString("en-IN")}</td>
<td class="amount received">${N.toLocaleString("en-IN")}</td>
<td class="amount due">${R.toLocaleString("en-IN")}</td>
<td class="center">${w.phone||"-"}</td>
</tr>
`}).join("");return`
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8" />

<style>

@page {
    size: A4;
    margin: 20px;
}

body{
    font-family:"Inter","Segoe UI",Roboto,Arial;
    margin:0;
    color:#1f2937;
}

/* Header */

.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    border-bottom:2px solid #e5e7eb;
    padding-bottom:10px;
}

.company{
    font-size:22px;
    font-weight:700;
    color:#111827;
}

.report-title{
    font-size:16px;
    font-weight:600;
    margin-top:3px;
    color:#374151;
}

.meta{
    font-size:12px;
    color:#6b7280;
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:15px;
}

thead{
    background:#111827;
    color:white;
}

th{
    padding:10px;
    font-size:12px;
    text-align:left;
    border:1px solid #374151;
}

td{
    padding:9px;
    font-size:12px;
    border:1px solid #d1d5db;
}

tbody tr:nth-child(even){
    background:#fafafa;
}

.center{
    text-align:center;
}

.amount{
    text-align:right;
    font-weight:600;
}

th:nth-child(1),
td:nth-child(1){
    text-align:center;
}

th:nth-child(3),
th:nth-child(4),
th:nth-child(5),
th:nth-child(6),
td:nth-child(3),
td:nth-child(4),
td:nth-child(5),
td:nth-child(6){
    text-align:right;
}

.received{
    color:#059669;
}

.due{
    color:#dc2626;
}

.name{
    font-weight:600;
}

.total-wrapper{
    margin-top:18px;
    border:2px solid #111827;
    border-radius:8px;
    overflow:hidden;
}

.total-header{
    background:#111827;
    color:white;
    font-size:13px;
    font-weight:600;
    padding:8px 12px;
}

.total-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
}

.total-item{
    padding:12px 10px;
    border-right:1px solid #e5e7eb;
}

.total-item:last-child{
    border-right:none;
}

.total-label{
    font-size:11px;
    color:#6b7280;
}

.total-value{
    font-size:16px;
    font-weight:700;
    margin-top:4px;
}

.total-value.received{
    color:#059669;
}

.total-value.due{
    color:#dc2626;
}

.invoice-footer{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    text-align:center;
    font-size:11px;
    border-top:1px solid #ddd;
    padding:6px 0;
    background:white;
    color:#444;
}

</style>

</head>

<body>

<div class="header">

<div>
<div class="company">${f.companyId.companyName}</div>
<div class="report-title">${u}</div>
<div class="meta">Month : ${s}</div>
</div>

<div class="meta">
Generated : ${new Date().toLocaleString()}
</div>

</div>

<table>

<thead>
<tr>
<th>#</th>
<th>Account Name</th>
<th>Prev Total</th>
<th>Current Month</th>
<th>${p==="sales"?"Received":"Paid"}</th>
<th>Remaining</th>
<th>Mobile</th>
</tr>
</thead>

<tbody>
${g}
</tbody>

</table>

<div class="total-wrapper">

<div class="total-header">
Grand Summary
</div>

<div class="total-grid">

<div class="total-item">
<div class="total-label">Previous Balance</div>
<div class="total-value">₹ ${v.toLocaleString("en-IN")}</div>
</div>

<div class="total-item">
<div class="total-label">Current Month</div>
<div class="total-value">₹ ${h.toLocaleString("en-IN")}</div>
</div>

<div class="total-item">
<div class="total-label">Total Received</div>
<div class="total-value received">₹ ${x.toLocaleString("en-IN")}</div>
</div>

<div class="total-item">
<div class="total-label">Remaining Due</div>
<div class="total-value due">₹ ${m.toLocaleString("en-IN")}</div>
</div>

</div>

</div>

${xe()}

</body>
</html>
`},pe=12,X={[P.SALES]:{label:"Sales Payments",apiType:"sales",personKey:"customerId",deletedKey:"customerDetail",primaryColor:"green",dueLabel:"Amount To Collect"},[P.PURCHASE]:{label:"Purchase Payments",apiType:"purchase",personKey:"supplierId",deletedKey:"supplierDetail",primaryColor:"red",dueLabel:"Amount To Pay"}},Pe=()=>{var W,Z;const s=i.useRef(null),p=ie(),{dispatch:d,appSelector:f}=de(),[u,v]=i.useState(""),[h,x]=i.useState(""),[m,g]=i.useState(1),[n,k]=i.useState(P.SALES),[w,S]=i.useState(!1),[N,R]=i.useState(""),[b,O]=i.useState(null),B=U.useRef(null),{currentMonth:c,rawData:D,adminData:L}=f(t=>t.app),z=c==null?void 0:c.isSame(T(),"month"),G=i.useMemo(()=>X[n],[n]),ee=i.useCallback(()=>y(null,null,function*(){d(yield V({method:"POST",apiUrl:"payment/fetch",data:{month:c.format("YYYY-MM")},loader:!0,apiSuccessCallBack:t=>{const a={unpaid:1,partial:2,paid:3},l=(o=[])=>o.sort((M,j)=>(a[M.status]||5)-(a[j.status]||5));d({type:"APP_FETCH_PAYMENT_HISTORY",payload:{sales:l(t.payments.filter(o=>o.totalBilled>0)),purchase:l(t.purchasePayments.filter(o=>(o.totalBilled||(o==null?void 0:o.totalPurchased))>0))},name:"rawData",meta:{type:"FETCH_PAYMENT_HISTORY"}})}}))}),[d,c]),C=i.useMemo(()=>(D==null?void 0:D[n])||[],[D,n]),$=i.useMemo(()=>{if(!h)return C;const t=h.trim().toLowerCase();return C.filter(a=>{var J,Q;const l=a[G.personKey]||a[G.deletedKey];if(!l)return!1;const o=((J=l.name)==null?void 0:J.toLowerCase())||"",M=((Q=l.address)==null?void 0:Q.toLowerCase())||"",j=l.phone||"";return o.includes(t)||M.includes(t)||j.includes(t)})},[C,h,n]),E=i.useMemo(()=>$.slice(0,m*pe),[$,m]),Y=i.useMemo(()=>C.reduce((t,a)=>{t.totalBilled+=(a==null?void 0:a.totalBilled)||(a==null?void 0:a.totalPurchased)||0,t.totalPaid+=a.totalPaid||0;const l=Math.max(((a==null?void 0:a.totalBilled)||(a==null?void 0:a.totalPurchased)||0)-(a.totalPaid||0),0);return t.totalDue+=l,t.statusCount[a.status]=(t.statusCount[a.status]||0)+1,t},{totalBilled:0,totalPaid:0,totalDue:0,statusCount:{paid:0,partial:0,unpaid:0,overpaid:0}}),[C]),q=i.useCallback(t=>{d({type:"APP_CHANGE_CURRENT_MONTH",payload:t==="prev"?T(c).subtract(1,"month"):T(c).add(1,"month"),name:"currentMonth",meta:{type:"CHANGE_CURRENT_MONTH"}})},[c,T,d]),te=i.useCallback(t=>{const a=t.target.value;if(!a)return;const l=T(a,"YYYY-MM");d({type:"APP_CHANGE_CURRENT_MONTH",payload:l,name:"currentMonth",meta:{type:"CHANGE_CURRENT_MONTH"}})},[d]),ae=()=>y(null,null,function*(){const t=window.open("","_blank");let a=N;a+="<script>   window.onload = function() {   setTimeout(() => { window.print(); window.close(); }, 100);}; <\/script>",t?(t.document.write(a),t.document.close()):alert("Pop-up blocked! Please allow pop-ups for this website.")}),se=()=>y(null,null,function*(){if(A.isNativePlatform()&&(yield I.checkPermissions()).publicStorage!=="granted"&&(yield I.requestPermissions()).publicStorage!=="granted")throw new Error("Storage permission denied")}),re=t=>y(null,null,function*(){try{let a=yield F.checkPermissions();if(a.display!=="granted"&&(a=yield F.requestPermissions()),a.display!=="granted"){console.warn("Notification permission denied");return}yield F.schedule({notifications:[{title:"📄 Milk Bill Saved",body:`${c.format("MMMM YYYY")} ${n==="sales"?"Sales Payment":"Purchase Payment"} report successfully`,id:Math.floor(Date.now()%1e9),sound:"default",channelId:"milk-bill-channel",extra:{filePath:t.uri}}]})}catch(a){console.error("Notification error:",a)}}),K=t=>new Promise((a,l)=>{const o=new FileReader;o.onloadend=()=>{a(o.result.split(",")[1])},o.onerror=l,o.readAsDataURL(t)}),le=()=>y(null,null,function*(){var a;if(!b)return;const t=`${c.format("MMMM YYYY")} ${n==="sales"?"Sales Payment":"Purchase Payment"} Report.pdf`;if(!A.isNativePlatform()){const l=URL.createObjectURL(b),o=document.createElement("a");o.href=l,o.download=t,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(l);return}try{yield se();const l=yield K(b),o="SnS Dairy/Reports";try{yield I.mkdir({path:o,directory:_.Documents,recursive:!0})}catch(j){if(!((a=j.message)!=null&&a.toLowerCase().includes("exists")))throw j}const M=yield I.writeFile({path:`${o}/${t}`,data:l,directory:_.Documents});yield re(M)}catch(l){console.error("File save error",l)}}),oe=()=>y(null,null,function*(){if(!b)return;const t=`${c.format("MMMM YYYY")} ${n==="sales"?"Sales Payment":"Purchase Payment"} Report.pdf`;if(A.isNativePlatform())try{const a=yield K(b),l=yield I.writeFile({path:t,data:a,directory:_.Documents});yield ue.share({title:"",text:"",url:l.uri,dialogTitle:"Share Report"})}catch(a){console.error("❌ Mobile Share Error:",a)}else yield he(b,t)}),ne=i.useCallback(()=>y(null,null,function*(){if(!N)return;const t=new FormData;t.append("htmlFile",new Blob([N],{type:"text/html"}),"bill.html"),d(yield V({method:"POST",apiUrl:"milkEntry/downloadCard",responseType:"blob",data:t,loader:!0,apiSuccessCallBack:a=>y(null,null,function*(){O(new Blob([a],{type:"application/pdf"}))})}))}),[N]);return i.useEffect(()=>{O(null),R(""),y(null,null,function*(){const a=ge({month:c.format("MMMM YYYY"),paymentType:n,payments:C,adminData:L.data});R(a)})},[C,c,n]),i.useEffect(()=>{c&&ee()},[c]),i.useEffect(()=>{g(1)},[h]),i.useEffect(()=>{const t=setTimeout(()=>{x(u)},300);return()=>clearTimeout(t)},[u]),i.useEffect(()=>{if(!B.current)return;const t=new IntersectionObserver(([a])=>{a.isIntersecting&&E.length<$.length&&g(l=>l+1)},{rootMargin:"120px"});return t.observe(B.current),()=>t.disconnect()},[E.length,$.length]),e.jsxs(e.Fragment,{children:[e.jsx(ce,{headerTitle:e.jsx("div",{className:"text-[#263238] font-semibold text-[14px] flex items-center",children:"Payment History"}),back:!0,onBack:()=>p("/dashboard"),menu:e.jsx("div",{className:"flex justify-center",onClick:()=>{b||ne()},children:e.jsxs(r.Popover,{placement:"top",children:[e.jsx(r.PopoverHandler,{children:e.jsx(r.Button,{className:"w-[40px] h-[40px] bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg rounded-full p-0 flex justify-center items-center gap-2",children:e.jsx("i",{className:"fa-solid fa-download text-sm"})})}),e.jsxs(r.PopoverContent,{className:"flex flex-col gap-2 p-2 min-w-[180px]",children:[e.jsxs(r.Button,{variant:"text",onClick:t=>le(),className:"flex items-center gap-3 justify-start text-blue-600 hover:bg-blue-50 p-3",fullWidth:!0,children:[e.jsx("i",{className:"fa-solid fa-download text-lg"}),"Download Bill PDF"]}),!A.isNativePlatform()&&e.jsxs(r.Button,{variant:"text",onClick:()=>ae(),className:"flex items-center gap-3 justify-start text-purple-600 hover:bg-purple-50 p-3",fullWidth:!0,children:[e.jsx("i",{className:"fa-solid fa-print text-lg"}),"Print PDF"]}),e.jsxs(r.Button,{variant:"text",onClick:()=>oe(),className:"flex items-center gap-3 justify-start text-green-600 hover:bg-green-50 p-3",fullWidth:!0,children:[e.jsx("i",{className:"fa-solid fa-share-nodes text-lg"}),"Share"]})]})]})})}),e.jsxs("div",{className:"py-4 px-1 relative bg-[#f3f4f6]",children:[e.jsxs("div",{className:`\r
        flex items-center justify-between gap-3\r
        w-full md:w-full\r
        px-4 py-2.5\r
        bg-white/80 backdrop-blur-md\r
        rounded-xl\r
        shadow-md\r
        border border-gray-200\r
        mb-4\r
    `,children:[e.jsx("button",{onClick:()=>q("prev"),className:`w-9 h-9 flex items-center justify-center rounded-full\r
            bg-gradient-to-br from-blue-100 to-blue-200\r
            shadow hover:shadow-lg hover:scale-105 transition-all duration-300`,children:e.jsx("i",{className:"fa-solid fa-chevron-left text-blue-700 text-[14px]"})}),e.jsxs("div",{className:"relative cursor-pointer",children:[e.jsx("div",{className:`\r
      text-[14px] font-semibold text-gray-800\r
      tracking-wide select-none\r
      hover:text-blue-700 transition-colors duration-200\r
    `,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:c==null?void 0:c.format("MMM YYYY")}),e.jsx("i",{className:"fa-solid fa-calendar-days"})]})}),e.jsx("input",{ref:s,type:"month",className:`\r
      absolute inset-0\r
      opacity-0\r
      cursor-pointer\r
    `,value:c?c.format("YYYY-MM"):"",onChange:te,max:T().format("YYYY-MM")})]}),e.jsx("button",{onClick:()=>q("next"),disabled:z,className:`w-9 h-9 flex items-center justify-center rounded-full
            bg-gradient-to-br from-blue-100 to-blue-200
            shadow hover:shadow-lg hover:scale-105 transition-all duration-300
            ${z?"opacity-40 cursor-not-allowed hover:scale-100":""}`,children:e.jsx("i",{className:"fa-solid fa-chevron-right text-blue-700 text-[14px]"})})]}),((Z=(W=L==null?void 0:L.data)==null?void 0:W.moduleSettings)==null?void 0:Z.milkPurchase)&&e.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:Object.values(P).map(t=>{const a=n===t,l=X[t],o=t===P.SALES?"border-green-600 bg-green-50 text-green-700":"border-red-600 bg-red-50 text-red-700",M=t===P.SALES?"bg-green-600 text-white":"bg-red-600 text-white",j=t===P.SALES?"bg-green-100 text-green-600":"bg-red-100 text-red-600";return e.jsxs("div",{onClick:()=>{k(t)},className:`cursor-pointer rounded-lg border p-2 transition-all
                flex flex-col items-center gap-1 text-sm font-semibold hover:shadow-md
                ${a?o:"border-gray-200 bg-white text-gray-700 hover:border-gray-400"}`,children:[e.jsx("div",{className:`w-10 h-10 flex items-center justify-center rounded-lg
                    ${a?M:j}`,children:e.jsx("i",{className:`fa-solid ${t===P.SALES?"fa-indian-rupee-sign":"fa-cart-shopping"}`})}),e.jsx(r.Typography,{className:"text-[13px] font-semibold",children:l.label}),e.jsx(r.Typography,{className:"text-[11px] font-medium opacity-80",children:l.dueLabel})]},t)})}),e.jsxs("div",{className:"grid grid-cols-3 md:grid-cols-4 gap-3 mb-4",children:[e.jsx(H,{title:"Total",value:`₹${Y.totalBilled.toLocaleString("en-IN")}`,color:"indigo",className:"from-indigo-50 to-indigo-100 border-indigo-200",titleClass:"text-indigo-700 text-sm",valueClass:"text-[12px] sm:text-[13px] md:text-sm lg:text-base text-indigo-900"}),e.jsx(H,{title:n==="sales"?"Collected":"Paid",value:`₹${Y.totalPaid.toLocaleString("en-IN")}`,className:"from-green-50 to-green-100 border-green-200",titleClass:"text-green-700 text-sm",valueClass:"text-[12px] sm:text-[13px] md:text-sm lg:text-base text-green-900"}),e.jsx(H,{title:"Due",value:`₹${Y.totalDue.toLocaleString("en-IN")}`,color:"red",className:"from-red-50 to-red-100 border-red-200",titleClass:"text-red-700 text-sm",valueClass:"text-[12px] sm:text-[13px] md:text-sm lg:text-base text-red-900"})]}),e.jsx("div",{className:"md:hidden mb-3",children:e.jsxs("button",{onClick:()=>S(t=>!t),className:`w-full flex items-center justify-between px-4 py-2.5\r
        bg-white rounded-lg border border-gray-200 shadow-sm\r
        active:scale-[0.98] transition-all duration-200`,children:[e.jsx("span",{className:"text-sm font-semibold text-gray-700",children:"Payment Status Breakdown"}),e.jsx("i",{className:`fa-solid ${w?"fa-chevron-up":"fa-chevron-down"} text-gray-600 transition-transform duration-300`})]})}),e.jsx("div",{className:`
        overflow-hidden transition-all duration-300
        ${w?"max-h-[500px] opacity-100":"max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"}
    `,children:e.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-center sm:justify-start p-2 sm:p-4 bg-gradient-to-r from-green-100 to-green-200 shadow border border-green-300 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105",children:[e.jsx("div",{className:"flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-green-200 rounded-full",children:e.jsx("i",{className:"fa-solid fa-circle-check text-green-700 text-xs sm:text-lg"})}),e.jsxs("div",{className:"ml-2 sm:ml-3 text-center sm:text-left",children:[e.jsx(r.Typography,{className:"text-[10px] sm:text-xs text-green-800 font-semibold",children:"Paid"}),e.jsx(r.Typography,{className:"text-sm sm:text-lg font-bold text-green-900 tracking-tight ",children:Y.statusCount.paid})]})]}),e.jsxs("div",{className:"flex items-center justify-center sm:justify-start p-2 sm:p-4 bg-gradient-to-r from-amber-100 to-amber-200 shadow border border-amber-300 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105",children:[e.jsx("div",{className:"flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-amber-200 rounded-full",children:e.jsx("i",{className:"fa-solid fa-hourglass-half text-amber-700 text-xs sm:text-lg"})}),e.jsxs("div",{className:"ml-2 sm:ml-3 text-center sm:text-left",children:[e.jsx(r.Typography,{className:"text-[10px] sm:text-xs text-amber-800 font-semibold",children:"Partial"}),e.jsx(r.Typography,{className:"text-sm sm:text-lg font-bold text-amber-900 tracking-tight ",children:Y.statusCount.partial})]})]}),e.jsxs("div",{className:"relative flex items-center justify-center sm:justify-start p-2 sm:p-4 bg-gradient-to-r from-red-100 to-red-200 shadow border border-red-300 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105",children:[e.jsxs("div",{className:"relative flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-red-200 rounded-full",children:[e.jsx("i",{className:"fa-solid fa-xmark text-red-700 text-xs sm:text-lg"}),e.jsx("span",{className:"absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-40 animate-ping"})]}),e.jsxs("div",{className:"ml-2 sm:ml-3 text-center sm:text-left",children:[e.jsx(r.Typography,{className:"text-[10px] sm:text-xs text-red-800 font-semibold",children:"Unpaid"}),e.jsx(r.Typography,{className:"text-sm sm:text-lg font-bold text-red-900 tracking-tight ",children:Y.statusCount.unpaid})]})]})]})}),e.jsx("div",{className:"sticky top-0 z-10 bg-[#f3f4f6] pb-4",children:e.jsx(r.Input,{label:"Search (Name / Whatsapp Number) / Address",value:u,onChange:t=>v(t.target.value),className:"bg-white shadow-none"})}),e.jsx("div",{className:"grid gap-2 mt-2",children:E.length?e.jsxs(e.Fragment,{children:[E.map(t=>e.jsx(fe,{p:t},t._id)),E.length<$.length&&e.jsx("div",{ref:B,className:"flex justify-center my-10",children:e.jsxs("div",{className:`flex items-center gap-3 px-6 py-3 rounded-lg\r
                        bg-white/70 backdrop-blur-xl border border-white/40 shadow-md`,children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-yellow-500 animate-pulse"}),e.jsx(r.Typography,{className:"text-sm font-medium text-gray-600",children:"Loading more payments history…"})]})})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center space-y-3",children:[e.jsx("div",{className:"bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-full shadow-sm mb-3",children:e.jsx(me,{className:"w-10 h-10 text-red-400"})}),e.jsx(r.Typography,{className:"text-gray-800 font-semibold text-lg",children:"No Payments Found"}),e.jsx(r.Typography,{className:"text-sm text-gray-500 max-w-xs",children:"There are no payment records available at the moment."})]})})]})]})},H=U.memo(({title:s,value:p,className:d="",titleClass:f="",valueClass:u=""})=>e.jsxs("div",{className:`p-4 rounded-lg shadow-md border bg-gradient-to-br ${d}`,children:[e.jsx(r.Typography,{className:`text-xs font-medium ${f}`,children:s}),e.jsx(r.Typography,{className:`font-bold tracking-tight ${u} `,children:p})]})),fe=U.memo(({p:s})=>{var d,f,u,v,h,x,m,g,n,k,w;const p=i.useCallback(S=>{switch(S){case"paid":return"green";case"partial":return"amber";case"overpaid":return"blue";default:return"red"}},[]);return e.jsx(r.Card,{className:`px-4 py-2 bg-white/90 backdrop-blur-xl border border-gray-100 shadow\r
                        hover:shadow-xl rounded-lg cursor-pointer\r
                        transform hover:-translate-y-1\r
                        transition-all duration-300`,children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[s.customerId?e.jsx(r.Typography,{className:"font-semibold text-black text-[15px] ",children:(d=s.customerId)==null?void 0:d.name}):s!=null&&s.supplierId?e.jsx(r.Typography,{className:"font-semibold text-black text-[15px] ",children:(f=s.supplierId)==null?void 0:f.name}):e.jsxs(r.Typography,{className:"font-semibold ",children:[e.jsx("span",{className:"text-[15px] text-red-500",children:" Deleted "})," ",((u=s==null?void 0:s.customerDetail)==null?void 0:u.name)&&e.jsxs("span",{className:"text-[13px] text-black",children:[" ",(v=s==null?void 0:s.customerDetail)==null?void 0:v.name," "]})]}),e.jsxs(r.Typography,{className:"text-[12px] text-gray-900 ",children:[((h=s.customerId)==null?void 0:h.phone)||((x=s==null?void 0:s.customerDetail)==null?void 0:x.phone)||((m=s.supplierId)==null?void 0:m.phone)||((g=s==null?void 0:s.supplierDetail)==null?void 0:g.phone)||""," • ",T(s.month).format("MMMM YYYY")]}),e.jsx(r.Typography,{className:"text-[12px] text-gray-900 truncate max-w-[220px] text-wrap-auto ",title:(n=s.customerId)==null?void 0:n.address,children:((k=s.customerId)==null?void 0:k.address)||((w=s==null?void 0:s.customerDetail)==null?void 0:w.address)||""})]}),e.jsxs("div",{className:"text-right flex flex-col items-end",children:[e.jsxs(r.Typography,{className:`font-bold text-[20px] whitespace-nowrap tracking-tight ${s.status==="paid"?"text-green-600":s.status==="partial"?"text-amber-500":s.status==="overpaid"?"text-blue-600":"text-red-500"}`,children:["₹",s.totalPaid.toLocaleString("en-IN"),e.jsxs("span",{className:"text-[14px] text-black font-medium ",children:[" "," / ₹",((s==null?void 0:s.totalBilled)||(s==null?void 0:s.totalPurchased)).toLocaleString("en-IN")]})]}),e.jsx(r.Chip,{value:s.status,color:p(s.status),size:"sm",className:"mt-1 capitalize"})]})]})},s._id)});export{Pe as default};
