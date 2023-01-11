import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRSforSubscChargePathParams extends SpeakeasyBase {
    chargeKey: string;
}
export declare class GetRSforSubscChargeQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetRSforSubscChargeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRSforSubscChargeRequest extends SpeakeasyBase {
    pathParams: GetRSforSubscChargePathParams;
    queryParams: GetRSforSubscChargeQueryParams;
    headers: GetRSforSubscChargeHeaders;
}
export declare class GetRSforSubscChargeResponse extends SpeakeasyBase {
    contentType: string;
    getrsDetailsByChargeType?: shared.GetrsDetailsByChargeType;
    headers: Record<string, string[]>;
    statusCode: number;
}
