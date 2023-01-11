import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRevenueByRecognitionStartandEndDatesPathParams extends SpeakeasyBase {
    rsNumber: string;
}
export declare class PutRevenueByRecognitionStartandEndDatesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutRevenueByRecognitionStartandEndDatesRequest extends SpeakeasyBase {
    pathParams: PutRevenueByRecognitionStartandEndDatesPathParams;
    headers: PutRevenueByRecognitionStartandEndDatesHeaders;
    request: Record<string, any>;
}
export declare class PutRevenueByRecognitionStartandEndDatesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putRevenueScheduleResponseType?: shared.PutRevenueScheduleResponseType;
    statusCode: number;
}
