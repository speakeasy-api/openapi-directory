import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCreditMemoItemPartsPathParams extends SpeakeasyBase {
    creditMemoId: string;
    partid: string;
}
export declare class GetCreditMemoItemPartsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetCreditMemoItemPartsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCreditMemoItemPartsRequest extends SpeakeasyBase {
    pathParams: GetCreditMemoItemPartsPathParams;
    queryParams: GetCreditMemoItemPartsQueryParams;
    headers: GetCreditMemoItemPartsHeaders;
}
export declare class GetCreditMemoItemPartsResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoItemPartsCollectionType?: shared.GetCreditMemoItemPartsCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
