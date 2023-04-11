import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const ListpricetablesServerList: readonly ["https://api.vtex.com/{account}/pricing"];
export declare class ListpricetablesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
}
export declare class ListpricetablesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listpricetables200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
