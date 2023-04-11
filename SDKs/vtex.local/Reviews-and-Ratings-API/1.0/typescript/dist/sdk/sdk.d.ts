import * as shared from "./models/shared";
import { Rating } from "./rating";
import { Review } from "./review";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.myvtex.com/reviews-and-ratings/api"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 *
 * @remarks
 * Reviews & Ratings is a [VTEX IO native solution](https://developers.vtex.com/vtex-developer-docs/docs/vtex-reviews-and-ratings) that allows shoppers to submit reviews and ratings for products, as well as see them while navigating the store.
 *
 * ## Rating
 *
 * - [Get Product Rating](https://developers.vtex.com/vtex-rest-api/reference/getproductrating)
 *
 * ## Review
 *
 * - [Get Review by Review ID](https://developers.vtex.com/vtex-rest-api/reference/getreviewbyreviewid)
 * - [Delete Review](https://developers.vtex.com/vtex-rest-api/reference/deletereview)
 * - [Update a Review](https://developers.vtex.com/vtex-rest-api/reference/editreview)
 * - [Get a list of Reviews](https://developers.vtex.com/vtex-rest-api/reference/getalistofreviews)
 * - [Create Multiple Reviews](https://developers.vtex.com/vtex-rest-api/reference/savemultiplereviews)
 * - [Delete Multiple Reviews](https://developers.vtex.com/vtex-rest-api/reference/deletemultiplereviews)
 * - [Create a Review](https://developers.vtex.com/vtex-rest-api/reference/savereview)
 */
export declare class SDK {
    rating: Rating;
    review: Review;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
