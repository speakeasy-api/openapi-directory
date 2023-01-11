import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRevenueAcrossApPathParams extends SpeakeasyBase {
    rsNumber: string;
}
export declare class PutRevenueAcrossApHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutRevenueAcrossApRequest extends SpeakeasyBase {
    pathParams: PutRevenueAcrossApPathParams;
    headers: PutRevenueAcrossApHeaders;
    request: Record<string, any>;
}
export declare class PutRevenueAcrossApResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putRevenueScheduleResponseType?: shared.PutRevenueScheduleResponseType;
    statusCode: number;
}
