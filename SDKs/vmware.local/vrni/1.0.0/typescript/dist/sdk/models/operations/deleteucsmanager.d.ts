import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUcsManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeleteUcsManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DeleteUcsManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
