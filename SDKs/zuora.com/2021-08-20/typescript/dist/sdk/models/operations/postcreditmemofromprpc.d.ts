import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCreditMemoFromPrpcHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostCreditMemoFromPrpcRequest extends SpeakeasyBase {
    headers: PostCreditMemoFromPrpcHeaders;
    request: Record<string, any>;
}
export declare class PostCreditMemoFromPrpcResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
