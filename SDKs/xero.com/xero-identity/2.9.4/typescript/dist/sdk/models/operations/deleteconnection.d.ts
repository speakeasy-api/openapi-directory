import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteConnectionSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    /**
     * Unique identifier for retrieving single object
     */
    id: string;
}
export declare class DeleteConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
