import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountPlansRequest extends SpeakeasyBase {
    /**
     * The account ID.
     */
    accountId: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationXMLPlanAudioStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type.</a>
 */
export declare class AccountPlans200ApplicationXMLPlanAudio extends SpeakeasyBase {
    /**
     * Call-out countries: multiple values should separated by  commas. For a list of allowed values, refer to the "ID" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-call-out-countries) table.
     */
    calloutCountries?: string;
    /**
     * Dedicated dial-In numbers.
     */
    ddiNumbers?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Premium countries: multiple values should be separated by commas. For a list of allowed values, refer to the "ID" field in the [Premium Countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#premium-countries) table.
     */
    premiumCountries?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationXMLPlanAudioStatusEnum;
    /**
     * Toll-free countries: multiple values should separated by a comma. For a list of allowed values, refer to the "ID" field in the [Toll Free Countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#toll-free-countries) table.
     */
    tollfreeCountries?: string;
    /**
     * Additional audio conferencing <a href="/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationXMLPlanBaseStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationXMLPlanBase extends SpeakeasyBase {
    /**
     * Account base plan number of hosts. For a Pro Plan please select a value between 1 and 9. For a Business Plan please select a value between 10 and 49. For a Education Plan please select a value between 20 and 149. For a Free Trial Plan please select a value between 1 and 9999.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationXMLPlanBaseStatusEnum;
    /**
     * Account base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationXMLPlanLargeMeetingStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Account plan object.
 */
export declare class AccountPlans200ApplicationXMLPlanLargeMeeting extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationXMLPlanLargeMeetingStatusEnum;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationXMLPhonePlanPlanBaseStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Additional phone base plans.
 */
export declare class AccountPlans200ApplicationXMLPhonePlanPlanBase extends SpeakeasyBase {
    /**
     * Call-out countries: multiple values should separated by  commas. For a list of allowed values, refer to the "ID" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-call-out-countries) table.
     */
    calloutCountries?: string;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationXMLPhonePlanPlanBaseStatusEnum;
    /**
     * Additional phone base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationXMLPhonePlanPlanCallingStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationXMLPhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationXMLPhonePlanPlanCallingStatusEnum;
    /**
     * Additional phone calling <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationXMLPhonePlanPlanNumberStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationXMLPhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationXMLPhonePlanPlanNumberStatusEnum;
    /**
     * Additional phone number <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
/**
 * Phone Plan Object
 */
export declare class AccountPlans200ApplicationXMLPhonePlan extends SpeakeasyBase {
    /**
     * Additional phone base plans.
     */
    planBase?: AccountPlans200ApplicationXMLPhonePlanPlanBase;
    /**
     * Additional phone calling plans.
     */
    planCalling?: AccountPlans200ApplicationXMLPhonePlanPlanCalling[];
    /**
     * Additional phone number plans.
     */
    planNumber?: AccountPlans200ApplicationXMLPhonePlanPlanNumber[];
}
/**
 * Status of additional Cloud Recording plan.
 */
export declare enum AccountPlans200ApplicationXMLPlanRecordingStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled"
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationXMLPlanRoomConnectorStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationXMLPlanRoomConnector extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationXMLPlanRoomConnectorStatusEnum;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationXMLPlanWebinarStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Account plan object.
 */
export declare class AccountPlans200ApplicationXMLPlanWebinar extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationXMLPlanWebinarStatusEnum;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationXMLPlanZoomRoomsStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationXMLPlanZoomRooms extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationXMLPlanZoomRoomsStatusEnum;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * **HTTP Status Code:**`200`<br>
 *
 * @remarks
 * Account's plans returned.
 *
 */
export declare class AccountPlans200ApplicationXML extends SpeakeasyBase {
    /**
     * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type.</a>
     */
    planAudio?: AccountPlans200ApplicationXMLPlanAudio;
    planBase?: AccountPlans200ApplicationXMLPlanBase;
    planLargeMeeting?: AccountPlans200ApplicationXMLPlanLargeMeeting[];
    /**
     * Phone Plan Object
     */
    planPhone?: AccountPlans200ApplicationXMLPhonePlan;
    /**
     * Additional Cloud Recording plan.
     */
    planRecording?: string;
    /**
     * Next invoice date of Additional Cloud Recording plan.
     */
    planRecordingNextInvoiceDate?: string;
    /**
     * Plan start date of Additional Cloud Recording plan.
     */
    planRecordingServiceEffectiveDate?: string;
    /**
     * Status of additional Cloud Recording plan.
     */
    planRecordingStatus?: AccountPlans200ApplicationXMLPlanRecordingStatusEnum;
    planRoomConnector?: AccountPlans200ApplicationXMLPlanRoomConnector;
    planWebinar?: AccountPlans200ApplicationXMLPlanWebinar[];
    planZoomRooms?: AccountPlans200ApplicationXMLPlanZoomRooms;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationJSONPlanAudioStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type.</a>
 */
export declare class AccountPlans200ApplicationJSONPlanAudio extends SpeakeasyBase {
    /**
     * Call-out countries: multiple values should separated by  commas. For a list of allowed values, refer to the "ID" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-call-out-countries) table.
     */
    calloutCountries?: string;
    /**
     * Dedicated dial-In numbers.
     */
    ddiNumbers?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Premium countries: multiple values should be separated by commas. For a list of allowed values, refer to the "ID" field in the [Premium Countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#premium-countries) table.
     */
    premiumCountries?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationJSONPlanAudioStatusEnum;
    /**
     * Toll-free countries: multiple values should separated by a comma. For a list of allowed values, refer to the "ID" field in the [Toll Free Countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#toll-free-countries) table.
     */
    tollfreeCountries?: string;
    /**
     * Additional audio conferencing <a href="/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationJSONPlanBaseStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJSONPlanBase extends SpeakeasyBase {
    /**
     * Account base plan number of hosts. For a Pro Plan please select a value between 1 and 9. For a Business Plan please select a value between 10 and 49. For a Education Plan please select a value between 20 and 149. For a Free Trial Plan please select a value between 1 and 9999.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationJSONPlanBaseStatusEnum;
    /**
     * Account base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Account plan object.
 */
export declare class AccountPlans200ApplicationJSONPlanLargeMeeting extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnum;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Additional phone base plans.
 */
export declare class AccountPlans200ApplicationJSONPhonePlanPlanBase extends SpeakeasyBase {
    /**
     * Call-out countries: multiple values should separated by  commas. For a list of allowed values, refer to the "ID" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-call-out-countries) table.
     */
    calloutCountries?: string;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnum;
    /**
     * Additional phone base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJSONPhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnum;
    /**
     * Additional phone calling <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJSONPhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnum;
    /**
     * Additional phone number <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
/**
 * Phone Plan Object
 */
export declare class AccountPlans200ApplicationJSONPhonePlan extends SpeakeasyBase {
    /**
     * Additional phone base plans.
     */
    planBase?: AccountPlans200ApplicationJSONPhonePlanPlanBase;
    /**
     * Additional phone calling plans.
     */
    planCalling?: AccountPlans200ApplicationJSONPhonePlanPlanCalling[];
    /**
     * Additional phone number plans.
     */
    planNumber?: AccountPlans200ApplicationJSONPhonePlanPlanNumber[];
}
/**
 * Status of additional Cloud Recording plan.
 */
export declare enum AccountPlans200ApplicationJSONPlanRecordingStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled"
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJSONPlanRoomConnector extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnum;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationJSONPlanWebinarStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
/**
 * Account plan object.
 */
export declare class AccountPlans200ApplicationJSONPlanWebinar extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationJSONPlanWebinarStatusEnum;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * Status of the plan.
 */
export declare enum AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnum {
    Active = "active",
    Cancel = "cancel",
    Expired = "expired"
}
export declare class AccountPlans200ApplicationJSONPlanZoomRooms extends SpeakeasyBase {
    /**
     * Account plan number of hosts.
     */
    hosts?: number;
    /**
     * Next invoice date for the plan.
     */
    nextInvoiceDate?: string;
    /**
     * Date at which the plan became effective on the account.
     */
    serviceEffectiveDate?: string;
    /**
     * Status of the plan.
     */
    status?: AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnum;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type?: string;
}
/**
 * **HTTP Status Code:**`200`<br>
 *
 * @remarks
 * Account's plans returned.
 *
 */
export declare class AccountPlans200ApplicationJSON extends SpeakeasyBase {
    /**
     * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type.</a>
     */
    planAudio?: AccountPlans200ApplicationJSONPlanAudio;
    planBase?: AccountPlans200ApplicationJSONPlanBase;
    planLargeMeeting?: AccountPlans200ApplicationJSONPlanLargeMeeting[];
    /**
     * Phone Plan Object
     */
    planPhone?: AccountPlans200ApplicationJSONPhonePlan;
    /**
     * Additional Cloud Recording plan.
     */
    planRecording?: string;
    /**
     * Next invoice date of Additional Cloud Recording plan.
     */
    planRecordingNextInvoiceDate?: string;
    /**
     * Plan start date of Additional Cloud Recording plan.
     */
    planRecordingServiceEffectiveDate?: string;
    /**
     * Status of additional Cloud Recording plan.
     */
    planRecordingStatus?: AccountPlans200ApplicationJSONPlanRecordingStatusEnum;
    planRoomConnector?: AccountPlans200ApplicationJSONPlanRoomConnector;
    planWebinar?: AccountPlans200ApplicationJSONPlanWebinar[];
    planZoomRooms?: AccountPlans200ApplicationJSONPlanZoomRooms;
}
export declare class AccountPlansResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:**`200`<br>
     *
     * @remarks
     * Account's plans returned.
     *
     */
    accountPlans200ApplicationJSONObject?: AccountPlans200ApplicationJSON;
}
