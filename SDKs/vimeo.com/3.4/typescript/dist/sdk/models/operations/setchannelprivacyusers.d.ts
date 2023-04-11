import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetChannelPrivacyUsersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SetChannelPrivacyUsersRequestBody extends SpeakeasyBase {
    /**
     * The array of either the user URIs or the user IDs to permit to view the private channel.
     */
    users: string[];
}
export declare class SetChannelPrivacyUsersRequest extends SpeakeasyBase {
    requestBody: SetChannelPrivacyUsersRequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class SetChannelPrivacyUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * Error code 2205: There was no request body, or the request body is malformed.
     *
     * @remarks
     * * Error code 2900: At least one of the specified user accounts doesn't exist.
     */
    error?: shared.ErrorT;
    /**
     * The users can now view the private channel.
     */
    users?: shared.User[];
}
