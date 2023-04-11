import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSessionRequest extends SpeakeasyBase {
    /**
     * Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`
     */
    items: string;
}
export declare class GetSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
