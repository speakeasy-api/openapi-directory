import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterUserRequest extends SpeakeasyBase {
    request: shared.UserRequest;
}
export declare class RegisterUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userResponse?: shared.UserResponse;
    yodleeError?: shared.YodleeError;
}
