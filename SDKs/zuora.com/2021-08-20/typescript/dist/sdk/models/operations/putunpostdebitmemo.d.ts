import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutUnpostDebitMemoPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class PutUnpostDebitMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUnpostDebitMemoRequest extends SpeakeasyBase {
    pathParams: PutUnpostDebitMemoPathParams;
    headers: PutUnpostDebitMemoHeaders;
}
export declare class PutUnpostDebitMemoResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
