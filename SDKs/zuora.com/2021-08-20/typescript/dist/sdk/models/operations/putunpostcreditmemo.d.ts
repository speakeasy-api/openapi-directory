import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutUnpostCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PutUnpostCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUnpostCreditMemoRequest extends SpeakeasyBase {
    pathParams: PutUnpostCreditMemoPathParams;
    headers: PutUnpostCreditMemoHeaders;
}
export declare class PutUnpostCreditMemoResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
