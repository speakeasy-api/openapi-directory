import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsByAccountPathParams extends SpeakeasyBase {
    accountKey: string;
}
export declare class GetSubscriptionsByAccountQueryParams extends SpeakeasyBase {
    chargeDetail?: string;
    pageSize?: number;
}
export declare class GetSubscriptionsByAccountHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetSubscriptionsByAccountRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsByAccountPathParams;
    queryParams: GetSubscriptionsByAccountQueryParams;
    headers: GetSubscriptionsByAccountHeaders;
}
export declare class GetSubscriptionsByAccountResponse extends SpeakeasyBase {
    contentType: string;
    getSubscriptionWrapper?: shared.GetSubscriptionWrapper;
    headers: Record<string, string[]>;
    statusCode: number;
}
