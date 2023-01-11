import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRefundPartsPathParams extends SpeakeasyBase {
    refundId: string;
}
export declare class GetRefundPartsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRefundPartsRequest extends SpeakeasyBase {
    pathParams: GetRefundPartsPathParams;
    headers: GetRefundPartsHeaders;
}
export declare class GetRefundPartsResponse extends SpeakeasyBase {
    contentType: string;
    getRefundPartCollectionType?: shared.GetRefundPartCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
