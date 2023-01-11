import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllAccountingCodesQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetAllAccountingCodesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAllAccountingCodesRequest extends SpeakeasyBase {
    queryParams: GetAllAccountingCodesQueryParams;
    headers: GetAllAccountingCodesHeaders;
}
export declare class GetAllAccountingCodesResponse extends SpeakeasyBase {
    contentType: string;
    getAccountingCodesType?: shared.GetAccountingCodesType;
    headers: Record<string, string[]>;
    statusCode: number;
}
