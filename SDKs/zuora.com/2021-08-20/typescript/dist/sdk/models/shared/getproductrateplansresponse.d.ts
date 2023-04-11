import { SpeakeasyBase } from "../../../internal/utils";
import { GETProductRatePlanType } from "./getproductrateplantype";
export declare class GETProductRatePlansResponse extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Container for one or more products.
     *
     * @remarks
     *
     */
    productRatePlans?: GETProductRatePlanType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
