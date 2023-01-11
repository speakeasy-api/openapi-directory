import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCloseAccountingPeriodPathParams extends SpeakeasyBase {
    apId: string;
}
export declare class PutCloseAccountingPeriodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutCloseAccountingPeriodRequest extends SpeakeasyBase {
    pathParams: PutCloseAccountingPeriodPathParams;
    headers: PutCloseAccountingPeriodHeaders;
}
export declare class PutCloseAccountingPeriodResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
