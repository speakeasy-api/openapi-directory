import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTierSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeleteTierRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    tierId: string;
}
export declare class DeleteTierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
