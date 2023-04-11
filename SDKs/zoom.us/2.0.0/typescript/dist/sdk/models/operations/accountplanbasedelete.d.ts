import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The reason for the cancellation of plan. Reason options:<br>`1` - I am no longer working remote.<br>`2` - I had challenges getting the support I needed.<br>`3` - Features in the Basic Free Plan are sufficient.<br>`4` - The expense is too high.<br>`5` - I purchased the wrong product.<br> `6` - Paid purchase not needed right now, will repurchase in the future.
 */
export declare enum AccountPlanBaseDeleteApplicationJSONReasonEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6"
}
export declare class AccountPlanBaseDeleteApplicationJSON extends SpeakeasyBase {
    /**
     * The action that needs to be taken for this sub account. Value must be set to "cancel".
     */
    action: string;
    /**
     * Additional comments about the cancellation decision.
     */
    comment?: string;
    /**
     * The reason for the cancellation of plan. Reason options:<br>`1` - I am no longer working remote.<br>`2` - I had challenges getting the support I needed.<br>`3` - Features in the Basic Free Plan are sufficient.<br>`4` - The expense is too high.<br>`5` - I purchased the wrong product.<br> `6` - Paid purchase not needed right now, will repurchase in the future.
     */
    reason?: AccountPlanBaseDeleteApplicationJSONReasonEnum;
}
export declare class AccountPlanBaseDeleteRequest extends SpeakeasyBase {
    requestBody?: AccountPlanBaseDeleteApplicationJSON;
    accountId: string;
}
export declare class AccountPlanBaseDeleteResponse extends SpeakeasyBase {
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
    accountPlanBaseDelete204ApplicationJSONObject?: Record<string, any>;
}
