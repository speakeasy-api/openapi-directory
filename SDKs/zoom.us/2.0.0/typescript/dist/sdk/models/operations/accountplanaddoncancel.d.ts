import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountPlanAddonCancelSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The action that needs to be taken for this sub account. Value must be set to "cancel".
 */
export declare enum AccountPlanAddonCancelApplicationJSONActionEnum {
    Cancel = "cancel"
}
/**
 * The reason for the cancellation of plan. Reason options:<br>`1` - I am no longer working remote.<br>`2` - I had challenges getting the support I needed.<br>`3` - Features in the Basic Free Plan are sufficient.<br>`4` - The expense is too high.<br>`5` - I purchased the wrong product.<br> `6` - Paid purchase not needed right now, will repurchase in the future.
 */
export declare enum AccountPlanAddonCancelApplicationJSONReasonEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6"
}
/**
 * Account plan object
 */
export declare class AccountPlanAddonCancelApplicationJSON extends SpeakeasyBase {
    /**
     * The action that needs to be taken for this sub account. Value must be set to "cancel".
     */
    action?: AccountPlanAddonCancelApplicationJSONActionEnum;
    /**
     * Additional comments about the cancellation decision.
     */
    comment?: string;
    /**
     * The reason for the cancellation of plan. Reason options:<br>`1` - I am no longer working remote.<br>`2` - I had challenges getting the support I needed.<br>`3` - Features in the Basic Free Plan are sufficient.<br>`4` - The expense is too high.<br>`5` - I purchased the wrong product.<br> `6` - Paid purchase not needed right now, will repurchase in the future.
     */
    reason?: AccountPlanAddonCancelApplicationJSONReasonEnum;
    /**
     * Plan [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans).
     */
    type?: string;
}
export declare class AccountPlanAddonCancelRequest extends SpeakeasyBase {
    requestBody?: AccountPlanAddonCancelApplicationJSON;
    accountId: string;
}
export declare class AccountPlanAddonCancelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * Plan cancelled successfully.
     */
    accountPlanAddonCancel204ApplicationJSONAny?: any;
}
