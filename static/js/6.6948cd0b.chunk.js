(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{340:function(e,t,r){"use strict";r.d(t,"a",function(){return h});var a=r(22),n=r.n(a),i=r(35),s=r(32),o=r(33),c=r(341),u=r.n(c),l=r(95),d=r(10),p=["http://serverlab2016.eastus2.cloudapp.azure.com:8800/api/cloud/","".concat(window.location.origin,"/api/cloud/")],h=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,null,[{key:"getCriterias",value:function(){var e=Object(i.a)(n.a.mark(function e(){var t,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.urlApi).concat(this.criteriaController),e.next=3,this.httpClient(t,"GET");case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createCriteria",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.urlApi).concat(this.criteriaController),e.next=3,this.httpClient(r,"POST",t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateCriteria",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.urlApi).concat(this.criteriaController),e.next=3,this.httpClient(r,"PUT",t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteCriteria",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.urlApi).concat(this.criteriaController,"/").concat(t),e.next=3,this.httpClient(r,"DELETE");case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCharges",value:function(){var e=Object(i.a)(n.a.mark(function e(){var t,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.urlApi).concat(this.chargesController),e.next=3,this.httpClient(t,"GET");case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createCharge",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.urlApi).concat(this.chargesController),e.next=3,this.httpClient(r,"POST",t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateCharge",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.urlApi).concat(this.chargesController),e.next=3,this.httpClient(r,"PUT",t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteCharge",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.urlApi).concat(this.chargesController,"/").concat(t),e.next=3,this.httpClient(r,"DELETE");case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getResult",value:function(){var e=Object(i.a)(n.a.mark(function e(){var t,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.urlApi).concat(this.resultController),e.next=3,this.httpClient(t,"GET");case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveResult",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.urlApi).concat(this.resultController),e.next=3,this.httpClient(r,"POST",t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getToken",value:function(){var e=Object(i.a)(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getAccessToken();case 2:if(this.token=e.sent,d.a.isNullOrUndefined(this.token)){e.next=7;break}return e.abrupt("return",this.token.accessToken);case 7:return e.abrupt("return","");case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"httpClient",value:function(){var e=Object(i.a)(n.a.mark(function e(t,r,a){var s=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(n.a.mark(function e(i){var o,c;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getToken();case 2:o=e.sent,c={"App-ID":l.b.tenatId,Authorization:"Bearer "+o,"Content-Type":"application/json","Cache-Control":"no-cache"},u()({method:r,url:t,data:a,headers:c}).then(function(e){200===e.status?i(e.data):i({Exito:!1,Message:"Error procesando la solicitud. "+e.request.responseText})}).catch(function(e){"Network Error"===e.message?i({Exito:!1,Message:"Ha ocurrido un error en el env\xedo de la solicitud, se encontr\xf3 problemas de conexi\xf3n con el servicio."}):d.a.isNullOrUndefined(e.response)||401!==e.response.status?d.a.isNullOrUndefined(e.response)||404!==e.response.status?i({Exito:!1,Message:"Ha ocurrido un error en procesamiento de la solicitud sobre el servicio.",Error:e}):i({Exito:!1,Message:"No se encontr\xf3 la url de la petici\xf3n solicitada, por favor verifiqu\xe9 los par\xe1metros del servicio.",Error:e}):i({Exito:!1,Message:"Autenticaci\xf3n no valida, debe iniciar sesi\xf3n para continuar usando el sistema."})});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e)}));return function(t,r,a){return e.apply(this,arguments)}}()}]),e}();h.urlApi=p[1],h.criteriaController="criteria",h.chargesController="charges",h.resultController="result",h.token=void 0},395:function(e,t,r){"use strict";r.r(t);var a=r(22),n=r.n(a),i=r(35),s=r(32),o=r(33),c=r(43),u=r(42),l=r(9),d=r(44),p=r(1),h=r.n(p),f=r(383),m=r(384),v=r(385),b=r(386),O=r(387),E=r(392),x=r(393),g=r(394),k=r(389),C=r(390),y=r(335),w=r(388),j=r(10),N=r(340),S=r(352),A=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).dt=void 0,r.loadComponent=!1,r.isEdit=!1,r.state={model:{Id:"",Name:"",Order:-1,OptionOrder:{}},dataList:[],orderFields:[],isError:!1,processing:!1},r.loadData=r.loadData.bind(Object(l.a)(r)),r.formOnChange=r.formOnChange.bind(Object(l.a)(r)),r.formSelectOnChange=r.formSelectOnChange.bind(Object(l.a)(r)),r.onEdit=r.onEdit.bind(Object(l.a)(r)),r.onDelete=r.onDelete.bind(Object(l.a)(r)),r.onSave=r.onSave.bind(Object(l.a)(r)),r.onCancel=r.onCancel.bind(Object(l.a)(r)),r.validateForm=r.validateForm.bind(Object(l.a)(r)),r.setDataOptionOrder=r.setDataOptionOrder.bind(Object(l.a)(r)),r}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadComponent=!0,this.setDataOptionOrder(),this.loadData()}},{key:"componentWillUnmount",value:function(){this.loadComponent=!1}},{key:"loadData",value:function(){var e=Object(i.a)(n.a.mark(function e(){var t,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return j.a.loader(!0),t=[],e.next=4,N.a.getCharges();case 4:if((r=e.sent)&&!0===r.Exito?t=r.Values||[]:j.a.dialogBox("",r.Message,"info",r.Error),this.loadComponent){e.next=8;break}return e.abrupt("return");case 8:return e.next=11,this.setState({dataList:t});case 11:j.a.dataTable(this.dt),j.a.loader(!1);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setDataOptionOrder",value:function(){var e=Object(i.a)(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[{label:"Al principio",value:0},{label:"Al final",value:-1}],this.setState({orderFields:t});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"formOnChange",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a,i,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target,a=r.name,i=r.value,(s=this.state.model)[a]=i,e.next=5,this.setState({model:s});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"formSelectOnChange",value:function(){var e=Object(i.a)(n.a.mark(function e(t,r){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=this.state.model)[t]=r.value,a["Option".concat(t)]=r,e.next=5,this.setState({model:a});case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"onEdit",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.state,a=r.model,i=r.orderFields,a.Id=t.Id,a.Name=t.Name,a.Order=t.Order,a.OptionOrder=i.find(function(e){return e.value===t.Order}),this.isEdit=!0,e.next=8,this.setState({model:a});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onDelete",value:function(){var e=Object(i.a)(n.a.mark(function e(t){var r,a,s=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=function(){var e=Object(i.a)(n.a.mark(function e(r){var a,i,o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return j.a.loader(!0),e.next=5,N.a.deleteCharge(t.Id);case 5:!0===(a=e.sent).Exito?(i=s.state.dataList,(o=i.findIndex(function(e){return e.Id===t.Id}))>=0?(i.splice(o,1),s.setState({dataList:i})):j.a.dialogBox("","El registro ha sido eliminado del repositorio de datos, pero no fue posible actualizar la ventana, para reflejar los cambios debe actualizar su navegador.")):j.a.dialogBox("",a.Message,"info",a.Error),j.a.loader(!1);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a=h.a.createElement("div",null,h.a.createElement("span",null,"\xbfDesea eliminar la carga ".concat(t.Name,"?")),h.a.createElement("p",{style:{color:"red"}},h.a.createElement("b",null,"Nota: este proceso eliminara todos los resultados asociados a la carga."))),j.a.dialogBox("Criterios",a,"question",null,r);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"onSave",value:function(){var e=Object(i.a)(n.a.mark(function e(){var t,r,a,i,s,o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.validateForm()){e.next=3;break}return this.setState({isError:!0}),e.abrupt("return");case 3:if(j.a.loader(!0),t=this.state,r=t.model,a=t.dataList,0===r.Order?r.Order=1:-1===r.Order&&(r.Order=j.a.isNullOrUndefined(a)?1:a.length+1),s=j.a.clone(r),this.isEdit){e.next=13;break}return e.next=10,N.a.createCharge(r);case 10:i=e.sent,e.next=16;break;case 13:return e.next=15,N.a.updateCharge(r);case 15:i=e.sent;case 16:!0===i.Exito?(j.a.dialogBox("",i.Message),this.isEdit?(o=a.findIndex(function(e){return e.Id===s.Id}))>=0&&(a[o]=s):(s.Id=i.Values.Id,a.push(s)),a=Object(S.sortBy)(a,"Order"),this.onCancel(),this.setState({dataList:a})):j.a.dialogBox("",i.Message,"info",i.Error),j.a.loader(!1);case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onCancel",value:function(){var e=Object(i.a)(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={Id:"",Name:"",Order:-1,OptionOrder:{}},this.isEdit=!1,e.next=4,this.setState({model:t,isError:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"validateForm",value:function(){var e=this.state.model;return!j.a.isEmptyNullOrUndefined(e.Name)&&!j.a.isEmptyNullOrUndefined(e.Order)}},{key:"render",value:function(){var e=this,t=this.state,r=t.model,a=t.dataList,n=t.isError,i=t.processing;return h.a.createElement("div",{className:"animated fadeIn"},h.a.createElement(f.a,null,h.a.createElement(m.a,{xs:"12",sm:"6",lg:"4"},h.a.createElement(v.a,null,h.a.createElement(b.a,null,h.a.createElement("strong",null,"Administrador de cargas")),h.a.createElement(O.a,null,h.a.createElement(f.a,null,h.a.createElement(m.a,{xs:"12"},h.a.createElement(E.a,{color:"danger",isOpen:n},"Debe completar la informaci\xf3n del formulario, los campos con (*) son obligatorios")),h.a.createElement(m.a,{xs:"12"},h.a.createElement(x.a,null,h.a.createElement(g.a,null,"Nombre (*)"),h.a.createElement(k.a,{type:"text",name:"Name",autoComplete:"off",value:r.Name,onChange:this.formOnChange,required:!0})),h.a.createElement(x.a,null,h.a.createElement(g.a,null,"Order (*)"),h.a.createElement(k.a,{type:"number",name:"Order",autoComplete:"off",value:r.Order,onChange:this.formOnChange,required:!0}))))),h.a.createElement(C.a,{className:"text-right"},h.a.createElement(y.a,{type:"button",color:"danger",onClick:this.onCancel,disabled:i,style:{marginRight:"10px"}},"Cancelar"),h.a.createElement(y.a,{type:"button",color:"primary",onClick:this.onSave,disabled:this.state.processing},"Guardar")))),h.a.createElement(m.a,{xs:"12",sm:"6",lg:"8"},h.a.createElement(v.a,null,h.a.createElement(b.a,null,h.a.createElement("strong",null,"Cargas registrados")),h.a.createElement(O.a,null,h.a.createElement(w.a,{className:"table",innerRef:function(t){return e.dt=t},hover:!0,bordered:!0,striped:!0,size:"sm"},h.a.createElement("thead",{className:"tableHead"},h.a.createElement("tr",null,h.a.createElement("th",{style:{width:"90px"}}),h.a.createElement("th",null,"Nombre"))),h.a.createElement("tbody",null,a.map(function(t){return h.a.createElement("tr",{key:t.Id},h.a.createElement("td",{className:"text-center"},h.a.createElement(y.a,{color:"default",size:"sm",title:"Editar",onClick:function(){return e.onEdit(t)}},h.a.createElement("i",{className:"cui-note icons d-block"})),h.a.createElement(y.a,{color:"default",size:"sm",title:"Eliminar",onClick:function(){return e.onDelete(t)}},h.a.createElement("i",{className:"cui-trash icons d-block"}))),h.a.createElement("td",null,t.Name))}))))))))}}]),t}(h.a.Component);t.default=A}}]);