import { SpeakeasyBase } from "../../../internal/utils";
import { Accountable } from "./accountable";
import { Address } from "./address";
export declare class AcceptSellerLeadRequest extends SpeakeasyBase {
    /**
     * Marketplace's account ID
     */
    accountId: string;
    accountable: Accountable;
    address: Address;
    /**
     * Company's legal document code.
     */
    document: string;
    /**
     * email of the admin responsible for the seller.
     */
    email: string;
    /**
     * Indicates if the seller has accepted the platform's legal terms and conditions.
     */
    hasAcceptedLegalTerms: boolean;
    /**
     * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.
     */
    salesChannel: string;
    /**
     * Name of the seller's account, part of the url of their VTEX Admin.
     */
    sellerAccountName: string;
    /**
     * Seller's contact email.
     */
    sellerEmail: string;
    /**
     * Seller's store's name.
     */
    sellerName: string;
    /**
     * Type of seller, including:
     *
     * @remarks
     *
     * `1`: regular seller
     *
     * `2`: whitelabel seller
     */
    sellerType: number;
}
