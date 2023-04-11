import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CheckIfUserSubscribedToCategoryAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class CheckIfUserSubscribedToCategoryAlt1Request extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
}
export declare class CheckIfUserSubscribedToCategoryAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
