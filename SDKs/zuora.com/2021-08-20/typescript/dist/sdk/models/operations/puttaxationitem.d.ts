import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutTaxationItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutTaxationItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutTaxationItemRequest extends SpeakeasyBase {
    pathParams: PutTaxationItemPathParams;
    headers: PutTaxationItemHeaders;
    request: Record<string, any>;
}
export declare class PutTaxationItemResponse extends SpeakeasyBase {
    contentType: string;
    getTaxationItemType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
