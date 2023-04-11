import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An error occurred
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user info
     */
    userResponse?: shared.UserResponse;
}
