import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutDebitMemoPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class PutDebitMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutDebitMemoRequest extends SpeakeasyBase {
    pathParams: PutDebitMemoPathParams;
    headers: PutDebitMemoHeaders;
    request: Record<string, any>;
}
export declare class PutDebitMemoResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
