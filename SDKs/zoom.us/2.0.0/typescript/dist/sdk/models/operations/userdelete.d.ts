import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserDeletePathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UserDeleteActionEnum {
    Disassociate = "disassociate",
    Delete = "delete"
}
export declare class UserDeleteQueryParams extends SpeakeasyBase {
    action?: UserDeleteActionEnum;
    transferEmail?: string;
    transferMeeting?: boolean;
    transferRecording?: boolean;
    transferWebinar?: boolean;
}
export declare class UserDeleteRequest extends SpeakeasyBase {
    pathParams: UserDeletePathParams;
    queryParams: UserDeleteQueryParams;
}
export declare class UserDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
