import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEntitiesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteEntitiesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteEntitiesRequest extends SpeakeasyBase {
    pathParams: DeleteEntitiesPathParams;
    headers: DeleteEntitiesHeaders;
}
export declare class DeleteEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    deletEntityResponseType?: shared.DeletEntityResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
