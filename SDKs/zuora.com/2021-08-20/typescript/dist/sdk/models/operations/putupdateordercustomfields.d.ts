import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUpdateOrderCustomFieldsPathParams extends SpeakeasyBase {
    orderNumber: string;
}
export declare class PutUpdateOrderCustomFieldsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdateOrderCustomFieldsRequest extends SpeakeasyBase {
    pathParams: PutUpdateOrderCustomFieldsPathParams;
    headers: PutUpdateOrderCustomFieldsHeaders;
    request: shared.PutOrderPatchRequestType;
}
export declare class PutUpdateOrderCustomFieldsResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
