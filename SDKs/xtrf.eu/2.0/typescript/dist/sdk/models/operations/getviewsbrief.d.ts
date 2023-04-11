import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetViewsBriefRequest extends SpeakeasyBase {
    /**
     * views' class name
     */
    className: string;
    /**
     * place name (denotes specific place in system with the table)
     */
    placeName?: string;
}
export declare class GetViewsBriefResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    viewsBriefDTO?: shared.ViewsBriefDTO;
}
