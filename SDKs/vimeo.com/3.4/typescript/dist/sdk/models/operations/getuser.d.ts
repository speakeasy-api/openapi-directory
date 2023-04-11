import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserRequest extends SpeakeasyBase {
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user was returned.
     */
    user?: shared.User;
}
