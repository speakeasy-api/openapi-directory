import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateDKIMRequest extends SpeakeasyBase {
    /**
     * E-mail address for sender that was setup in VTEX mail servers
     */
    emailProvider: string;
}
export declare class CreateDKIMResponse extends SpeakeasyBase {
    /**
     * OK
     */
    twoHundredOK?: Record<string, any>;
    /**
     * Unauthorized
     */
    fourHundredAndOneUnauthorized?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
