import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountPlanCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * Billing Contact object.
**/
export declare class AccountPlanCreateApplicationJsonContact extends SpeakeasyBase {
    address: string;
    apt?: string;
    city: string;
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    state: string;
    zip: string;
}
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
export declare class AccountPlanCreateApplicationJsonPlanAudio extends SpeakeasyBase {
    calloutCountries?: string;
    ddiNumbers?: number;
    premiumCountries?: string;
    tollfreeCountries?: string;
    type?: string;
}
/**
 * Account base plan object.
**/
export declare class AccountPlanCreateApplicationJsonPlanBase extends SpeakeasyBase {
    hosts: number;
    type: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreateApplicationJsonPlanLargeMeeting extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Additional phone base plans.
**/
export declare class AccountPlanCreateApplicationJsonPhonePlanPlanBase extends SpeakeasyBase {
    calloutCountries?: string;
    type?: string;
}
export declare class AccountPlanCreateApplicationJsonPhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
export declare class AccountPlanCreateApplicationJsonPhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Phone Plan Object
**/
export declare class AccountPlanCreateApplicationJsonPhonePlan extends SpeakeasyBase {
    planBase?: AccountPlanCreateApplicationJsonPhonePlanPlanBase;
    planCalling?: AccountPlanCreateApplicationJsonPhonePlanPlanCalling[];
    planNumber?: AccountPlanCreateApplicationJsonPhonePlanPlanNumber[];
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreateApplicationJsonPlanRoomConnector extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreateApplicationJsonPlanWebinar extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreateApplicationJsonPlanZoomRooms extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Account Plans object.
**/
export declare class AccountPlanCreateApplicationJson extends SpeakeasyBase {
    contact?: AccountPlanCreateApplicationJsonContact;
    planAudio?: AccountPlanCreateApplicationJsonPlanAudio;
    planBase: AccountPlanCreateApplicationJsonPlanBase;
    planLargeMeeting?: AccountPlanCreateApplicationJsonPlanLargeMeeting[];
    planPhone?: AccountPlanCreateApplicationJsonPhonePlan;
    planRecording?: string;
    planRoomConnector?: AccountPlanCreateApplicationJsonPlanRoomConnector;
    planWebinar?: AccountPlanCreateApplicationJsonPlanWebinar[];
    planZoomRooms?: AccountPlanCreateApplicationJsonPlanZoomRooms;
}
/**
 * Billing Contact object.
**/
export declare class AccountPlanCreateMultipartFormDataContact extends SpeakeasyBase {
    address: string;
    apt?: string;
    city: string;
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    state: string;
    zip: string;
}
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
export declare class AccountPlanCreateMultipartFormDataPlanAudio extends SpeakeasyBase {
    calloutCountries?: string;
    ddiNumbers?: number;
    premiumCountries?: string;
    tollfreeCountries?: string;
    type?: string;
}
/**
 * Account base plan object.
**/
export declare class AccountPlanCreateMultipartFormDataPlanBase extends SpeakeasyBase {
    hosts: number;
    type: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreateMultipartFormDataPlanLargeMeeting extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Additional phone base plans.
**/
export declare class AccountPlanCreateMultipartFormDataPhonePlanPlanBase extends SpeakeasyBase {
    calloutCountries?: string;
    type?: string;
}
export declare class AccountPlanCreateMultipartFormDataPhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
export declare class AccountPlanCreateMultipartFormDataPhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Phone Plan Object
**/
export declare class AccountPlanCreateMultipartFormDataPhonePlan extends SpeakeasyBase {
    planBase?: AccountPlanCreateMultipartFormDataPhonePlanPlanBase;
    planCalling?: AccountPlanCreateMultipartFormDataPhonePlanPlanCalling[];
    planNumber?: AccountPlanCreateMultipartFormDataPhonePlanPlanNumber[];
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreateMultipartFormDataPlanRoomConnector extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreateMultipartFormDataPlanWebinar extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreateMultipartFormDataPlanZoomRooms extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Account Plans object.
**/
export declare class AccountPlanCreateMultipartFormData1 extends SpeakeasyBase {
    contact?: AccountPlanCreateMultipartFormDataContact;
    planAudio?: AccountPlanCreateMultipartFormDataPlanAudio;
    planBase: AccountPlanCreateMultipartFormDataPlanBase;
    planLargeMeeting?: AccountPlanCreateMultipartFormDataPlanLargeMeeting[];
    planPhone?: AccountPlanCreateMultipartFormDataPhonePlan;
    planRecording?: string;
    planRoomConnector?: AccountPlanCreateMultipartFormDataPlanRoomConnector;
    planWebinar?: AccountPlanCreateMultipartFormDataPlanWebinar[];
    planZoomRooms?: AccountPlanCreateMultipartFormDataPlanZoomRooms;
}
export declare class AccountPlanCreateRequests extends SpeakeasyBase {
    object?: AccountPlanCreateApplicationJson;
    object1?: AccountPlanCreateMultipartFormData1;
}
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
export declare class AccountPlanCreate201ApplicationJsonPlanAudio extends SpeakeasyBase {
    calloutCountries?: string;
    ddiNumbers?: number;
    premiumCountries?: string;
    tollfreeCountries?: string;
    type?: string;
}
/**
 * Account base plan object.
**/
export declare class AccountPlanCreate201ApplicationJsonPlanBase extends SpeakeasyBase {
    hosts: number;
    type: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreate201ApplicationJsonPlanLargeMeeting extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Additional phone base plans.
**/
export declare class AccountPlanCreate201ApplicationJsonPhonePlanPlanBase extends SpeakeasyBase {
    calloutCountries?: string;
    type?: string;
}
export declare class AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
export declare class AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Phone Plan Object
**/
export declare class AccountPlanCreate201ApplicationJsonPhonePlan extends SpeakeasyBase {
    planBase?: AccountPlanCreate201ApplicationJsonPhonePlanPlanBase;
    planCalling?: AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling[];
    planNumber?: AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber[];
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreate201ApplicationJsonPlanRoomConnector extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreate201ApplicationJsonPlanWebinar extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanCreate201ApplicationJsonPlanZoomRooms extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Account Plans object.
**/
export declare class AccountPlanCreate201ApplicationJson extends SpeakeasyBase {
    planAudio?: AccountPlanCreate201ApplicationJsonPlanAudio;
    planBase: AccountPlanCreate201ApplicationJsonPlanBase;
    planLargeMeeting?: AccountPlanCreate201ApplicationJsonPlanLargeMeeting[];
    planPhone?: AccountPlanCreate201ApplicationJsonPhonePlan;
    planRecording?: string;
    planRoomConnector?: AccountPlanCreate201ApplicationJsonPlanRoomConnector;
    planWebinar?: AccountPlanCreate201ApplicationJsonPlanWebinar[];
    planZoomRooms?: AccountPlanCreate201ApplicationJsonPlanZoomRooms;
}
export declare class AccountPlanCreateRequest extends SpeakeasyBase {
    pathParams: AccountPlanCreatePathParams;
    request: AccountPlanCreateRequests;
}
export declare class AccountPlanCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountPlanCreate200ApplicationJSONAny?: any;
    accountPlanCreate201ApplicationJSONObject?: AccountPlanCreate201ApplicationJson;
}
