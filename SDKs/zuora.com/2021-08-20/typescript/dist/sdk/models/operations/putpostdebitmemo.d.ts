import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutPostDebitMemoPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class PutPostDebitMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutPostDebitMemoRequest extends SpeakeasyBase {
    pathParams: PutPostDebitMemoPathParams;
    headers: PutPostDebitMemoHeaders;
}
export declare class PutPostDebitMemoResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
