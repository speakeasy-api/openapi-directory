import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SelectViewAndGetItsDetailsRequest extends SpeakeasyBase {
    /**
     * views' class name
     */
    className: string;
    placeNameDenotesSpecificPlaceInSystemWithTheTable?: string;
    viewId: number;
}
export declare class SelectViewAndGetItsDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    viewDetailsDTO?: shared.ViewDetailsDTO;
}
