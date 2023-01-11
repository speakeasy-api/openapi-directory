import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutUpdateCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PutUpdateCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdateCreditMemoRequest extends SpeakeasyBase {
    pathParams: PutUpdateCreditMemoPathParams;
    headers: PutUpdateCreditMemoHeaders;
    request: Record<string, any>;
}
export declare class PutUpdateCreditMemoResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
