import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserPicturePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserPictureRequestBodyPicFile extends SpeakeasyBase {
    content: Uint8Array;
    picFile: string;
}
export declare class UserPictureRequestBody extends SpeakeasyBase {
    picFile: UserPictureRequestBodyPicFile;
}
export declare class UserPictureRequest extends SpeakeasyBase {
    pathParams: UserPicturePathParams;
    request: UserPictureRequestBody;
}
export declare class UserPictureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
