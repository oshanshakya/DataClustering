if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("ProfileCometAboutEditDeleteDropdown.react",["fbt","ix","CometMenu.react","CometMenuItem.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.deleteIsDisabled,e=a.deleteLabel,f=a.editLabel;a.onClose;var g=a.onDelete;a=a.onEdit;return j.jsxs(c("CometMenu.react"),{withArrow:!0,children:[j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("477831"),20),onClick:a,primaryText:(a=f)!=null?a:h._(/*FBT_CALL*/"Edit"/*FBT_CALL*/),testid:void 0}),j.jsx(c("CometMenuItem.react"),{disabled:b!==null?b:!1,icon:d("fbicon")._(i("483829"),20),onClick:g,primaryText:(f=e)!=null?f:h._(/*FBT_CALL*/"Delete"/*FBT_CALL*/),testid:void 0})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometAboutExperienceDropdown.react",["fbt","ix","CometMenu.react","CometMenuItem.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.deleteLabel,e=a.editLabel,f=a.lifeEventURL,g=a.onDelete;a=a.onEdit;return j.jsxs(c("CometMenu.react"),{withArrow:!0,children:[f!=null?j.jsx(c("CometMenuItem.react"),{href:f,icon:d("fbicon")._(i("481244"),20),primaryText:h._(/*FBT_CALL*/"See life event"/*FBT_CALL*/),testid:void 0}):null,a!=null?j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("477831"),20),onClick:a,primaryText:(f=e)!=null?f:h._(/*FBT_CALL*/"Edit"/*FBT_CALL*/),testid:void 0}):null,j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("483829"),20),onClick:g,primaryText:(a=b)!=null?a:h._(/*FBT_CALL*/"Delete"/*FBT_CALL*/),testid:void 0})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometBloodDonorInfoDropdown.react",["fbt","ix","CometMenu.react","CometMenuItem.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){a=a.onDelete;return j.jsx(c("CometMenu.react"),{withArrow:!0,children:j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("483829"),20),onClick:a,primaryText:h._(/*FBT_CALL*/"Remove"/*FBT_CALL*/)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);