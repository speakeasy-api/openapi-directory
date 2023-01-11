import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRevProAccountingCodesHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutRevProAccountingCodesRequest extends SpeakeasyBase {
    headers: PutRevProAccountingCodesHeaders;
    request: shared.RevproAccountingCodes;
}
export declare class PutRevProAccountingCodesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putRevproAccCodeResponse?: shared.PutRevproAccCodeResponse;
    statusCode: number;
}
