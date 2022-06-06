if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometNotificationsActionsMenu.react",["fbt","ix","CometMenu.react","CometMenuItem.react","XCometNotificationsControllerRouteBuilder","XCometSettingsControllerRouteBuilder","fbicon","gkx","react","requireDeferred","useCometRouterState"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("requireDeferred")("NotifSeeAllFalcoEvent").__setRef("CometNotificationsActionsMenu.react");function a(a){var b,e,f=a.actorId,g=a.notificationsListRef,l=a.onSeeAllClick;a=c("useCometRouterState")();a=(a==null?void 0:a.main.route.tabKey)==="notifications";var m=function(){g.current!=null&&g.current.markAllNotificationsAsRead!=null&&g.current.markAllNotificationsAsRead()},n=function(){g.current!=null&&g.current.handleDebugModeClick!=null&&g.current.handleDebugModeClick()};b=g==null?void 0:(b=g.current)==null?void 0:(b=b.debugModeEnabled)==null?void 0:b.current;e=(e=c("gkx")("678680"))!=null?e:!1;return j.jsxs(c("CometMenu.react"),{withArrow:!0,children:[j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("477820"),20),onClick:m,primaryText:h._(/*FBT_CALL*/"Mark all as read"/*FBT_CALL*/),testid:void 0}),j.jsx(c("CometMenuItem.react"),{href:c("XCometSettingsControllerRouteBuilder").buildURL({tab:"notifications"}),icon:d("fbicon")._(i("497570"),20),primaryText:h._(/*FBT_CALL*/"Notification settings"/*FBT_CALL*/)}),e?j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("874274"),20),onClick:n,primaryText:"[FB Only] "+(b===!0?"Disable":"Enable")+" Debug Mode"}):null,!a&&c("gkx")("2886")?j.jsx(c("CometMenuItem.react"),{href:c("XCometNotificationsControllerRouteBuilder").buildURL({}),icon:d("fbicon")._(i("1529371"),20),onClick:function(){l&&l(),k.onReady(function(a){a=a.log;return a(function(){return{notification_data:{user_id:f},ref:"www_tab"}})})},primaryText:h._(/*FBT_CALL*/"Open Notifications"/*FBT_CALL*/)}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometNotificationsRankingErrorFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743388");c=b("FalcoLoggerInternal").create("comet_notifications_ranking_error",a);e.exports=c}),null);
__d("GriffinTabOpenFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743657");c=b("FalcoLoggerInternal").create("griffin_tab_open",a);e.exports=c}),null);
__d("NoNotificationsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1894842");c=b("FalcoLoggerInternal").create("no_notifications",a);e.exports=c}),null);
__d("NotifBeeperDropFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1835862");c=b("FalcoLoggerInternal").create("notif_beeper_drop",a);e.exports=c}),null);
__d("NotifDebugModeFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1836246");c=b("FalcoLoggerInternal").create("notif_debug_mode",a);e.exports=c}),null);
__d("NotifFilterClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1836768");c=b("FalcoLoggerInternal").create("notif_filter_click",a);e.exports=c}),null);
__d("NotifFilterImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1871");c=b("FalcoLoggerInternal").create("notif_filter_impression",a);e.exports=c}),null);
__d("NotifListBottomCollisionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744067");c=b("FalcoLoggerInternal").create("notif_list_bottom_collision",a);e.exports=c}),null);
__d("NotifSeeAllFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1836151");c=b("FalcoLoggerInternal").create("notif_see_all",a);e.exports=c}),null);
__d("OpenJewelOptionsMenuFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1836319");c=b("FalcoLoggerInternal").create("open_jewel_options_menu",a);e.exports=c}),null);