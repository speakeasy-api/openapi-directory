import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntitiesUserAccessiblePathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetEntitiesUserAccessibleHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetEntitiesUserAccessibleRequest extends SpeakeasyBase {
    pathParams: GetEntitiesUserAccessiblePathParams;
    headers: GetEntitiesUserAccessibleHeaders;
}
export declare class GetEntitiesUserAccessibleResponse extends SpeakeasyBase {
    contentType: string;
    getEntitiesUserAccessibleResponseType?: shared.GetEntitiesUserAccessibleResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
