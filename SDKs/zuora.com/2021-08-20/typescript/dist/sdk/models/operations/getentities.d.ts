import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntitiesQueryParams extends SpeakeasyBase {
    provisioned?: string;
}
export declare class GetEntitiesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetEntitiesRequest extends SpeakeasyBase {
    queryParams: GetEntitiesQueryParams;
    headers: GetEntitiesHeaders;
}
export declare class GetEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    getEntitiesResponseType?: shared.GetEntitiesResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
