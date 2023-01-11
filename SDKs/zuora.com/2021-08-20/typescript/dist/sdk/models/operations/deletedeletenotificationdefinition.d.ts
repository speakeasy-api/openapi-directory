import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDeleteNotificationDefinitionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteDeleteNotificationDefinitionHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteDeleteNotificationDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteDeleteNotificationDefinitionPathParams;
    headers: DeleteDeleteNotificationDefinitionHeaders;
}
export declare class DeleteDeleteNotificationDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
