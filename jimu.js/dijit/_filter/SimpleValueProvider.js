// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/html dojo/_base/declare dojo/_base/lang dojo/on dojo/keys jimu/utils ./ValueProvider dijit/form/ValidationTextBox dijit/form/NumberTextBox ./DateValueSelector".split(" "),function(c,e,f,g,d,h,k,l,m,n){return e([k],{templateString:"\x3cdiv\x3e\x3c/div\x3e",_dijit:null,customId:null,postCreate:function(){this.inherited(arguments);this.customId=this.partObj.vpId;c.addClass(this.domNode,"jimu-filter-simple-value-provider");var a=null;"string"===this.shortType?(a={required:!1,trim:!0,
intermediateChanges:!1},this.customId&&(a.id=this.customId),this._dijit=new l(a),this._dijit.startup(),this._dijit.on("keydown",function(b){(b.keyCode||b.which)===d.ENTER&&this._dijit.emit("enter")}.bind(this))):"number"===this.shortType?(a={required:!1,intermediateChanges:!1,constraints:{pattern:"#####0.##########"}},this.customId&&(a.id=this.customId),this._dijit=new m(a),this._dijit.startup(),this._dijit.on("keydown",function(b){(b.keyCode||b.which)===d.ENTER&&this._dijit.emit("enter")}.bind(this))):
(a={runtime:this.runtime,popupInfo:this.popupInfo,_fieldInfo:this.fieldInfo},this.runtime&&(a.virtualDates=this.partObj.interactiveObj.virtualDates),this.customId&&(a.customId=this.customId,a.prompt=this.partObj.interactiveObj.prompt+" "+this.partObj.interactiveObj.hint),this._dijit=new n(a),this.own(g(this._dijit,"change",f.hitch(this,function(b){this.emit("change",b,"start")}))));!this.customId||"string"!==this.shortType&&"number"!==this.shortType||(a=c.toDom('\x3clabel for\x3d"'+this.customId+
'" class\x3d"screen-readers-only"\x3e'+this.partObj.interactiveObj.prompt+" "+this.partObj.interactiveObj.hint+"\x3c/label\x3e"),c.place(a,this.domNode));c.setStyle(this._dijit.domNode,"width","100%");this._dijit.placeAt(this.domNode)},getDijits:function(){return[this._dijit]},setValueObject:function(a){this.isDefined(a.value)&&("date"===this.shortType?this._dijit.setValueObject(a):this._dijit.set("value",a.value))},getValueObject:function(){if(this.isValidValue())if("date"===this.shortType){var a=
this._dijit.getValueObject();if(a&&a.value)return a.isValid=!0,a.type=this.partObj.valueObj.type,a}else return a=this._dijit.get("value"),a="number"===this.shortType?parseFloat(a):h.sanitizeHTML(a),{isValid:!0,type:this.partObj.valueObj.type,value:a};return null},tryGetValueObject:function(){return this.isValidValue()?this.getValueObject():this.isEmptyValue()?{isValid:!0,type:this.partObj.valueObj.type,value:null}:null},setRequired:function(a){this._dijit.set("required",a)}})});