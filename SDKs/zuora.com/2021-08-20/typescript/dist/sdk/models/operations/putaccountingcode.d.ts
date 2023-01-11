import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAccountingCodePathParams extends SpeakeasyBase {
    acId: string;
}
export declare class PutAccountingCodeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutAccountingCodeRequest extends SpeakeasyBase {
    pathParams: PutAccountingCodePathParams;
    headers: PutAccountingCodeHeaders;
    request: Record<string, any>;
}
export declare class PutAccountingCodeResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
