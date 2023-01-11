import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntityConnectionsQueryParams extends SpeakeasyBase {
    pageSize?: number;
    type?: shared.GlobalRequestPageSizeEntityConnectionEnum;
}
export declare class GetEntityConnectionsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetEntityConnectionsRequest extends SpeakeasyBase {
    queryParams: GetEntityConnectionsQueryParams;
    headers: GetEntityConnectionsHeaders;
}
export declare class GetEntityConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    getEntityConnectionsResponseType?: shared.GetEntityConnectionsResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
