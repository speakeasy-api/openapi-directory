import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutActivateAccountingCodePathParams extends SpeakeasyBase {
    acId: string;
}
export declare class PutActivateAccountingCodeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutActivateAccountingCodeRequest extends SpeakeasyBase {
    pathParams: PutActivateAccountingCodePathParams;
    headers: PutActivateAccountingCodeHeaders;
}
export declare class PutActivateAccountingCodeResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
