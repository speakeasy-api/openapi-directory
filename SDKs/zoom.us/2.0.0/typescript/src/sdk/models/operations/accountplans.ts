import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountPlansPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum AccountPlans200ApplicationJsonPlanAudioStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}


// AccountPlans200ApplicationJsonPlanAudio
/** 
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type.</a>
**/
export class AccountPlans200ApplicationJsonPlanAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=ddi_numbers" })
  ddiNumbers?: number;

  @SpeakeasyMetadata({ data: "json, name=next_invoice_date" })
  nextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=premium_countries" })
  premiumCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=service_effective_date" })
  serviceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountPlans200ApplicationJsonPlanAudioStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tollfree_countries" })
  tollfreeCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum AccountPlans200ApplicationJsonPlanBaseStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}


export class AccountPlans200ApplicationJsonPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=next_invoice_date" })
  nextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=service_effective_date" })
  serviceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountPlans200ApplicationJsonPlanBaseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}


// AccountPlans200ApplicationJsonPlanLargeMeeting
/** 
 * Account plan object.
**/
export class AccountPlans200ApplicationJsonPlanLargeMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=next_invoice_date" })
  nextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=service_effective_date" })
  serviceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}


// AccountPlans200ApplicationJsonPhonePlanPlanBase
/** 
 * Additional phone base plans.
**/
export class AccountPlans200ApplicationJsonPhonePlanPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=next_invoice_date" })
  nextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=service_effective_date" })
  serviceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}


export class AccountPlans200ApplicationJsonPhonePlanPlanCalling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=next_invoice_date" })
  nextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=service_effective_date" })
  serviceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}


export class AccountPlans200ApplicationJsonPhonePlanPlanNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=next_invoice_date" })
  nextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=service_effective_date" })
  serviceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlans200ApplicationJsonPhonePlan
/** 
 * Phone Plan Object
**/
export class AccountPlans200ApplicationJsonPhonePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_base" })
  planBase?: AccountPlans200ApplicationJsonPhonePlanPlanBase;

  @SpeakeasyMetadata({ data: "json, name=plan_calling", elemType: AccountPlans200ApplicationJsonPhonePlanPlanCalling })
  planCalling?: AccountPlans200ApplicationJsonPhonePlanPlanCalling[];

  @SpeakeasyMetadata({ data: "json, name=plan_number", elemType: AccountPlans200ApplicationJsonPhonePlanPlanNumber })
  planNumber?: AccountPlans200ApplicationJsonPhonePlanPlanNumber[];
}

export enum AccountPlans200ApplicationJsonPlanRecordingStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled"
}

export enum AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}


export class AccountPlans200ApplicationJsonPlanRoomConnector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=next_invoice_date" })
  nextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=service_effective_date" })
  serviceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum AccountPlans200ApplicationJsonPlanWebinarStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}


// AccountPlans200ApplicationJsonPlanWebinar
/** 
 * Account plan object.
**/
export class AccountPlans200ApplicationJsonPlanWebinar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=next_invoice_date" })
  nextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=service_effective_date" })
  serviceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountPlans200ApplicationJsonPlanWebinarStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}


export class AccountPlans200ApplicationJsonPlanZoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=next_invoice_date" })
  nextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=service_effective_date" })
  serviceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlans200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_audio" })
  planAudio?: AccountPlans200ApplicationJsonPlanAudio;

  @SpeakeasyMetadata({ data: "json, name=plan_base" })
  planBase?: AccountPlans200ApplicationJsonPlanBase;

  @SpeakeasyMetadata({ data: "json, name=plan_large_meeting", elemType: AccountPlans200ApplicationJsonPlanLargeMeeting })
  planLargeMeeting?: AccountPlans200ApplicationJsonPlanLargeMeeting[];

  @SpeakeasyMetadata({ data: "json, name=plan_phone" })
  planPhone?: AccountPlans200ApplicationJsonPhonePlan;

  @SpeakeasyMetadata({ data: "json, name=plan_recording" })
  planRecording?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_recording_next_invoice_date" })
  planRecordingNextInvoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_recording_service_effective_date" })
  planRecordingServiceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_recording_status" })
  planRecordingStatus?: AccountPlans200ApplicationJsonPlanRecordingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=plan_room_connector" })
  planRoomConnector?: AccountPlans200ApplicationJsonPlanRoomConnector;

  @SpeakeasyMetadata({ data: "json, name=plan_webinar", elemType: AccountPlans200ApplicationJsonPlanWebinar })
  planWebinar?: AccountPlans200ApplicationJsonPlanWebinar[];

  @SpeakeasyMetadata({ data: "json, name=plan_zoom_rooms" })
  planZoomRooms?: AccountPlans200ApplicationJsonPlanZoomRooms;
}


export class AccountPlansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPlansPathParams;
}


export class AccountPlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountPlans200ApplicationJSONObject?: AccountPlans200ApplicationJson;
}
