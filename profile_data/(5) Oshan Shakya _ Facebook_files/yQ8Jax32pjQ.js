if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("LSUpdateLastSyncCompletedTimestampMsToNow",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.db.table(1).fetch([[[a[0]]]]),function(a){var c=a.update;a.item;return c({lastSyncCompletedTimestampMs:b.i64.of_float(Date.now())})})},function(a){return b.resolve(c)}])}e.exports=a}),null);