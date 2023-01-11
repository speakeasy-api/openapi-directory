import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutOrderTriggerDatesPathParams extends SpeakeasyBase {
    orderNumber: string;
}
export declare class PutOrderTriggerDatesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutOrderTriggerDatesRequest extends SpeakeasyBase {
    pathParams: PutOrderTriggerDatesPathParams;
    headers: PutOrderTriggerDatesHeaders;
    request: shared.PutOrderActionTriggerDatesRequestType;
}
export declare class PutOrderTriggerDatesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putOrderTriggerDatesResponseType?: shared.PutOrderTriggerDatesResponseType;
    statusCode: number;
}
