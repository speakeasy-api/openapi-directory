import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApplicationSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetApplicationRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetApplicationResponse extends SpeakeasyBase {
    /**
     * OK
     */
    application?: shared.Application;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
