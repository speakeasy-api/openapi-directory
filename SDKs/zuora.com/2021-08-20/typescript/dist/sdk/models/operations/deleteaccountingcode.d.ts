import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAccountingCodePathParams extends SpeakeasyBase {
    acId: string;
}
export declare class DeleteAccountingCodeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteAccountingCodeRequest extends SpeakeasyBase {
    pathParams: DeleteAccountingCodePathParams;
    headers: DeleteAccountingCodeHeaders;
}
export declare class DeleteAccountingCodeResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
