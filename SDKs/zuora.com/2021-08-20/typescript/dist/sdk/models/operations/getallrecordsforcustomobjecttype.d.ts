import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllRecordsForCustomObjectTypePathParams extends SpeakeasyBase {
    object: string;
}
export declare class GetAllRecordsForCustomObjectTypeQueryParams extends SpeakeasyBase {
    cursor?: string;
    ids?: string;
    pageSize?: number;
    q?: string;
}
export declare class GetAllRecordsForCustomObjectTypeHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class GetAllRecordsForCustomObjectTypeRequest extends SpeakeasyBase {
    pathParams: GetAllRecordsForCustomObjectTypePathParams;
    queryParams: GetAllRecordsForCustomObjectTypeQueryParams;
    headers: GetAllRecordsForCustomObjectTypeHeaders;
}
export declare class GetAllRecordsForCustomObjectTypeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    queryCustomObjectRecordsResponse?: shared.QueryCustomObjectRecordsResponse;
    statusCode: number;
}
