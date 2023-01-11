import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDmTaxationItemsPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class PostDmTaxationItemsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostDmTaxationItemsRequest extends SpeakeasyBase {
    pathParams: PostDmTaxationItemsPathParams;
    headers: PostDmTaxationItemsHeaders;
    request: shared.PostTaxationItemListForDmType;
}
export declare class PostDmTaxationItemsResponse extends SpeakeasyBase {
    contentType: string;
    getTaxationItemListType?: shared.GetTaxationItemListType;
    headers: Record<string, string[]>;
    statusCode: number;
}
