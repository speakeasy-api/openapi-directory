import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
export declare class GetAllOrdersResponseType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    orders?: Order[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
