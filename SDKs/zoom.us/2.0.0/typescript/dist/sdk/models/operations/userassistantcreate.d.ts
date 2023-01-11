import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserAssistantCreatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserAssistantCreateUserAssistantsListAssistants extends SpeakeasyBase {
    email?: string;
    id?: string;
}
/**
 * List of user's assistants.
**/
export declare class UserAssistantCreateUserAssistantsList extends SpeakeasyBase {
    assistants?: UserAssistantCreateUserAssistantsListAssistants[];
}
export declare class UserAssistantCreateRequests extends SpeakeasyBase {
    userAssistantsList?: UserAssistantCreateUserAssistantsList;
    userAssistantsList1?: UserAssistantCreateUserAssistantsList;
}
export declare class UserAssistantCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserAssistantCreate201ApplicationJson extends SpeakeasyBase {
    addAt?: Date;
    ids?: string;
}
export declare class UserAssistantCreateRequest extends SpeakeasyBase {
    pathParams: UserAssistantCreatePathParams;
    request: UserAssistantCreateRequests;
    security: UserAssistantCreateSecurity;
}
export declare class UserAssistantCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    userAssistantCreate201ApplicationJSONObject?: UserAssistantCreate201ApplicationJson;
}
