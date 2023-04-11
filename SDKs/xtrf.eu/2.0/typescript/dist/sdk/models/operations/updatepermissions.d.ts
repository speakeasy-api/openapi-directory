import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePermissionsRequest extends SpeakeasyBase {
    /**
     * Updated view's permissions.
     */
    permissionsDTO: shared.PermissionsDTO;
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class UpdatePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    permissionsDTO?: shared.PermissionsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
