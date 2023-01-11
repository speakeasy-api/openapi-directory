import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountPathParams extends SpeakeasyBase {
    accountKey: string;
}
export declare class GetAccountHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAccountRequest extends SpeakeasyBase {
    pathParams: GetAccountPathParams;
    headers: GetAccountHeaders;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    contentType: string;
    getAccountType?: shared.GetAccountType;
    headers: Record<string, string[]>;
    statusCode: number;
}
