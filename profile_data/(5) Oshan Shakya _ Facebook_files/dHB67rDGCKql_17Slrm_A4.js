if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("StoriesCardOverlayPositioner_bounds.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesCardOverlayPositioner_bounds",selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"rotation",storageKey:null}],type:"StoryOverlayRectangle",abstractKey:null};e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._(/*FBT_CALL*/"Add More"/*FBT_CALL*/);b=h._(/*FBT_CALL*/"Edit featured"/*FBT_CALL*/);c=h._(/*FBT_CALL*/"Edit Featured Collection"/*FBT_CALL*/);d=h._(/*FBT_CALL*/"Featured"/*FBT_CALL*/);e=h._(/*FBT_CALL*/"Featured Section"/*FBT_CALL*/);f=h._(/*FBT_CALL*/"Find Support or Report Featured Item"/*FBT_CALL*/);h=h._(/*FBT_CALL*/"As people view your featured item, you'll see details here."/*FBT_CALL*/);g.ADD_MORE=a;g.EDIT_FEATURED=b;g.EDIT_FEATURED_COLLECTION=c;g.FEATURED=d;g.FEATURED_SECTION=e;g.REPORT_ITEM=f;g.ZERO_VIEWER_COUNT_TEXT=h}),98);
__d("StoriesQueryArgumentsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={hideSelfBucket:!1,initialBucketID:null,initialBucketsCount:9,pageBucketsCount:9};c=a.createContext(b);g["default"]=c}),98);
__d("StoriesCardOverlayPositioner.react",["CometRelay","StoriesCardOverlayPositioner_bounds.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.bounds,e=a.children,f=a.containerHeight;a=a.containerWidth;c=d("CometRelay").useFragment(h!==void 0?h:h=b("StoriesCardOverlayPositioner_bounds.graphql"),c);if(c!=null){var g=c.height,j=c.rotation,k=c.width,l=c.x;c=c.y;if(typeof g==="number"&&typeof k==="number"&&typeof j==="number"&&typeof l==="number"&&typeof c==="number"){if(c>1||l>1)return null;g=g*f;f=k*a;k=c*100;a=l*100;c={height:g+"px",left:a+"%",position:"absolute",top:k+"%",width:f+"px"};l={height:"100%",transform:"rotate("+j+"deg)",width:"100%"};return i.jsx("div",{className:"storiesCardOverlay/root",style:c,children:i.jsx("div",{className:"storiesCardOverlay/rotation",style:l,children:e})})}}return null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesLoggerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({logger:{clickInteractiveFeedbackReplyButtonLog:function(a){return void 0},closeStoryLog:function(){return void 0},deleteLog:function(){return void 0},getImpressionConfig:function(){return void 0},getImpressionData:function(a){return void 0},getTimespentConfig:function(){return void 0},handleLiveVideoLog:function(a){return void 0},openLinkLog:function(){return void 0},openMediaLog:function(a){return void 0},openStoryLog:function(){return void 0},openViewerSheetLog:function(){return void 0},pauseByKeyboardLog:function(a,b){return void 0},pauseLog:function(a){return void 0},replyAttemptCompletedLog:function(a,b){return void 0},replyLog:function(a){return void 0},replySentWhenSmartReplyShownLog:function(a,b,c,d){return void 0},smartReplyImpressionLog:function(a,b,c){return void 0},smartReplyTapLog:function(a,b){return void 0},storyMediaViewLog:function(a){return void 0},storyNavigationLog:function(a){return void 0},visitPageLog:function(){return void 0}}});g["default"]=b}),98);
__d("StoriesPauseReasons",[],(function(a,b,c,d,e,f){"use strict";a="ANONYMOUS_VIEWS_INDICATOR";b="ANONYMOUS_VIEWS_POST_TEST_POPUP";c="BUCKET_TRANSITION";d="BUCKET_REFRESH";e="BUG_DIALOG";var g="CARD_CHANGE",h="CARD_TRANSITION_INITIATED",i="CLICK_ADD_STORY",j="CLICK_ARCHIVE_RESHARE_BUTTON",k="CLICK_EMOJI_SELECTOR",l="CLICK_GIF_SELECTOR",m="CLICK_ON_OVERLAY_STICKER",n="CLICK_PAUSE_ICON",o="CLICK_SEE_MORE_LONG_TEXT",p="CLICK_STICKER_SELECTOR",q="CONFIRMATION_DIALOG",r="EXTENDED_VIEWER",s="FOCUSE_ON_INPUT",t="HOVER_ON_ARCHIVE_RESHARE_BUTTON",u="HOVER_ON_OVERLAY_STICKER",v="HOVER_ON_PAUSE_OVERLAY",w="HOVER_ON_RATING_STICKER",x="HOVER_ON_REACTION_ICON",y="HOVER_ON_SHARE_BUTTON",z="HOVER_ON_SONG_STICKER",A="JEWEL",B="KEYBOARD",C="LWR_PLAYBACK",D="MENU",E="MESSAGE_VIEWER",F="MOUSE_CLICK_AND_HOLD",G="MOUSE_ENTER_POLL_STICKER",H="REPORT_DIALOG",I="SETTINGS_DIALOG",J="TILE_GRID_BUTTON",K="VIDEO_PLAYBACK",L="VIEWER_SHEET_OVERLAY",M="VISIBILITY_CHANGE",N="WATCH_BROADCAST_CTA";f.ANONYMOUS_VIEWS_INDICATOR=a;f.ANONYMOUS_VIEWS_POST_TEST_POPUP=b;f.BUCKET_TRANSITION=c;f.BUCKET_REFRESH=d;f.BUG_DIALOG=e;f.CARD_CHANGE=g;f.CARD_TRANSITION_INITIATED=h;f.CLICK_ADD_STORY=i;f.CLICK_ARCHIVE_RESHARE_BUTTON=j;f.CLICK_EMOJI_SELECTOR=k;f.CLICK_GIF_SELECTOR=l;f.CLICK_ON_OVERLAY_STICKER=m;f.CLICK_PAUSE_ICON=n;f.CLICK_SEE_MORE_LONG_TEXT=o;f.CLICK_STICKER_SELECTOR=p;f.CONFIRMATION_DIALOG=q;f.EXTENDED_VIEWER=r;f.FOCUSE_ON_INPUT=s;f.HOVER_ON_ARCHIVE_RESHARE_BUTTON=t;f.HOVER_ON_OVERLAY_STICKER=u;f.HOVER_ON_PAUSE_OVERLAY=v;f.HOVER_ON_RATING_STICKER=w;f.HOVER_ON_REACTION_ICON=x;f.HOVER_ON_SHARE_BUTTON=y;f.HOVER_ON_SONG_STICKER=z;f.JEWEL=A;f.KEYBOARD=B;f.LWR_PLAYBACK=C;f.MENU=D;f.MESSAGE_VIEWER=E;f.MOUSE_CLICK_AND_HOLD=F;f.MOUSE_ENTER_POLL_STICKER=G;f.REPORT_DIALOG=H;f.SETTINGS_DIALOG=I;f.TILE_GRID_BUTTON=J;f.VIDEO_PLAYBACK=K;f.VIEWER_SHEET_OVERLAY=L;f.VISIBILITY_CHANGE=M;f.WATCH_BROADCAST_CTA=N}),66);
__d("ProfileCometFeaturedHighlightsEditDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3931500663559728"}),null);/*FB_PKG_DELIM*/
__d("StoriesTrayTileWatchLivePopover_bucket.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c=[a];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesTrayTileWatchLivePopover_bucket",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"live_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],type:"DirectMessageThreadBucket",abstractKey:null},{kind:"InlineDataFragmentSpread",name:"useStoriesLogger_bucketNode",selections:[{kind:"InlineDataFragmentSpread",name:"StoriesLogger_bucketNode",selections:[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"story_bucket_owner",plural:!1,selections:[b,{kind:"InlineFragment",selections:c,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"story_bucket_type",storageKey:null},{alias:null,args:null,concreteType:"UnifiedStoryBucketToUnifiedStoriesConnection",kind:"LinkedField",name:"unified_stories",plural:!1,selections:[{alias:null,args:null,concreteType:"UnifiedStoryBucketToUnifiedStoriesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"organic_tracking",storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:c,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:c,type:"Video",abstractKey:null},b],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryCardStoryInfo",kind:"LinkedField",name:"story_card_info",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryCardToStoryViewersConnection",kind:"LinkedField",name:"story_viewers",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]}]}],type:"StoryBucket",abstractKey:"__isStoryBucket"}}();e.exports=a}),null);
__d("StoriesTrayTileWatchLivePopover.react",["fbt","ix","CometMenu.react","CometMenuItem.react","CometRelay","StoriesActorContext","StoriesLoggingConstants","StoriesTrayTileWatchLivePopover_bucket.graphql","fbicon","react","useStoriesLogger"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useContext,m=e.useEffect,n=e.useRef;function a(a){var e=a.bucket;a=a.viewStoryUrl;e=d("CometRelay").useFragment(j!==void 0?j:j=b("StoriesTrayTileWatchLivePopover_bucket.graphql"),e);var f=l(c("StoriesActorContext"));f=f.actorID;var g=c("useStoriesLogger")(f,{bucketIndex:0,cardIndex:0},e),o=n(!1);m(function(){!o.current&&g!=null&&(o.current=!0,g.handleLiveVideoLog(c("StoriesLoggingConstants").LIVE_IN_STORIES_EVENTS.STORY_LIVE_TRAY_DROPDOWN_IMPRESSION))},[g]);e=[{icon:d("fbicon")._(i("484863"),20),onClick:function(){g.handleLiveVideoLog(c("StoriesLoggingConstants").LIVE_IN_STORIES_EVENTS.STORY_LIVE_TRAY_DROPDOWN_CLICK)},passThroughProps:{playerOriginOverride:"fb_stories",playerSubOrigin:"story_tray_live_dropdown"},primaryText:h._(/*FBT_CALL*/"Watch Live Video"/*FBT_CALL*/),url:e==null?void 0:(f=e.live_video)==null?void 0:f.url},{icon:d("fbicon")._(i("1160717"),20),onClick:void 0,passThroughProps:void 0,primaryText:h._(/*FBT_CALL*/"View Story"/*FBT_CALL*/),url:a}];return k.jsx(c("CometMenu.react"),{size:"small",children:e.map(function(a,b){return k.jsx(c("CometMenuItem.react"),{href:a.url||"",icon:a.icon,iconStyle:"contained",onClick:a.onClick,passthroughProps:a.passThroughProps,primaryText:a.primaryText},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);