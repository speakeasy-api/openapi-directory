import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPermissionsRequest extends SpeakeasyBase {
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class GetPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    permissionsDTO?: shared.PermissionsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
