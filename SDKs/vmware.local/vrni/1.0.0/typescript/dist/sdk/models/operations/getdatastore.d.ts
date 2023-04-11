import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDatastoreSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetDatastoreRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetDatastoreResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    datastore?: shared.Datastore;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
