import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCmTaxationItemsPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PostCmTaxationItemsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCmTaxationItemsRequest extends SpeakeasyBase {
    pathParams: PostCmTaxationItemsPathParams;
    headers: PostCmTaxationItemsHeaders;
    request: shared.PostTaxationItemListForCmType;
}
export declare class PostCmTaxationItemsResponse extends SpeakeasyBase {
    contentType: string;
    getTaxationItemListType?: shared.GetTaxationItemListType;
    headers: Record<string, string[]>;
    statusCode: number;
}
