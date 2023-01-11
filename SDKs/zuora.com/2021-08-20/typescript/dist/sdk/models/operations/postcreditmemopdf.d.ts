import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreditMemoPdfPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PostCreditMemoPdfHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCreditMemoPdfRequest extends SpeakeasyBase {
    pathParams: PostCreditMemoPdfPathParams;
    headers: PostCreditMemoPdfHeaders;
}
export declare class PostCreditMemoPdfResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postMemoPdfResponse?: shared.PostMemoPdfResponse;
    statusCode: number;
}
