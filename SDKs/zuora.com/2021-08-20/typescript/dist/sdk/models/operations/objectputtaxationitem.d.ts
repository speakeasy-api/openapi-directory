import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutTaxationItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutTaxationItemQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutTaxationItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutTaxationItemRequest extends SpeakeasyBase {
    pathParams: ObjectPutTaxationItemPathParams;
    queryParams: ObjectPutTaxationItemQueryParams;
    headers: ObjectPutTaxationItemHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutTaxationItemResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
