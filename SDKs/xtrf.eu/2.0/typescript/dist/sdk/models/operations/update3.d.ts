import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Update3Request extends SpeakeasyBase {
    /**
     * Updated existing user.
     */
    userDTO: shared.UserDTO;
    /**
     * user's internal identifier
     */
    userId: number;
}
export declare class Update3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    userDTO?: shared.UserDTO;
}
