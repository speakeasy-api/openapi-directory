import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetViewDetailsRequest extends SpeakeasyBase {
    /**
     * views' class name
     */
    className: string;
    /**
     * place name (denotes specific place in system with the table)
     */
    placeName?: string;
    viewId: number;
}
export declare class GetViewDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    viewDetailsDTO?: shared.ViewDetailsDTO;
}
