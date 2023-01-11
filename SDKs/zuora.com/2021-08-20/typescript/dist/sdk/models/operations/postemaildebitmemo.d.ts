import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEmailDebitMemoPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class PostEmailDebitMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostEmailDebitMemoRequest extends SpeakeasyBase {
    pathParams: PostEmailDebitMemoPathParams;
    headers: PostEmailDebitMemoHeaders;
    request: shared.PostDebitMemoEmailType;
}
export declare class PostEmailDebitMemoResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
