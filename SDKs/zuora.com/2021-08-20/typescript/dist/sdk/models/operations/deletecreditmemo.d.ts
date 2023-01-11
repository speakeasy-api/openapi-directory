import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class DeleteCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteCreditMemoRequest extends SpeakeasyBase {
    pathParams: DeleteCreditMemoPathParams;
    headers: DeleteCreditMemoHeaders;
}
export declare class DeleteCreditMemoResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
