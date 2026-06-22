var ee=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var te=(t,u)=>{var n={};for(var x in t)me.call(t,x)&&u.indexOf(x)<0&&(n[x]=t[x]);if(t!=null&&ee)for(var x of ee(t))u.indexOf(x)<0&&xe.call(t,x)&&(n[x]=t[x]);return n};var C=(t,u,n)=>new Promise((x,f)=>{var v=r=>{try{p(n.next(r))}catch(j){f(j)}},N=r=>{try{p(n.throw(r))}catch(j){f(j)}},p=r=>r.done?x(r.value):Promise.resolve(r.value).then(v,N);p((n=n.apply(t,u)).next())});import{j as e}from"./editorVendor-BNT2NNQQ.js";import{a as i,h as ue,d as z}from"./reactVendor-B6F6mNW7.js";import{u as K,A as L,a as l,h as M,D as he,C as _,v as R,w as F,L as O}from"./index-t232D0iS.js";import{P as k,F as fe}from"./AllPaymentList--9XEVIPU.js";import{S as ge,s as pe}from"./index-C9VUU_CQ.js";import"./pdfVendor-BlQBZvr-.js";import"./reduxVendor-BejjNGEb.js";import"./uiVendor--VO_DfXR.js";import"./UserIcon-D5qiiMZu.js";function be(f,x){var v=f,{title:t,titleId:u}=v,n=te(v,["title","titleId"]);return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:x,"aria-labelledby":u},n),t?i.createElement("title",{id:u},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}))}const ye=i.forwardRef(be),ve=()=>`
<div class="invoice-footer">
<p style="margin:0">
<b>info@snsdairy.com</b> | <b>Smart n Simple Dairy - All In One</b>
</p>
</div>
`,Ne=({month:t,paymentType:u,payments:n=[],adminData:x})=>{const f=u==="sales"?"Sales Payment Report":"Purchase Payment Report";let v=0,N=0,p=0,r=0;const j=n.sort((o,w)=>{var g,b;return((g=o==null?void 0:o.customerId)==null?void 0:g.cardNumber)-((b=w==null?void 0:w.customerId)==null?void 0:b.cardNumber)}).map((o,w)=>{const g=o.customerId||o.supplierId||o.customerDetail||o.supplierDetail||{},b=o.totalBilled||o.totalPurchased||0,y=o.totalPaid||0,P=o.previousRemainingAmount||0,d=Math.max(b-y+P,0);return v+=P,N+=b,p+=y,r+=d,`
<tr>
<td class="center">${w+1}</td>
  <td class="name">
        ${g.cardNumber?`<span class="card-number">${g.cardNumber}</span>`:""}
        ${g.name||"-"}
    </td>
<td class="amount">${P.toLocaleString("en-IN")}</td>
<td class="amount">${b.toLocaleString("en-IN")}</td>
<td class="amount received">${y.toLocaleString("en-IN")}</td>
<td class="amount due">${d.toLocaleString("en-IN")}</td>
<td class="center">${g.phone||"-"}</td>
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

.card-number {
    padding: 5px;
    border: 1px solid #111827;
    border-radius: 8px;
    font-weight: bold;
}

</style>

</head>

<body>

<div class="header">

<div>
<div class="company">${x.companyId.companyName}</div>
<div class="report-title">${f}</div>
<div class="meta">Month : ${t}</div>
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
<th>${u==="sales"?"Received":"Paid"}</th>
<th>Remaining</th>
<th>Mobile</th>
</tr>
</thead>

<tbody>
${j}
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
<div class="total-value">₹ ${N.toLocaleString("en-IN")}</div>
</div>

<div class="total-item">
<div class="total-label">Total Received</div>
<div class="total-value received">₹ ${p.toLocaleString("en-IN")}</div>
</div>

<div class="total-item">
<div class="total-label">Remaining Due</div>
<div class="total-value due">₹ ${r.toLocaleString("en-IN")}</div>
</div>

</div>

</div>

${ve()}

</body>
</html>
`},je=({open:t,onClose:u,paymentId:n,type:x})=>{var g,b,y,P;const{dispatch:f,appSelector:v}=K(),{paymentHistoryByPayment:N}=v(d=>d.app),p=N||{},r=p.payment||{},j=p.history||[],o=i.useCallback(()=>{n&&f(L({method:"POST",apiUrl:"payment/history",data:{paymentId:n,type:x},storeKey:"paymentHistoryByPayment",storeActionType:"FETCH_PAYMENT_HISTORY_BY_PAYMENT",loader:!0}))},[n,x]),w=d=>C(null,null,function*(){f(yield L({method:"DELETE",apiUrl:"payment/history",data:{paymentDetailId:d,paymentId:n,type:x},loader:!0,apiSuccessCallBack:()=>{o()}}))});return e.jsx(l.Dialog,{open:t,handler:u,className:"bg-transparent shadow-none",children:e.jsxs("div",{className:"relative w-[96%] sm:max-w-[520px] mx-auto rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl"}),e.jsx("div",{className:"absolute -top-20 -right-20 w-full h-full bg-blue-400/20 blur-3xl rounded-full"}),e.jsx("div",{className:"absolute -bottom-20 -left-20 w-full h-full bg-indigo-400/20 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx(l.DialogHeader,{className:"border-b border-gray-200 flex justify-between",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-lg font-semibold text-gray-900",children:"Payment Details"}),e.jsx("p",{className:"text-xs text-gray-900",children:"Full transaction history"})]})}),e.jsxs(l.DialogBody,{className:"max-h-[500px] overflow-y-auto space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border",children:[e.jsx("p",{className:"font-semibold text-gray-800",children:((g=r==null?void 0:r.customerId)==null?void 0:g.name)||((b=r==null?void 0:r.supplierId)==null?void 0:b.name)}),e.jsx("p",{className:"text-xs text-gray-900",children:((y=r==null?void 0:r.customerId)==null?void 0:y.phone)||((P=r==null?void 0:r.supplierId)==null?void 0:P.phone)}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx("span",{className:"text-gray-900 text-sm",children:"Total"}),e.jsxs("span",{className:"font-bold text-gray-900",children:["₹",r==null?void 0:r.totalBilled]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-900 text-sm",children:"Paid"}),e.jsxs("span",{className:"text-green-600 font-semibold",children:["₹",r==null?void 0:r.totalPaid]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-900 text-sm",children:"Due"}),e.jsxs("span",{className:"text-red-500 font-semibold",children:["₹",r==null?void 0:r.remainingDue]})]})]}),e.jsx("div",{className:"space-y-3",children:j.map(d=>{const S=d.isDeleted;return e.jsxs("div",{className:`
                                        p-3 rounded-xl border flex justify-between items-center
                                        ${S?"bg-red-50 border-red-200":"bg-white border-blue-400"}
                                        `,children:[e.jsxs("div",{children:[e.jsxs("p",{className:`font-semibold ${S?"text-red-600":"text-gray-900"}`,children:["₹",d.amount,(d==null?void 0:d.method)&&e.jsx("span",{className:`ml-2 text-[11px] font-medium px-2 py-[2px] rounded-full
            ${S?"bg-red-100 text-red-600":"bg-gray-200 text-gray-900"}
        `,children:d.method.trim()})]}),e.jsx("p",{className:"text-xs text-gray-900",children:M(S?d.deletedAt:d.createdAt).format("DD MMM YYYY • hh:mm A")}),S&&e.jsx("p",{className:"text-[10px] text-red-500 font-medium",children:"Deleted"})]}),!S&&e.jsx(l.Button,{size:"sm",color:"red",variant:"outlined",onClick:()=>w(d._id),className:"flex items-center gap-1",children:e.jsx(ye,{className:"w-4 h-4"})})]},d._id)})})]})]})]})})},we=12,ae={[k.SALES]:{label:"Sales Payments",apiType:"sales",personKey:"customerId",deletedKey:"customerDetail",primaryColor:"green",dueLabel:"Amount To Collect"},[k.PURCHASE]:{label:"Purchase Payments",apiType:"purchase",personKey:"purchaseId",deletedKey:"customerDetail",primaryColor:"red",dueLabel:"Amount To Pay"}},Re=()=>{var J,Q;const t=i.useRef(null),u=ue(),{dispatch:n,appSelector:x}=K(),[f,v]=i.useState(""),[N,p]=i.useState(""),[r,j]=i.useState(1),[o,w]=i.useState(k.SALES),[g,b]=i.useState(!1),[y,P]=i.useState(""),[d,S]=i.useState(null),H=z.useRef(null),{currentMonth:h,rawData:A,adminData:B}=x(a=>a.app),G=h==null?void 0:h.isSame(M(),"month"),q=i.useMemo(()=>ae[o],[o]),se=i.useCallback(()=>C(null,null,function*(){n(yield L({method:"POST",apiUrl:"payment/fetch",data:{month:h.format("YYYY-MM")},loader:!0,apiSuccessCallBack:a=>{const s={unpaid:1,partial:2,paid:3},c=(m=[])=>m.sort((E,T)=>(s[E.status]||5)-(s[T.status]||5));n({type:"APP_FETCH_PAYMENT_HISTORY",payload:{sales:c(a.payments.filter(m=>m.totalBilled>0)),purchase:c(a.purchasePayments.filter(m=>(m.totalBilled||(m==null?void 0:m.totalPurchased))>0))},name:"rawData",meta:{type:"FETCH_PAYMENT_HISTORY"}})}}))}),[n,h]),Y=i.useMemo(()=>(A==null?void 0:A[o])||[],[A,o]),I=i.useMemo(()=>{if(!N)return Y;const a=N.trim().toLowerCase();return Y.filter(s=>{var V,X;const c=s[q.personKey]||s[q.deletedKey];if(!c)return!1;const m=((V=c.name)==null?void 0:V.toLowerCase())||"",E=((X=c.address)==null?void 0:X.toLowerCase())||"",T=c.phone||"";return m.includes(a)||E.includes(a)||T.includes(a)})},[Y,N,o]),$=i.useMemo(()=>I.slice(0,r*we),[I,r]),D=i.useMemo(()=>Y.reduce((a,s)=>{a.totalBilled+=(s==null?void 0:s.totalBilled)||(s==null?void 0:s.totalPurchased)||0,a.totalPaid+=s.totalPaid||0;const c=Math.max(((s==null?void 0:s.totalBilled)||(s==null?void 0:s.totalPurchased)||0)-(s.totalPaid||0),0);return a.totalDue+=c,a.statusCount[s.status]=(a.statusCount[s.status]||0)+1,a},{totalBilled:0,totalPaid:0,totalDue:0,statusCount:{paid:0,partial:0,unpaid:0,overpaid:0}}),[Y]),W=i.useCallback(a=>{n({type:"APP_CHANGE_CURRENT_MONTH",payload:a==="prev"?M(h).subtract(1,"month"):M(h).add(1,"month"),name:"currentMonth",meta:{type:"CHANGE_CURRENT_MONTH"}})},[h,M,n]),re=i.useCallback(a=>{const s=a.target.value;if(!s)return;const c=M(s,"YYYY-MM");n({type:"APP_CHANGE_CURRENT_MONTH",payload:c,name:"currentMonth",meta:{type:"CHANGE_CURRENT_MONTH"}})},[n]),le=()=>C(null,null,function*(){const a=window.open("","_blank");let s=y;s+="<script>   window.onload = function() {   setTimeout(() => { window.print(); window.close(); }, 100);}; <\/script>",a?(a.document.write(s),a.document.close()):alert("Pop-up blocked! Please allow pop-ups for this website.")}),oe=()=>C(null,null,function*(){if(_.isNativePlatform()&&(yield R.checkPermissions()).publicStorage!=="granted"&&(yield R.requestPermissions()).publicStorage!=="granted")throw new Error("Storage permission denied")}),ne=a=>C(null,null,function*(){try{let s=yield O.checkPermissions();if(s.display!=="granted"&&(s=yield O.requestPermissions()),s.display!=="granted"){console.warn("Notification permission denied");return}yield O.schedule({notifications:[{title:"📄 Milk Bill Saved",body:`${h.format("MMMM YYYY")} ${o==="sales"?"Sales Payment":"Purchase Payment"} report successfully`,id:Math.floor(Date.now()%1e9),sound:"default",channelId:"milk-bill-channel",extra:{filePath:a.uri}}]})}catch(s){console.error("Notification error:",s)}}),Z=a=>new Promise((s,c)=>{const m=new FileReader;m.onloadend=()=>{s(m.result.split(",")[1])},m.onerror=c,m.readAsDataURL(a)}),ie=()=>C(null,null,function*(){var s;if(!d)return;const a=`${h.format("MMMM YYYY")} ${o==="sales"?"Sales Payment":"Purchase Payment"} Report.pdf`;if(!_.isNativePlatform()){const c=URL.createObjectURL(d),m=document.createElement("a");m.href=c,m.download=a,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(c);return}try{yield oe();const c=yield Z(d),m="SnS Dairy/Reports";try{yield R.mkdir({path:m,directory:F.Documents,recursive:!0})}catch(T){if(!((s=T.message)!=null&&s.toLowerCase().includes("exists")))throw T}const E=yield R.writeFile({path:`${m}/${a}`,data:c,directory:F.Documents});yield ne(E)}catch(c){console.error("File save error",c)}}),de=()=>C(null,null,function*(){if(!d)return;const a=`${h.format("MMMM YYYY")} ${o==="sales"?"Sales Payment":"Purchase Payment"} Report.pdf`;if(_.isNativePlatform())try{const s=yield Z(d),c=yield R.writeFile({path:a,data:s,directory:F.Documents});yield ge.share({title:"",text:"",url:c.uri,dialogTitle:"Share Report"})}catch(s){console.error("❌ Mobile Share Error:",s)}else yield pe(d,a)}),ce=i.useCallback(()=>C(null,null,function*(){if(!y)return;const a=new FormData;a.append("htmlFile",new Blob([y],{type:"text/html"}),"bill.html"),n(yield L({method:"POST",apiUrl:"milkEntry/downloadCard",responseType:"blob",data:a,loader:!0,apiSuccessCallBack:s=>C(null,null,function*(){S(new Blob([s],{type:"application/pdf"}))})}))}),[y]);return i.useEffect(()=>{S(null),P(""),C(null,null,function*(){const s=Ne({month:h.format("MMMM YYYY"),paymentType:o,payments:Y,adminData:B.data});P(s)})},[Y,h,o]),i.useEffect(()=>{h&&se()},[h]),i.useEffect(()=>{j(1)},[N]),i.useEffect(()=>{const a=setTimeout(()=>{p(f)},300);return()=>clearTimeout(a)},[f]),i.useEffect(()=>{if(!H.current)return;const a=new IntersectionObserver(([s])=>{s.isIntersecting&&$.length<I.length&&j(c=>c+1)},{rootMargin:"120px"});return a.observe(H.current),()=>a.disconnect()},[$.length,I.length]),e.jsxs(e.Fragment,{children:[e.jsx(he,{headerTitle:e.jsx("div",{className:"text-[#263238] font-semibold text-[14px] flex items-center",children:"Payment History"}),back:!0,onBack:()=>u("/dashboard"),menu:e.jsx("div",{className:"flex justify-center",onClick:()=>{d||ce()},children:e.jsxs(l.Popover,{placement:"top",children:[e.jsx(l.PopoverHandler,{children:e.jsx(l.Button,{className:"w-[40px] h-[40px] bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg rounded-full p-0 flex justify-center items-center gap-2",children:e.jsx("i",{className:"fa-solid fa-download text-sm"})})}),e.jsxs(l.PopoverContent,{className:"flex flex-col gap-2 p-2 min-w-[180px]",children:[e.jsxs(l.Button,{variant:"text",onClick:a=>ie(),className:"flex items-center gap-3 justify-start text-blue-600 hover:bg-blue-50 p-3",fullWidth:!0,children:[e.jsx("i",{className:"fa-solid fa-download text-lg"}),"Download Bill PDF"]}),!_.isNativePlatform()&&e.jsxs(l.Button,{variant:"text",onClick:()=>le(),className:"flex items-center gap-3 justify-start text-purple-600 hover:bg-purple-50 p-3",fullWidth:!0,children:[e.jsx("i",{className:"fa-solid fa-print text-lg"}),"Print PDF"]}),e.jsxs(l.Button,{variant:"text",onClick:()=>de(),className:"flex items-center gap-3 justify-start text-green-600 hover:bg-green-50 p-3",fullWidth:!0,children:[e.jsx("i",{className:"fa-solid fa-share-nodes text-lg"}),"Share"]})]})]})})}),e.jsxs("div",{className:"py-4 px-1 relative bg-[#f3f4f6] h-safe overflow-y-auto",children:[e.jsxs("div",{className:`\r
        flex items-center justify-between gap-3\r
        w-full md:w-full\r
        px-4 py-2.5\r
        bg-white/80 backdrop-blur-md\r
        rounded-xl\r
        shadow-md\r
        border border-gray-200\r
        mb-4\r
    `,children:[e.jsx("button",{onClick:()=>W("prev"),className:`w-9 h-9 flex items-center justify-center rounded-full\r
            bg-gradient-to-br from-blue-100 to-blue-200\r
            shadow hover:shadow-lg hover:scale-105 transition-all duration-300`,children:e.jsx("i",{className:"fa-solid fa-chevron-left text-blue-700 text-[14px]"})}),e.jsxs("div",{className:"relative cursor-pointer",children:[e.jsx("div",{className:`\r
      text-[14px] font-semibold text-gray-800\r
      tracking-wide select-none\r
      hover:text-blue-700 transition-colors duration-200\r
    `,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:h==null?void 0:h.format("MMM YYYY")}),e.jsx("i",{className:"fa-solid fa-calendar-days"})]})}),e.jsx("input",{ref:t,type:"month",className:`\r
      absolute inset-0\r
      opacity-0\r
      cursor-pointer\r
    `,value:h?h.format("YYYY-MM"):"",onChange:re,max:M().format("YYYY-MM")})]}),e.jsx("button",{onClick:()=>W("next"),disabled:G,className:`w-9 h-9 flex items-center justify-center rounded-full
            bg-gradient-to-br from-blue-100 to-blue-200
            shadow hover:shadow-lg hover:scale-105 transition-all duration-300
            ${G?"opacity-40 cursor-not-allowed hover:scale-100":""}`,children:e.jsx("i",{className:"fa-solid fa-chevron-right text-blue-700 text-[14px]"})})]}),((Q=(J=B==null?void 0:B.data)==null?void 0:J.moduleSettings)==null?void 0:Q.newPurchase)&&e.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:Object.values(k).map(a=>{const s=o===a,c=ae[a],m=a===k.SALES?"border-green-600 bg-green-50 text-green-700":"border-red-600 bg-red-50 text-red-700",E=a===k.SALES?"bg-green-600 text-white":"bg-red-600 text-white",T=a===k.SALES?"bg-green-100 text-green-600":"bg-red-100 text-red-600";return e.jsxs("div",{onClick:()=>{w(a)},className:`cursor-pointer rounded-lg border p-2 transition-all
                flex flex-col items-center gap-1 text-sm font-semibold hover:shadow-md
                ${s?m:"border-gray-200 bg-white text-gray-700 hover:border-gray-400"}`,children:[e.jsx("div",{className:`w-10 h-10 flex items-center justify-center rounded-lg
                    ${s?E:T}`,children:e.jsx("i",{className:`fa-solid ${a===k.SALES?"fa-indian-rupee-sign":"fa-cart-shopping"}`})}),e.jsx(l.Typography,{className:"text-[13px] font-semibold",children:c.label}),e.jsx(l.Typography,{className:"text-[11px] font-medium opacity-80",children:c.dueLabel})]},a)})}),e.jsxs("div",{className:"grid grid-cols-3 md:grid-cols-4 gap-3 mb-4",children:[e.jsx(U,{title:"Total",value:`₹${D.totalBilled.toLocaleString("en-IN")}`,color:"indigo",className:"from-indigo-50 to-indigo-100 border-indigo-200",titleClass:"text-indigo-700 text-sm",valueClass:"text-[12px] sm:text-[13px] md:text-sm lg:text-base text-indigo-900"}),e.jsx(U,{title:o==="sales"?"Collected":"Paid",value:`₹${D.totalPaid.toLocaleString("en-IN")}`,className:"from-green-50 to-green-100 border-green-200",titleClass:"text-green-700 text-sm",valueClass:"text-[12px] sm:text-[13px] md:text-sm lg:text-base text-green-900"}),e.jsx(U,{title:"Due",value:`₹${D.totalDue.toLocaleString("en-IN")}`,color:"red",className:"from-red-50 to-red-100 border-red-200",titleClass:"text-red-700 text-sm",valueClass:"text-[12px] sm:text-[13px] md:text-sm lg:text-base text-red-900"})]}),e.jsx("div",{className:"md:hidden mb-3",children:e.jsxs("button",{onClick:()=>b(a=>!a),className:`w-full flex items-center justify-between px-4 py-2.5\r
        bg-white rounded-lg border border-gray-200 shadow-sm\r
        active:scale-[0.98] transition-all duration-200`,children:[e.jsx("span",{className:"text-sm font-semibold text-gray-700",children:"Payment Status Breakdown"}),e.jsx("i",{className:`fa-solid ${g?"fa-chevron-up":"fa-chevron-down"} text-gray-600 transition-transform duration-300`})]})}),e.jsx("div",{className:`
        overflow-hidden transition-all duration-300
        ${g?"max-h-[500px] opacity-100":"max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"}
    `,children:e.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-center sm:justify-start p-2 sm:p-4 bg-gradient-to-r from-green-100 to-green-200 shadow border border-green-300 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105",children:[e.jsx("div",{className:"flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-green-200 rounded-full",children:e.jsx("i",{className:"fa-solid fa-circle-check text-green-700 text-xs sm:text-lg"})}),e.jsxs("div",{className:"ml-2 sm:ml-3 text-center sm:text-left",children:[e.jsx(l.Typography,{className:"text-[10px] sm:text-xs text-green-800 font-semibold",children:"Paid"}),e.jsx(l.Typography,{className:"text-sm sm:text-lg font-bold text-green-900 tracking-tight notranslate",children:D.statusCount.paid})]})]}),e.jsxs("div",{className:"flex items-center justify-center sm:justify-start p-2 sm:p-4 bg-gradient-to-r from-amber-100 to-amber-200 shadow border border-amber-300 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105",children:[e.jsx("div",{className:"flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-amber-200 rounded-full",children:e.jsx("i",{className:"fa-solid fa-hourglass-half text-amber-700 text-xs sm:text-lg"})}),e.jsxs("div",{className:"ml-2 sm:ml-3 text-center sm:text-left",children:[e.jsx(l.Typography,{className:"text-[10px] sm:text-xs text-amber-800 font-semibold",children:"Partial"}),e.jsx(l.Typography,{className:"text-sm sm:text-lg font-bold text-amber-900 tracking-tight notranslate",children:D.statusCount.partial})]})]}),e.jsxs("div",{className:"relative flex items-center justify-center sm:justify-start p-2 sm:p-4 bg-gradient-to-r from-red-100 to-red-200 shadow border border-red-300 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105",children:[e.jsxs("div",{className:"relative flex-shrink-0 w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-red-200 rounded-full",children:[e.jsx("i",{className:"fa-solid fa-xmark text-red-700 text-xs sm:text-lg"}),e.jsx("span",{className:"absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-40 animate-ping"})]}),e.jsxs("div",{className:"ml-2 sm:ml-3 text-center sm:text-left",children:[e.jsx(l.Typography,{className:"text-[10px] sm:text-xs text-red-800 font-semibold",children:"Unpaid"}),e.jsx(l.Typography,{className:"text-sm sm:text-lg font-bold text-red-900 tracking-tight notranslate",children:D.statusCount.unpaid})]})]})]})}),e.jsx("div",{className:"bg-[#f3f4f6] pb-4",children:e.jsx(l.Input,{label:"Search (Name / Whatsapp Number) / Address",value:f,onChange:a=>v(a.target.value),className:"bg-white shadow-none"})}),e.jsx("div",{className:"grid gap-2 mt-2",children:$.length?e.jsxs(e.Fragment,{children:[$.map(a=>e.jsx(Pe,{p:a,paymentType:o},a._id)),$.length<I.length&&e.jsx("div",{ref:H,className:"flex justify-center my-10",children:e.jsxs("div",{className:`flex items-center gap-3 px-6 py-3 rounded-lg\r
                        bg-white/70 backdrop-blur-xl border border-white/40 shadow-md`,children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-yellow-500 animate-pulse"}),e.jsx(l.Typography,{className:"text-sm font-medium text-gray-600",children:"Loading more payments history…"})]})})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center space-y-3",children:[e.jsx("div",{className:"bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-full shadow-sm mb-3",children:e.jsx(fe,{className:"w-10 h-10 text-red-400"})}),e.jsx(l.Typography,{className:"text-gray-800 font-semibold text-lg",children:"No Payments Found"}),e.jsx(l.Typography,{className:"text-sm text-gray-500 max-w-xs",children:"There are no payment records available at the moment."})]})})]})]})},U=z.memo(({title:t,value:u,className:n="",titleClass:x="",valueClass:f=""})=>e.jsxs("div",{className:`p-4 rounded-lg shadow-md border bg-gradient-to-br ${n}`,children:[e.jsx(l.Typography,{className:`text-xs font-medium ${x}`,children:t}),e.jsx(l.Typography,{className:`font-bold tracking-tight ${f} `,children:u})]})),Pe=z.memo(({p:t,paymentType:u})=>{var p,r,j,o,w,g,b,y,P,d;const{dispatch:n}=K(),[x,f]=i.useState(!1),v=i.useCallback(()=>{(t==null?void 0:t.status)!=="unpaid"&&n(L({method:"POST",apiUrl:"payment/history",data:{paymentId:t._id,type:u},storeActionType:"FETCH_PAYMENT_HISTORY_OF_CUSTOMER",storeKey:"paymentHistoryByPayment",loader:!0,apiSuccessCallBack:()=>{f(!0)}}))},[t==null?void 0:t._id,u]),N=i.useCallback(S=>{switch(S){case"paid":return"green";case"partial":return"amber";case"overpaid":return"blue";default:return"red"}},[]);return e.jsxs(e.Fragment,{children:[e.jsx(l.Card,{className:`px-4 py-2 bg-white/90 backdrop-blur-xl border border-gray-100 shadow\r
                        hover:shadow-xl rounded-lg cursor-pointer\r
                        transform hover:-translate-y-1\r
                        transition-all duration-300`,onClick:()=>v(),children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[t.customerId?e.jsx(l.Typography,{className:"font-semibold text-black text-[15px] notranslate",children:(p=t.customerId)==null?void 0:p.name}):t!=null&&t.purchaseId?e.jsx(l.Typography,{className:"font-semibold text-black text-[15px] notranslate",children:(r=t.purchaseId)==null?void 0:r.name}):e.jsxs(l.Typography,{className:"font-semibold ",children:[e.jsx("span",{className:"text-[15px] text-red-500",children:" Deleted "})," ",((j=t==null?void 0:t.customerDetail)==null?void 0:j.name)&&e.jsxs("span",{className:"text-[13px] text-black",children:[" ",(o=t==null?void 0:t.customerDetail)==null?void 0:o.name," "]})]}),e.jsxs(l.Typography,{className:"text-[12px] text-gray-900 notranslate",children:[((w=t.customerId)==null?void 0:w.phone)||((g=t==null?void 0:t.customerDetail)==null?void 0:g.phone)||((b=t.purchaseId)==null?void 0:b.phone)||""," • ",M(t.month).format("MMMM YYYY")]}),e.jsx(l.Typography,{className:"text-[12px] text-gray-900 truncate max-w-[220px] text-wrap-auto notranslate",title:(y=t.customerId)==null?void 0:y.address,children:((P=t.customerId)==null?void 0:P.address)||((d=t==null?void 0:t.customerDetail)==null?void 0:d.address)||""})]}),e.jsxs("div",{className:"text-right flex flex-col items-end",children:[e.jsxs(l.Typography,{className:`font-bold text-[20px] whitespace-nowrap tracking-tight ${t.status==="paid"?"text-green-600":t.status==="partial"?"text-amber-500":t.status==="overpaid"?"text-blue-600":"text-red-500"}`,children:["₹",t.totalPaid.toLocaleString("en-IN"),e.jsxs("span",{className:"text-[14px] text-black font-medium notranslate",children:[" "," / ₹",((t==null?void 0:t.totalBilled)||(t==null?void 0:t.totalPurchased)).toLocaleString("en-IN")]})]}),e.jsx(l.Chip,{value:t.status,color:N(t.status),size:"sm",className:"mt-1 capitalize"})]})]})},t._id),e.jsx(je,{type:u,paymentId:t._id,open:x,onClose:()=>f(!1)})]})});export{Re as default};
