import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountPlansPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum AccountPlans200ApplicationJsonPlanAudioStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type.</a>
**/
export declare class AccountPlans200ApplicationJsonPlanAudio extends SpeakeasyBase {
    calloutCountries?: string;
    ddiNumbers?: number;
    nextInvoiceDate?: string;
    premiumCountries?: string;
    serviceEffectiveDate?: string;
    status?: AccountPlans200ApplicationJsonPlanAudioStatusEnum;
    tollfreeCountries?: string;
    type?: string;
}
export declare enum AccountPlans200ApplicationJsonPlanBaseStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJsonPlanBase extends SpeakeasyBase {
    hosts?: number;
    nextInvoiceDate?: string;
    serviceEffectiveDate?: string;
    status?: AccountPlans200ApplicationJsonPlanBaseStatusEnum;
    type?: string;
}
export declare enum AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Account plan object.
**/
export declare class AccountPlans200ApplicationJsonPlanLargeMeeting extends SpeakeasyBase {
    hosts?: number;
    nextInvoiceDate?: string;
    serviceEffectiveDate?: string;
    status?: AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum;
    type?: string;
}
export declare enum AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Additional phone base plans.
**/
export declare class AccountPlans200ApplicationJsonPhonePlanPlanBase extends SpeakeasyBase {
    calloutCountries?: string;
    nextInvoiceDate?: string;
    serviceEffectiveDate?: string;
    status?: AccountPlans200ApplicationJsonPhonePlanPlanBaseStatusEnum;
    type?: string;
}
export declare enum AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJsonPhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    nextInvoiceDate?: string;
    serviceEffectiveDate?: string;
    status?: AccountPlans200ApplicationJsonPhonePlanPlanCallingStatusEnum;
    type?: string;
}
export declare enum AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJsonPhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    nextInvoiceDate?: string;
    serviceEffectiveDate?: string;
    status?: AccountPlans200ApplicationJsonPhonePlanPlanNumberStatusEnum;
    type?: string;
}
/**
 * Phone Plan Object
**/
export declare class AccountPlans200ApplicationJsonPhonePlan extends SpeakeasyBase {
    planBase?: AccountPlans200ApplicationJsonPhonePlanPlanBase;
    planCalling?: AccountPlans200ApplicationJsonPhonePlanPlanCalling[];
    planNumber?: AccountPlans200ApplicationJsonPhonePlanPlanNumber[];
}
export declare enum AccountPlans200ApplicationJsonPlanRecordingStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled"
}
export declare enum AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJsonPlanRoomConnector extends SpeakeasyBase {
    hosts?: number;
    nextInvoiceDate?: string;
    serviceEffectiveDate?: string;
    status?: AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum;
    type?: string;
}
export declare enum AccountPlans200ApplicationJsonPlanWebinarStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Account plan object.
**/
export declare class AccountPlans200ApplicationJsonPlanWebinar extends SpeakeasyBase {
    hosts?: number;
    nextInvoiceDate?: string;
    serviceEffectiveDate?: string;
    status?: AccountPlans200ApplicationJsonPlanWebinarStatusEnum;
    type?: string;
}
export declare enum AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJsonPlanZoomRooms extends SpeakeasyBase {
    hosts?: number;
    nextInvoiceDate?: string;
    serviceEffectiveDate?: string;
    status?: AccountPlans200ApplicationJsonPlanZoomRoomsStatusEnum;
    type?: string;
}
export declare class AccountPlans200ApplicationJson extends SpeakeasyBase {
    planAudio?: AccountPlans200ApplicationJsonPlanAudio;
    planBase?: AccountPlans200ApplicationJsonPlanBase;
    planLargeMeeting?: AccountPlans200ApplicationJsonPlanLargeMeeting[];
    planPhone?: AccountPlans200ApplicationJsonPhonePlan;
    planRecording?: string;
    planRecordingNextInvoiceDate?: string;
    planRecordingServiceEffectiveDate?: string;
    planRecordingStatus?: AccountPlans200ApplicationJsonPlanRecordingStatusEnum;
    planRoomConnector?: AccountPlans200ApplicationJsonPlanRoomConnector;
    planWebinar?: AccountPlans200ApplicationJsonPlanWebinar[];
    planZoomRooms?: AccountPlans200ApplicationJsonPlanZoomRooms;
}
export declare class AccountPlansRequest extends SpeakeasyBase {
    pathParams: AccountPlansPathParams;
}
export declare class AccountPlansResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountPlans200ApplicationJSONObject?: AccountPlans200ApplicationJson;
}
