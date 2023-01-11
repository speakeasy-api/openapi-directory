import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutReopenAccountingPeriodPathParams extends SpeakeasyBase {
    apId: string;
}
export declare class PutReopenAccountingPeriodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutReopenAccountingPeriodRequest extends SpeakeasyBase {
    pathParams: PutReopenAccountingPeriodPathParams;
    headers: PutReopenAccountingPeriodHeaders;
}
export declare class PutReopenAccountingPeriodResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
