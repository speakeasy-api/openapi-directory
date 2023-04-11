import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutindicesRequest extends SpeakeasyBase {
    /**
     * Request body for creating an index
     */
    putindicesRequest: shared.PutindicesRequest;
    /**
     * Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
     */
    dataEntityName: string;
}
export declare class PutindicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
