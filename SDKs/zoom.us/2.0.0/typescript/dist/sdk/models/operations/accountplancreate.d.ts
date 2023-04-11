import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Billing Contact object.
 */
export declare class AccountPlanCreateApplicationJSONContact extends SpeakeasyBase {
    /**
     * Billing Contact's address.
     */
    address: string;
    /**
     * Billing Contact's apartment/suite.
     */
    apt?: string;
    /**
     * Billing Contact's city.
     */
    city: string;
    /**
     * Billing Contact's Country [ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) in abbreviated format.
     */
    country: string;
    /**
     * Billing Contact's email address.
     */
    email: string;
    /**
     * Billing Contact's first name.
     */
    firstName: string;
    /**
     * Billing Contact's last name.
     */
    lastName: string;
    /**
     * Billing Contact's phone number.
     */
    phoneNumber: string;
    /**
     * Billing Contact's state.
     */
    state: string;
    /**
     * Billing Contact's zip/postal code.
     */
    zip: string;
}
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
 */
export declare class AccountPlanCreateApplicationJSONPlanAudio extends SpeakeasyBase {
    /**
     * Call-out countries: multiple values should separated by  commas. For a list of allowed values, refer to the "ID" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-call-out-countries) table.
     */
    calloutCountries?: string;
    /**
     * Dedicated dial-In numbers.
     */
    ddiNumbers?: number;
    /**
     * Premium countries: multiple values should be separated by commas. For a list of allowed values, refer to the "ID" field in the [Premium Countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#premium-countries) table.
     */
    premiumCountries?: string;
    /**
     * Toll-free countries: multiple values should separated by a comma. For a list of allowed values, refer to the "ID" field in the [Toll Free Countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#toll-free-countries) table.
     */
    tollfreeCountries?: string;
    /**
     * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
     */
    type?: string;
}
/**
 * Account base plan object.
 */
export declare class AccountPlanCreateApplicationJSONPlanBase extends SpeakeasyBase {
    /**
     * Account base plan number of hosts. For a Pro Plan please select a value between 1 and 9. For a Business Plan please select a value between 10 and 49. For a Education Plan please select a value between 20 and 149. For a Free Trial Plan please select a value between 1 and 9999.
     */
    hosts: number;
    /**
     * Account base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type: string;
}
/**
 * Account plan object.
 */
export declare class AccountPlanCreateApplicationJSONPlanLargeMeeting extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Additional phone base plans.
 */
export declare class AccountPlanCreateApplicationJSONPhonePlanPlanBase extends SpeakeasyBase {
    /**
     * Call-out countries: multiple values should separated by  commas. For a list of allowed values, refer to the "ID" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-call-out-countries) table.
     */
    calloutCountries?: string;
    /**
     * Additional phone base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
export declare class AccountPlanCreateApplicationJSONPhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    /**
     * Additional phone calling <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
export declare class AccountPlanCreateApplicationJSONPhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    /**
     * Additional phone number <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
/**
 * Phone Plan Object
 */
export declare class AccountPlanCreateApplicationJSONPhonePlan extends SpeakeasyBase {
    /**
     * Additional phone base plans.
     */
    planBase?: AccountPlanCreateApplicationJSONPhonePlanPlanBase;
    /**
     * Additional phone calling plans.
     */
    planCalling?: AccountPlanCreateApplicationJSONPhonePlanPlanCalling[];
    /**
     * Additional phone number plans.
     */
    planNumber?: AccountPlanCreateApplicationJSONPhonePlanPlanNumber[];
}
/**
 * Account plan object.
 */
export declare class AccountPlanCreateApplicationJSONPlanRoomConnector extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Account plan object.
 */
export declare class AccountPlanCreateApplicationJSONPlanWebinar extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Account plan object.
 */
export declare class AccountPlanCreateApplicationJSONPlanZoomRooms extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Account Plans object.
 */
export declare class AccountPlanCreateApplicationJSON extends SpeakeasyBase {
    /**
     * Billing Contact object.
     */
    contact?: AccountPlanCreateApplicationJSONContact;
    /**
     * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
     */
    planAudio?: AccountPlanCreateApplicationJSONPlanAudio;
    /**
     * Account base plan object.
     */
    planBase: AccountPlanCreateApplicationJSONPlanBase;
    /**
     * Additional large meeting Plans.
     */
    planLargeMeeting?: AccountPlanCreateApplicationJSONPlanLargeMeeting[];
    /**
     * Phone Plan Object
     */
    planPhone?: AccountPlanCreateApplicationJSONPhonePlan;
    /**
     * Additional cloud recording plan.
     */
    planRecording?: string;
    /**
     * Account plan object.
     */
    planRoomConnector?: AccountPlanCreateApplicationJSONPlanRoomConnector;
    /**
     * Additional webinar plans.
     */
    planWebinar?: AccountPlanCreateApplicationJSONPlanWebinar[];
    /**
     * Account plan object.
     */
    planZoomRooms?: AccountPlanCreateApplicationJSONPlanZoomRooms;
}
export declare class AccountPlanCreateRequest extends SpeakeasyBase {
    requestBody: AccountPlanCreateApplicationJSON;
    /**
     * The account ID.
     */
    accountId: string;
}
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
 */
export declare class AccountPlanCreate201ApplicationJSONPlanAudio extends SpeakeasyBase {
    /**
     * Call-out countries: multiple values should separated by  commas. For a list of allowed values, refer to the "ID" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-call-out-countries) table.
     */
    calloutCountries?: string;
    /**
     * Dedicated dial-In numbers.
     */
    ddiNumbers?: number;
    /**
     * Premium countries: multiple values should be separated by commas. For a list of allowed values, refer to the "ID" field in the [Premium Countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#premium-countries) table.
     */
    premiumCountries?: string;
    /**
     * Toll-free countries: multiple values should separated by a comma. For a list of allowed values, refer to the "ID" field in the [Toll Free Countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#toll-free-countries) table.
     */
    tollfreeCountries?: string;
    /**
     * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
     */
    type?: string;
}
/**
 * Account base plan object.
 */
export declare class AccountPlanCreate201ApplicationJSONPlanBase extends SpeakeasyBase {
    /**
     * Account base plan number of hosts. For a Pro Plan please select a value between 1 and 9. For a Business Plan please select a value between 10 and 49. For a Education Plan please select a value between 20 and 149. For a Free Trial Plan please select a value between 1 and 9999.
     */
    hosts: number;
    /**
     * Account base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type: string;
}
/**
 * Account plan object.
 */
export declare class AccountPlanCreate201ApplicationJSONPlanLargeMeeting extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Additional phone base plans.
 */
export declare class AccountPlanCreate201ApplicationJSONPhonePlanPlanBase extends SpeakeasyBase {
    /**
     * Call-out countries: multiple values should separated by  commas. For a list of allowed values, refer to the "ID" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-call-out-countries) table.
     */
    calloutCountries?: string;
    /**
     * Additional phone base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
export declare class AccountPlanCreate201ApplicationJSONPhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    /**
     * Additional phone calling <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
export declare class AccountPlanCreate201ApplicationJSONPhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    /**
     * Additional phone number <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
/**
 * Phone Plan Object
 */
export declare class AccountPlanCreate201ApplicationJSONPhonePlan extends SpeakeasyBase {
    /**
     * Additional phone base plans.
     */
    planBase?: AccountPlanCreate201ApplicationJSONPhonePlanPlanBase;
    /**
     * Additional phone calling plans.
     */
    planCalling?: AccountPlanCreate201ApplicationJSONPhonePlanPlanCalling[];
    /**
     * Additional phone number plans.
     */
    planNumber?: AccountPlanCreate201ApplicationJSONPhonePlanPlanNumber[];
}
/**
 * Account plan object.
 */
export declare class AccountPlanCreate201ApplicationJSONPlanRoomConnector extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Account plan object.
 */
export declare class AccountPlanCreate201ApplicationJSONPlanWebinar extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Account plan object.
 */
export declare class AccountPlanCreate201ApplicationJSONPlanZoomRooms extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Account Plans object.
 */
export declare class AccountPlanCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
     */
    planAudio?: AccountPlanCreate201ApplicationJSONPlanAudio;
    /**
     * Account base plan object.
     */
    planBase: AccountPlanCreate201ApplicationJSONPlanBase;
    /**
     * Additional large meeting Plans.
     */
    planLargeMeeting?: AccountPlanCreate201ApplicationJSONPlanLargeMeeting[];
    /**
     * Phone Plan Object
     */
    planPhone?: AccountPlanCreate201ApplicationJSONPhonePlan;
    /**
     * Additional cloud recording plan.
     */
    planRecording?: string;
    /**
     * Account plan object.
     */
    planRoomConnector?: AccountPlanCreate201ApplicationJSONPlanRoomConnector;
    /**
     * Additional webinar plans.
     */
    planWebinar?: AccountPlanCreate201ApplicationJSONPlanWebinar[];
    /**
     * Account plan object.
     */
    planZoomRooms?: AccountPlanCreate201ApplicationJSONPlanZoomRooms;
}
export declare class AccountPlanCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Error Code:** `200`<br>
     *
     * @remarks
     * One zuora account only can have one active billing subscription.<br>
     * Can’t subscribe 25-participants pro plan for this sub-account.<br>
     * Can’t subscribe 50-participants pro plan for this sub-account.<br>
     * In order to take advantage of your account’s special pricing, please add Pro host licenses instead and they will be assigned to your Zoom Rooms automatically.
     */
    accountPlanCreate200ApplicationJSONAny?: any;
    /**
     * **HTTP Status Code:**`201`<br>
     *
     * @remarks
     * Account plans updated.
     */
    accountPlanCreate201ApplicationJSONObject?: AccountPlanCreate201ApplicationJSON;
}
