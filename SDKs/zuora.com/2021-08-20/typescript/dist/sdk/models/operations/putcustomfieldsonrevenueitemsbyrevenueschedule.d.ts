import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams extends SpeakeasyBase {
    rsNumber: string;
}
export declare class PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutCustomFieldsonRevenueItemsByRevenueScheduleRequest extends SpeakeasyBase {
    pathParams: PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams;
    headers: PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders;
    request: shared.PutScheduleRiDetailType;
}
export declare class PutCustomFieldsonRevenueItemsByRevenueScheduleResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
