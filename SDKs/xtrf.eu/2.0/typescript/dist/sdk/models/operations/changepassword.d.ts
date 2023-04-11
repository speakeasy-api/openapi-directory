import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChangePasswordRequestBody extends SpeakeasyBase {
    /**
     * new password
     */
    newPassword?: string;
    /**
     * old password
     */
    oldPassword?: string;
}
export declare class ChangePasswordRequest extends SpeakeasyBase {
    requestBody?: ChangePasswordRequestBody;
    /**
     * user's internal identifier
     */
    userId: number;
}
export declare class ChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
