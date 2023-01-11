import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCreditMemoPartsPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class GetCreditMemoPartsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetCreditMemoPartsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCreditMemoPartsRequest extends SpeakeasyBase {
    pathParams: GetCreditMemoPartsPathParams;
    queryParams: GetCreditMemoPartsQueryParams;
    headers: GetCreditMemoPartsHeaders;
}
export declare class GetCreditMemoPartsResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoPartsCollectionType?: shared.GetCreditMemoPartsCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
