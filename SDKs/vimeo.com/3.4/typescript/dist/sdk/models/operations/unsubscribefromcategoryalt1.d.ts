import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnsubscribeFromCategoryAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class UnsubscribeFromCategoryAlt1Request extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
}
export declare class UnsubscribeFromCategoryAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
