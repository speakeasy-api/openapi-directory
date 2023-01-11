import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutCancelCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PutCancelCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutCancelCreditMemoRequest extends SpeakeasyBase {
    pathParams: PutCancelCreditMemoPathParams;
    headers: PutCancelCreditMemoHeaders;
}
export declare class PutCancelCreditMemoResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
