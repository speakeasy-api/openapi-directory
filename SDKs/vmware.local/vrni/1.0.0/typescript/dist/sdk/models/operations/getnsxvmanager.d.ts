import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNsxvManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetNsxvManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetNsxvManagerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    nsxvManagerDataSource?: shared.NSXVManagerDataSource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
