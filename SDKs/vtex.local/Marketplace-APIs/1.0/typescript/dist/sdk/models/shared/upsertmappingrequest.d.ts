import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpsertMappingRequest extends SpeakeasyBase {
    /**
     * Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).
     */
    marketplaceSalesChannel: number;
    /**
     * Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.
     */
    sellerChannel: string;
}
