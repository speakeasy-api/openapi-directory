import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEntitiesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutEntitiesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutEntitiesRequest extends SpeakeasyBase {
    pathParams: PutEntitiesPathParams;
    headers: PutEntitiesHeaders;
    request: shared.UpdateEntityType;
}
export declare class PutEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateEntityResponseType?: shared.UpdateEntityResponseType;
}
