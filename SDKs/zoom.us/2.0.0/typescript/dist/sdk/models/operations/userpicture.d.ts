import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserPictureRequestBodyPicFile extends SpeakeasyBase {
    content: Uint8Array;
    picFile: string;
}
export declare class UserPictureRequestBody extends SpeakeasyBase {
    /**
     * The file's path.
     */
    picFile: UserPictureRequestBodyPicFile;
}
export declare class UserPictureRequest extends SpeakeasyBase {
    requestBody: UserPictureRequestBody;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserPictureResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
