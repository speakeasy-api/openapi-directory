import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById6Request extends SpeakeasyBase {
    /**
     * user's internal identifier
     */
    userId: number;
}
export declare class GetById6Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    userDTO?: shared.UserDTO;
}
