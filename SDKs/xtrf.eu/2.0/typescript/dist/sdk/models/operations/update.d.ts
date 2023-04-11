import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRequest extends SpeakeasyBase {
    /**
     * Updated all view's information.
     */
    viewDTO: shared.ViewDTO;
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class UpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    viewDTO?: shared.ViewDTO;
}
