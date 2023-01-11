import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAccountPathParams extends SpeakeasyBase {
    accountKey: string;
}
export declare class PutAccountHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutAccountRequest extends SpeakeasyBase {
    pathParams: PutAccountPathParams;
    headers: PutAccountHeaders;
    request: Record<string, any>;
}
export declare class PutAccountResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
