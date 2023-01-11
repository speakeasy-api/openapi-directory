import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccountingCodePathParams extends SpeakeasyBase {
    acId: string;
}
export declare class GetAccountingCodeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAccountingCodeRequest extends SpeakeasyBase {
    pathParams: GetAccountingCodePathParams;
    headers: GetAccountingCodeHeaders;
}
export declare class GetAccountingCodeResponse extends SpeakeasyBase {
    contentType: string;
    getAccountingCodeItemType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
