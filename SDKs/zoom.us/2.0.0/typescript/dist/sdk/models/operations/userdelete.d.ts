import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Delete action options:<br>`disassociate` - Disassociate a user.<br>`delete`-  Permanently delete a user.<br>Note: To delete pending user in the account, use `disassociate`
 */
export declare enum UserDeleteActionEnum {
    Disassociate = "disassociate",
    Delete = "delete"
}
export declare class UserDeleteRequest extends SpeakeasyBase {
    /**
     * Delete action options:<br>`disassociate` - Disassociate a user.<br>`delete`-  Permanently delete a user.<br>Note: To delete pending user in the account, use `disassociate`
     */
    action?: UserDeleteActionEnum;
    /**
     * Transfer email.
     */
    transferEmail?: string;
    /**
     * Transfer meeting.
     */
    transferMeeting?: boolean;
    /**
     * Transfer recording.
     */
    transferRecording?: boolean;
    /**
     * Transfer webinar.
     */
    transferWebinar?: boolean;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
