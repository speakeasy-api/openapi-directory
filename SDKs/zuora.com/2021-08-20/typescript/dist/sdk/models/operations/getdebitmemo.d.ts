import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDebitMemoPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class GetDebitMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetDebitMemoRequest extends SpeakeasyBase {
    pathParams: GetDebitMemoPathParams;
    headers: GetDebitMemoHeaders;
}
export declare class GetDebitMemoResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
