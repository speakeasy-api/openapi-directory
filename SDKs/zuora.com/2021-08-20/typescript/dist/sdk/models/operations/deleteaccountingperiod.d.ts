import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAccountingPeriodPathParams extends SpeakeasyBase {
    apId: string;
}
export declare class DeleteAccountingPeriodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteAccountingPeriodRequest extends SpeakeasyBase {
    pathParams: DeleteAccountingPeriodPathParams;
    headers: DeleteAccountingPeriodHeaders;
}
export declare class DeleteAccountingPeriodResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
