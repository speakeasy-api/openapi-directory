import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUpdateSubscriptionCustomFieldsPathParams extends SpeakeasyBase {
    subscriptionNumber: string;
}
export declare class PutUpdateSubscriptionCustomFieldsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdateSubscriptionCustomFieldsRequest extends SpeakeasyBase {
    pathParams: PutUpdateSubscriptionCustomFieldsPathParams;
    headers: PutUpdateSubscriptionCustomFieldsHeaders;
    request: shared.PutSubscriptionPatchRequestType;
}
export declare class PutUpdateSubscriptionCustomFieldsResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
