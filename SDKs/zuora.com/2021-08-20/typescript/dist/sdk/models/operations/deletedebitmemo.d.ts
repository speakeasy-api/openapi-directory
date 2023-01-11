import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDebitMemoPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class DeleteDebitMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteDebitMemoRequest extends SpeakeasyBase {
    pathParams: DeleteDebitMemoPathParams;
    headers: DeleteDebitMemoHeaders;
}
export declare class DeleteDebitMemoResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
