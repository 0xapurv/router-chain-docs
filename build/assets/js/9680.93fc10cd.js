"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[9680],{69680:(t,e,i)=>{i.r(e),i.d(e,{dyte_breakout_rooms_manager:()=>r});var a=i(94196),o=i(61070),s=i(7147),n=i(79781);i(55752);const r=class{constructor(t){(0,a.r)(this,t),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.keyPressListener=t=>{"Escape"===t.key&&this.close()},this.roomConfig={rooms:1,state:"room-config",optionsToggle:!1,mode:"create",applyingChanges:!1},this.connectedRooms=[],this.unassignedParticipants=[],this.assigningParticipants=!1,this.selectedParticipants=[],this.iconPack=s.d,this.t=(0,o.u)(),this.onRoomDelete=t=>{this.meeting.connectedMeetings.stateManager.deleteConnectedMeetings([t])},this.onParticipantDelete=t=>{null!=t&&(this.unassignedParticipants=[...this.unassignedParticipants.filter((e=>e!==t))])},this.onUnassignAll=()=>{this.meeting.connectedMeetings.stateManager.unassignAllParticipants()},this.addNewRoom=()=>{this.meeting.connectedMeetings.stateManager.addNewConnectedMeeting(),this.selectorRef.scrollTo({top:this.selectorRef.scrollHeight,behavior:"smooth"})},this.addParticipantsToRoom=t=>{null!=this.selectedParticipants.length&&0!=this.assigningParticipants&&(this.meeting.connectedMeetings.stateManager.assignParticipants(t,this.selectedParticipants),this.selectedParticipants=[],this.assigningParticipants=!1)},this.handleConfirmation=async(t,e,i)=>{const a={active:!0,icon:this.iconPack.breakout_rooms,title:"Creating Breakout Rooms",description:"It may take a few moments."};t.emit({activeOverlayModal:a}),e.activeOverlayModal=a,await i.connectedMeetings.stateManager.startConnectedMeetings(),t.emit({activeOverlayModal:{active:!1},activeBreakoutRoomGrid:!0,activeBreakoutRooms:!0}),e.activeOverlayModal={active:!1},e.activeBreakoutRoomGrid=!0,e.activeBreakoutRooms=!0},this.handleClose=(t,e)=>{var i,a;t.emit({activeBreakoutRoomsManager:{active:!0,data:null===(i=this.states.activeConfirmationModal)||void 0===i?void 0:i.data}}),e.activeBreakoutRoomsManager={active:!0,data:Object.assign(Object.assign({},null===(a=e.activeConfirmationModal)||void 0===a?void 0:a.data),{state:"participants-config"})}},this.enableConfirmationModal=()=>{const t={active:!0,content:"Upon starting breakout rooms, participants will be moved to the assigned rooms.",variant:"primary",cancelText:"Go Back",ctaText:"Yes, Start",data:{roomConfig:this.roomConfig,selectedParticipants:this.selectedParticipants},onClick:this.handleConfirmation,onClose:this.handleClose};this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!1,data:void 0},activeConfirmationModal:t}),n.s.activeBreakoutRoomsManager={active:!1,data:void 0},n.s.activeConfirmationModal=t},this.switchManagerState=(t="room-config")=>{if("edit"===this.roomConfig.mode)return;const e=this.meeting.connectedMeetings.stateManager.getConnectedMeetings().length;this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{rooms:Math.max(e,1),state:t}),this.roomConfig.state="room-config"},this.reset=()=>{this.meeting.connectedMeetings.stateManager.reset(),this.switchManagerState()},this.updateBreakoutRooms=async()=>{var t,e;this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{applyingChanges:!0}),await this.meeting.connectedMeetings.stateManager.applyChanges(),this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!(null===(t=this.states.activeBreakoutRoomsManager)||void 0===t?void 0:t.active)}}),n.s.activeBreakoutRoomsManager={active:!(null===(e=n.s.activeBreakoutRoomsManager)||void 0===e?void 0:e.active)},this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{applyingChanges:!1})},this.updateSelectedParticipants=t=>{const{detail:{val:e,id:i}}=t;-1!==e&&(1===e&&(this.selectedParticipants=[...this.selectedParticipants,i]),0===e&&(this.selectedParticipants=[...this.selectedParticipants.filter((t=>t!==i))]))}}connectedCallback(){var t,e,i,a,o,s,n,r,c;if(document.addEventListener("keydown",this.keyPressListener),this.onSelectedParticipantsChanged(this.selectedParticipants),null===(e=null===(t=this.meeting)||void 0===t?void 0:t.connectedMeetings)||void 0===e||e.stateManager.on("stateUpdate",(()=>{this.connectedRooms=[...this.meeting.connectedMeetings.stateManager.getConnectedMeetings()],this.unassignedParticipants=this.meeting.connectedMeetings.stateManager.getUnassignedParticipants().map((t=>t.clientSpecificId))})),"edit"===(null===(i=this.states.activeBreakoutRoomsManager)||void 0===i?void 0:i.mode)&&(this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{mode:"edit"})),"edit"===this.roomConfig.mode){null===(o=null===(a=this.meeting)||void 0===a?void 0:a.connectedMeetings)||void 0===o||o.stateManager.init();const t=(null===(r=null===(n=null===(s=this.meeting)||void 0===s?void 0:s.connectedMeetings)||void 0===n?void 0:n.stateManager)||void 0===r?void 0:r.getConnectedMeetings())||[];this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{rooms:null==t?void 0:t.length,state:"participants-config",optionsToggle:!1}),this.selectedParticipants=[],this.unassignedParticipants=this.meeting.connectedMeetings.stateManager.getUnassignedParticipants().map((t=>t.clientSpecificId))}else{const t=null===(c=this.states.activeBreakoutRoomsManager)||void 0===c?void 0:c.data;t&&(this.roomConfig=t.roomConfig,this.selectedParticipants=t.selectedParticipants,this.roomConfig.state=t.state),this.connectedRooms=[...this.meeting.connectedMeetings.stateManager.getConnectedMeetings()],this.unassignedParticipants=this.meeting.connectedMeetings.stateManager.getUnassignedParticipants().map((t=>t.clientSpecificId))}}disconnectedCallback(){this.keyPressListener&&document.removeEventListener("keydown",this.keyPressListener)}onSelectedParticipantsChanged(t){t.length>0?this.assigningParticipants=!0:this.assigningParticipants=!1}close(){var t;null===(t=this.stateUpdate)||void 0===t||t.emit({activeBreakoutRoomsManager:{active:!1}}),n.s.activeBreakoutRoomsManager={active:!1}}updateState(t){this.unassignedParticipants=[],this.selectedParticipants=[],this.meeting.connectedMeetings.stateManager.reset(),this.meeting.connectedMeetings.stateManager.init();for(let e=0;e<this.roomConfig.rooms;e++)this.meeting.connectedMeetings.stateManager.addNewConnectedMeeting();this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{state:t})}render(){return(0,a.h)(a.H,null,"room-config"===this.roomConfig.state?(0,a.h)("div",{class:"room-config"},(0,a.h)("header",null,this.t("Create Breakout Rooms")),(0,a.h)("div",{class:"create-room"},(0,a.h)("p",null,"Number of Rooms"),(0,a.h)("dyte-counter",{value:this.roomConfig.rooms,onValueChange:t=>{this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{rooms:Math.max(+t.detail,1)})}}),(0,a.h)("br",null),(0,a.h)("p",null,"Default Permissions"),(0,a.h)("label",null,(0,a.h)("input",{type:"checkbox",disabled:!0,checked:!1}),"\u2002Allow switching between rooms"),(0,a.h)("label",null,(0,a.h)("input",{type:"checkbox",disabled:!0,checked:!1}),"\u2002Can go back to main room")),(0,a.h)("footer",null,(0,a.h)("dyte-button",{onClick:()=>this.close(),kind:"button",size:"lg",variant:"ghost",title:this.t("Cancel")},"Cancel"),"\u2002",(0,a.h)("dyte-button",{kind:"button",size:"lg",title:this.t("Create"),onClick:()=>this.updateState("participants-config")},"Create"))):(0,a.h)("div",{class:"participant-config"},(0,a.h)("aside",{part:"menu"},(0,a.h)("header",null,this.t("Assign Participants")),(0,a.h)("dyte-participants",{meeting:this.meeting,view:"breakout-rooms-manager",unassignedParticipants:this.unassignedParticipants,onSelectedParticipantUpdate:this.updateSelectedParticipants,mode:this.roomConfig.mode}),(0,a.h)("div",{class:"assign-participants"},(0,a.h)("dyte-button",{disabled:"edit"===this.roomConfig.mode,kind:"button",variant:"ghost",size:"md",onClick:()=>this.meeting.connectedMeetings.stateManager.assignParticipantsRandomly()},(0,a.h)("div",{class:"row-button"},(0,a.h)("dyte-icon",{icon:this.iconPack.shuffle}),"Assign Randomly")))),(0,a.h)("div",{class:"assign-rooms"},(0,a.h)("div",{class:{back:!0,disabled:"edit"===this.roomConfig.mode},onClick:()=>this.switchManagerState()},(0,a.h)("dyte-icon",{icon:this.iconPack.chevron_left}),"Back"),this.assigningParticipants?(0,a.h)("p",{class:"row assign-text"},"Select a room to assign ",this.selectedParticipants.length," participant/s."):(0,a.h)("div",{class:"row"},"Rooms (",this.meeting.connectedMeetings.stateManager.getConnectedMeetings().length,")",(0,a.h)("div",{class:"cta-buttons"},(0,a.h)("dyte-button",{kind:"button",variant:"ghost"},(0,a.h)("div",{onClick:this.addNewRoom},(0,a.h)("dyte-icon",{icon:this.iconPack.add}),"Add Room")),(0,a.h)("dyte-button",{kind:"button",variant:"ghost",disabled:null==this.unassignedParticipants.length,onClick:this.onUnassignAll},"Unassign All"))),(0,a.h)("div",{class:"rooms",ref:t=>this.selectorRef=t},this.connectedRooms.map((t=>(0,a.h)("dyte-breakout-room-manager",{key:t.id,onParticipantsAdd:()=>this.addParticipantsToRoom(t.id),assigningParticipants:this.assigningParticipants,meeting:this.meeting,onDelete:()=>this.onRoomDelete(t.id),mode:this.roomConfig.mode,onParticipantDelete:t=>this.onParticipantDelete(t.detail),states:this.states,room:Object.assign({},t)})))),(0,a.h)("div",{class:"start-breakout"},this.roomConfig.optionsToggle&&(0,a.h)("div",{class:"more-options"},(0,a.h)("p",{onClick:this.reset},(0,a.h)("dyte-icon",{icon:this.iconPack.back}),this.t("Reset"))),"edit"!==this.roomConfig.mode&&(0,a.h)("dyte-button",{size:"md"},(0,a.h)("div",null,(0,a.h)("span",{onClick:this.enableConfirmationModal},"Start Breakout \u2002 | \u2002"),(0,a.h)("dyte-icon",{onClick:()=>{this.roomConfig=Object.assign(Object.assign({},this.roomConfig),{optionsToggle:!this.roomConfig.optionsToggle})},icon:this.roomConfig.optionsToggle?this.iconPack.chevron_down:this.iconPack.chevron_up}))),"edit"===this.roomConfig.mode&&(0,a.h)("dyte-button",{size:"md",onClick:this.updateBreakoutRooms,disabled:this.roomConfig.applyingChanges},"Apply Changes")))))}static get watchers(){return{selectedParticipants:["onSelectedParticipantsChanged"]}}};r.style=".room-config{display:flex;flex-grow:1;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));width:500px;height:400px;max-width:100%;max-height:100%}header{display:flex;align-items:center;justify-content:center;width:100%;padding:var(--dyte-space-4, 16px);font-size:20px;font-weight:600}.create-room{display:flex;flex-grow:1;flex-direction:column;justify-content:flex-start;vertical-align:top;width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);min-height:20px}.create-room p{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-1, 4px);font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}footer{display:flex;flex-direction:row;vertical-align:middle;justify-content:flex-end;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px)}label{margin-bottom:var(--dyte-space-3, 12px);font-weight:400;color:rgb(var(--dyte-colors-text-1000, 255 255 255));opacity:0.4}.participant-config{display:flex;flex-grow:1;flex-direction:row;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));width:700px;height:400px;max-width:100%;max-height:100%}aside{box-sizing:border-box;display:flex;min-width:var(--dyte-space-56, 224px);flex-grow:1;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}aside header{width:100%;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);padding-top:var(--dyte-space-4, 16px);font-size:14px}aside .assign-participants{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;padding:var(--dyte-space-4, 16px);background:#252525}aside .assign-participants .row-button{display:flex;cursor:pointer;flex-direction:row;align-items:center}aside .assign-participants .row-button dyte-icon{height:var(--dyte-space-6, 24px);padding-right:var(--dyte-space-2, 8px)}.assign-rooms{display:flex;width:100%;flex-direction:column}.assign-rooms .disabled{opacity:0.2}.assign-rooms .back{display:flex;cursor:pointer;flex-direction:row;align-items:center;justify-content:flex-start;padding:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-0, 0px);font-size:14px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.assign-rooms .back dyte-icon{height:var(--dyte-space-5, 20px)}.assign-rooms .row{margin-left:var(--dyte-space-4, 16px);margin-right:var(--dyte-space-4, 16px);margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:14px}.assign-rooms .assign-text{margin-left:var(--dyte-space-4, 16px);margin-right:var(--dyte-space-4, 16px);margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-400, 53 110 253) / var(--tw-text-opacity))}.assign-rooms .cta-buttons{display:flex;flex-direction:row;align-items:center;justify-content:center}.assign-rooms .cta-buttons dyte-button div{display:flex;flex-direction:row;align-items:center}.assign-rooms .cta-buttons dyte-button div dyte-icon{height:var(--dyte-space-4, 16px)}.assign-rooms .cta-buttons dyte-button:nth-child(1){--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.assign-rooms .cta-buttons dyte-button:nth-child(2){--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.assign-rooms .rooms{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-grow:1;flex-direction:column;overflow-y:auto}.assign-rooms .rooms::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px)}.assign-rooms .rooms::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.assign-rooms .rooms::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.assign-rooms .start-breakout{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px)}.assign-rooms .start-breakout dyte-button div{display:flex;flex-direction:row;align-items:center}.assign-rooms .start-breakout dyte-button div dyte-icon{margin:var(--dyte-space-0, 0px);height:var(--dyte-space-4, 16px)}.assign-rooms .start-breakout .more-options{position:absolute;border-style:solid;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));bottom:var(--dyte-space-14, 56px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));padding:var(--dyte-space-2, 8px);width:150px}.assign-rooms .start-breakout .more-options p{display:flex;flex-direction:row;align-items:center;margin:var(--dyte-space-0, 0px);cursor:pointer;padding:var(--dyte-space-2, 8px);font-size:14px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.assign-rooms .start-breakout .more-options p dyte-icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-4, 16px)}"},61070:(t,e,i)=>{i.d(e,{g:()=>o,u:()=>s});var a=i(55752);const o=async t=>{if(null==t||"en"===t||""===t.trim())return a.d;try{const e=await fetch(`http://localhost:5000/${t}.json`);return e.ok?Object.assign({},a.d,await e.json()):a.d}catch(e){return a.d}},s=(t=a.d)=>e=>{var i;return null!==(i=t[e])&&void 0!==i?i:e}},79781:(t,e,i)=>{i.d(e,{o:()=>c,s:()=>r});var a=i(94196);const o=t=>!("isConnected"in t)||t.isConnected,s=((t,e)=>{let i;return(...a)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,t(...a)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(o))}),2e3),n=(t,e)=>{const i=t.indexOf(e);i>=0&&(t[i]=t[t.length-1],t.length--)},{state:r,onChange:c}=((t,e)=>{const i=((t,e=((t,e)=>t!==e))=>{let i=new Map(Object.entries(null!=t?t:{}));const a={dispose:[],get:[],set:[],reset:[]},o=()=>{i=new Map(Object.entries(null!=t?t:{})),a.reset.forEach((t=>t()))},s=t=>(a.get.forEach((e=>e(t))),i.get(t)),r=(t,o)=>{const s=i.get(t);e(o,s,t)&&(i.set(t,o),a.set.forEach((e=>e(t,o,s))))},c="undefined"==typeof Proxy?{}:new Proxy(t,{get:(t,e)=>s(e),ownKeys:t=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>i.has(e),set:(t,e,i)=>(r(e,i),!0)}),d=(t,e)=>(a[t].push(e),()=>{n(a[t],e)});return{state:c,get:s,set:r,on:d,onChange:(e,i)=>{const a=d("set",((t,a)=>{t===e&&i(a)})),o=d("reset",(()=>i(t[e])));return()=>{a(),o()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(d("set",e.set)),e.get&&t.push(d("get",e.get)),e.reset&&t.push(d("reset",e.reset)),e.dispose&&t.push(d("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{a.dispose.forEach((t=>t())),o()},reset:o,forceUpdate:t=>{const e=i.get(t);a.set.forEach((i=>i(t,e,e)))}}})(t,e);return i.use((()=>{if("function"!=typeof a.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const i=(0,a.a)();i&&((t,e,i)=>{const a=t.get(e);a?a.includes(i)||a.push(i):t.set(e,[i])})(t,e,i)},set:e=>{const i=t.get(e);i&&t.set(e,i.filter(a.f)),s(t)},reset:()=>{t.forEach((t=>t.forEach(a.f))),s(t)}}})()),i})({})}}]);