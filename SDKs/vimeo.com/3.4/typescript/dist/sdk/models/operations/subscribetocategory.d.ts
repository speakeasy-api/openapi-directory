import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SubscribeToCategorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SubscribeToCategoryRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class SubscribeToCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
