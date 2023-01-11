import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostRefundCreditMemoPathParams extends SpeakeasyBase {
    creditmemoId: string;
}
export declare class PostRefundCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRefundCreditMemoRequest extends SpeakeasyBase {
    pathParams: PostRefundCreditMemoPathParams;
    headers: PostRefundCreditMemoHeaders;
    request: Record<string, any>;
}
export declare class PostRefundCreditMemoResponse extends SpeakeasyBase {
    contentType: string;
    getRefundCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
