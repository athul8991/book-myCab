import{a as ue}from"./chunk-LQZVA4WD.js";import{a as F,d as K,e as de,f as P,g as N,h as O,i as $,j as pe,k as j,l as R,m as Q,n as W,o as X,p as U,q as G}from"./chunk-D4MFZBGS.js";import{$ as le,A as d,C as J,E as C,F as k,G as _,H as n,I as a,J as g,K as w,L as f,M as h,Q as l,R as m,S as I,T as S,U as b,V as M,W as re,X as Z,_ as ae,aa as A,ba as B,ca as se,g as v,h as q,ha as ce,ia as me,j as y,k as D,ka as T,m as ne,ma as ee,n as H,q as oe,u as V,v as s,w as u,z}from"./chunk-G362BYZJ.js";import{a as te,b as ie}from"./chunk-VHCA6YAO.js";var p=(()=>{let i=class i{constructor(t){this.http=t}getAllBooking(t){let e=new B().append("status",t);return this.http.get(`${F}/all-booking`,{params:e})}getPersonBooking(t){let e=new B().append("id",t);return this.http.get(`${K}/by-user`,{params:e})}addVehicle(t,e){let c=new FormData;return c.append("data",JSON.stringify(t)),c.append("file",e),this.http.post(`${F}/add-vehicle`,c)}getVehicle(){return this.http.get(`${K}/vehicles`)}getArea(){return this.http.get(`${K}/area`)}deleteVehicle(t){let e=new B;return e=e.append("id",t),this.http.delete(`${F}/delete-vehicle`,{params:e})}getAllArea(){return this.http.get(`${F}/all-area`)}addArea(t){return this.http.post(`${F}/add-area`,t)}removeBlock(t,e){let c=new B;return c=c.append("id",t),c=c.append("block",e),this.http.delete(`${F}/delete-block`,{params:c})}deleteDist(t){let e=new B().append("id",t);return this.http.delete(`${F}/delete-area`,{params:e})}statusUpdate(t,e){return this.http.put(`${F}/status-update`,{id:t,status:e})}};i.\u0275fac=function(e){return new(e||i)(oe(se))},i.\u0275prov=ne({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();function Se(o,i){if(o&1){let r=w();n(0,"option",9),f("change",function(){let c=y(r).$implicit,x=h();return D(x.onChangeDist(c))}),l(1),a()}if(o&2){let r=i.$implicit;d("value",r.dist),s(),m(r.dist)}}function Ae(o,i){if(o&1&&(n(0,"option",10),l(1),a()),o&2){let r=i.$implicit;d("value",r),s(),m(r)}}function ye(o,i){if(o&1){let r=w();n(0,"label",11),l(1),n(2,"img",12),f("click",function(){let c=y(r).$implicit,x=h();return D(x.onRemove(c))}),a()()}if(o&2){let r=i.$implicit;s(),I("",r," ")}}var fe=(()=>{let i=class i{constructor(t,e){this.adminService=t,this.formBuilder=e,this.allArea=[],this.blockArray=[]}ngOnInit(){this.getAllArea(),this.areaData=this.formBuilder.group({dist:[null,P.required],block:[null,P.required]}),this.areaData.get("dist")?.valueChanges.subscribe(t=>{this.onChangeDist(t)}),this.areaData.get("block")?.valueChanges.subscribe(t=>{this.onChangeBlock(t)})}getAllArea(){this.adminService.getAllArea().subscribe(t=>{t.message=="success"&&(this.allArea=t.data,console.log(t.data))})}onChangeDist(t){this.blockArray=[];let[e]=this.allArea.filter(c=>c.dist==t);this.blocks=e.block}onSubmit(){let t={dist:this.areaData.value.dist,block:this.blockArray};this.adminService.addArea(t).subscribe({next:e=>{e.message=="success",console.log(e)},error:e=>{console.log(e)}})}onChangeBlock(t){this.blockArray.find(c=>c==t)||this.blockArray.push(t),console.log(this.blockArray)}onRemove(t){let e=this.blockArray.filter(c=>c!=t);this.blockArray=e}};i.\u0275fac=function(e){return new(e||i)(u(p),u(U))},i.\u0275cmp=v({type:i,selectors:[["app-add-area"]],standalone:!0,features:[S([p]),b],decls:21,vars:1,consts:[[1,"row"],[1,"col-md-6","m-auto"],[3,"formGroup","ngSubmit"],[1,"row","mt-3"],[1,"col-md-6"],["aria-label",".form-select-lg example","formControlName","dist",1,"form-select","form-select-lg","mb-3"],["aria-label",".form-select-lg example","formControlName","block",1,"form-select","form-select-lg","mb-3"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-success"],[3,"value","change"],[3,"value"],["for",""],["src","assets/img/close.png","alt","",1,"close",3,"click"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),l(3,"Add area"),a(),g(4,"hr"),n(5,"form",2),f("ngSubmit",function(){return c.onSubmit()}),n(6,"div",3)(7,"div",4)(8,"select",5),k(9,Se,2,2,"option",10,C),a()(),n(11,"div",4)(12,"select",6),k(13,Ae,2,2,"option",10,C),a()(),n(15,"div",7)(16,"div"),k(17,ye,3,1,"label",11,C),a(),n(19,"button",8),l(20,"Add Area"),a()()()()()()),e&2&&(s(5),d("formGroup",c.areaData),s(4),_(c.allArea),s(4),_(c.blocks),s(4),_(c.blockArray))},dependencies:[A,G,$,W,X,Q,N,O,j,R],styles:["label[_ngcontent-%COMP%]{background-color:#fafac5;padding:10px;border-radius:10px;margin:4px;font-size:large;font-weight:600}.close[_ngcontent-%COMP%]{width:25px}.close[_ngcontent-%COMP%]:hover{width:26px}"]});let o=i;return o})();function De(o,i){if(o&1){let r=w();n(0,"label",7),l(1),n(2,"img",8),f("click",function(){let c=y(r).$implicit,x=h().$implicit,Y=h();return D(Y.onRemove(x._id,c))}),a()()}if(o&2){let r=i.$implicit;s(),I("",r," ")}}function we(o,i){if(o&1){let r=w();n(0,"li",3)(1,"div",4)(2,"div",5),l(3),a(),n(4,"div"),k(5,De,3,1,"label",7,C),a()(),n(7,"span",6),f("click",function(){let c=y(r).$implicit,x=h();return D(x.onDelete(c._id))}),l(8,"Delete"),a()()}if(o&2){let r=i.$implicit;s(3),m(r.dist),s(2),_(r.block)}}var Fe=()=>["../add-area"],he=(()=>{let i=class i{constructor(t){this.adminService=t,this.areaArray=[]}ngOnInit(){this.getArea()}getArea(){this.adminService.getArea().subscribe({next:t=>{t.message=="success"?(console.log(t),this.areaArray=t.data):this.areaArray=[]},error:t=>{console.log(t)}})}onDelete(t){this.adminService.deleteDist(t).subscribe({next:e=>{e.message=="success"&&this.getArea(),console.log(e)},error:e=>{console.log(e)}})}onRemove(t,e){this.adminService.removeBlock(t,e).subscribe({next:c=>{c.message=="success"?(c.data.block.length<1&&this.onDelete(t),this.getArea()):console.log(c)},error:c=>{console.log(c)}})}};i.\u0275fac=function(e){return new(e||i)(u(p))},i.\u0275cmp=v({type:i,selectors:[["app-area"]],standalone:!0,features:[S([p]),b],decls:7,vars:2,consts:[[1,"mt-2"],[1,"btn","btn-warning",3,"routerLink"],[1,"list-group","list-group-numbered"],[1,"list-group-item","d-flex","justify-content-between","align-items-start"],[1,"ms-2","me-auto"],[1,"fw-bold"],[1,"badge","btn","btn-outline-danger","rounded-pill","delete-btn",3,"click"],["for",""],["src","assets/img/close.png","alt","",1,"close",3,"click"],["class","list-group-item d-flex justify-content-between align-items-start"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"a",1),l(2,"Add area"),a()(),n(3,"div",0)(4,"ol",2),k(5,we,9,1,"li",9,C),a()()),e&2&&(s(),d("routerLink",M(1,Fe)),s(4),_(c.areaArray))},dependencies:[A,T],styles:[".delete-btn[_ngcontent-%COMP%]:hover{cursor:pointer;color:#fff}.delete-btn[_ngcontent-%COMP%]{color:red}label[_ngcontent-%COMP%]{background-color:#fafac5;padding:10px;border-radius:10px;margin:4px;font-size:large;font-weight:600}.close[_ngcontent-%COMP%]{width:25px}.close[_ngcontent-%COMP%]:hover{width:26px}"]});let o=i;return o})();function Ie(o,i){if(o&1&&(n(0,"option",8),l(1),a()),o&2){let r=i.$implicit;d("value",r),s(),m(r)}}var Ve=(o,i,r)=>({" alert-success":o,"alert-warning":i," alert-danger":r}),Me=(o,i,r)=>({"bg-success":o,"bg-warning":i,"bg-danger":r}),Be=o=>["./person-booking",o];function Te(o,i){if(o&1&&(n(0,"div",9)(1,"div",10)(2,"div",11),l(3),g(4,"div",12),a(),n(5,"div",13)(6,"h5",14),l(7),a(),n(8,"p",15),l(9),a(),n(10,"p",15),l(11),a(),n(12,"a",16),l(13,"View Details"),a()()()()),o&2){let r=i.$implicit;s(2),d("ngClass",Z(7,Ve,r.status==="approved",r.status==="pending",r.status==="cancelled")),s(),I(" ",r.date+" ( "+r.status+")"," "),s(),d("ngClass",Z(11,Me,r.status==="approved",r.status==="pending",r.status==="cancelled")),s(3),m(r.custname),s(2),m(r.vehicleid.vname),s(2),m(r.mobile),s(),d("routerLink",re(15,Be,r._id))}}var Pe=()=>["approved","pending","cancelled"],ve=(()=>{let i=class i{constructor(t,e){this.adminService=t,this.formbuilder=e,this.allBookingArray=[],this.status=null}ngOnInit(){this.statusData=this.formbuilder.group({status:[this.status]}),this.getAllBooking(this.status),this.statusData.get("status")?.valueChanges.subscribe(t=>{this.getAllBooking(t)})}getAllBooking(t){this.adminService.getAllBooking(t).subscribe({next:e=>{e.message=="success"?(this.allBookingArray=e.data.slice().reverse(),console.log(this.allBookingArray)):(this.allBookingArray=[],console.log(e))},error:e=>{console.log(e)}})}};i.\u0275fac=function(e){return new(e||i)(u(p),u(U))},i.\u0275cmp=v({type:i,selectors:[["app-admin-all-booking"]],standalone:!0,features:[S([p]),b],decls:15,vars:2,consts:[[1,"row","p-1"],[1,"col-md-12"],[1,"frm-container"],[1,"text-center"],[3,"formGroup"],["for","",1,""],["name","","id","","formControlName","status",1,"form-control","ms-auto"],["value","null"],[3,"value"],[1,"col-md-2","mt-1"],[1,"card"],[1,"card-header","alert",3,"ngClass"],[1,"dot",3,"ngClass"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-warning",3,"routerLink"],["class","col-md-2 mt-1"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),l(4,"Bookings"),a(),n(5,"form",4)(6,"label",5),l(7,"Sort by status"),a(),n(8,"select",6)(9,"option",7),l(10,"All"),a(),k(11,Ie,2,2,"option",8,C),a()()()(),k(13,Te,14,17,"div",17,C),a()),e&2&&(s(5),d("formGroup",c.statusData),s(6),_(M(1,Pe)),s(2),_(c.allBookingArray))},dependencies:[A,ae,T,G,$,W,X,Q,N,O,j,R],styles:[".card-header[_ngcontent-%COMP%]{position:relative}.dot[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;position:absolute;right:1%;top:10%}.card-header[_ngcontent-%COMP%]{font-weight:bolder}form[_ngcontent-%COMP%]{text-align:right}select[_ngcontent-%COMP%]{max-width:200px}label[_ngcontent-%COMP%]{width:200px}"]});let o=i;return o})();function Ne(o,i){if(o&1&&g(0,"img",9),o&2){let r=h();d("src",r.imgUrl,V)}}var be=(()=>{let i=class i{constructor(t,e){this.formBuilder=t,this.adminService=e,this.imageFile=null}ngOnInit(){this.vehicleData=this.formBuilder.group({vname:[null,P.required],pkm:[null,P.required]})}onchange(t){this.imageFile=t.target.files[0],this.imgExt=this.imageFile.name.split(".").pop();let e=new FileReader;e.onload=()=>{this.imgUrl=e.result},e.readAsDataURL(this.imageFile)}onSubmit(){let t=ie(te({},this.vehicleData.value),{ext:this.imgExt});this.adminService.addVehicle(t,this.imageFile).subscribe({next:e=>{e.message=="success",console.log(e)},error:e=>{console.log(e)}})}};i.\u0275fac=function(e){return new(e||i)(u(U),u(p))},i.\u0275cmp=v({type:i,selectors:[["app-add-vehicle"]],standalone:!0,features:[S([p]),b],decls:18,vars:2,consts:[[1,"row"],[1,"col-md-6","m-auto","mt-2"],[3,"formGroup","ngSubmit"],["class","preview-img","alt","",3,"src"],["for",""],["type","text","formControlName","vname",1,"form-control"],["type","number","formControlName","pkm",1,"form-control"],["type","file",1,"form-control",3,"change"],[1,"btn","btn-success","mt-2"],["alt","",1,"preview-img",3,"src"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),l(3,"Add vehicle"),a(),g(4,"hr"),n(5,"form",2),f("ngSubmit",function(){return c.onSubmit()}),z(6,Ne,1,1,"img",3),n(7,"label",4),l(8,"Vehicle name"),a(),g(9,"input",5),n(10,"label",4),l(11,"Rate / Km"),a(),g(12,"input",6),n(13,"label",4),l(14,"Vehicle image"),a(),n(15,"input",7),f("change",function(Y){return c.onchange(Y)}),a(),n(16,"button",8),l(17,"Add Vehicle"),a()()()()),e&2&&(s(5),d("formGroup",c.vehicleData),s(),J(6,c.imgUrl?6:-1))},dependencies:[G,$,de,pe,N,O,j,R],styles:["label[_ngcontent-%COMP%]{margin-top:5px}.preview-img[_ngcontent-%COMP%]{width:200px;display:block;margin:auto}"]});let o=i;return o})();function Oe(o,i){if(o&1){let r=w();n(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),g(4,"img",7),a(),n(5,"div",8)(6,"div",9)(7,"p",10)(8,"em"),l(9,"Vehicle Model : "),a(),n(10,"strong"),l(11),a()(),n(12,"p",10)(13,"em"),l(14,"Minimum charge : "),a(),n(15,"strong"),l(16),a()(),n(17,"p",10)(18,"button",11),f("click",function(){let c=y(r).$implicit,x=h();return D(x.onDelete(c._id))}),l(19,"Delete"),a()()()()()()()}if(o&2){let r=i.$implicit;s(4),d("src","/"+r.imgname,V),s(7),m(r.vname),s(5),m(r.pkm)}}var $e=()=>["../add-vehicle"],xe=(()=>{let i=class i{constructor(t){this.adminService=t,this.vehicleArray=[]}ngOnInit(){this.getAllVehicle()}getAllVehicle(){this.adminService.getVehicle().subscribe({next:t=>{t.message=="success"?(console.log(t.data),this.vehicleArray=t.data):(this.vehicleArray=[],console.log(t))},error:t=>{console.log(t)}})}onDelete(t){this.adminService.deleteVehicle(t).subscribe({next:e=>{e.message=="success"?(console.log(e),this.getAllVehicle()):console.log(e)},error:e=>{console.log(e)}})}};i.\u0275fac=function(e){return new(e||i)(u(p))},i.\u0275cmp=v({type:i,selectors:[["app-all-vehicles"]],standalone:!0,features:[S([p]),b],decls:6,vars:2,consts:[[1,"mt-2"],[1,"btn","btn-warning",3,"routerLink"],[1,"row"],[1,"col-md-4","m-auto","mt-1"],[1,"card","bg-warning"],[1,"row","g-0"],[1,"col-md-4"],["alt","'car-image'",1,"img-fluid","rounded-start",3,"src"],[1,"col-md-7"],[1,"card-body"],[1,"card-text"],[1,"btn","btn-outline-dark",3,"click"],["class","col-md-4 m-auto mt-1"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"a",1),l(2,"Add Vehicle"),a()(),n(3,"div",2),k(4,Oe,20,3,"div",12,C),a()),e&2&&(s(),d("routerLink",M(1,$e)),s(3),_(c.vehicleArray))},dependencies:[T,A],styles:[".delete-btn[_ngcontent-%COMP%]:hover{cursor:pointer;color:#fff}.delete-btn[_ngcontent-%COMP%]{color:red}"]});let o=i;return o})();function je(o,i){if(o&1){let r=w();n(0,"button",23),f("click",function(){y(r);let e=h(2);return D(e.onReject())}),l(1,"Reject"),a()}}function Re(o,i){if(o&1){let r=w();n(0,"div",2)(1,"div",3)(2,"button",4),f("click",function(){y(r);let e=h();return D(e.onChangeStatus(e.bookingData.status))}),l(3),a(),z(4,je,2,0,"button",5),a(),n(5,"div",6)(6,"div",7)(7,"div",8)(8,"div",9)(9,"div",10),l(10,"Personal Details "),n(11,"span"),l(12),a()(),n(13,"div",11)(14,"h5",12),l(15,"Name : "),n(16,"strong"),l(17),a()(),n(18,"p",13),l(19,"Ph : "),n(20,"strong"),l(21),a()(),n(22,"p",13),l(23,"Email : "),n(24,"strong"),l(25),a()(),n(26,"p",13),l(27,"No of person : "),n(28,"strong"),l(29),a()()()()(),n(30,"div",14)(31,"div",15)(32,"div",10),l(33,"Location"),a(),n(34,"div",11)(35,"p",13),l(36,"From : "),n(37,"strong"),l(38),a()(),n(39,"p",13),l(40,"To : "),n(41,"strong"),l(42),a()()()()(),n(43,"div",16)(44,"div",17)(45,"div",10),l(46,"Date"),a(),n(47,"div",11)(48,"p",13),l(49,"Date : "),n(50,"strong"),l(51),a()(),n(52,"p",13),l(53,"Time : "),n(54,"strong"),l(55),a(),l(56," pm"),a()()()()()(),n(57,"div",6)(58,"div",18)(59,"div",19)(60,"div",20),g(61,"img",21),a(),n(62,"div",22)(63,"div",11)(64,"h5",10),l(65,"Vehicle"),a(),n(66,"p",13),l(67,"Vehicle Model : "),n(68,"strong"),l(69),a()(),n(70,"p",13),l(71,"Minimum charge : "),n(72,"strong"),l(73),a()()()()()()()()}if(o&2){let r=h();s(2),d("disabled",r.bookingData.status==="approved"||r.bookingData.status==="cancelled"),s(),m(r.bookingData.status==="pending"?"Approve":r.bookingData.status==="approved"?"completed":"Cancelled"),s(),J(4,r.bookingData.status!=="cancelled"?4:-1),s(8),m(r.bookingData.status),s(5),m(r.bookingData.custname),s(4),m(r.bookingData.mobile),s(4),m(r.bookingData.email),s(4),m(r.bookingData.person),s(9),m(r.bookingData.from.frmdist+","+r.bookingData.from.frmblock+","+r.bookingData.from.frmlmark),s(4),m(r.bookingData.to.todist+","+r.bookingData.to.toblock+","+r.bookingData.to.tolmark),s(9),m(r.bookingData.date),s(4),m(r.bookingData.time),s(6),d("src","/"+r.bookingData.vehicleid.imgname,V),s(8),m(r.bookingData.vehicleid.vname),s(4),I("",r.bookingData.vehicleid.pkm,"/km")}}var Ce=(()=>{let i=class i{constructor(t,e){this.route=t,this.adminiService=e}ngOnInit(){this.route.params.subscribe(t=>{this.bookingId=t.id}),this.getBooking()}getBooking(){this.adminiService.getPersonBooking(this.bookingId).subscribe({next:t=>{t.message=="success"?(this.bookingData=t.data,console.log(this.bookingData)):(this.bookingData=null,console.log(this.bookingData))},error:t=>{console.log(t)}})}onReject(){this.statusUpdate("cancelled")}onChangeStatus(t){switch(t){case"pending":this.statusUpdate("approved");break}}statusUpdate(t){this.adminiService.statusUpdate(this.bookingId,t).subscribe({next:e=>{e.message=="success"?(console.log(e),this.getBooking()):console.log(e)},error:e=>{console.log(e)}})}};i.\u0275fac=function(e){return new(e||i)(u(ce),u(p))},i.\u0275cmp=v({type:i,selectors:[["app-person-booking"]],standalone:!0,features:[S([p]),b],decls:2,vars:1,consts:[[1,"container-fluid"],["class","row m-2",4,"ngIf"],[1,"row","m-2"],[1,"m-2","text-end"],[1,"btn","btn-success",3,"disabled","click"],["class","btn btn-danger m-2"],[1,"col-md-6"],[1,"row"],[1,"col-md-10"],[1,"card","alert","alert-primary"],[1,"card-header"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"col-md-5","mt-2"],[1,"card","text-white","bg-dark"],[1,"col-md-5","mt-2","mb-2"],[1,"card","bg-light"],[1,"card","bg-warning"],[1,"row","g-0"],[1,"col-md-4"],["alt","...",1,"img-fluid","rounded-start",3,"src"],[1,"col-md-8"],[1,"btn","btn-danger","m-2",3,"click"]],template:function(e,c){e&1&&(n(0,"div",0),z(1,Re,74,15,"div",1),a()),e&2&&(s(),d("ngIf",c.bookingData))},dependencies:[A,le],styles:["img[_ngcontent-%COMP%]{margin:auto}span[_ngcontent-%COMP%]{float:right}"]});let o=i;return o})();var ke=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v({type:i,selectors:[["app-admin-dash"]],standalone:!0,features:[b],decls:4,vars:1,consts:[[3,"chkUser"],[1,"container-fluid"]],template:function(e,c){e&1&&(n(0,"div"),g(1,"app-header",0),n(2,"div",1),g(3,"router-outlet"),a()()),e&2&&(s(),d("chkUser","admin"))},dependencies:[me,ue]});let o=i;return o})();var Ue=[{path:"",component:ke,children:[{path:"",component:ve},{path:"add-area",component:fe},{path:"area",component:he},{path:"add-vehicle",component:be},{path:"all-vehicle",component:xe},{path:"person-booking/:id",component:Ce}]}],_e=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=q({type:i}),i.\u0275inj=H({imports:[ee.forChild(Ue),ee]});let o=i;return o})();var Vt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=q({type:i}),i.\u0275inj=H({imports:[A,_e]});let o=i;return o})();export{Vt as AdminModule};
