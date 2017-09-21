if (self.CavalryLogger) { CavalryLogger.start_js(["cNi0M"]); }

__d('WebMessengerDeclineMRDialog',['fbt','React','SimpleXUIDialog','MercuryThreadActions','XUIDialogButton.react','XUIDialogCancelButton.react','MercuryIDs','MessengerMessageRequestsTypedLogger','MessageRequestUtils','ImmutableObject'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('MercuryThreadActions').get(),j={show:function k(l,m,n,o,p){var q=h._("Delete Conversation"),r=h._("This will delete these messages, but won't show that you've seen or deleted them."),s=function u(v){var w=!!l&&c('MessageRequestUtils').isFiltered(l);if(v==='hide')new (c('MessengerMessageRequestsTypedLogger'))().setAction('message_requests_decline_cancel').setThreadID(c('MercuryIDs').getThreadFBIDFromThreadID(m)).setSurface('thread').setFolderType(w?'other':'pending').setThreadKeyWeb(m).setEntryPoint(null).log();},t=c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),null),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:h._("Archive"),use:'default',onClick:function u(){i.archive(m);o&&o()}}),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:h._("Delete"),use:'confirm',onClick:function u(){i['delete'](m);n&&n();new (c('MessengerMessageRequestsTypedLogger'))().setAction('message_requests_delete_request').setThreadID(c('MercuryIDs').getThreadFBIDFromThreadID(m)).setSurface('thread').setFolderType('pending').setThreadKeyWeb(m).setEntryPoint(null).log()}}));c('SimpleXUIDialog').showEx(r,q,t,s,{causalElement:p})}};f.exports=j}),null);
__d('MercuryJewelCountControl',['Arbiter','Bootloader','CurrentUser','MercuryConfig','MercuryDispatcher','MercuryThreadInformer','MercuryUnseenState','MercuryUnreadState','UserActivity','isInFocusMode'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';this.$MercuryJewelCountControl3=false;this.$MercuryJewelCountControl2={};this.$MercuryJewelCountControl3=false;Object.keys(j).forEach(function(k){this.$MercuryJewelCountControl2[k]=c('MercuryUnseenState').getForFBID(k)}.bind(this));this.$MercuryJewelCountControl4();this.render();Object.keys(j).forEach(function(k){c('MercuryDispatcher').getForFBID(k).subscribe('model-update-completed',function(l,m){this.$MercuryJewelCountControl5(k)}.bind(this));c('MercuryThreadInformer').getForFBID(k).subscribe('unseen-updated',function(){return this.render()}.bind(this))}.bind(this));this.$MercuryJewelCountControl1=i;this.$MercuryJewelCountControl1.subscribe('marked-seen',function(){this.$MercuryJewelCountControl6()}.bind(this))}h.prototype.render=function(){'use strict';var i=0;if(!c('isInFocusMode')())i=Object.keys(this.$MercuryJewelCountControl2).reduce(function(j,k){var l=k==c('CurrentUser').getID()||!!this.$MercuryJewelCountControl3;return l?j+this.$MercuryJewelCountControl2[k].getUnseenCount():j}.bind(this),0);c('Arbiter').inform('jewel/count-updated',{jewel:'mercurymessages',count:i},c('Arbiter').BEHAVIOR_STATE)};h.prototype.$MercuryJewelCountControl4=function(){var i,j=this;'use strict';if(c('MercuryConfig').PagesTabConfig&&c('MercuryConfig').PagesTabConfig.unseenJewelEnabled)(function(){j.$MercuryJewelCountControl3=true;var k=c('MercuryConfig').PagesTabConfig;c('Bootloader').loadModules(["MercurySyncPageEnvironment"],function(l){return l.setUp(k.pageID,k.irisPageSeqID)},'MercuryJewelCountControl')})();};h.prototype.$MercuryJewelCountControl6=function(){'use strict';Object.keys(this.$MercuryJewelCountControl2).forEach(function(i){this.$MercuryJewelCountControl2[i].markAsSeen()}.bind(this))};h.prototype.$MercuryJewelCountControl5=function(i){'use strict';if(this.$MercuryJewelCountControl1.isOpen()&&c('UserActivity').isActive())this.$MercuryJewelCountControl2[i]&&this.$MercuryJewelCountControl2[i].markAsSeen();};h.constructStores=function(i){'use strict';Object.keys(i).forEach(function(j){c('MercuryUnseenState').getForFBID(j);c('MercuryUnreadState').getForFBID(j)})};f.exports=h}),null);
__d('MercuryPresenceIndicator.react',['cx','fbt','Arbiter','AvailableListConstants','MercuryIDs','PresenceStatus','React','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$MercuryPresenceIndicator2=function(){if(!c('MercuryIDs').isCanonical(this.props.threadID)){return null}else{var s=c('MercuryIDs').getUserIDFromThreadID(this.props.threadID);return c('PresenceStatus').get(s)}}.bind(this),this.$MercuryPresenceIndicator3=function(s){return "presenceIndicator"+(c('MercuryIDs').isGroupChat(this.props.threadID)?' '+"groupThread":'')+(s==c('AvailableListConstants').ACTIVE?' '+"presenceActive":'')}.bind(this),this.$MercuryPresenceIndicator4=function(s){switch(s){case c('AvailableListConstants').ACTIVE:return i._("Active");default:return null;}},o}m.prototype.componentDidMount=function(){this.$MercuryPresenceIndicator1=new (c('SubscriptionsHandler'))();this.$MercuryPresenceIndicator1.addSubscriptions(c('Arbiter').subscribe(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,function(){return this.forceUpdate()}.bind(this)))};m.prototype.componentWillUnmount=function(){this.$MercuryPresenceIndicator1&&this.$MercuryPresenceIndicator1.release()};m.prototype.render=function(){var n=this.$MercuryPresenceIndicator2();return c('React').createElement('span',{className:this.$MercuryPresenceIndicator3(n)},c('React').createElement('span',{className:'accessible_elem'},this.$MercuryPresenceIndicator4(n)))};m.propTypes={threadID:l.string.isRequired};f.exports=m}),null);
__d('PageMessagingThreadPermalinks',['MercuryIDs','XPagesManagerMessagesController','requireWeak'],(function a(b,c,d,e,f,g){'use strict';var h={getThreadURI:function i(j,k,l){var m='';if(c('MercuryIDs').isCanonical(j)){m=c('MercuryIDs').tokenize(j).value}else c('requireWeak')('MercuryThreadIDMap',function(o){m=o.get().getServerIDFromClientIDNow(j)});var n=c('XPagesManagerMessagesController').getURIBuilder().setString('page_token',k).setString('threadid',m).getURI();l&&l(n)}};f.exports=h}),null);
__d('MercuryThreadPermalink.react',['CurrentUser','Link.react','React','PageMessagingThreadPermalinks','WebMessengerThreadPermalinks'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={permalinkURI:'#'},m}k.prototype.componentDidMount=function(){this.$MercuryThreadPermalink1(this.props)};k.prototype.componentWillReceiveProps=function(l){if(l.threadID!==this.props.threadID||l.folder!==this.props.folder)this.$MercuryThreadPermalink1(l);};k.prototype.render=function(){return c('React').createElement(c('Link.react'),{className:this.props.className,href:this.state.permalinkURI,onClick:this.props.onClick,role:'button'},this.props.children)};k.prototype.$MercuryThreadPermalink1=function(l){this.setState({permalinkURI:'#'});if(l.viewer===c('CurrentUser').getID()){c('WebMessengerThreadPermalinks').getThreadURI(l.threadID,function(m){return this.setState({permalinkURI:m})}.bind(this),l.folder)}else c('PageMessagingThreadPermalinks').getThreadURI(l.threadID,l.viewer,function(m){return this.setState({permalinkURI:m})}.bind(this));};k.propTypes={className:j.string,children:j.any,threadID:j.string.isRequired,viewer:j.string.isRequired,folder:j.string,onClick:j.func};f.exports=k}),null);
__d('MercuryThreadReadToggle.react',['fbt','invariant','MercuryThreadActions','React','ReadToggle.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$MercuryThreadReadToggle1=function(s){if(s){s.preventDefault();s.stopPropagation()}var t=c('MercuryThreadActions').getForFBID(this.props.viewer);this.props.unreadCount>0?t.markRead(this.props.threadID):t.markUnread(this.props.threadID)}.bind(this),o}m.prototype.render=function(){this.props.unreadCount>=0||i(0);return c('React').createElement(c('ReadToggle.react'),{isRead:this.props.unreadCount===0,onClick:this.$MercuryThreadReadToggle1,readLabel:h._("Mark as unread"),unreadLabel:h._("Mark as read")})};m.propTypes={threadID:l.string.isRequired,viewer:l.string.isRequired,unreadCount:l.number.isRequired};f.exports=m}),null);
__d('MessagesJewelInlineThumbnail.react',['cx','MercuryAttachmentType','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$MessagesJewelInlineThumbnail1=function(){var r=this.props.thread;if(!r.snippet_attachments)return [];return r.snippet_attachments.filter(function(s){return s.attach_type===c('MercuryAttachmentType').PHOTO})}.bind(this),n}l.prototype.render=function(){var m=this.$MessagesJewelInlineThumbnail1();if(m.length===0)return c('React').createElement('span',null);var n=m[0].thumbnail_url;if(!n)return c('React').createElement('span',null);var o=c('React').createElement('span',{className:"_56hv"},c('React').createElement('i',{style:{backgroundImage:'url('+n+')'}}));if(m.length>1)o=c('React').createElement('span',null,c('React').createElement('span',{className:"_56hy"}),o);return o};l.propTypes={thread:k.object.isRequired};f.exports=l}),null);
__d('MessagesJewelThreadListRow.react',['cx','fbt','Promise','Bootloader','FBRTCCore','ImageBlock.react','immutable','ImmutableObject','MercuryConfig','MercuryIDs','MercuryThreadActions','MercuryPresenceIndicator.react','MercurySeenIndicator.react','MercuryThreadImage.react','MercuryThreadPermalink.react','MercuryThreadReadToggle.react','MercuryThreadSnippet.react','mercuryThreadTimestampReact','MercuryThreadTitle.react','MercuryTimestamp','MessagesJewelInlineThumbnail.react','MNAdsMessageUtils','React','RTCConfig','FBRTCLogger','UserAgent','XUIButton.react','MessagingTag','WebMessengerDeclineMRDialog'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('mercuryThreadTimestampReact').jsComponent,m=c('FBRTCLogger').Trigger,n=c('React').PropTypes;j=babelHelpers.inherits(o,c('React').PureComponent);k=j&&j.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.$MessagesJewelThreadListRow12=function(){c('MercuryThreadActions').get()['delete'](this.props.thread.thread_id)}.bind(this),this.$MessagesJewelThreadListRow13=function(){c('MercuryThreadActions').get().archive(this.props.thread.thread_id)}.bind(this),this.$MessagesJewelThreadListRow14=function(u){u.preventDefault();u.stopPropagation();var v=this.props.thread,w=v.rtc_call_data,x=v.thread_fbid;c('FBRTCCore').startGroupCall({conferenceName:'GROUP:'+x,hasVideo:true,serverInfoData:w.server_info_data,trigger:m.MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON})}.bind(this),q}o.prototype.render=function(){var p=c('UserAgent').isBrowser('Chrome')&&!c('UserAgent').isPlatform('Windows')?c('React').createElement('div',{className:'author fixemoji'},this.$MessagesJewelThreadListRow2(),this.$MessagesJewelThreadListRow3()):c('React').createElement('div',{className:'author'},c('React').createElement('strong',null,this.$MessagesJewelThreadListRow2()),this.$MessagesJewelThreadListRow3()),q=c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},c('React').createElement('div',{className:"MercuryThreadImage _4qeb"},this.$MessagesJewelThreadListRow4()),c('React').createElement('div',{className:'content'},p,c('React').createElement('div',{className:"_1iji"},c('React').createElement('div',{className:"_1ijj"},this.$MessagesJewelThreadListRow5(),this.$MessagesJewelThreadListRow6()),c('React').createElement('div',null,this.$MessagesJewelThreadListRow7())),c('React').createElement('div',{className:'time'},c('MNAdsMessageUtils').isAdsMessageRequest(this.props.thread)?c('MNAdsMessageUtils').renderAdsMessageRequestStatus():this.$MessagesJewelThreadListRow8()),this.$MessagesJewelThreadListRow9()),c('React').createElement('div',null,c('React').createElement(c('MessagesJewelInlineThumbnail.react'),{thread:this.props.thread}),c('React').createElement('div',{className:'x_div'},this.$MessagesJewelThreadListRow10())));return c('React').createElement('li',{className:this.props.thread.unread_count>0?"jewelItemNew":''},c('React').createElement(c('MercuryThreadPermalink.react'),{className:'messagesContent',threadID:this.props.thread.thread_id,viewer:this.props.viewer,folder:this.props.thread.folder,onClick:this.props.onClick},q))};o.prototype.$MessagesJewelThreadListRow7=function(){if(this.props.thread.folder!==c('MessagingTag').PENDING||!c('MercuryConfig').MessengerInboxRequests)return null;return c('React').createElement('div',{className:"_zjy"},c('React').createElement(c('XUIButton.react'),{use:'confirm',onClick:function(p){p.preventDefault();c('MercuryThreadActions').get().changeFolder(this.props.thread.thread_id,c('MessagingTag').INBOX);this.$MessagesJewelThreadListRow11().done(function(q){q.setAction('message_requests_accept_request').setThreadID(c('MercuryIDs').getThreadFBIDFromThreadID(this.props.thread.thread_id)).setThreadKeyWeb(this.props.thread.thread_id).log()}.bind(this))}.bind(this),label:i._("Accept")}),c('React').createElement(c('XUIButton.react'),{onClick:function(p){p.preventDefault();c('WebMessengerDeclineMRDialog').show(this.props.thread,this.props.thread.thread_id,this.$MessagesJewelThreadListRow12,this.$MessagesJewelThreadListRow13);p.stopPropagation();this.$MessagesJewelThreadListRow11().done(function(q){q.setAction('message_requests_decline_attempt').setThreadID(c('MercuryIDs').getThreadFBIDFromThreadID(this.props.thread.thread_id)).setThreadKeyWeb(this.props.thread.thread_id).log()}.bind(this))}.bind(this),use:'default',label:i._("Decline")}))};o.prototype.$MessagesJewelThreadListRow3=function(){if(!this.props.showPresence)return null;return c('React').createElement(c('MercuryPresenceIndicator.react'),{threadID:this.props.thread.thread_id})};o.prototype.$MessagesJewelThreadListRow4=function(p){return c('React').createElement(c('MercuryThreadImage.react'),{size:p,thread:this.props.thread,useBackground:true,viewer:this.props.viewer})};o.prototype.$MessagesJewelThreadListRow2=function(){return c('React').createElement(c('MercuryThreadTitle.react'),{thread:this.props.thread,viewer:this.props.viewer,showUnreadCount:true})};o.prototype.$MessagesJewelThreadListRow6=function(){return c('React').createElement(c('MercuryThreadSnippet.react'),{participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer})};o.prototype.$MessagesJewelThreadListRow8=function(){return c('React').createElement(l,{time:this.props.thread.timestamp,title:c('MercuryTimestamp').getAbsoluteTimestamp(this.props.thread.timestamp),text:c('MercuryTimestamp').getRelativeTimestamp(this.props.thread.timestamp)})};o.prototype.$MessagesJewelThreadListRow5=function(){return c('React').createElement(c('MercurySeenIndicator.react'),{thread:this.props.thread,viewer:this.props.viewer})};o.prototype.$MessagesJewelThreadListRow10=function(){return c('React').createElement(c('MercuryThreadReadToggle.react'),{threadID:this.props.thread.thread_id,viewer:this.props.viewer,unreadCount:this.props.thread.unread_count})};o.prototype.$MessagesJewelThreadListRow9=function(){if(!c('RTCConfig').RtcConferencingGK||!this.props.thread.rtc_call_data||this.props.thread.rtc_call_data.call_state==='NO_ONGOING_CALL')return null;return c('React').createElement(c('XUIButton.react'),{className:"_4oci",label:i._("Join Call"),onClick:this.$MessagesJewelThreadListRow14})};o.prototype.$MessagesJewelThreadListRow11=function(){if(!this.$MessagesJewelThreadListRow1)this.$MessagesJewelThreadListRow1=new (c('Promise'))(function(p,q){c('Bootloader').loadModules(["MessengerMessageRequestsTypedLogger"],function(r){var s=new r();s.setSurface('inbox').setFolderType('pending').setEntryPoint('inbox_banner');p(s)},'MessagesJewelThreadListRow.react')});return this.$MessagesJewelThreadListRow1};o.propTypes={onClick:n.func,participants:n.instanceOf(c('immutable').Map).isRequired,showPresence:n.bool,thread:n.instanceOf(c('ImmutableObject')).isRequired,viewer:n.string.isRequired,wasSeenByAll:n.bool};f.exports=o}),null);
__d('MessagesJewelThreadlistRowContainer.react',['ChatOpenTab','ChatOpenTabEventLogger','FantaTabActions','ImmutableObject','MercuryDelayedRoger','MercuryIDs','MercuryThreadlistRowContainer.react','MessagesJewelThreadListRow.react','MessengerMessageRequestsTypedLogger','ReactComponentWithPureRenderMixin','React','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g){'use strict';var h=c('MercuryDelayedRoger').get(),i=c('React').PropTypes,j=c('React').createClass({displayName:'MessagesJewelThreadlistRowContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(h)],propTypes:{folder:i.string,thread:i.instanceOf(c('ImmutableObject')).isRequired,viewer:i.string.isRequired},statics:{calculateState:function k(l){return {wasSeenByAll:h.wasSeenByAll(l.thread.thread_id)}}},render:function k(){return c('React').createElement(c('MercuryThreadlistRowContainer.react'),{ChildClass:c('MessagesJewelThreadListRow.react'),onClick:this._handleClick,showPresence:c('ChatOpenTab').canOpenTab(),thread:this.props.thread,viewer:this.props.viewer,wasSeenByAll:this.state.wasSeenByAll})},_handleClick:function k(l){if(l.button===1||l.altKey||l.ctrlKey||l.metaKey||l.shiftKey)return;if(!c('ChatOpenTab').canOpenTab())return;l.preventDefault();var m=this.props.thread.thread_id;c('FantaTabActions').openTab(m,'jewel_thread');c('ChatOpenTabEventLogger').logClickOpen('jewel',m);var n=void 0;switch(this.props.folder){case 'inbox':n='inbox';break;case 'pending':n='pending';break;case 'other':n='other';break;}new (c('MessengerMessageRequestsTypedLogger'))().setAction('message_requests_thread_open').setThreadID(c('MercuryIDs').getUserIDFromThreadID(m)).setSurface(n).setFolderType(this.props.thread.folder).setThreadKeyWeb(m).log()}});f.exports=j}),null);
__d('MessagesJewelThreadList.react',['cx','fbt','BootloadedComponent.react','EventProfiler','ImmutableObject','JSResource','Link.react','MercuryConfig','MercuryMessageBlockingNuxContainer.react','MessageBlockNuxState','MessagesJewelThreadlistRowContainer.react','MessagingTag','React','ScrollableArea.react','XUISpinner.react','debounce','getViewportDimensions','throttle'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=160,m=600,n=c('React').PropTypes;j=babelHelpers.inherits(o,c('React').Component);k=j&&j.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.$MessagesJewelThreadList3=function(){if(this.props.isLoaded)return;var u=this.refs.scrollable.getArea();if(u.getScrollTop()+u.getClientHeight()>=u.getScrollHeight()-1)this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();}.bind(this),this.$MessagesJewelThreadList9=function(u){u.preventDefault();this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest()}.bind(this),this.$MessagesJewelThreadList10=function(u){if(this.props.onMessageRequestsClick)this.props.onMessageRequestsClick(u);}.bind(this),this.$MessagesJewelThreadList8=function(u){if(this.props.onFilteredRequestsClick)this.props.onFilteredRequestsClick(u);}.bind(this),this.state={height:this.$MessagesJewelThreadList2()},q}o.prototype.componentDidMount=function(){this.$MessagesJewelThreadList1=Event.listen(window,'resize',c('debounce')(function(){this.setState({height:this.$MessagesJewelThreadList2()})}.bind(this)));c('EventProfiler').informManualInteractionTimestamp(['Messages_Jewel_Button'],true)};o.prototype.componentDidUpdate=function(p){if(p.threads.length===0&&this.props.threads.length!==0)this.props.onRenderThreads&&this.props.onRenderThreads();c('EventProfiler').informManualInteractionTimestamp(['Messages_Jewel_Button'],true)};o.prototype.componentWillUnmount=function(){this.$MessagesJewelThreadList1.remove()};o.prototype.render=function(){return c('React').createElement(c('ScrollableArea.react'),{className:"_2q3u",height:this.state.height,onScroll:c('throttle')(this.$MessagesJewelThreadList3,50),ref:'scrollable'},c('React').createElement('ul',{className:'jewelContent'},this.props.p2pJewelBannerContainer?c('React').createElement('li',null,this.props.p2pJewelBannerContainer):null,this.$MessagesJewelThreadList4(),this.$MessagesJewelThreadList5(),c('MessageBlockNuxState').shouldShowMessageBlockingNuxInJewel?c('React').createElement(c('MercuryMessageBlockingNuxContainer.react'),{shouldShowImage:true,location:'jewel'}):null,this.props.threads.map(function(p){return this.$MessagesJewelThreadList6(p)}.bind(this))),this.$MessagesJewelThreadList7())};o.prototype.$MessagesJewelThreadList6=function(p){if(Array.isArray(p)){return this.$MessagesJewelThreadList4(p)}else return c('React').createElement(c('MessagesJewelThreadlistRowContainer.react'),{folder:this.props.folder,key:p.thread_id,thread:p,viewer:this.props.viewer});};o.prototype.$MessagesJewelThreadList2=function(){return Math.min(m,c('getViewportDimensions')().height-l)};o.prototype.$MessagesJewelThreadList7=function(){if(this.props.isLoaded){if(this.props.folder===c('MessagingTag').PENDING)return c('React').createElement('div',{className:"_16bh _16bi"},c('React').createElement(c('Link.react'),{onClick:this.$MessagesJewelThreadList8},i._("See filtered requests")));return null}if(this.props.isLoading)return c('React').createElement(c('XUISpinner.react'),{className:"jewelLoading"});return c('React').createElement('div',{className:"_v8y"},c('React').createElement(c('Link.react'),{href:'#',onClick:this.$MessagesJewelThreadList9},i._("Show Older")))};o.prototype.$MessagesJewelThreadList4=function(p){var q=c('MercuryConfig').MessengerInboxRequests,r=this.props.newMessageRequestThreads;if(q)r=p;if(!this.props.jewelRequestsUI&&!q||this.props.folder===c('MessagingTag').PENDING||!r||r.length===0)return null;return c('React').createElement(c('BootloadedComponent.react'),{key:r[0].thread_id,bootloadPlaceholder:c('React').createElement('li',{style:{height:60}}),bootloadLoader:c('JSResource')('MessagesJewelMessageRequestsRow.react').__setRef('MessagesJewelThreadList.react'),onClick:this.$MessagesJewelThreadList10,threads:r,viewer:this.props.viewer})};o.prototype.$MessagesJewelThreadList5=function(){if(!this.props.jewelRequestsUI||this.props.folder!==c('MessagingTag').PENDING)return null;return c('React').createElement('li',{className:"_16bh _16bi"},i._("Open a request to get more info about who's messaging you."),c('React').createElement('br',null),i._("They won't know that you've seen it until you accept."))};o.propTypes={folder:n.string,isLoaded:n.bool,isLoading:n.bool,jewelRequestsUI:n.bool,onFilteredRequestsClick:n.func,onLoadMoreRequest:n.func,onMessageRequestsClick:n.func,onRenderThreads:n.func,p2pJewelBannerContainer:n.element,threads:n.arrayOf(n.oneOfType([n.instanceOf(c('ImmutableObject')),n.arrayOf(n.instanceOf(c('ImmutableObject')))])).isRequired,viewer:n.string.isRequired};f.exports=o}),null);
__d('MercuryJewelThreadlistControl',['csx','cx','fbt','ArbiterMixin','BootloadedComponent.react','CurrentUser','CSS','DOM','Event','JSLogger','JSResource','MercuryConfig','MercuryFilters','MercuryThreadlistConstants','MercuryThreadlistContainer.react','MessagesJewelThreadList.react','MessagingTag','MessengerURIConstants','PagesEventObserver','React','ReactDOM','MercuryThreadInformer','MercuryUnreadState','MercuryUnseenState','XUISpinner.react','mixin'],(function a(b,c,d,e,f,g,h,i,j){var k,l,m=c('JSLogger').create('mercury_jewel'),n=c('MessagingTag').PENDING,o='back_to_inbox',p=c('MessagingTag').INBOX,q=j._("See all in Messenger"),r=j._("See all Page messages");k=babelHelpers.inherits(s,c('mixin')(c('ArbiterMixin')));l=k&&k.prototype;function s(t){'use strict';l.constructor.call(this);this.$JewelThreadlistControl17=function(v){v.preventDefault();this.$JewelThreadlistControl7(c('MessagingTag').PENDING,c('MercuryFilters').ALL)}.bind(this);this.$JewelThreadlistControl18=function(v){v.preventDefault();this.$JewelThreadlistControl7(c('MessagingTag').OTHER,c('MercuryFilters').ALL)}.bind(this);var u=t.getFlyout();this.$JewelThreadlistControl1=c('DOM').find(u,"._3v_l");this.$JewelThreadlistControl2=c('MessagingTag').INBOX;this.$JewelThreadlistControl3=c('MercuryFilters').ALL;this.$JewelThreadlistControl4=c('CurrentUser').getID();this.$JewelThreadlistControl5={};this.$JewelThreadlistControl6={};this.$JewelThreadlistControl5[c('MessagingTag').INBOX]=c('DOM').find(u,"._1sde");this.$JewelThreadlistControl6[c('MessagingTag').INBOX]=c('DOM').find(u,"._1sdg");c('Event').listen(this.$JewelThreadlistControl5[c('MessagingTag').INBOX],'click',function(){return this.$JewelThreadlistControl7(c('MessagingTag').INBOX,c('MercuryFilters').ALL)}.bind(this));if(!c('MercuryConfig').JewelRequestsUI){this.$JewelThreadlistControl5[n]=c('DOM').find(u,"._1sdf");this.$JewelThreadlistControl6[n]=c('DOM').find(u,"._1sdh");c('Event').listen(this.$JewelThreadlistControl5[n],'click',function(){return this.$JewelThreadlistControl7(n,c('MercuryFilters').ALL)}.bind(this))}else{this.$JewelThreadlistControl5[o]=c('DOM').find(u,"._34zq");c('Event').listen(this.$JewelThreadlistControl5[o],'click',function(){return this.$JewelThreadlistControl7(c('MessagingTag').INBOX,c('MercuryFilters').ALL)}.bind(this))}this.$JewelThreadlistControl8=c('DOM').find(u,"._1c1m");this.$JewelThreadlistControl9=c('DOM').find(u,"._4djt");this.$JewelThreadlistControl10=c('MercuryUnreadState').get();c('Event').listen(this.$JewelThreadlistControl8,'click',function(v){this.$JewelThreadlistControl11();v.kill()}.bind(this));c('MercuryThreadInformer').get().subscribe('unread-updated',function(){return this.$JewelThreadlistControl12()}.bind(this));this.$JewelThreadlistControl12();this.$JewelThreadlistControl13(u);this.render();m.bump('opened_threadlist_'+this.$JewelThreadlistControl2)}s.prototype.$JewelThreadlistControl13=function(t){'use strict';var u=c('MercuryConfig').PagesTabConfig;if(!u)return;this.$JewelThreadlistControl5[c('MessagingTag').PAGES]=c('DOM').find(t,"._481w");this.$JewelThreadlistControl6[c('MessagingTag').PAGES]=c('DOM').find(t,"._37p3");this.$JewelThreadlistControl14=c('MercuryConfig').PagesTabConfig.pageID;this.$JewelThreadlistControl15=c('MercuryUnreadState').getForFBID(this.$JewelThreadlistControl14);c('Event').listen(this.$JewelThreadlistControl5[c('MessagingTag').PAGES],'click',function(){c('PagesEventObserver').notify('biz_conv_page_tab_click',this.$JewelThreadlistControl14,{'unread-count':this.$JewelThreadlistControl15.getUnreadCount(p)},false);this.$JewelThreadlistControl7(c('MessagingTag').PAGES,c('MercuryFilters').ALL)}.bind(this));c('MercuryThreadInformer').getForFBID(this.$JewelThreadlistControl14).subscribe('unread-updated',function(){return this.$JewelThreadlistControl16()}.bind(this));this.$JewelThreadlistControl16();this.changeTabIfNecessary()};s.prototype.changeTabIfNecessary=function(){'use strict';var t=c('MercuryUnseenState').get().getUnseenCount();if(t>0&&this.$JewelThreadlistControl4===this.$JewelThreadlistControl14)this.$JewelThreadlistControl7(c('MessagingTag').INBOX,c('MercuryFilters').ALL);if(this.$JewelThreadlistControl14){var u=c('MercuryUnseenState').getForFBID(this.$JewelThreadlistControl14).getUnseenCount();if(c('MercuryConfig').PagesTabConfig.unseenJewelEnabled&&u>0&&t===0)this.$JewelThreadlistControl7(c('MessagingTag').PAGES,c('MercuryFilters').ALL);}};s.prototype.render=function(){'use strict';if(this.$JewelThreadlistControl4==c('CurrentUser').getID()){c('ReactDOM').render(c('React').createElement(c('MercuryThreadlistContainer.react'),{ChildClass:c('MessagesJewelThreadList.react'),viewer:this.$JewelThreadlistControl4,folder:this.$JewelThreadlistControl2,filter:this.$JewelThreadlistControl3,jewelRequestsUI:c('MercuryConfig').JewelRequestsUI,onMessageRequestsClick:this.$JewelThreadlistControl17,onFilteredRequestsClick:this.$JewelThreadlistControl18}),this.$JewelThreadlistControl1)}else c('ReactDOM').render(c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('PagesMessengerThreadlistContainer.react').__setRef('MercuryJewelThreadlistControl'),bootloadPlaceholder:c('React').createElement(c('XUISpinner.react'),{className:"jewelLoading"}),pageID:this.$JewelThreadlistControl4,config:c('MercuryConfig').PagesTabConfig}),this.$JewelThreadlistControl1);};s.prototype.$JewelThreadlistControl11=function(){'use strict';if(this.$JewelThreadlistControl4==c('CurrentUser').getID()){this.$JewelThreadlistControl10.markFolderAsRead(this.$JewelThreadlistControl2)}else this.$JewelThreadlistControl15.markFolderAsRead(c('MessagingTag').INBOX);};s.prototype.$JewelThreadlistControl7=function(t,u){'use strict';if(this.$JewelThreadlistControl2!==t||this.$JewelThreadlistControl3!==u){var v=this.$JewelThreadlistControl2,w=t===c('MessagingTag').INBOX,x=t;m.bump('opened_threadlist_'+t);if(this.$JewelThreadlistControl5[x])c('CSS').addClass(this.$JewelThreadlistControl5[x],"_1sdd");if(this.$JewelThreadlistControl5[v])c('CSS').removeClass(this.$JewelThreadlistControl5[v],"_1sdd");this.$JewelThreadlistControl2=t;this.$JewelThreadlistControl3=u;if(w){this.$JewelThreadlistControl9.href=c('MessengerURIConstants').FACEBOOK_PREFIX;this.$JewelThreadlistControl9.text=q;this.$JewelThreadlistControl4=c('CurrentUser').getID()}else if(t==n){this.$JewelThreadlistControl9.href=c('MessengerURIConstants').FACEBOOK_PREFIX+c('MessengerURIConstants').MESSAGE_REQUESTS_PATH;this.$JewelThreadlistControl9.text=q;this.$JewelThreadlistControl4=c('CurrentUser').getID()}else if(t==c('MessagingTag').PAGES){this.$JewelThreadlistControl4=this.$JewelThreadlistControl14;this.$JewelThreadlistControl9.href=c('MercuryConfig').PagesTabConfig.pageMessageURI;this.$JewelThreadlistControl9.text=r}if(c('MercuryConfig').JewelRequestsUI){c('CSS').conditionShow(this.$JewelThreadlistControl5[c('MessagingTag').INBOX],w);c('CSS').conditionShow(this.$JewelThreadlistControl5[o],!w)}this.render()}};s.prototype.$JewelThreadlistControl12=function(){'use strict';this.$JewelThreadlistControl19(c('MessagingTag').INBOX);if(!c('MercuryConfig').JewelRequestsUI)this.$JewelThreadlistControl19(n);};s.prototype.$JewelThreadlistControl16=function(){'use strict';var t=void 0;if(this.$JewelThreadlistControl15.exceedsMaxCount(p)){t=c('MercuryThreadlistConstants').MAX_UNREAD_COUNT}else t=this.$JewelThreadlistControl15.getUnreadCount(p);this.$JewelThreadlistControl20(t,c('MessagingTag').PAGES)};s.prototype.$JewelThreadlistControl19=function(t){'use strict';var u=void 0;if(this.$JewelThreadlistControl10.exceedsMaxCount(t)){u=c('MercuryThreadlistConstants').MAX_UNREAD_COUNT}else u=this.$JewelThreadlistControl10.getUnreadCount(t);this.$JewelThreadlistControl20(u,t)};s.prototype.$JewelThreadlistControl20=function(t,u){'use strict';var v=this.$JewelThreadlistControl6[u];if(!v)return;var w=t?t.toString():0;if(t>0){if(t==c('MercuryThreadlistConstants').MAX_UNREAD_COUNT)w+='+';c('DOM').setContent(v,j._("({unread_count})",[j.param('unread_count',w)]))}else c('DOM').setContent(v,'');};f.exports=s}),null);
__d('MercuryJewel',['Arbiter','EventProfiler','MercuryJewelCountControl','MercuryMessengerJewelPerfConfig','MercuryServerPayloadPreprocessor'],(function a(b,c,d,e,f,g){var h=false,i=false,j=null;function k(l,m){'use strict';c('MercuryJewelCountControl').constructStores(m);Object.keys(m).forEach(function(n){c('MercuryServerPayloadPreprocessor').getForFBID(n).handleUpdate(m[n])});this.$MercuryJewel1=new (c('MercuryJewelCountControl'))(l,m);l.subscribeOnce('opened',function(){this.$MercuryJewel2(l)}.bind(this));l.subscribe('open',function(){this.$MercuryJewel3(l);this.$MercuryJewel4()}.bind(this));if(c('MercuryMessengerJewelPerfConfig').eagerLoadingOnBadge)l.subscribe('updated',function(n,o){if(o&&o.count>0)this.$MercuryJewel2(l);}.bind(this));}k.prototype.$MercuryJewel2=function(l){'use strict';this.$MercuryJewel3(l);if(!h){h=true;if(!l.isOpen())j=c('EventProfiler').notifyRunningEagerInteraction(l.getRoot(),'click');e(['MercuryJewelThreadlistControl'],function(m){this.$MercuryJewel5=new m(l)}.bind(this));c('Arbiter').inform('mercury-jewel/opened',null,c('Arbiter').BEHAVIOR_STATE)}};k.prototype.$MercuryJewel4=function(){'use strict';this.$MercuryJewel5&&this.$MercuryJewel5.changeTabIfNecessary()};k.prototype.$MercuryJewel3=function(l){'use strict';if(!i&&l.isOpen()){i=true;c('EventProfiler').tagCurrentActiveInteractionsAs('FirstMercuryJewelOpen');if(j)j();}};f.exports=k}),null);