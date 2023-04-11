import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpsertSellerCommissionsRequest extends SpeakeasyBase {
    /**
     * Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.
     */
    categoryFullPath: string;
    /**
     * Marketplace's Category ID that the product belongs to, configured in the Catalog.
     */
    categoryId: string;
    /**
     * Percentage of the comission applied to the freight in decimals.
     */
    freightCommissionPercentage: number;
    /**
     * Percentage of the comission applied to the product in decimals.
     */
    productCommissionPercentage: number;
}
