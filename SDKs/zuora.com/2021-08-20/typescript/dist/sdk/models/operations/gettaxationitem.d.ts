import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaxationItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTaxationItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetTaxationItemRequest extends SpeakeasyBase {
    pathParams: GetTaxationItemPathParams;
    headers: GetTaxationItemHeaders;
}
export declare class GetTaxationItemResponse extends SpeakeasyBase {
    contentType: string;
    getTaxationItemType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
