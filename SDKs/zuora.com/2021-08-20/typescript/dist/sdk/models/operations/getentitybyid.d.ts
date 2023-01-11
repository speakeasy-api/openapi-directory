import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntityByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEntityByIdHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetEntityByIdRequest extends SpeakeasyBase {
    pathParams: GetEntityByIdPathParams;
    headers: GetEntityByIdHeaders;
}
export declare class GetEntityByIdResponse extends SpeakeasyBase {
    contentType: string;
    getEntitiesResponseTypeWithId?: shared.GetEntitiesResponseTypeWithId;
    headers: Record<string, string[]>;
    statusCode: number;
}
