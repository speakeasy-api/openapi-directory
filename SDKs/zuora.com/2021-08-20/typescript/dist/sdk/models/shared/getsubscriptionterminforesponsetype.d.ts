import { SpeakeasyBase } from "../../../internal/utils";
import { Term } from "./term";
export declare class GetSubscriptionTermInfoResponseTypeReasons extends SpeakeasyBase {
    /**
     * The error code of response.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The detail information of the error response
     *
     * @remarks
     *
     */
    message?: string;
}
export declare class GetSubscriptionTermInfoResponseType extends SpeakeasyBase {
    /**
     * The URL of the next page of terms.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    reasons?: GetSubscriptionTermInfoResponseTypeReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
    terms?: Term[];
}
