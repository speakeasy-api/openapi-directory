import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams extends SpeakeasyBase {
    subscriptionNumber: string;
    version: string;
}
export declare class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest extends SpeakeasyBase {
    pathParams: PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams;
    headers: PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionHeaders;
    request: shared.PutSubscriptionPatchRequestType;
}
export declare class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
