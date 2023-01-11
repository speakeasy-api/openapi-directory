import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutCancelDebitMemoPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class PutCancelDebitMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutCancelDebitMemoRequest extends SpeakeasyBase {
    pathParams: PutCancelDebitMemoPathParams;
    headers: PutCancelDebitMemoHeaders;
}
export declare class PutCancelDebitMemoResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
