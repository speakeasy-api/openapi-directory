import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccountingPeriodPathParams extends SpeakeasyBase {
    apId: string;
}
export declare class GetAccountingPeriodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAccountingPeriodRequest extends SpeakeasyBase {
    pathParams: GetAccountingPeriodPathParams;
    headers: GetAccountingPeriodHeaders;
}
export declare class GetAccountingPeriodResponse extends SpeakeasyBase {
    contentType: string;
    getAccountingPeriodType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
