import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountPlanCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// AccountPlanCreateApplicationJsonContact
/** 
 * Billing Contact object.
**/
export class AccountPlanCreateApplicationJsonContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=apt" })
  apt?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: string;
}


// AccountPlanCreateApplicationJsonPlanAudio
/** 
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
export class AccountPlanCreateApplicationJsonPlanAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=ddi_numbers" })
  ddiNumbers?: number;

  @SpeakeasyMetadata({ data: "json, name=premium_countries" })
  premiumCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=tollfree_countries" })
  tollfreeCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateApplicationJsonPlanBase
/** 
 * Account base plan object.
**/
export class AccountPlanCreateApplicationJsonPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// AccountPlanCreateApplicationJsonPlanLargeMeeting
/** 
 * Account plan object.
**/
export class AccountPlanCreateApplicationJsonPlanLargeMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateApplicationJsonPhonePlanPlanBase
/** 
 * Additional phone base plans.
**/
export class AccountPlanCreateApplicationJsonPhonePlanPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanCreateApplicationJsonPhonePlanPlanCalling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanCreateApplicationJsonPhonePlanPlanNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateApplicationJsonPhonePlan
/** 
 * Phone Plan Object
**/
export class AccountPlanCreateApplicationJsonPhonePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_base" })
  planBase?: AccountPlanCreateApplicationJsonPhonePlanPlanBase;

  @SpeakeasyMetadata({ data: "json, name=plan_calling", elemType: AccountPlanCreateApplicationJsonPhonePlanPlanCalling })
  planCalling?: AccountPlanCreateApplicationJsonPhonePlanPlanCalling[];

  @SpeakeasyMetadata({ data: "json, name=plan_number", elemType: AccountPlanCreateApplicationJsonPhonePlanPlanNumber })
  planNumber?: AccountPlanCreateApplicationJsonPhonePlanPlanNumber[];
}


// AccountPlanCreateApplicationJsonPlanRoomConnector
/** 
 * Account plan object.
**/
export class AccountPlanCreateApplicationJsonPlanRoomConnector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateApplicationJsonPlanWebinar
/** 
 * Account plan object.
**/
export class AccountPlanCreateApplicationJsonPlanWebinar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateApplicationJsonPlanZoomRooms
/** 
 * Account plan object.
**/
export class AccountPlanCreateApplicationJsonPlanZoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateApplicationJson
/** 
 * Account Plans object.
**/
export class AccountPlanCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: AccountPlanCreateApplicationJsonContact;

  @SpeakeasyMetadata({ data: "json, name=plan_audio" })
  planAudio?: AccountPlanCreateApplicationJsonPlanAudio;

  @SpeakeasyMetadata({ data: "json, name=plan_base" })
  planBase: AccountPlanCreateApplicationJsonPlanBase;

  @SpeakeasyMetadata({ data: "json, name=plan_large_meeting", elemType: AccountPlanCreateApplicationJsonPlanLargeMeeting })
  planLargeMeeting?: AccountPlanCreateApplicationJsonPlanLargeMeeting[];

  @SpeakeasyMetadata({ data: "json, name=plan_phone" })
  planPhone?: AccountPlanCreateApplicationJsonPhonePlan;

  @SpeakeasyMetadata({ data: "json, name=plan_recording" })
  planRecording?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_room_connector" })
  planRoomConnector?: AccountPlanCreateApplicationJsonPlanRoomConnector;

  @SpeakeasyMetadata({ data: "json, name=plan_webinar", elemType: AccountPlanCreateApplicationJsonPlanWebinar })
  planWebinar?: AccountPlanCreateApplicationJsonPlanWebinar[];

  @SpeakeasyMetadata({ data: "json, name=plan_zoom_rooms" })
  planZoomRooms?: AccountPlanCreateApplicationJsonPlanZoomRooms;
}


// AccountPlanCreateMultipartFormDataContact
/** 
 * Billing Contact object.
**/
export class AccountPlanCreateMultipartFormDataContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=apt" })
  apt?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: string;
}


// AccountPlanCreateMultipartFormDataPlanAudio
/** 
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
export class AccountPlanCreateMultipartFormDataPlanAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=ddi_numbers" })
  ddiNumbers?: number;

  @SpeakeasyMetadata({ data: "json, name=premium_countries" })
  premiumCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=tollfree_countries" })
  tollfreeCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateMultipartFormDataPlanBase
/** 
 * Account base plan object.
**/
export class AccountPlanCreateMultipartFormDataPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// AccountPlanCreateMultipartFormDataPlanLargeMeeting
/** 
 * Account plan object.
**/
export class AccountPlanCreateMultipartFormDataPlanLargeMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateMultipartFormDataPhonePlanPlanBase
/** 
 * Additional phone base plans.
**/
export class AccountPlanCreateMultipartFormDataPhonePlanPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanCreateMultipartFormDataPhonePlanPlanCalling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanCreateMultipartFormDataPhonePlanPlanNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateMultipartFormDataPhonePlan
/** 
 * Phone Plan Object
**/
export class AccountPlanCreateMultipartFormDataPhonePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_base" })
  planBase?: AccountPlanCreateMultipartFormDataPhonePlanPlanBase;

  @SpeakeasyMetadata({ data: "json, name=plan_calling", elemType: AccountPlanCreateMultipartFormDataPhonePlanPlanCalling })
  planCalling?: AccountPlanCreateMultipartFormDataPhonePlanPlanCalling[];

  @SpeakeasyMetadata({ data: "json, name=plan_number", elemType: AccountPlanCreateMultipartFormDataPhonePlanPlanNumber })
  planNumber?: AccountPlanCreateMultipartFormDataPhonePlanPlanNumber[];
}


// AccountPlanCreateMultipartFormDataPlanRoomConnector
/** 
 * Account plan object.
**/
export class AccountPlanCreateMultipartFormDataPlanRoomConnector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateMultipartFormDataPlanWebinar
/** 
 * Account plan object.
**/
export class AccountPlanCreateMultipartFormDataPlanWebinar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateMultipartFormDataPlanZoomRooms
/** 
 * Account plan object.
**/
export class AccountPlanCreateMultipartFormDataPlanZoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreateMultipartFormData1
/** 
 * Account Plans object.
**/
export class AccountPlanCreateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=contact;json=true" })
  contact?: AccountPlanCreateMultipartFormDataContact;

  @SpeakeasyMetadata({ data: "multipart_form, name=plan_audio;json=true" })
  planAudio?: AccountPlanCreateMultipartFormDataPlanAudio;

  @SpeakeasyMetadata({ data: "multipart_form, name=plan_base;json=true" })
  planBase: AccountPlanCreateMultipartFormDataPlanBase;

  @SpeakeasyMetadata({ data: "multipart_form, name=plan_large_meeting;json=true", elemType: AccountPlanCreateMultipartFormDataPlanLargeMeeting })
  planLargeMeeting?: AccountPlanCreateMultipartFormDataPlanLargeMeeting[];

  @SpeakeasyMetadata({ data: "multipart_form, name=plan_phone;json=true" })
  planPhone?: AccountPlanCreateMultipartFormDataPhonePlan;

  @SpeakeasyMetadata({ data: "multipart_form, name=plan_recording" })
  planRecording?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=plan_room_connector;json=true" })
  planRoomConnector?: AccountPlanCreateMultipartFormDataPlanRoomConnector;

  @SpeakeasyMetadata({ data: "multipart_form, name=plan_webinar;json=true", elemType: AccountPlanCreateMultipartFormDataPlanWebinar })
  planWebinar?: AccountPlanCreateMultipartFormDataPlanWebinar[];

  @SpeakeasyMetadata({ data: "multipart_form, name=plan_zoom_rooms;json=true" })
  planZoomRooms?: AccountPlanCreateMultipartFormDataPlanZoomRooms;
}


export class AccountPlanCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AccountPlanCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AccountPlanCreateMultipartFormData1;
}


// AccountPlanCreate201ApplicationJsonPlanAudio
/** 
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
export class AccountPlanCreate201ApplicationJsonPlanAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=ddi_numbers" })
  ddiNumbers?: number;

  @SpeakeasyMetadata({ data: "json, name=premium_countries" })
  premiumCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=tollfree_countries" })
  tollfreeCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreate201ApplicationJsonPlanBase
/** 
 * Account base plan object.
**/
export class AccountPlanCreate201ApplicationJsonPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// AccountPlanCreate201ApplicationJsonPlanLargeMeeting
/** 
 * Account plan object.
**/
export class AccountPlanCreate201ApplicationJsonPlanLargeMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreate201ApplicationJsonPhonePlanPlanBase
/** 
 * Additional phone base plans.
**/
export class AccountPlanCreate201ApplicationJsonPhonePlanPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreate201ApplicationJsonPhonePlan
/** 
 * Phone Plan Object
**/
export class AccountPlanCreate201ApplicationJsonPhonePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_base" })
  planBase?: AccountPlanCreate201ApplicationJsonPhonePlanPlanBase;

  @SpeakeasyMetadata({ data: "json, name=plan_calling", elemType: AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling })
  planCalling?: AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling[];

  @SpeakeasyMetadata({ data: "json, name=plan_number", elemType: AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber })
  planNumber?: AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber[];
}


// AccountPlanCreate201ApplicationJsonPlanRoomConnector
/** 
 * Account plan object.
**/
export class AccountPlanCreate201ApplicationJsonPlanRoomConnector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreate201ApplicationJsonPlanWebinar
/** 
 * Account plan object.
**/
export class AccountPlanCreate201ApplicationJsonPlanWebinar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreate201ApplicationJsonPlanZoomRooms
/** 
 * Account plan object.
**/
export class AccountPlanCreate201ApplicationJsonPlanZoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanCreate201ApplicationJson
/** 
 * Account Plans object.
**/
export class AccountPlanCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_audio" })
  planAudio?: AccountPlanCreate201ApplicationJsonPlanAudio;

  @SpeakeasyMetadata({ data: "json, name=plan_base" })
  planBase: AccountPlanCreate201ApplicationJsonPlanBase;

  @SpeakeasyMetadata({ data: "json, name=plan_large_meeting", elemType: AccountPlanCreate201ApplicationJsonPlanLargeMeeting })
  planLargeMeeting?: AccountPlanCreate201ApplicationJsonPlanLargeMeeting[];

  @SpeakeasyMetadata({ data: "json, name=plan_phone" })
  planPhone?: AccountPlanCreate201ApplicationJsonPhonePlan;

  @SpeakeasyMetadata({ data: "json, name=plan_recording" })
  planRecording?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_room_connector" })
  planRoomConnector?: AccountPlanCreate201ApplicationJsonPlanRoomConnector;

  @SpeakeasyMetadata({ data: "json, name=plan_webinar", elemType: AccountPlanCreate201ApplicationJsonPlanWebinar })
  planWebinar?: AccountPlanCreate201ApplicationJsonPlanWebinar[];

  @SpeakeasyMetadata({ data: "json, name=plan_zoom_rooms" })
  planZoomRooms?: AccountPlanCreate201ApplicationJsonPlanZoomRooms;
}


export class AccountPlanCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPlanCreatePathParams;

  @SpeakeasyMetadata()
  request: AccountPlanCreateRequests;
}


export class AccountPlanCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountPlanCreate200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  accountPlanCreate201ApplicationJSONObject?: AccountPlanCreate201ApplicationJson;
}
