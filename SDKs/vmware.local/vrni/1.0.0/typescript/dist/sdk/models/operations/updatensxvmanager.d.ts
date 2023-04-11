import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateNsxvManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateNsxvManagerRequest extends SpeakeasyBase {
    nsxvManagerDataSource?: shared.NSXVManagerDataSource;
    /**
     * entity id
     */
    id: string;
}
export declare class UpdateNsxvManagerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    nsxvManagerDataSource?: shared.NSXVManagerDataSource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
