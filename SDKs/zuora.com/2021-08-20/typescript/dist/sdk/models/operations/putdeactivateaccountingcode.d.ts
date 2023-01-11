import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDeactivateAccountingCodePathParams extends SpeakeasyBase {
    acId: string;
}
export declare class PutDeactivateAccountingCodeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutDeactivateAccountingCodeRequest extends SpeakeasyBase {
    pathParams: PutDeactivateAccountingCodePathParams;
    headers: PutDeactivateAccountingCodeHeaders;
}
export declare class PutDeactivateAccountingCodeResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
