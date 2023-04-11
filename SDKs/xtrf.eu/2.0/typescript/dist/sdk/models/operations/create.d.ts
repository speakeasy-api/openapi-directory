import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRequest extends SpeakeasyBase {
    /**
     * Created view for given class.
     */
    viewDTO: shared.ViewDTO;
    /**
     * view's class name
     */
    className: string;
}
export declare class CreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    viewWithIdDTO?: shared.ViewWithIdDTO;
}
