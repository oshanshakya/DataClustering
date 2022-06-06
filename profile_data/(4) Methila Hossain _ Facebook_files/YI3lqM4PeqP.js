if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometObjectFitContainer.react",["cr:964538","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={inner:{height:"datstx6m",position:"l9j0dhe7",width:"k4urcfbm"},innerWithAspectRatio:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},outer:{height:"datstx6m",position:"l9j0dhe7",width:"k4urcfbm"},outerWithAspectRatio:{height:"idiwt2bm"}};function j(a){var b=a.children,d=a.debugRole;d=a.innerInlineStyle;var e=a.innerXStyle,f=a.outerInlineStyle,g=a.outerRef,j=a.outerXStyle;a=a.testid;var k=a!=null&&a!==""?a+"-outer":void 0;k=a!=null&&a!==""?a+"-inner":void 0;return h.jsx("div",babelHelpers["extends"]({},{},{className:c("stylex")(i.outer,j),"data-testid":void 0,ref:g,style:f,children:h.jsx("div",babelHelpers["extends"]({},{},{className:c("stylex")(i.inner,e),"data-testid":void 0,style:d,children:b}))}))}j.displayName=j.name+" [from "+f.id+"]";function a(a,b){var d=a.children,e=a.contentAspectRatio,f=a.debugRole,g=a.objectFitMode;g=g===void 0?"CONTAINER_SIZE":g;a=a.testid;a=16/9;e=e!=null&&isFinite(e)&&e>0?e:a;if(g==="CONTAINER_WIDTH_BASED_ASPECT_RATIO"){a=isFinite(e)&&e>0?100/e:100;e={paddingBottom:a.toFixed(5)+"%"};return h.jsx(j,{children:d,debugRole:f,innerXStyle:i.innerWithAspectRatio,outerInlineStyle:e,outerRef:b,outerXStyle:i.outerWithAspectRatio,testid:void 0})}else if(g==="CONTAINER_SIZE")return h.jsx(j,{children:d,debugRole:f,outerRef:b,testid:void 0});else throw c("unrecoverableViolation")("Unsupported objectFitMode "+g,"comet_ui")}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometFullScreen",["Promise"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.requestFullscreen||a.mozRequestFullScreen||a.msRequestFullscreen||a.webkitRequestFullscreen;return typeof c==="function"?c.call(a):b("Promise").reject()}function c(){var a=document.exitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitExitFullscreen;return typeof a==="function"?a.call(document):b("Promise").reject()}function d(){return(document.webkitFullscreenEnabled===!0||document.mozFullScreenEnabled===!0||document.msFullscreenEnabled===!0||document.fullscreenEnabled===!0)&&(typeof document.webkitExitFullscreen==="function"||typeof document.mozCancelFullScreen==="function"||typeof document.msExitFullscreen==="function"||typeof document.exitFullscreen==="function")}function g(){return document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||null}function e(){return g()!=null}function h(){return["webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange","fullscreenchange"]}function i(a){var b=window.document,c=!1,d=!0;h().forEach(function(e){b.addEventListener(e,a,{capture:c,passive:d})});return function(){h().forEach(function(d){b.removeEventListener(d,a,c)})}}f.requestFullScreen=a;f.exitFullScreen=c;f.isSupported=d;f.getFullScreenElement=g;f.isFullScreen=e;f.getFullScreenChangeEventNames=h;f.subscribeToFullScreenChangeEvent=i}),66);
__d("DataViewReader",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$1=0,this.$2=a}var b=a.prototype;b.seek=function(a){this.$1=a};b.skip=function(a){var b=this.$1;this.$1+=a;return b};b.readUint8=function(){return this.$2.getUint8(this.skip(8/8))};b.readUint16=function(a){a===void 0&&(a=!1);return this.$2.getUint16(this.skip(16/8),a)};b.readUint32=function(a){a===void 0&&(a=!1);return this.$2.getUint32(this.skip(32/8),a)};b.readUint64=function(a){a===void 0&&(a=!1);var b;a?(a=this.$2.getUint32(this.skip(32/8),!0),b=this.$2.getUint32(this.skip(32/8),!0)):(b=this.$2.getUint32(this.skip(32/8)),a=this.$2.getUint32(this.skip(32/8)));if(b>2097151)throw new RangeError("Overflow reading 64-bit value.");return Math.pow(2,32)*b+a};b.readInt64=function(a){a===void 0&&(a=!1);var b;a?(a=this.$2.getInt32(this.skip(32/8),!0),b=this.$2.getInt32(this.skip(32/8),!0)):(b=this.$2.getInt32(this.skip(32/8)),a=this.$2.getInt32(this.skip(32/8)));if(b>2097151)throw new RangeError("Overflow reading 64-bit value.");return Math.pow(2,32)*(b|0)+a};b.readInt16=function(a){a===void 0&&(a=!1);return this.$2.getInt16(this.skip(16/8),a)};b.readInt32=function(a){a===void 0&&(a=!1);return this.$2.getInt32(this.skip(32/8),a)};b.readZeroTerminatedString=function(a){var b="",c=0,d;while(c++<a&&(d=this.readUint8()))b+=String.fromCharCode(d);return b};b.readChars=function(a){var b="";while(a-->0)b+=String.fromCharCode(this.$2.getUint8(this.skip(8/8)));return b};b.readBytes=function(a){var b=[];while(a-->0)b.push(this.$2.getUint8(this.skip(8/8)));return b};b.getDataView=function(){return this.$2};b.getCursor=function(){return this.$1};b.hasMoreData=function(){return this.$2.byteLength-this.getCursor()>0};return a}();f["default"]=a}),66);
__d("LiveTraceWwwVideoPlayerFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743810");c=b("FalcoLoggerInternal").create("live_trace_www_video_player",a);e.exports=c}),null);
__d("Mp4DASHEventMessageBox",[],(function(a,b,c,d,e,f){a=function(){function a(a,b){this.$1=b,this.$2=null,b.getVersion()==0?this.$2={version:0,schemeIdUri:a.readZeroTerminatedString(this.$4(a,b)),value:a.readZeroTerminatedString(this.$4(a,b)),timescale:a.readUint32(),presentationTimeDelta:a.readUint32(),eventDuration:a.readUint32(),id:a.readUint32()}:b.getVersion()==1&&(this.$2={version:1,timescale:a.readUint32(),presentationTime:a.readUint64(),eventDuration:a.readUint32(),id:a.readUint32(),schemeIdUri:a.readZeroTerminatedString(this.$4(a,b)),value:a.readZeroTerminatedString(this.$4(a,b))}),this.$3=new DataView(a.getDataView().buffer,a.getCursor())}var b=a.prototype;b.getFullBox=function(){return this.$1};b.getEmsgFields=function(){return this.$2};b.getMessageData=function(){return this.$3};b.getStartTime=function(){var a=this.$2;if(a==null)return null;switch(a.version){case 0:return null;case 1:return this.$5(a)}};b.getDuration=function(){var a=this.$2;if(a==null)return null;var b=a.eventDuration;a=a.timescale;return a!==0?b/a:b};b.$5=function(a){var b=a.timescale;a=a.presentationTime;return b!==0?a/b:a};b.$4=function(a,b){a=b.getBox().getSize()-(a.getCursor()-b.getBox().getStart());return a};return a}();a.canonicalType="emsg";f["default"]=a}),66);
__d("Mp4Box",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$4=a.getCursor(),this.$1=a.readUint32(),this.$2=a.readChars(4),this.$1===1?this.$1=a.readUint64():this.$1===0&&(this.$1=a.getDataView().byteLength-this.$4),this.$2==="uuid"&&(this.$3=a.readChars(16)),this.$5=a.getCursor()}var b=a.prototype;b.getBodyStart=function(){return this.$5};b.getBodySize=function(){var a=this.$5-this.$4;return this.getSize()-a};b.getSize=function(){return this.$1};b.getType=function(){return this.$2};b.getUuid=function(){return this.$3};b.getStart=function(){return this.$4};b.inspect=function(){return"{ size: "+this.$1+", type: "+this.$2+" }"};return a}();f["default"]=a}),66);
__d("Mp4FullBox",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b){this.$2=a.readUint8(),this.$1=a.readUint8(),this.$1=a.readUint8()+(this.$1<<8),this.$1=a.readUint8()+(this.$1<<8),this.$3=b}var b=a.prototype;b.getVersion=function(){return this.$2};b.getFlags=function(){return this.$1};b.getBox=function(){return this.$3};return a}();f["default"]=a}),66);
__d("Mp4Demuxer",["DataViewReader","Mp4Box","Mp4FullBox"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){this.$1=new(c("DataViewReader"))(a)}var b=a.prototype;b.parseBox=function(){return new(c("Mp4Box"))(this.$1)};b.parseFullBox=function(a){return new(c("Mp4FullBox"))(this.$1,a)};b.parseCanonicalBox=function(a,b){return new a(this.$1,b)};b.skipBox=function(a){this.$1.seek(a.getStart()+a.getSize())};b.withinBox=function(a){var b=this.$1.getCursor();return b>=a.getStart()&&b<a.getStart()+a.getSize()};b.atEnd=function(){return this.$1.getCursor()>=this.$1.getDataView().byteLength};b.reset=function(){this.$1.seek(0)};b.readBoxBodyText=function(a){this.$1.seek(a.getBodyStart());var b=new TextDecoder();a=new Uint8Array(this.$1.readBytes(a.getBodySize()));return b.decode(a)};return a}();g["default"]=a}),98);
__d("VideoLiveTrace",["DataViewReader","LiveTraceWwwVideoPlayerFalcoEvent","Mp4DASHEventMessageBox","Mp4Demuxer","throttle"],(function(a,b,c,d,e,f,g){var h="x-fb-video-livetrace-ids",i="x-fb-video-livetrace-parentsource",j="x-fb-video-livetrace-streamtype",k="x-fb-origin-hit",l="x-fb-edge-hit",m="PLY:WWW:",n=m+"DL:",o=m+"DIS:",p=1e3,q=/[\r\n]+/;a=function(){function a(a,b,d){var e=this;this.$6=[];this.$1=a;this.$2=null;a=d+":"+b.substring(0,5);this.$3=m+a;this.$4=n+a;this.$5=o+a;this.$7=c("throttle")(function(a){return e.$8(a)},p)}var b=a.prototype;b.setStreamType=function(a){this.$2=a};b.$9=function(a,b,d,e,f,g){var h,i=this,j=Date.now(),k=(h=this.$2)!=null?h:0;c("LiveTraceWwwVideoPlayerFalcoEvent").log(function(){return{stream_id:i.$1,stream_type:k,event_name:b,event_severity:f,event_creation_time:j,source:a,trace_id:d,parent_source:e,metadata:g}})};b.onUpdateStatus=function(a){this.$7(a)};b.$8=function(a){a=a.position*1e3;for(var b=this.$6.length-1;b>=0;b--){var c=this.$6[b];if(c.presentationTimestamp>a)continue;if(c.displayTimestamp==null)c.displayTimestamp=Date.now();else continue;this.$9(this.$5,"FRAME",c.traceId,this.$4,"SUCCESS",null)}};b.getAndFlushTracedFrames=function(){var a,b={currentTimeMs:Date.now(),streamId:this.$1},c={dl:[],dis:[]},d=[];this.$6.forEach(function(a){a.hasBeenFlushedAsDownloaded||(c.dl.push({id:a.traceId,timeMs:a.downloadTimestamp}),a.hasBeenFlushedAsDownloaded=!0),a.displayTimestamp!=null?c.dis.push({id:a.traceId,timeMs:a.displayTimestamp}):d.push(a)});this.$6=d;b[(a=this.$2)!=null?a:0]=c;return c.dl.length>0||c.dis.length>0?b:null};b.handleHeadersString=function(a,b){a=a.trim().split(q);this.$10(a.map(function(a){a=a.split(": ");return[a.shift().toLowerCase(),a.shift()]}),b)};b.handleHeaders=function(a,b){this.$10(this.$11(a),b)};b.handleHeadersAndBody=function(a,b,c){this.$12(this.$11(a),b,c)};b.$11=function(a){var b=[];for(var a=a.entries(),c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b.push(e)}return b};b.$13=function(a){var b=Date.now(),d=new Map(),e=a.reduce(function(a,b){return a+b.byteLength},0),f=new Uint8Array(e),g=0;a.forEach(function(a){f.set(a,g),g+=a.byteLength});e=new(c("Mp4Demuxer"))(new DataView(f.buffer,f.byteOffset,f.byteLength));while(!e.atEnd()){a=e.parseBox();if(a.getType()===c("Mp4DASHEventMessageBox").canonicalType){var h=e.parseCanonicalBox(c("Mp4DASHEventMessageBox"),e.parseFullBox(a));if(h instanceof c("Mp4DASHEventMessageBox")){h=h.getMessageData();h=new(c("DataViewReader"))(h).readZeroTerminatedString(h.byteLength);try{h=JSON.parse(h);Array.isArray(h)&&h.filter(function(a){return Array.isArray(a)&&a.length===2}).forEach(function(a){var c=a[0];a=a[1];d.set(c,{displayTimestamp:null,downloadTimestamp:b,hasBeenFlushedAsDownloaded:!1,presentationTimestamp:a,traceId:c})})}catch(a){}}}e.skipBox(a)}return d};b.$14=function(a,b){var c=this,d="null",e=Date.now(),f=new Map(),g="";a.forEach(function(a){var b=a[0].toLowerCase();a=a[1];if(b===h&&a){var m=a.split(",");m.forEach(function(a){a=a.split(":");var b=+a[0];a=+a[1];f.set(b,{displayTimestamp:null,downloadTimestamp:e,hasBeenFlushedAsDownloaded:!1,presentationTimestamp:a,traceId:b})})}b===i&&(g=a);c.$2===null&&b===j&&(c.$2=parseInt(a,10));(b===k||b===l)&&parseInt(a,10)&&(d=b===k?"origin":"edge")});a=b||{};a.hit=d;return g!==""?{tracedFrames:f,eventMetaData:a,parentSource:g,streamType:this.$2}:null};b.$12=function(a,b,c){var d=this.$14(a,c);if(d==null||d.parentSource==="")return;if(b==null?void 0:b.length){a=this.$13(b);a.forEach(function(a,b){d.tracedFrames.set(b,a)})}this.$6=this.$6.concat(Array.from(d.tracedFrames.values()));c=d.tracedFrames.keys();for(var b=c,a=Array.isArray(b),c=0,b=a?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(a){if(c>=b.length)break;e=b[c++]}else{c=b.next();if(c.done)break;e=c.value}e=e;this.$9(this.$4,"SEGMENT",e,d.parentSource,"SUCCESS",d.eventMetaData)}};b.$10=function(a,b){this.$12(a,null,b)};b.handleXHR=function(a,b){this.handleHeadersString(a.getAllResponseHeaders(),b)};b.getLiveTraceContext=function(){return{streamId:this.$1,streamType:this.$2||0,sourceId:this.$3}};return a}();g["default"]=a}),98);
__d("VideoPlayerOnViewability.react",["DOMRectIsEqual","DOMRectReadOnly","VideoPlayerViewabilityConstants","emptyFunction","react","useIntersectionObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useMemo,k=b.useRef,l=10,m=[.25,.75,.99,1].concat(new Array(10).fill().map(function(a,b){return b/10}));function a(a){var b=a.viewportMargins,d=k(-1),e=k(-1),f=k(c("DOMRectReadOnly").fromRect({height:0,width:0,x:0,y:0})),g=k(null),n=k(null);b=-b.top+"px "+-b.right+"px "+-b.bottom+"px "+-b.left+"px";var o=a.onVideoPlayerViewabilityInfoChange||c("emptyFunction"),p=l,q=i(function(a){if(a.time>e.current&&!c("DOMRectIsEqual")(a.boundingClientRect,f.current)){var b=a.boundingClientRect,d=b.height,h=b.width,i=b.x;b=b.y;var j=g.current;d=c("DOMRectReadOnly").fromRect({height:d,width:h,x:i,y:b});f.current=d;e.current=a.time;if(j===null||j<=0)return;if(j<=c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE)return;o({positionToViewport:d,visiblePercentage:j})}},[f,g,o]),r=i(function(a){if(a.time>d.current&&(a.intersectionRatio!==g.current||!c("DOMRectIsEqual")(a.boundingClientRect,f.current))){var b=a.boundingClientRect,h=b.height,i=b.width,j=b.x;b=b.y;var k=a.intersectionRatio;h=c("DOMRectReadOnly").fromRect({height:h,width:i,x:j,y:b});i=n.current;j=i;b=!1;var l=Math.abs((i||0)*100-(k||0)*100);(k!==null&&l>=1||l>0&&k<(i||0))&&(j=k,n.current=k,b=!0);g.current=k;d.current=a.time;l=f.current;f.current=h;e.current=a.time;if(!b&&c("DOMRectIsEqual")(l,h))return;j!==null&&o({positionToViewport:h,visiblePercentage:j})}},[e,f,g,o,d]),s=j(function(){var b=[];for(var a=1;a<=p;a++)b.push("-"+(100-a/p*100)+"% 0% 0% 0%");return b},[p]),t=k([]);t.current=[];for(var u=0;u<s.length;u++)t.current.push(i(c("useIntersectionObserver")(q,{root:null,rootMargin:s[u],threshold:m}),[s[u],m,c("useIntersectionObserver")]));var v=t.current.length,w=i(function(a){for(var b=0;b<v;b++)t.current[b](a)},[v,t]),x=i(c("useIntersectionObserver")(r,{root:null,rootMargin:b,threshold:m}),[r,b,m,c("useIntersectionObserver")]);u=i(function(a){x(a),w(a)},[x,w]);return h.jsx("div",{className:"k4urcfbm hwddc3l5 datstx6m",ref:u,children:h.Children.only(a.children)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("renderVideoPlayerImplementation",["react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){if(a.typename==="VideoPlayerMockImplementation")return h.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else if(a.typename==="VideoPlayerOzImplementation")return h.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else if(a.typename==="VideoPlayerProgressiveImplementation")return h.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else if(a.typename==="VideoPlayerShakaImplementation")return h.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else throw c("unrecoverableViolation")('CoreVideoPlayer: Unrecognized implementation typename "'+a.typename+'".',"comet_video_player")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCreateVideoPlayerPassiveViewabilityInfo",["DOMRectReadOnly","react","removeFromArray"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(){var a=h(function(){var a=[],b={positionToViewport:c("DOMRectReadOnly").fromRect({height:0,width:0,x:0,y:0}),visiblePercentage:0};b=null;return{setVideoPlayerPassiveViewabilityInfo:function(c){b=c,a.forEach(function(a){return a()})},videoPlayerPassiveViewabilityInfo:{getCurrent:function(){return b},subscribe:function(b){a.push(b);return{remove:function(){c("removeFromArray")(a,b)}}}}}});a=a[0];var b=a.setVideoPlayerPassiveViewabilityInfo;a=a.videoPlayerPassiveViewabilityInfo;return{setVideoPlayerPassiveViewabilityInfo:b,videoPlayerPassiveViewabilityInfo:a}}g["default"]=a}),98);
__d("videoPlayerUniqueID",["guid"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a="id-vpuid-"+c("guid")();return a}g["default"]=a}),98);
__d("CoreVideoPlayer.react",["CometObjectFitContainer.react","CurrentUser","ErrorMetadata","VideoLiveTrace","VideoPlayerAudioAvailabilityInfo","VideoPlayerOnViewability.react","VideoPlayerViewabilityContexts","createVideoStateHook","err","gkx","react","renderVideoPlayerImplementation","unrecoverableViolation","useCometSize_DO_NOT_USE","useCreateVideoPlayerPassiveViewabilityInfo","videoPlayerUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect,k=b.useRef,l=b.useState,m=584;function n(a){return a!=null&&isFinite(a)&&a>0?a:0}function o(a){if(a==="video_home_inline"||a==="inline")return{height:m,width:m};else return{height:1080,width:1920}}var p=function(a){var b=c("useCometSize_DO_NOT_USE")(),d=b[0];b=b[1];b=(b=b)!=null?b:o(a);return[b,function(a){return h.jsx(c("CometObjectFitContainer.react"),{debugRole:null,objectFitMode:"CONTAINER_SIZE",ref:d,children:a})}]};function a(a){var b=a.accessToken,e=a.expiredVideoUrlRefreshHandler,f=a.fullscreenController,g=a.implementations,m=a.isFullscreen,o=a.onCoreVideoStatesChanged,q=a.productAttribution,r=a.renderWithCoreVideoStates,s=a.trackingDataEncrypted,t=a.trackingNodes,u=a.viewportMarginsForViewability,v=babelHelpers.objectWithoutPropertiesLoose(a,["accessToken","expiredVideoUrlRefreshHandler","fullscreenController","implementations","isFullscreen","onCoreVideoStatesChanged","productAttribution","renderWithCoreVideoStates","trackingDataEncrypted","trackingNodes","viewportMarginsForViewability"]);a=l(function(){return c("videoPlayerUniqueID")()});var w=a[0];d("createVideoStateHook").useCleanupVideoStateHooks_INTERNAL(w);a=k(0);var x=k(null),y=c("useCreateVideoPlayerPassiveViewabilityInfo")(),z=y.setVideoPlayerPassiveViewabilityInfo,A=y.videoPlayerPassiveViewabilityInfo,B=v.broadcastId,C=v.isLiveStreaming,D=v.isLiveTraceEnabled;j(function(){x.current=Boolean(C)&&Boolean(D)&&B!=null?new(c("VideoLiveTrace"))(B,w,c("CurrentUser").getAccountID()):null;return function(){x.current!=null&&(x.current=null)}},[B,w,C,D]);y=p(v.subOrigin);var E=y[0];y=y[1];var F=i(function(a){z(a)},[z]),G=i(function(a){var b,c=a.implementationController;a=a.implementationExposedState;b={adClientToken:v.adClientToken,audioAvailabilityInfo:(b=v.audioAvailabilityInfo)!=null?b:d("VideoPlayerAudioAvailabilityInfo").VideoPlayerAudioAvailabilityInfoDefault,autoplayGatingResult:v.autoplayGatingResult!=null?v.autoplayGatingResult:"unknown",autoplaySetting:v.autoplaySetting,broadcastStatus:v.broadcastStatus,canAutoplay:v.canAutoplay!=null?v.canAutoplay:"allow",controller:c,dimensions:E,duration:a.duration,initialTracePolicy:v.initialTracePolicy,instanceKey:w,isDesktopPictureInPicture:a.isDesktopPictureInPicture,isFullscreen:m,isNCSR:Boolean(v.isNCSR),isPremiumMusicVideo:Boolean(v.isPremiumMusicVideo),lastMuteReason:a.lastMuteReason,lastPauseReason:a.lastPauseReason,lastPlayReason:a.lastPlayReason,loopCount:a.loopCount,loopCurrent:a.loopCurrent,originalHeight:v.originalHeight,originalWidth:v.originalWidth,videoFBID:v.videoFBID,videoPlayerPassiveViewabilityInfo:A,videoState:a,volumeSetting:v.volumeSetting};o&&o(b);return r(b)},[v.adClientToken,v.audioAvailabilityInfo,v.autoplayGatingResult,v.autoplaySetting,v.broadcastStatus,v.canAutoplay,v.initialTracePolicy,v.isNCSR,v.isPremiumMusicVideo,v.originalHeight,v.originalWidth,v.videoFBID,v.volumeSetting,E,w,m,A,o,r]);b={accessToken:b,coreVideoPlayerMetaData:v,dimensions:E,instanceKey:w,playerImplementationInstanceCountRef:a,productAttribution:q,trackingDataEncrypted:s,trackingNodes:t,videoLiveTraceRef:x};if(g.length===0){if(!c("gkx")("1611172"))return null;a=c("err")("No implementations given to CoreVideoPlayer");a.metadata=new(c("ErrorMetadata"))();a.metadata.addEntry("COMET_VIDEO","VIDEO_ID",String(v.videoFBID));throw c("unrecoverableViolation")("No implementations given to CoreVideoPlayer","comet_video_player",{error:a})}q=Boolean(v.captionsUrl);s=Boolean(v.isLiveStreaming);e={VideoPlayerShakaPerformanceLoggerClass:v.VideoPlayerShakaPerformanceLoggerClass,alt:v.alt,alwaysShowCaptions:v.alwaysShowCaptions,areCaptionsAutogenerated:v.areCaptionsAutogenerated,audioOnly:v.audioOnly,bufferEndLimit:v.bufferEndLimit,captionDisplayStyle:v.captionDisplayStyle,captionsUrl:v.captionsUrl,dimensions:E,disableLogging:v.disableLogging===!0,expiredVideoUrlRefreshHandler:e,fullscreenController:f,graphQLVideoDRMInfo:(t=v.graphQLVideoDRMInfo)!=null?t:null,graphQLVideoP2PSettings:(a=v.graphQLVideoP2PSettings)!=null?a:null,inbandCaptionsExpected:s,initialDesiredLatencyMs:v.desiredLatencyMs,initialLatencyToleranceMs:v.latencyToleranceMs,initialRepresentationIds:v.initialRepresentationIds,loadSequence:v.loadSequence,loggingMetaData:b,loopCount:v.loopCount,renderWithExposedState:G,sideLoadCaptionsExpected:q,startTimestamp:n(v.startTimestamp),videoFBID:v.videoFBID,videoLiveTraceRef:x,videoPlayerPassiveViewabilityInfo:A,videoPlayerShakaPerformanceLoggerBuilder:v.videoPlayerShakaPerformanceLoggerBuilder,wrapVideoPixels_EXPERIMENTAL:v.wrapVideoPixels_EXPERIMENTAL};f=g[0];t=c("renderVideoPlayerImplementation")(f,e);t!=null&&(t=h.jsx(d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext.Provider,{value:m,children:h.jsx(c("VideoPlayerOnViewability.react"),{onVideoPlayerViewabilityInfoChange:F,viewportMargins:u,children:t})}));return y(t)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("DOMContainer.react",["invariant","isNode","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.containerNode=null,c.setContainerNode=function(a){c.containerNode=a;var b=c.props.containerRef;typeof b==="function"&&b(a)},b)||babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.getDOMChild=function(){var a=this.props.children;c("isNode")(a)||h(0,1533);return a};d.shouldComponentUpdate=function(a){return a.children!==this.props.children};d.componentDidMount=function(){var a=this.containerNode;a!=null&&a.appendChild(this.getDOMChild())};d.componentDidUpdate=function(a){a=this.containerNode;if(a==null)return;while(a.lastChild)a.removeChild(a.lastChild);a.appendChild(this.getDOMChild())};d.render=function(){var a=this.props,b=a.display;a=babelHelpers.objectWithoutPropertiesLoose(a,["display"]);b=b==="block"?"div":"span";return i.jsx(b,babelHelpers["extends"]({},a,{ref:this.setContainerNode,children:void 0}))};return b}(i.Component);a.defaultProps={display:"inline"};g["default"]=a}),98);
__d("CoreVideoPlayerFitParentContainer.react",["DOMContainer.react","cr:964538","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=h.forwardRef(function(a,b){var c=a.children;a=a.debugRole;return h.jsx("div",babelHelpers["extends"]({},null,{className:"k4urcfbm l9j0dhe7 datstx6m a8c37x1j du4w35lb",ref:b,children:c}))});e=h.forwardRef(function(a,b){var d=a.debugRole;d=a.domElement;return h.jsx(c("DOMContainer.react"),babelHelpers["extends"]({},null,{className:"k4urcfbm l9j0dhe7 datstx6m a8c37x1j du4w35lb",display:"block",ref:b,children:d}))});function a(a){a=a.debugRole;a=document.createElement("div");a.className="k4urcfbm l9j0dhe7 datstx6m a8c37x1j du4w35lb";return a}g.CoreVideoPlayerFitParentContainer=b;g.CoreVideoPlayerFitParentDOMContainer=e;g.createFitParentContainerDiv=a}),98);
__d("GraphQLVideoAutoplayGatingResult",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){a=a!=null?a:"unknown";b=b?b:null;a={autoplayGatingResult:a,autoplaySetting:b,canAutoplay:c!=null?c:!1};return a}f.makeGraphQLVideoAutoplayGatingResult=a}),66);
__d("getVideoPlayerAutoplayProps",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){b=b!=null?b:"respect_user_settings";var d=b==="dangerously_always_autoplay";c=c!=null?c:"unknown";var e=a.autoplaySetting||"default_autoplay",f=e==="off";d=d||b==="respect_user_settings"&&!f&&a.canAutoplay;f=b==="do_not_autoplay"?c:a.autoplayGatingResult;c=d?"allow":b==="dangerously_disable_autoplay_management"?"dangerously_disable_autoplay_management":"deny";return{autoplayGatingResult:f,autoplaySetting:e,canAutoplay:c}}f["default"]=a}),66);
__d("VideoPlayerFallbackCover.react",["fbt","cr:1405514","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var c;c=(c=a.message)!=null?c:h._(/*FBT_CALL*/"Sorry, we're having trouble playing this video."/*FBT_CALL*/);return i.jsx(b("cr:1405514"),{debugError:a.debugError,message:c,onRetry:a.onRetry})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerSurface.react",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){return this.props.children!=null?this.props.children:null};return b}(a.PureComponent);g["default"]=b}),98);
__d("GlobalVideoPortsID",["cometUniqueID","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(){return"id-pv-"+c("cometUniqueID")()}function b(a){if(typeof a==="string"){var b="id-pv-";if(a.indexOf(b)===0&&a.length>b.length)return a;else throw c("unrecoverableViolation")('Expected a GlobalVideoPortsVideoID, got a string that does not look like it: "'+a+'"',"comet_video_player")}else return null}function d(){return"id-pp-"+c("cometUniqueID")()}g.makeVideoID=a;g.ensureVideoID=b;g.makePlaceID=d}),98);
__d("GlobalVideoPortsRenderers.react",["CoreVideoPlayer.react","VideoPlayerContexts","VideoPlayerPortalingPlaceInfoProvider.react","emptyFunction","qex","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react"),j=i.useEffect,k=i.useLayoutEffect,l=i.useState,m=c("qex")._("109")?j:k,n=c("emptyFunction").thatReturns(null);function a(a){var b=a.coreVideoPlayerMetaData,e=a.currentPlaceID,f=a.currentVideoID,g=a.fullscreenController,i=a.implementations,j=a.isFullscreen,k=a.onCoreVideoStatesChanged,l=a.previousPlaceMetaData,m=a.trackingDataEncrypted,o=a.trackingNodes;a=a.viewportMarginsForViewability;var p=n;return h.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider,{currentPlaceID:e,currentVideoID:f,portalingEnabled:!0,previousPlaceMetaData:l,thisPlaceID:e,children:h.jsx(c("CoreVideoPlayer.react"),babelHelpers["extends"]({},b,{fullscreenController:g,implementations:i,isFullscreen:j,onCoreVideoStatesChanged:k,renderWithCoreVideoStates:p,trackingDataEncrypted:m,trackingNodes:o,viewportMarginsForViewability:a}))})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.currentPlaceID,c=a.currentVideoID,e=a.originalHeight,f=a.originalWidth,g=a.previousPlaceMetaData,i=a.renderPlaceholder;a=a.thisPlaceID;return h.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider,{currentPlaceID:b,currentVideoID:c,portalingEnabled:!0,previousPlaceMetaData:g,thisPlaceID:a,children:h.jsx(d("VideoPlayerContexts").VideoOriginalDimensionsContextMemoProvider,{originalHeight:e,originalWidth:f,children:i!=null?i():null})})}b.displayName=b.name+" [from "+f.id+"]";function e(a){var b=a.currentPlaceID,c=a.currentVideoID,e=a.injectCoreVideoStatesRef,f=a.previousPlaceMetaData,g=a.renderComponents;a=a.thisPlaceID;var i=l(null),j=i[0],k=i[1];i=l(null);var n=i[0],o=i[1];m(function(){e.current=function(a,b){a!=null&&o(function(){return a}),k(b)};return function(){e.current=null}},[e]);if(a===b&&j!=null){if(n!=null)throw n;return h.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider,{currentPlaceID:b,currentVideoID:c,portalingEnabled:!0,previousPlaceMetaData:f,thisPlaceID:a,children:g(j)})}else return null}e.displayName=e.name+" [from "+f.id+"]";g.GlobalVideoPortsPlayerRenderer=a;g.GlobalVideoPortsPlaceholderRenderer=b;g.GlobalVideoPortsVideoComponentsRenderer=e}),98);
__d("CometVideoHomeLiveUFIContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({renderConfig:"default"});g["default"]=b}),98);
__d("oz-player/loggings/OzPerfLoggerProviderBase",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){}var b=a.prototype;b.cloneContext=function(){var a=this.createLoggerProvider();this.$11(a);return a};b.setType=function(a){this.$1=a;return this};b.setInitiator=function(a){this.$2=a;return this};b.setResource=function(a){this.$4=a;return this};b.setRepresentationID=function(a){this.$3=a;return this};b.setSegmentStartTime=function(a){this.$5=a;return this};b.setSegmentEndTime=function(a){this.$6=a;return this};b.setStreamSwitchReason=function(a){this.$7=a;return this};b.setIsP2pPlayback=function(a){this.$8=a;return this};b.setIsRingBufferSample=function(a){this.$9=a;return this};b.setPerSessionSampleRate=function(a){this.$10=a;return this};b.getType=function(){return this.$1};b.getInitiator=function(){return this.$2};b.getRepresentationID=function(){return this.$3};b.getStreamSwitchReason=function(){return this.$7};b.getResource=function(){return this.$4};b.getSegmentStartTime=function(){return this.$5};b.getSegmentEndTime=function(){return this.$6};b.getIsP2pPlayback=function(){return this.$8};b.getIsRingBufferSample=function(){return this.$9};b.getOperationLogger=function(a){a=this.createOperationLogger(a);return this.setOperationContext(a)};b.setOperationContext=function(a){this.$11(a);return a};b.createOperationLogger=function(a){throw new Error("Not implemented: createOperationLogger")};b.createLoggerProvider=function(){throw new Error("Not implemented: createLoggerProvider")};b.$11=function(a){this.getType()&&a.setType(this.getType()),this.getInitiator()&&a.setInitiator(this.getInitiator()),this.getResource()&&a.setResource(this.getResource()),this.getRepresentationID()&&a.setRepresentationID(this.getRepresentationID()),this.getStreamSwitchReason()&&a.setStreamSwitchReason(this.getStreamSwitchReason()),typeof this.getSegmentStartTime()==="number"&&a.setSegmentStartTime(this.getSegmentStartTime()),typeof this.getSegmentEndTime()==="number"&&a.setSegmentEndTime(this.getSegmentEndTime()),typeof this.getIsP2pPlayback()==="boolean"&&a.setIsP2pPlayback(this.getIsP2pPlayback()),typeof this.getIsRingBufferSample()==="boolean"&&a.setIsRingBufferSample(this.getIsRingBufferSample())};return a}();f["default"]=a}),66);
__d("oz-player/utils/OzError",[],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var c;c=a.call(this,b.description)||this;c.$OzError1=b;c.name=b.type;c.message=b.description;b=c.stack;if(!(typeof b==="string"&&b!=="")){if(Error.captureStackTrace){var d={};Error.captureStackTrace(d,c.constructor);b=d.stack}else{d=new Error().stack.split("\n");d.splice(/^Error/.test(d[0])?1:0,1);b=d.join("\n")}typeof b==="string"&&b!==""?c.stack=b.replace(/^Error/,c.name):c.stack=""}return c}var c=b.prototype;c.getExtra=function(){return this.$OzError1.extra||{}};c.getType=function(){return this.$OzError1.type};c.getDescription=function(){return this.$OzError1.description};return b}(babelHelpers.wrapNativeSuper(Error));f["default"]=a}),66);
__d("VideoPlaybackQuality",[],(function(a,b,c,d,e,f){function a(a){if(typeof a.getVideoPlaybackQuality==="function")return a.getVideoPlaybackQuality().droppedVideoFrames;a=a.webkitDroppedFrameCount;return typeof a==="number"?a:0}function b(a){if(typeof a.getVideoPlaybackQuality==="function")return a.getVideoPlaybackQuality().totalVideoFrames;a=a.webkitDecodedFrameCount;return typeof a==="number"?a:0}f.getDroppedFrames=a;f.getTotalFrames=b}),66);
__d("VideoPlayerContextSensitiveConfigUtils",[],(function(a,b,c,d,e,f){"use strict";var g=function(a,b){return b.every(function(b){return a[b.name]===b.value})};a=function(a,b){return b.find(function(b){return g(a,b.contexts)})};f.getFirstMatchingValueAndContextTargets=a}),66);
__d("VideoPlayerContextSensitiveConfigResolver",["VideoPlayerContextSensitiveConfigPayload","VideoPlayerContextSensitiveConfigUtils","cr:1724253"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){this.$1={},this.$2={},a==null?(this.$3=c("VideoPlayerContextSensitiveConfigPayload").static_values,this.$4=c("VideoPlayerContextSensitiveConfigPayload").context_sensitive_values):(this.$3=a.staticValues,this.$4=a.contextSensitiveValues)}var e=a.prototype;e.setContexts=function(a){this.$1=a,this.$2=this.$5(a)};e.getValue=function(a){if(this.$2[a]!=null)return this.$2[a];return this.$3[a]!=null?this.$3[a]:null};e.$5=function(a){var b=this;return Object.keys(this.$4).reduce(function(c,e){var f=b.$4[e];if(f!=null){f=d("VideoPlayerContextSensitiveConfigUtils").getFirstMatchingValueAndContextTargets(a,f);f!=null&&(c[e]=f.value)}return c},{})};a.getPayload=function(){return c("VideoPlayerContextSensitiveConfigPayload")};a.getSources=function(){return b("cr:1724253")};return a}();g["default"]=a}),98);
__d("VideoPlayerShakaGlobalConfig",["VideoPlayerContextSensitiveConfigResolver"],(function(a,b,c,d,e,f,g){var h=new(c("VideoPlayerContextSensitiveConfigResolver"))(),i={};a=function(a){i=a};b=function(a,b){if(!!i&&typeof i[a]==="boolean")return i[a];a=h.getValue(a);return a!=null&&typeof a==="boolean"?a:b};d=function(a,b){if(!!i&&typeof i[a]==="number")return i[a];a=h.getValue(a);return a!=null&&typeof a==="number"?a:b};e=function(a,b){if(!!i&&typeof i[a]==="string")return i[a];a=h.getValue(a);return a!=null&&typeof a==="string"?a:b};g.setGlobalOverrideConfig=a;g.getBool=b;g.getNumber=d;g.getString=e}),98);
__d("isEmptyObject",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(var a in a)return!1;return!0}f["default"]=a}),66);
__d("isNullish",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a===void 0||a===null}f["default"]=a}),66);
__d("useDebouncedValue",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useState;function a(a,b){var c=i(a),d=c[0],e=c[1];h(function(){var c=setTimeout(function(){return e(a)},b);return function(){return clearTimeout(c)}},[a,b]);return d}g["default"]=a}),98);
__d("useMatchMedia",["ExecutionEnvironment","FBLogger","gkx","react","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(a){if(c("gkx")("751")&&!d("ExecutionEnvironment").canUseDOM)throw c("FBLogger")("useMatchMedia").mustfixThrow("useMatchMedia is not safe to use in server-side rendering. It always returns false on the server but sometimes returns true on the client. If you want to measure the viewport, please see useMatchViewport, which is safe to use in SSR.");var b=h(function(){return!!window.matchMedia&&window.matchMedia(a).matches}),e=b[0],f=b[1];c("useLayoutEffect_SAFE_FOR_SSR")(function(){if(!window.matchMedia)return;var b=window.matchMedia(a),c=function(a){return f(a.matches)};b.addListener(c);return function(){return b.removeListener(c)}},[a]);return e}g["default"]=a}),98);
__d("shallowArrayEqual",["isNullish"],(function(a,b,c,d,e,f,g){function a(a,b){if(a===b)return!0;if(c("isNullish")(a)||c("isNullish")(b)||a.length!==b.length)return!1;for(var d=0,e=a.length;d<e;d++)if(a[d]!==b[d])return!1;return!0}g["default"]=a}),98);
__d("idx",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){try{return b(a)}catch(a){if(a instanceof TypeError)if(h(a))return null;else if(j(a))return void 0;throw a}}var g;function h(a){a=a.message;g||(g=k("null"));return g.test(a)}var i;function j(a){a=a.message;i||(i=k("undefined"));return i.test(a)}function k(a){return new RegExp("^"+a+" | "+a+"$|^[^\\(]* "+a+" ")}f["default"]=a}),66);
__d("intlSummarizeNumber",["FbtNumberType","IntlCompactDecimalNumberFormatConfig","IntlVariations","intlNumUtils"],(function(a,b,c,d,e,f){var g=3,h=14,i={ROUND:"ROUND",TRUNCATE:"TRUNCATE"},j={SHORT:"SHORT",LONG:"LONG"};function a(a,c,d,e){d===void 0&&(d=j.SHORT);e===void 0&&(e=i.ROUND);d=b("IntlCompactDecimalNumberFormatConfig")[d==j.SHORT?"short_patterns":"long_patterns"];var f=a===0?0:Math.floor(Math.log10(Math.abs(a)));f>h&&(f=h);var l=k(a,f,c,e,d),m=l[0],n=l[1];l=l[2];if(l){f+=1;l=k(a,f,c,e,d);m=l[0];n=l[1];l[2]}e=b("FbtNumberType").getVariation(m)||b("IntlVariations").NUMBER_OTHER;l=f.toString();l=(d=d)!=null?(d=d[l])!=null?d[e.toString()]:d:d;if(!l||f<g||l.positive_prefix_pattern===""&&l.positive_suffix_pattern===""){e=c===void 0?0:c;return b("intlNumUtils").formatNumberWithThousandDelimiters(a,e)}return l&&l.min_integer_digits===0&&m===1?l.positive_prefix_pattern+l.positive_suffix_pattern:(l&&l.positive_prefix_pattern||"")+b("intlNumUtils").formatNumberWithThousandDelimiters(m,n)+(l&&l.positive_suffix_pattern||"")}function k(a,c,d,e,f){var g=c.toString();g=(f=f)!=null?(f=f[g])!=null?f[b("IntlVariations").NUMBER_OTHER.toString()]:f:f;f=g&&g.min_integer_digits||c+1;var j=c-f+1;j=Math.abs(a)/Math.pow(10,j);var k=d!=null;d=k?d:g&&g.min_fraction_digits;d==null&&(d=c>2?1:0);g=e==i.TRUNCATE?b("intlNumUtils").truncateLongNumber(j.toString(),d):j.toFixed(d);e=parseFloat(g)*(a<0?-1:1);return[e,e%1===0&&!k?0:d,g.length>f+(d>0?d+1:0)+(j>=0?0:1)&&c<h]}e.exports=a}),null);
__d("Qe2JsExposureFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1837559");c=b("FalcoLoggerInternal").create("qe2_js_exposure",a);e.exports=c}),null);
__d("QE2Logger",["Qe2JsExposureFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h={};function a(a,b){x(a,(a=b)!=null?a:"",9)}function b(a,b){x(a,(a=b)!=null?a:"",9,!0)}function d(a){x(a,"",4)}function e(a,b){x(a,b,3)}function f(a){x(a,"",5)}function i(a){x(a,"",5,!0)}function j(a){x(a,"",31)}function k(a){x(a,"",98)}function l(a,b){x(a,b,7)}function m(a,b){x(a,b,55)}function n(a,b){x(a,b,17)}function o(a,b){x(a,b,25)}function p(a,b){x(a,b,8)}function q(a,b){x(a,b,22)}function r(a,b){x(a,b,27)}function s(a,b){x(a,b,0)}function t(a,b){x(a,(a=b)!=null?a:"",89)}function u(a,b){x(a,b,60)}function v(a,b,c){x(a,b,c)}function w(a,b,c){x(a,b,c,!0)}function x(a,b,d,e){var f=a+"|"+b;if(h[f])return;e===!0?c("Qe2JsExposureFalcoEvent").logImmediately(function(){return{universe:a,unit_id:b,unit_type:d}}):c("Qe2JsExposureFalcoEvent").log(function(){return{universe:a,unit_id:b,unit_type:d}});h[f]=!0}g.logExposureForUser=a;g.logExposureForUserImmediately=b;g.logExposureForIGDjangoUser=d;g.logExposureForEmail=e;g.logExposureForDatr=f;g.logExposureForDatrImmediately=i;g.logExposureForOculusLoggedOut=j;g.logExposureForOculusLoggedOutCookieID=k;g.logExposureForPage=l;g.logExposureForPaymentAccountID=m;g.logExposureForBusiness=n;g.logExposureForGroup=o;g.logExposureForPhoneNumber=p;g.logExposureForScimCompanyID=q;g.logExposureForAnalyticsEntityID=r;g.logExposureForAdAccountID=s;g.logExposureForActingAccount=t;g.logExposureForMixedUserAndPage=u;g.logExposure=v;g.logExposureImmediately=w}),98);
__d("WebSessionExtender",["WebSession","clearInterval","cr:913","setInterval"],(function(a,b,c,d,e,f,g){"use strict";var h=2e4,i=new Set(),j=null;function a(a,e){e===void 0&&(e="extender"),i.add(a),j==null&&(d("WebSession").extend(Date.now()+h+2e3),j=c("setInterval")(function(){d("WebSession").extend(Date.now()+h+2e3),b("cr:913")&&new(b("cr:913"))().setClientTime(Date.now()).setWebsessionID(d("WebSession").getId()).setReason(e).log()},h))}function e(a){i["delete"](a);a=i.size;a===0&&j!=null&&(c("clearInterval")(j),j=null)}g.subscribe=a;g.unsubscribe=e}),98);