import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUpdateNotificationDefinitionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutUpdateNotificationDefinitionHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdateNotificationDefinitionRequest extends SpeakeasyBase {
    pathParams: PutUpdateNotificationDefinitionPathParams;
    headers: PutUpdateNotificationDefinitionHeaders;
    request: shared.PutPublicNotificationDefinitionRequest;
}
export declare class PutUpdateNotificationDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    getPublicNotificationDefinitionResponse?: shared.GetPublicNotificationDefinitionResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
