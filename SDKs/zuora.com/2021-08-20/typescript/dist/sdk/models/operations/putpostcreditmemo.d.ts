import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutPostCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PutPostCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutPostCreditMemoRequest extends SpeakeasyBase {
    pathParams: PutPostCreditMemoPathParams;
    headers: PutPostCreditMemoHeaders;
}
export declare class PutPostCreditMemoResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
