import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SubscribeToCategoryAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class SubscribeToCategoryAlt1Request extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: number;
}
export declare class SubscribeToCategoryAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
