import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGetNotificationDefinitionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGetNotificationDefinitionHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetGetNotificationDefinitionRequest extends SpeakeasyBase {
    pathParams: GetGetNotificationDefinitionPathParams;
    headers: GetGetNotificationDefinitionHeaders;
}
export declare class GetGetNotificationDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    getPublicNotificationDefinitionResponse?: shared.GetPublicNotificationDefinitionResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
