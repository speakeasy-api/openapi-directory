import { SpeakeasyBase } from "../../../internal/utils";
import { GETProductType } from "./getproducttype";
export declare class GETCatalogType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Container for one or more products:
     *
     * @remarks
     *
     */
    products?: GETProductType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
