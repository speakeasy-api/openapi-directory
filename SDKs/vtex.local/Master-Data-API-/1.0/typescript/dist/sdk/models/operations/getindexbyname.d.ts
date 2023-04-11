import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetindexbynameRequest extends SpeakeasyBase {
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
     */
    dataEntityName: string;
    /**
     * Name of the index.
     */
    indexName: string;
}
export declare class GetindexbynameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
