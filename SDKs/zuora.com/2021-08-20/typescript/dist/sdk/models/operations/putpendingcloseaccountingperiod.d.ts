import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPendingCloseAccountingPeriodPathParams extends SpeakeasyBase {
    apId: string;
}
export declare class PutPendingCloseAccountingPeriodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutPendingCloseAccountingPeriodRequest extends SpeakeasyBase {
    pathParams: PutPendingCloseAccountingPeriodPathParams;
    headers: PutPendingCloseAccountingPeriodHeaders;
}
export declare class PutPendingCloseAccountingPeriodResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
