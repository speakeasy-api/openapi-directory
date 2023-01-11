import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUpdateAccountingPeriodPathParams extends SpeakeasyBase {
    apId: string;
}
export declare class PutUpdateAccountingPeriodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdateAccountingPeriodRequest extends SpeakeasyBase {
    pathParams: PutUpdateAccountingPeriodPathParams;
    headers: PutUpdateAccountingPeriodHeaders;
    request: Record<string, any>;
}
export declare class PutUpdateAccountingPeriodResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
