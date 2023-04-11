import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnsubscribeFromCategorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UnsubscribeFromCategoryRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class UnsubscribeFromCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
