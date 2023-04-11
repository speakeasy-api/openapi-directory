import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CheckIfUserSubscribedToCategorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CheckIfUserSubscribedToCategoryRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CheckIfUserSubscribedToCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
