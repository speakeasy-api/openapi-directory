import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEmailCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PostEmailCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostEmailCreditMemoRequest extends SpeakeasyBase {
    pathParams: PostEmailCreditMemoPathParams;
    headers: PostEmailCreditMemoHeaders;
    request: shared.PostCreditMemoEmailRequestType;
}
export declare class PostEmailCreditMemoResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
