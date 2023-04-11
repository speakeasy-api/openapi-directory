import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ObjectsGetObjectsByObjectIdsRequest extends SpeakeasyBase {
    /**
     * Objects filtering parameters.
     */
    requestBody: Record<string, Record<string, any>>;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class ObjectsGetObjectsByObjectIdsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. The operation was successful.
     */
    directoryObjectListResult?: shared.DirectoryObjectListResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
