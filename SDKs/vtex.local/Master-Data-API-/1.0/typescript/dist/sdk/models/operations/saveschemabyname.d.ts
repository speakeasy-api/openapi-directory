import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveschemabynameRequest extends SpeakeasyBase {
    /**
     * Request body for saving schema
     */
    saveschemabynameRequest: shared.SaveschemabynameRequest;
    /**
     * Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
     */
    dataEntityName: string;
    /**
     * Name of the schema.
     */
    schemaName: string;
}
export declare class SaveschemabynameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
