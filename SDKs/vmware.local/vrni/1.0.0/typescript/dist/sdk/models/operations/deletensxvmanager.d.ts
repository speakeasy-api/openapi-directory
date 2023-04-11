import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNsxvManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeleteNsxvManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DeleteNsxvManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
