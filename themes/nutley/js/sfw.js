$=jQuery;jQuery.fn.digits=function(){return this.each(function(){jQuery(this).val(jQuery(this).val().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))})};jQuery(function(){jQuery("ul.dropdown li").hover(function(){jQuery(this).addClass("hover");jQuery('ul:first',this).css('visibility','visible');jQuery('div:first',this).css('visibility','visible')},function(){jQuery(this).removeClass("hover");jQuery('ul:first',this).css('visibility','hidden');jQuery('div:first',this).css('visibility','hidden')})});function addCommas(a){a+='';x=a.split('.');x1=x[0];x2=x.length>1?'.'+x[1]:'';var b=/(\d+)(\d{3})/;while(b.test(x1)){x1=x1.replace(b,'$1'+','+'$2')}return x1+x2}function removeCommas(a){var b=a.replace(/,/g,"");return b}function isEmptyInput(s){if(trimStr(s)=="")return true}function trimStr(a){return a.replace(/^\s\s*/,'').replace(/\s\s*$/,'')}
/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.superfish=function(d){var e=$.fn.superfish,c=e.c,$arrow=$(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),over=function(){var a=$(this),menu=getMenu(a);clearTimeout(menu.sfTimer);a.showSuperfishUl().siblings().hideSuperfishUl()},out=function(){var a=$(this),menu=getMenu(a),o=e.op;clearTimeout(menu.sfTimer);menu.sfTimer=setTimeout(function(){o.retainPath=($.inArray(a[0],o.$path)>-1);a.hideSuperfishUl();if(o.$path.length&&a.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path)}},o.delay)},getMenu=function(a){var b=a.parents(['ul.',c.menuClass,':first'].join(''))[0];e.op=e.o[b.serial];return b},addArrow=function(a){a.addClass(c.anchorClass).append($arrow.clone())};return this.each(function(){var s=this.serial=e.o.length;var o=$.extend({},e.defaults,d);o.$path=$('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){$(this).addClass([o.hoverClass,c.bcClass].join(' ')).filter('li:has(ul)').removeClass(o.pathClass)});e.o[s]=e.op=o;$('li:has(ul)',this)[($.fn.hoverIntent&&!o.disableHI)?'hoverIntent':'hover'](over,out).each(function(){if(o.autoArrows)addArrow($('>a:first-child',this))}).not('.'+c.bcClass).hideSuperfishUl();var b=$('a',this);b.each(function(i){var a=b.eq(i).parents('li');b.eq(i).focus(function(){over.call(a)}).blur(function(){out.call(a)})});o.onInit.call(this)}).each(function(){var a=[c.menuClass];if(e.op.dropShadows&&!($.browser.msie&&$.browser.version<7))a.push(c.shadowClass);$(this).addClass(a.join(' '))})};var f=$.fn.superfish;f.o=[];f.op={};f.IE7fix=function(){var o=f.op;if($.browser.msie&&$.browser.version>6&&o.dropShadows&&o.animation.opacity!=undefined)this.toggleClass(f.c.shadowClass+'-off')};f.c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',arrowClass:'sf-sub-indicator',shadowClass:'sf-shadow'};f.defaults={hoverClass:'sfHover',pathClass:'overideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},speed:'normal',autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};$.fn.extend({hideSuperfishUl:function(){var o=f.op,not=(o.retainPath===true)?o.$path:'';o.retainPath=false;var a=$(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass).find('>ul').hide().css('visibility','hidden');o.onHide.call(a);return this},showSuperfishUl:function(){var o=f.op,sh=f.c.shadowClass+'-off',$ul=this.addClass(o.hoverClass).find('>ul:hidden').css('visibility','visible');f.IE7fix.call($ul);o.onBeforeShow.call($ul);$ul.animate(o.animation,o.speed,function(){f.IE7fix.call($ul);o.onShow.call($ul)});return this}})})(jQuery);
/*
 * Supersubs v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 */

(function($){$.fn.supersubs=function(k){var l=$.extend({},$.fn.supersubs.defaults,k);return this.each(function(){var h=$(this);var o=$.meta?$.extend({},l,h.data()):l;var j=$('<li id="menu-fontsize">&#8212;</li>').css({'padding':0,'position':'absolute','top':'-999em','width':'auto'}).appendTo(h).width();$('#menu-fontsize').remove();$ULs=h.find('ul');$ULs.each(function(i){var c=$ULs.eq(i);var d=c.children();var e=d.children('a');var f=d.css('white-space','nowrap').css('float');var g=c.add(d).add(e).css({'float':'none','width':'auto'}).end().end()[0].clientWidth/j;g+=o.extraWidth;if(g>o.maxWidth){g=o.maxWidth}else if(g<o.minWidth){g=o.minWidth}g+='em';c.css('width',g);d.css({'float':f,'width':'100%','white-space':'normal'}).each(function(){var a=$('>ul',this);var b=a.css('left')!==undefined?'left':'right';a.css(b,g)})})})};$.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}})(jQuery);
/*--------------------------------------------------
// JCalculator - A Calculator Plugin for jQuery   //
//                                                //
// Author: Hitesh Agarwal                         //
// Version: 1.0                                   //
// Date: 14-feb 11                                //
// License: GNU General Public License v2.0       //
--------------------------------------------------*/
(function($){$.fn.calculator=function(b){var c=jQuery.extend({},$.fn.calculator.defaults,b);return this.each(function(){var a=$(this);if(!a.hasClass('converted2calc')){a.settings=$.meta?$.extend({},c,a.data()):c;$.fn.calculator.init(a);a.addClass('converted2calc')}})};$.fn.calculator.init=function(b){b.expression='';b.text='0';b._cleartextflag=false;b._executable=true;b._lastresult=null;$.fn.calculator.format(b).find('.calc-title-bar').text(b.settings.title);for(i in $.fn.calculator.buttons){$.fn.calculator.format.addButton(b,$.fn.calculator.buttons[i])}b.keydown(function(a){a.preventDefault();if($.fn.calculator.buttons[a.keyCode]){$.fn.calculator.buttons[a.keyCode].onPress(b);$.fn.calculator.action.updateDisplay(b);b.settings.buttonPressed()}});b.settings.defaultOpen?'':b.css({display:'none'});(b.settings.movable&&$.fn.draggable)?(b.draggable({handle:'.calc-title-bar-container'}).find('.calc-title-bar-container').css('cursor','move')):'';b.settings.movable?($('<div class="calc-title-bar-button-close"></div>').button({icons:{primary:"ui-icon-close"},text:false}).appendTo(b.find('.calc-title-bar-container')).css({position:'absolute',right:2,top:2,width:15,height:14}).click(function(){b.settings.hide(b)})):'';(b.settings.resizable&&$.fn.resizable)?b.resizable({handles:'se'}).css({minHeight:160,minWidth:130}):'';$.fn.calculator.action.updateDisplay(b)};$.fn.calculator.hide=function(a){a.hide()};$.fn.calculator.show=function(a){a.show()};$.fn.calculator.format=function(a){return a.addClass('calculator calc-wrapper ui-widget ui-corner-all ui-widget-content').html('<div class="calc-title-bar-container ui-widget-header" style="height:20px;left:0;position:absolute;right:0;top:0;"><div class="calc-title-bar" style="padding:2px 3px;"></div></div><div class="calc-container" style="position:absolute;left:4px;right:4px;top:22px;bottom:8px"><div class="calc-text-wrapper" style="height:20%;left:3px;position:absolute;right:0;top:3%;"><label class="calc-text" style="background:#fff;border:1px solid #CCC;bottom:0;left:4%;overflow:hidden;padding:2px;position:absolute;right:4%;top:0;text-align:right;vertical-align:middle;"></label></div><div class="calc-buttons-wrapper" style="bottom:4px;left:2px;position:absolute;right:2px;"></div></div>').attr('tabindex',0).css({width:a.settings.width,height:a.settings.height,outline:'none',position:'relative',zIndex:99}).focusin(function(){a.find('.calc-text').css({backgroundColor:'#FFFFF2'})}).focusout(function(){a.find('.calc-text').css({backgroundColor:''})})};$.fn.calculator.format.createButton=function(a){var b=(a.left)?'left:'+a.left+';':'';b+=(a.top)?'top:'+a.top+';':'';b+=(a.width)?'width:'+a.width+';':'';b+=(a.height)?'height:'+a.height+';':'';return $('<div class="calc-button-wrapper" style="position:absolute;'+b+'"><div class="calc-button" style="left:0;right:0;bottom:0;position:absolute;text-align:center;text-decoration:none;top:0;">'+a.symbol+'</div></div>')};$.fn.calculator.format.addButton=function(a,b){$.fn.calculator.format.createButton(b).button().appendTo(a.find('.calc-buttons-wrapper')).click(function(){b.onPress(a);$.fn.calculator.action.updateDisplay(a);a.settings.buttonPressed()})};$.fn.calculator.action={updateDisplay:function(a){a.find('.calc-text').text(a.text);a.settings.displayChanged()},input:function(a,b){if(a._executable){if(a.text.length<a.settings.accuracy||a._cleartextflag){var c=(a.text=='0'||a._cleartextflag)?((b.symbol=='.')?'0.':(b.symbol=='0')?'':b.symbol):a.text+b.symbol;if($.fn.calculator.validate.input(c)){a.text=c;a.expression=a.expression+((c=='0.')?c:b.symbol);a._cleartextflag=false}}a._lastresult=null}else{if($.fn.calculator.validate.expression(a.expression)){a.text=eval(a.expression);a._lastresult=a.text+'';a.text=(a.text.toPrecision(a.settings.accuracy).indexOf('e')==-1)?parseFloat(a.text.toPrecision(a.settings.accuracy))+'':a.text.toPrecision(a.settings.accuracy);a.expression='';a._executable=false;a._cleartextflag=true}if(a._lastresult){a.expression=a._lastresult;a._lastresult=null}a._cleartextflag=true;a.expression=(a.expression=='')?b.symbol:($.fn.calculator.validate.operation(a.expression)?a.expression.replace(/[-+/\*]$/,b.symbol):a.expression+b.symbol)}}};$.fn.calculator.buttons={96:{symbol:'0',keycode:48,left:'4%',top:'80%',width:'44%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},97:{symbol:'1',keycode:49,left:'4%',top:'61%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},98:{symbol:'2',keycode:50,left:'28%',top:'61%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},99:{symbol:'3',keycode:51,left:'52%',top:'61%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},100:{symbol:'4',keycode:52,left:'4%',top:'42%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},101:{symbol:'5',keycode:53,left:'28%',top:'42%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},102:{symbol:'6',keycode:54,left:'52%',top:'42%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},103:{symbol:'7',keycode:55,left:'4%',top:'23%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},104:{symbol:'8',keycode:56,left:'28%',top:'23%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},105:{symbol:'9',keycode:57,left:'52%',top:'23%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},110:{symbol:'.',keycode:110,left:'52%',top:'80%',width:'20%',height:'15%',onPress:function(a){a._executable=true;$.fn.calculator.action.input(a,this)}},111:{symbol:'/',keycode:111,left:'4%',top:'4%',width:'20%',height:'15%',onPress:function(a){a._executable=false;$.fn.calculator.action.input(a,this)}},106:{symbol:'*',keycode:106,left:'28%',top:'4%',width:'20%',height:'15%',onPress:function(a){a._executable=false;$.fn.calculator.action.input(a,this)}},107:{symbol:'+',keycode:107,left:'76%',top:'23%',width:'20%',height:'34%',onPress:function(a){a._executable=false;$.fn.calculator.action.input(a,this)}},109:{symbol:'-',keycode:109,left:'52%',top:'4%',width:'20%',height:'15%',onPress:function(a){a._executable=false;$.fn.calculator.action.input(a,this)}},13:{symbol:'=',keycode:13,left:'76%',top:'61%',width:'20%',height:'34%',onPress:function(a){if($.fn.calculator.validate.expression(a.expression)){a.text=eval(a.expression);a._lastresult=a.text+'';a.text=(a.text.toPrecision(a.settings.accuracy).indexOf('e')==-1)?parseFloat(a.text.toPrecision(a.settings.accuracy))+'':a.text.toPrecision(a.settings.accuracy);a.expression='';a._executable=false;a._cleartextflag=true}else{a.expression=a.text}}},27:{symbol:'C',keycode:27,left:'76%',top:'4%',width:'20%',height:'15%',onPress:function(a){a._executable=true;a.expression='';a.text='0'}}};$.fn.calculator.validate={input:function(a){return a.match(/^((0|(0\.[0-9]*))|([1-9][0-9]*|([1-9][0-9]*\.[0-9]*)|([1-9][0-9]*\.[0-9]*)|([1-9][0-9]*)))$/)},expression:function(a){return a.match(/^\d{1,}(\.\d{1,})?[-+*/]\d{1,}(\.\d{1,})?$/)},operation:function(a){return a.match(/[-+/\*]$/)}};if(!$.fn.button){$.fn.button=function(){return this.each(function(){button=$(this);button.find('.calc-button').css({borderWidth:1,borderStyle:'solid',borderColor:'#CCCCCC',lineHeight:1.4,fontSize:'12px',cursor:'pointer',fontWeight:'bold'})})}}$.fn.calculator.defaults={defaultOpen:true,title:'Calculator',accuracy:12,width:164,height:180,movable:false,resizable:false,show:function(a){$.fn.calculator.show(a)},hide:function(a){$.fn.calculator.hide(a)},buttonPressed:function(a,b){},displayChanged:function(a,b,c){}}})(jQuery);

jQuery(function($){$(document).ready(function(){$('#main-menu ul.menu').supersubs({minWidth:16,maxWidth:40,extraWidth:1}).superfish()})});