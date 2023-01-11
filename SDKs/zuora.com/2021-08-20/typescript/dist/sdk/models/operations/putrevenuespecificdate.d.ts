import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRevenueSpecificDatePathParams extends SpeakeasyBase {
    rsNumber: string;
}
export declare class PutRevenueSpecificDateHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutRevenueSpecificDateRequest extends SpeakeasyBase {
    pathParams: PutRevenueSpecificDatePathParams;
    headers: PutRevenueSpecificDateHeaders;
    request: Record<string, any>;
}
export declare class PutRevenueSpecificDateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putRevenueScheduleResponseType?: shared.PutRevenueScheduleResponseType;
    statusCode: number;
}
