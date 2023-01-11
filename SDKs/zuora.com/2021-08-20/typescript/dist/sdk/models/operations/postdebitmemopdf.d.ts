import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDebitMemoPdfPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class PostDebitMemoPdfHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostDebitMemoPdfRequest extends SpeakeasyBase {
    pathParams: PostDebitMemoPdfPathParams;
    headers: PostDebitMemoPdfHeaders;
}
export declare class PostDebitMemoPdfResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postMemoPdfResponse?: shared.PostMemoPdfResponse;
    statusCode: number;
}
