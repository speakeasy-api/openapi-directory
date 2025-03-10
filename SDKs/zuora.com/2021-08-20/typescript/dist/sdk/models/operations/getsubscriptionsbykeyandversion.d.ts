import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETSubscriptionsByKeyAndVersionRequest extends SpeakeasyBase {
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     *
     * @remarks
     * The segmented rate plan charges. When an amendment results in a change to a charge, Zuora creates a segmented rate plan charge. Use this field to track segment charges.
     *
     * Possible values are:
     *
     *  * __last-segment__: (Default) The last rate plan charge on the subscription. The last rate plan charge is the last one in the order of time on the subscription rather than the most recent changed charge on the subscription.
     *  * __current-segment__: The segmented charge that is active on today’s date (effectiveStartDate <= today’s date < effectiveEndDate).
     *
     *  * __all-segments__: All the segmented charges. The `chargeSegments` field is returned in the response. The `chargeSegments` field contains an array of the charge information for all the charge segments.
     *
     *  * __specific-segment&as-of-date=date__: The segmented charge that is active on a date you specified (effectiveStartDate <= specific date < effectiveEndDate). The format of the date is yyyy-mm-dd.
     *
     */
    chargeDetail?: string;
    /**
     * Subscription number. For example, A-S00000135.
     *
     * @remarks
     *
     */
    subscriptionKey: string;
    /**
     * Subscription version. For example, 1.
     *
     * @remarks
     *
     */
    version: string;
}
export declare class GETSubscriptionsByKeyAndVersionResponse extends SpeakeasyBase {
    contentType: string;
    getSubscriptionTypeWithSuccess?: shared.GETSubscriptionTypeWithSuccess;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
