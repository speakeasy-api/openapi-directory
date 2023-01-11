import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRSforSubscChargePathParams extends SpeakeasyBase {
    chargeKey: string;
}
export declare class PostRSforSubscChargeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRSforSubscChargeRequest extends SpeakeasyBase {
    pathParams: PostRSforSubscChargePathParams;
    headers: PostRSforSubscChargeHeaders;
    request: Record<string, any>;
}
export declare class PostRSforSubscChargeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRevenueScheduleByChargeResponseType?: shared.PostRevenueScheduleByChargeResponseType;
    statusCode: number;
}
