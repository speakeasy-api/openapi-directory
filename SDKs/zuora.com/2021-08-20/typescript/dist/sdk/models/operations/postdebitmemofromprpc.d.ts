import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostDebitMemoFromPrpcHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostDebitMemoFromPrpcRequest extends SpeakeasyBase {
    headers: PostDebitMemoFromPrpcHeaders;
    request: Record<string, any>;
}
export declare class PostDebitMemoFromPrpcResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
