import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttachmentsListPathParams extends SpeakeasyBase {
    objectKey: string;
    objectType: shared.GlobalRequestPageSizeEnum;
}
export declare class GetAttachmentsListQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetAttachmentsListHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAttachmentsListRequest extends SpeakeasyBase {
    pathParams: GetAttachmentsListPathParams;
    queryParams: GetAttachmentsListQueryParams;
    headers: GetAttachmentsListHeaders;
}
export declare class GetAttachmentsListResponse extends SpeakeasyBase {
    contentType: string;
    getAttachmentsResponseType?: shared.GetAttachmentsResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
