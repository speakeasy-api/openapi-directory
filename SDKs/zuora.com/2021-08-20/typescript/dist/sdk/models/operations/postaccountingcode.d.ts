import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountingCodeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostAccountingCodeRequest extends SpeakeasyBase {
    headers: PostAccountingCodeHeaders;
    request: Record<string, any>;
}
export declare class PostAccountingCodeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postAccountingCodeResponseType?: shared.PostAccountingCodeResponseType;
    statusCode: number;
}
