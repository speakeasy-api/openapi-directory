import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAmendmentsBySubscriptionIdPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetAmendmentsBySubscriptionIdHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAmendmentsBySubscriptionIdRequest extends SpeakeasyBase {
    pathParams: GetAmendmentsBySubscriptionIdPathParams;
    headers: GetAmendmentsBySubscriptionIdHeaders;
}
export declare class GetAmendmentsBySubscriptionIdResponse extends SpeakeasyBase {
    contentType: string;
    getAmendmentType?: shared.GetAmendmentType;
    headers: Record<string, string[]>;
    statusCode: number;
}
