import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateCategoriesRequest extends SpeakeasyBase {
    /**
     * Updated categories of a given client.
     */
    requestBody: number[];
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class UpdateCategoriesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    categoriesDTO?: number[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
