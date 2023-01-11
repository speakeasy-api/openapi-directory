import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class GetCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCreditMemoRequest extends SpeakeasyBase {
    pathParams: GetCreditMemoPathParams;
    headers: GetCreditMemoHeaders;
}
export declare class GetCreditMemoResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
