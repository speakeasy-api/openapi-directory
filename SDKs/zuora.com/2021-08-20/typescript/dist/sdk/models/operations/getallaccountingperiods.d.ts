import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllAccountingPeriodsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetAllAccountingPeriodsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAllAccountingPeriodsRequest extends SpeakeasyBase {
    queryParams: GetAllAccountingPeriodsQueryParams;
    headers: GetAllAccountingPeriodsHeaders;
}
export declare class GetAllAccountingPeriodsResponse extends SpeakeasyBase {
    contentType: string;
    getAccountingPeriodsType?: shared.GetAccountingPeriodsType;
    headers: Record<string, string[]>;
    statusCode: number;
}
