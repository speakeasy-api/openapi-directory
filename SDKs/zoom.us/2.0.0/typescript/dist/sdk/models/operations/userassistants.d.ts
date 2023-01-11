import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserAssistantsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserAssistantsUserAssistantsListAssistants extends SpeakeasyBase {
    email?: string;
    id?: string;
}
/**
 * List of user's assistants.
**/
export declare class UserAssistantsUserAssistantsList extends SpeakeasyBase {
    assistants?: UserAssistantsUserAssistantsListAssistants[];
}
export declare class UserAssistantsRequest extends SpeakeasyBase {
    pathParams: UserAssistantsPathParams;
}
export declare class UserAssistantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userAssistantsList?: UserAssistantsUserAssistantsList;
}
