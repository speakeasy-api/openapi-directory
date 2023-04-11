import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSellerLeadsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
     */
    accountName: string;
    /**
     * Environment to use. Used as part of the URL.
     */
    environment: string;
    /**
     * Query param that enables results to be filter by whether the seller lead is already connected to the marketplace or not.
     */
    isConnected: string;
    /**
     * This field determines the limit used to retrieve the list of sellers. The response includes objects until the value inputted here.
     */
    limit: number;
    /**
     * This field determines the limit used to retrieve the list of sellers. The response includes objects starting `from` the value inputted here.
     */
    offset: number;
    /**
     * Query param determining how data will be ordered in the response, ordering by name or ID in descending our ascending order. Includes the following values:
     *
     * @remarks
     *
     * `namesort` = desc/asc
     *
     * `idsort` = desc/asc
     */
    orderBy: string;
    /**
     * Custom search field, that filters sellers invited by specific marketplace operator's  email.
     */
    search: string;
    /**
     * Seller Lead's status. Includes `accepted`, `connected` or `invited`.
     */
    status: string;
}
export declare class ListSellerLeadsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
