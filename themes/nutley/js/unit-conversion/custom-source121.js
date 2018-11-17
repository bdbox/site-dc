var isMobile = false;

/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-touch-mq-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(l.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.5.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m={},n={},o={},p=[],q=p.slice,r,s=function(a,c,d,e){var h,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),k.appendChild(j);return h=["&#173;","<style>",a,"</style>"].join(""),k.id=g,(l?k:m).innerHTML+=h,m.appendChild(k),l||(m.style.background="",f.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},t=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return s("@media "+b+" { #"+g+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});var B=function(c,d){var f=c.join(""),g=d.length;s(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9},g,d)}([,["@media (",l.join("touch-enabled),("),g,")","{#touch{top:9px;position:absolute}}"].join("")],[,"touch"]);m.touch=function(){return e.touch};for(var C in m)v(m,C)&&(r=C.toLowerCase(),e[r]=m[C](),p.push((e[r]?"":"no-")+r));return w(""),h=j=null,e._version=d,e._prefixes=l,e.mq=t,e.testStyles=s,e}(this,this.document);
//end of Modernizr

//
if ((Modernizr.mq('only all and (max-width: 480px)'))&&(Modernizr.touch))
isMobile = true;


/*
YUI().use('autocomplete', 'autocomplete-highlighters', function (Y) {

  Y.one('body').addClass('yui3-skin-sam');

  Y.one('#searchInput').plug(Y.Plugin.AutoComplete, {
    resultHighlighter: 'phraseMatch',
    source: ['foo', 'bar', 'baz', 'tutorial', 'yahoo user interface']
  });
});
*/


//global
var digits = 6;
var tempVal = new Array();
var page_id = null;
//
YUI().use('node', 'cookie', function(Y){
	Y.one('window').on('load', function(){
		//
		var page_code = (document.title).split(" ")[0].toLowerCase();
		var li_hilite = Y.Cookie.get(page_code);
		//var li_hilite = "1 2 3 4 5 6 7 8";
		if (li_hilite && li_hilite.split(" ").length > 0){
			Y.all("#contentBody li").each(function (node, index) {
					node.removeClass("active");
			});
			for (var i=0; i<li_hilite.split(" ").length; i++){ 
				Y.all("#contentBody li").each(function (node, index) {
					//node.removeClass("active");
					if (li_hilite.split(" ")[i] == (index + ""))
						node.addClass("active");
				});	
			}
		}
		
		//
		Y.all("#contentBody li em").each(function (node, index) {
			node.setAttribute("title", "highlight this item");										   
		});
		
		//
		if (isMobile){
			removejscssfile("styles/dynamic.css", "css");
		}
		
		//
		if (Y.Cookie.get("layout") == "left")
			loadjscssfile("styles/dynamic.css", "css");
		else
			removejscssfile("styles/dynamic.css", "css");
		
		
		//digits options
		Y.one('#digits').on('change', function(){
			digits = this.get('value');	
			/*Y.all("#contentBody li input").each(function (n, i) {
				if (digits >= 0){
					if (tempVal.length < units.unit.length){
						tempVal.push(parseFloat(n.get('value')));
						n.set("value", (parseFloat(n.get('value'))).digits(digits));	
					} else if (tempVal.length == units.unit.length){
						n.set("value", (tempVal[i]).digits(digits));		
					}
				} else {
					if (tempVal.length == units.unit.length){ 
						n.set("value", (tempVal[i])); 
					}
				}
			});*/
		});
				
		//fix IE not support css hover
		if (Y.UA.ie >0)
			Y.all("#category ul li").each(function(node, index){
				node.on("mouseover", function(){
					node.addClass("over");							  
				});									   
				node.on("mouseout", function(){
					node.removeClass("over");							  
				});									   
			});
		
		//highlight icon
		Y.all("#contentBody li em").each(function (node, index) {
			node.on("click", function(em){
				if (node.get("parentNode").hasClass("active")){
					node.get("parentNode").removeClass("active");
					var temp = Y.Cookie.get(page_code);
					temp = temp.split(" ");
					
					if (temp && temp.findIndex(""+index) >= 0){
						temp.splice(temp.findIndex(""+index),1);
						Y.Cookie.set(page_code, temp.join(" ").trim());
					}
						
				} else {
					node.get("parentNode").addClass("active");
					var temp;
					if (Y.Cookie.get(page_code))
						temp = Y.Cookie.get(page_code);
					else
						temp = "";
					
					temp += " " +  index;
					
					Y.Cookie.set(page_code, temp.trim());
				}
										  
			});										  
		});
				
		//
		if (!page_id)
			Y.all("#contentBody li input").each(function (node, index) {
				node.set("alt", units.unit[index].ratio);
			});
		if (page_id == "temperature")
			Y.all("#contentBody li input").each(function (node, index) {
				node.set("alt", units.unit[index].from + "=" + units.unit[index].to );
			});
		
		
		var t, temp, ratio1, ratio2;
		//input node list
		var nodes = Y.all("#contentBody li input");
		nodes.each(function(node, index){
			//node.set("value", 1/units.unit[index].ratio);
			node.on("click", function(em){
				node.select();
			});	
			
			node.on("focus", function(){
				node.addClass("active");							
			});

			node.on("blur", function(){
				node.removeClass("active");							
			});
			
			//common pages
			if (!page_id)
				node.on("keyup", function(){
					temp = parseFloat(node.get("value"));
					ratio1 = parseFloat(node.get("alt"));
					if (temp){
						nodes.each(function(n, i){
							ratio2 = parseFloat(n.get("alt"));
							if (n != node)
								if (digits){
									n.set("value", (temp*ratio1/ratio2).digits(digits));	
								}else{
									//console.log(units.unit[index].ratio);
									n.set("value", (temp*ratio1/ratio2));	
								}						 
						});				
					}
				});
				
			//page temperature
			if (page_id == "temperature")
				node.on("keyup", function(){
					t = parseFloat(node.get("value"));
					ratio1 = (node.get("alt")).split("=");
					temp = eval(ratio1[0]);
					//console.log(t + " " + temp);
					//alert(temp);
					nodes.each(function(n, i){
						t = temp;
						ratio2 = (n.get("alt")).split("=");
						//console.log(t);
						//console.log(ratio2);
						//console.log(eval(ratio2[1]));
						if (n != node)
							if (digits){
								n.set("value", (eval(ratio2[1])).digits(digits));	
							}else{
								//console.log(units.unit[index].ratio);
								//n.set("value", (temp*ratio1/ratio2));	
							}						 
					});				
				});

		});
		

	});					   
});


//digits format
Number.prototype.digits = function(d){ 
	if (this != Math.floor(this)){
		return this.toFixed(d);
	} else {
		return this;	
	}
};



//drag & drop
if (!Modernizr.touch){
YUI().use('dd-constrain', 'dd-proxy', 'dd-drop', function(Y) {
    //Listen for all drop:over events
    Y.DD.DDM.on('drop:over', function(e) {
        //Get a reference to our drag and drop nodes
        var drag = e.drag.get('node'),
            drop = e.drop.get('node');
        
        //Are we dropping on a li node?
        if (drop.get('tagName').toLowerCase() === 'li') {
            //Are we not going up?
            if (!goingUp) {
                drop = drop.get('nextSibling');
            }
            //Add the node to this list
            e.drop.get('node').get('parentNode').insertBefore(drag, drop);
            //Resize this nodes shim, so we can drop on it later.
            e.drop.sizeShim();
			
			
        }
    });
    //Listen for all drag:drag events
    Y.DD.DDM.on('drag:drag', function(e) {
        //Get the last y point
        var y = e.target.lastXY[1];
        //is it greater than the lastY var?
        if (y < lastY) {
            //We are going up
            goingUp = true;
        } else {
            //We are going down.
            goingUp = false;
        }
        //Cache for next check
        lastY = y;
    });
    //Listen for all drag:start events
    Y.DD.DDM.on('drag:start', function(e) {
        //Get our drag object
        var drag = e.target;
        //Set some styles here
        drag.get('node').setStyle('opacity', '.25');
        drag.get('dragNode').set('innerHTML', drag.get('node').get('innerHTML'));
        drag.get('dragNode').setStyles({
            opacity: '.5',
            borderColor: drag.get('node').getStyle('borderColor'),
            backgroundColor: drag.get('node').getStyle('backgroundColor')
        });
    });
    //Listen for a drag:end events
    Y.DD.DDM.on('drag:end', function(e) {
        var drag = e.target;
        //Put our styles back
        drag.get('node').setStyles({
            visibility: '',
            opacity: '1'
        });
    });
    //Listen for all drag:drophit events
    Y.DD.DDM.on('drag:drophit', function(e) {
        var drop = e.drop.get('node'),
            drag = e.drag.get('node');
			
			//console.log(drop.get("children"));

        //if we are not on an li, we must have been dropped on a ul
        if (drop.get('tagName').toLowerCase() !== 'li') {
            if (!drop.contains(drag)) {
                drop.appendChild(drag);
            }
        }
		

    });
    
    //Static Vars
    var goingUp = false, lastY = 0;

    //Get the list of li's in the lists and make them draggable
    var lis = Y.Node.all('#contentBody ul li');
    lis.each(function(v, k) {
        var dd = new Y.DD.Drag({
            node: v,
            target: {
                padding: '0 0 0 20'
            }
        }).plug(Y.Plugin.DDProxy, {
            moveOnEnd: false
        }).plug(Y.Plugin.DDConstrained, {
            constrain2node: '#contentBody'
        });
    });

    //Create simple targets for the 2 lists.
    var uls = Y.Node.all('#contentBody ul');
    uls.each(function(v, k) {
        var tar = new Y.DD.Drop({
            node: v
        });
    });
    
});
}


//function dynamiclly load css file
function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script');
  fileref.setAttribute("type","text/javascript");
  fileref.setAttribute("src", filename);
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link");
  fileref.setAttribute("rel", "stylesheet");
  fileref.setAttribute("type", "text/css");
  fileref.setAttribute("href", filename);
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

// function dynamiclly remove css file
function removejscssfile(filename, filetype){
 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"; //determine element type to create nodelist from
 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"; //determine corresponding attribute to test for
 var allsuspects=document.getElementsByTagName(targetelement);
 for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
   allsuspects[i].parentNode.removeChild(allsuspects[i]); //remove element by calling parentNode.removeChild()
 }
}



// tooltip
YUI().use("event-mouseenter", "widget", "widget-position", "widget-stack", function(Y) {
    var Lang = Y.Lang,
        Node = Y.Node,
        OX = -10000,
        OY = -10000;

    var Tooltip = Y.Base.create("tooltip", Y.Widget, [Y.WidgetPosition, Y.WidgetStack], {

        // PROTOTYPE METHODS/PROPERTIES

        /*
         * Initialization Code: Sets up privately used state
         * properties, and publishes the events Tooltip introduces
         */
        initializer : function(config) {

            this._triggerClassName = this.getClassName("trigger");

            // Currently bound trigger node information
            this._currTrigger = {
                node: null,
                title: null,
                mouseX: Tooltip.OFFSCREEN_X,
                mouseY: Tooltip.OFFSCREEN_Y
            };

            // Event handles - mouse over is set on the delegate
            // element, mousemove and mouseleave are set on the trigger node
            this._eventHandles = {
                delegate: null,
                trigger: {
                    mouseMove : null,
                    mouseOut: null
                }
            };

            // Show/hide timers
            this._timers = {
                show: null,
                hide: null
            };

            // Publish events introduced by Tooltip. Note the triggerEnter event is preventable,
            // with the default behavior defined in the _defTriggerEnterFn method 
            this.publish("triggerEnter", {defaultFn: this._defTriggerEnterFn, preventable:true});
            this.publish("triggerLeave", {preventable:false});
        },

        /*
         * Destruction Code: Clears event handles, timers,
         * and current trigger information
         */
        destructor : function() {
            this._clearCurrentTrigger();
            this._clearTimers();
            this._clearHandles();
        },

        /*
         * bindUI is used to bind attribute change and dom event
         * listeners
         */
        bindUI : function() {
            this.after("delegateChange", this._afterSetDelegate);
            this.after("nodesChange", this._afterSetNodes);

            this._bindDelegate();
        },

        /*
         * syncUI is used to update the rendered DOM, based on the current
         * Tooltip state
         */
        syncUI : function() {
            this._uiSetNodes(this.get("triggerNodes"));
        },

        /*
         * Public method, which can be used by triggerEvent event listeners
         * to set the content of the tooltip for the current trigger node
         */
        setTriggerContent : function(content) {
            var contentBox = this.get("contentBox");
            contentBox.set("innerHTML", "");

            if (content) {
                if (content instanceof Node) {
                    for (var i = 0, l = content.size(); i < l; ++i) {
                        contentBox.appendChild(content.item(i));
                    }
                } else if (Lang.isString(content)) {
                    contentBox.set("innerHTML", content);
                }
            }
        },

        /*
         * Default attribute change listener for 
         * the triggerNodes attribute
         */
        _afterSetNodes : function(e) {
            this._uiSetNodes(e.newVal);
        },

        /*
         * Default attribute change listener for 
         * the delegate attribute
         */
        _afterSetDelegate : function(e) {
            this._bindDelegate(e.newVal);
        },

        /*
         * Updates the rendered DOM to reflect the
         * set of trigger nodes passed in
         */
        _uiSetNodes : function(nodes) {
            if (this._triggerNodes) {
                this._triggerNodes.removeClass(this._triggerClassName);
            }

            if (nodes) {
                this._triggerNodes = nodes;
                this._triggerNodes.addClass(this._triggerClassName);
            }
        },

        /*
         * Attaches the default mouseover DOM listener to the 
         * current delegate node
         */
        _bindDelegate : function() {
            var eventHandles = this._eventHandles;

            if (eventHandles.delegate) {
                eventHandles.delegate.detach();
                eventHandles.delegate = null;
            }
            eventHandles.delegate = Y.delegate("mouseenter", Y.bind(this._onNodeMouseEnter, this), this.get("delegate"), "." + this._triggerClassName);
        },

        /*
         * Default mouse enter DOM event listener.
         * 
         * Delegates to the _enterTrigger method,
         * if the mouseover enters a trigger node.
         */
        _onNodeMouseEnter : function(e) {
            var node = e.currentTarget;
            if (node && (!this._currTrigger.node || !node.compareTo(this._currTrigger.node))) {
                this._enterTrigger(node, e.pageX, e.pageY);
            }
        },

        /*
         * Default mouse leave DOM event listener
         * 
         * Delegates to _leaveTrigger if the mouse
         * leaves the current trigger node
         */
        _onNodeMouseLeave : function(e) {
            this._leaveTrigger(e.currentTarget);
        },

        /*
         * Default mouse move DOM event listener
         */
        _onNodeMouseMove : function(e) {
            this._overTrigger(e.pageX, e.pageY);
        },

        /*
         * Default handler invoked when the mouse enters
         * a trigger node. Fires the triggerEnter
         * event which can be prevented by listeners to 
         * show the tooltip from being displayed.
         */
        _enterTrigger : function(node, x, y) {
            this._setCurrentTrigger(node, x, y);
            this.fire("triggerEnter", {node:node, pageX:x, pageY:y});
        },

        /*
         * Default handler for the triggerEvent event,
         * which will setup the timer to display the tooltip,
         * if the default handler has not been prevented.
         */
        _defTriggerEnterFn : function(e) {
            var node = e.node;
            if (!this.get("disabled")) {
                this._clearTimers();
                var delay = (this.get("visible")) ? 0 : this.get("showDelay");
                this._timers.show = Y.later(delay, this, this._showTooltip, [node]);
            }
        },

        /*
         * Default handler invoked when the mouse leaves
         * the current trigger node. Fires the triggerLeave
         * event and sets up the hide timer
         */
        _leaveTrigger : function(node) {
            this.fire("triggerLeave");

            this._clearCurrentTrigger();
            this._clearTimers();

            this._timers.hide = Y.later(this.get("hideDelay"), this, this._hideTooltip);
        },

        /*
         * Default handler invoked for mousemove events
         * on the trigger node. Stores the current mouse 
         * x, y positions
         */
        _overTrigger : function(x, y) {
            this._currTrigger.mouseX = x;
            this._currTrigger.mouseY = y;
        },

        /*
         * Shows the tooltip, after moving it to the current mouse
         * position.
         */
        _showTooltip : function(node) {
            var x = this._currTrigger.mouseX;
            var y = this._currTrigger.mouseY;

            this.move(x + Tooltip.OFFSET_X, y + Tooltip.OFFSET_Y);

            this.show();
            this._clearTimers();

            this._timers.hide = Y.later(this.get("autoHideDelay"), this, this._hideTooltip);
        },

        /*
         * Hides the tooltip, after clearing existing timers.
         */
        _hideTooltip : function() {
            this._clearTimers();
            this.hide();
        },

        /*
         * Set the rendered content of the tooltip for the current
         * trigger, based on (in order of precedence):
         * 
         * a). The string/node content attribute value
         * b). From the content lookup map if it is set, or 
         * c). From the title attribute if set.
         */
        _setTriggerContent : function(node) {
            var content = this.get("content");
            if (content && !(content instanceof Node || Lang.isString(content))) {
                content = content[node.get("id")] || node.getAttribute("title");
            }
            this.setTriggerContent(content);
        },

        /*
         * Set the currently bound trigger node information, clearing 
         * out the title attribute if set and setting up mousemove/out 
         * listeners.
         */
        _setCurrentTrigger : function(node, x, y) {

            var currTrigger = this._currTrigger,
                triggerHandles = this._eventHandles.trigger;

            this._setTriggerContent(node);

            triggerHandles.mouseMove = Y.on("mousemove", Y.bind(this._onNodeMouseMove, this), node);
            triggerHandles.mouseOut = Y.on("mouseleave", Y.bind(this._onNodeMouseLeave, this), node);

            var title = node.getAttribute("title");
            node.setAttribute("title", "");

            currTrigger.mouseX = x;
            currTrigger.mouseY = y;
            currTrigger.node = node;
            currTrigger.title = title;
        },

        /*
         * Clear out the current trigger state, restoring
         * the title attribute on the trigger node, 
         * if it was originally set.
         */
        _clearCurrentTrigger : function() {

            var currTrigger = this._currTrigger,
                triggerHandles = this._eventHandles.trigger;

            if (currTrigger.node) {
                var node = currTrigger.node;
                var title = currTrigger.title || "";

                currTrigger.node = null;
                currTrigger.title = "";

                triggerHandles.mouseMove.detach();
                triggerHandles.mouseOut.detach();
                triggerHandles.mouseMove = null;
                triggerHandles.mouseOut = null;

                node.setAttribute("title", title);
            }
        },

        /*
         * Cancel any existing show/hide timers
         */
        _clearTimers : function() {
            var timers = this._timers;
            if (timers.hide) {
                timers.hide.cancel();
                timers.hide = null;
            }
            if (timers.show) {
              timers.show.cancel();
              timers.show = null;
            }
        },

        /*
         * Detach any stored event handles
         */
        _clearHandles : function() {
            var eventHandles = this._eventHandles;

            if (eventHandles.delegate) {
                this._eventHandles.delegate.detach();
            }
            if (eventHandles.trigger.mouseOut) {
                eventHandles.trigger.mouseOut.detach();
            }
            if (eventHandles.trigger.mouseMove) {
                eventHandles.trigger.mouseMove.detach();
            }
        }
    }, {
    
        // STATIC METHODS/PROPERTIES
       
        OFFSET_X : 15,
        OFFSET_Y : 15,
        OFFSCREEN_X : OX,
        OFFSCREEN_Y : OY,

        ATTRS : {
    
            /* 
             * The tooltip content. This can either be a fixed content value, 
             * or a map of id-to-values, designed to be used when a single
             * tooltip is mapped to multiple trigger elements.
             */
            content : {
                value: null
            },
    
            /* 
             * The set of nodes to bind to the tooltip instance. Can be a string, 
             * or a node instance.
             */
            triggerNodes : {
                value: null,
                setter: function(val) {
                    if (val && Lang.isString(val)) {
                        val = Node.all(val);
                    }
                    return val;
                }
            },
    
            /*
             * The delegate node to which event listeners should be attached.
             * This node should be an ancestor of all trigger nodes bound
             * to the instance. By default the document is used.
             */
            delegate : {
                value: null,
                setter: function(val) {
                    return Y.one(val) || Y.one("document");
                }
            },
    
            /*
             * The time to wait, after the mouse enters the trigger node,
             * to display the tooltip
             */
            showDelay : {
                value:150
            },
    
            /*
             * The time to wait, after the mouse leaves the trigger node,
             * to hide the tooltip
             */
            hideDelay : {
                value:10
            },
    
            /*
             * The time to wait, after the tooltip is first displayed for 
             * a trigger node, to hide it, if the mouse has not left the 
             * trigger node
             */
            autoHideDelay : {
                value:5000
            },
    
            /*
             * Override the default visibility set by the widget base class
             */
            visible : {
                value:false
            },
    
            /*
             * Override the default XY value set by the widget base class,
             * to position the tooltip offscreen
             */
            xy: {
                value:[OX, OY]
            }
        }
    });

    var tt = new Tooltip({
        triggerNodes:".tp",
        delegate: "#abc",
        content: {
            tt3: "Tooltip 3 (from lookup)"
        },
        shim:false,
        zIndex:2
    });
    tt.render();

    tt.on("triggerEnter", function(e) {
        var node = e.node;
        if (node && node.get("id") == "tt2") {
            this.setTriggerContent("Tooltip 2 (from triggerEvent)");
        }
    });

    var prevent = Y.one("#prevent");
    tt.on("triggerEnter", function(e) {
        var node = e.node;
        if (100) {
            if (node && node.get("id") == "tt4") {
                e.preventDefault();
            }
        }
    });
});

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};

Array.prototype.findIndex = function(value){
	var ctr = "";
	for (var i=0; i < this.length; i++) {
		if (this[i] == value) {
			return i;
		}
	}
	return ctr;
};