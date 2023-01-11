import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomFieldsonRevenueItemsByRevenueEventPathParams extends SpeakeasyBase {
    eventNumber: string;
}
export declare class PutCustomFieldsonRevenueItemsByRevenueEventHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutCustomFieldsonRevenueItemsByRevenueEventRequest extends SpeakeasyBase {
    pathParams: PutCustomFieldsonRevenueItemsByRevenueEventPathParams;
    headers: PutCustomFieldsonRevenueItemsByRevenueEventHeaders;
    request: shared.PutEventRiDetailType;
}
export declare class PutCustomFieldsonRevenueItemsByRevenueEventResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
