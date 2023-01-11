import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCreditMemoItemPathParams extends SpeakeasyBase {
    cmitemid: string;
    creditMemoId: string;
}
export declare class GetCreditMemoItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class GetCreditMemoItemRequest extends SpeakeasyBase {
    pathParams: GetCreditMemoItemPathParams;
    headers: GetCreditMemoItemHeaders;
}
export declare class GetCreditMemoItemResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoItemType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
