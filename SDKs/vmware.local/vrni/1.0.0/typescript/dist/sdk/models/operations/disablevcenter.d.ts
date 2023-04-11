import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisableVcenterSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DisableVcenterRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DisableVcenterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
