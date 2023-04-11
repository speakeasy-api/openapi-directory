import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnableNsxvManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class EnableNsxvManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class EnableNsxvManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
