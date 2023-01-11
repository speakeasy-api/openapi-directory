import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostAccountRequest extends SpeakeasyBase {
    headers: PostAccountHeaders;
    request: Record<string, any>;
}
export declare class PostAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postAccountResponseType?: shared.PostAccountResponseType;
    statusCode: number;
}
