import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCategoriesRequest extends SpeakeasyBase {
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    categoriesDTO?: number[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
