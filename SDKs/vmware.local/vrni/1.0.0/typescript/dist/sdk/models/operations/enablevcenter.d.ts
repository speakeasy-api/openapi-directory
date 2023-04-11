import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnableVcenterSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class EnableVcenterRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class EnableVcenterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
