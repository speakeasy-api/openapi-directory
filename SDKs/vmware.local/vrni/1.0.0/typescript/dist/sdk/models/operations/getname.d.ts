import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNameSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetNameRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    entityName?: shared.EntityName;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
