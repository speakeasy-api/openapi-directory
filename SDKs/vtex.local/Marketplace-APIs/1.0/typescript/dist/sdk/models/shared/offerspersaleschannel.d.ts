import { SpeakeasyBase } from "../../../internal/utils";
export declare class OffersPerSalesChannel extends SpeakeasyBase {
    /**
     * Available SKU stock quantity
     */
    availableQuantity: number;
    /**
     * SKU's suggested selling price
     */
    listPrice: number;
    /**
     * SKU's price.
     */
    price: number;
    /**
     * SKU's price without discount applied.
     */
    priceWithoutDiscount: number;
    /**
     * The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) of the SKU.
     */
    saleChannel: number;
}
