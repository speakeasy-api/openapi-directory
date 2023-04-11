import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoryRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
}
export declare class GetCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The category was returned.
     */
    category?: shared.Category;
    /**
     * No such category exists.
     */
    legacyError?: shared.LegacyError;
}
