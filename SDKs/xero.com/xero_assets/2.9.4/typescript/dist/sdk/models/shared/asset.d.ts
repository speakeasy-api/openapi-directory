import { SpeakeasyBase } from "../../../internal/utils";
import { AssetStatusEnum } from "./assetstatusenum";
import { BookDepreciationDetail } from "./bookdepreciationdetail";
import { BookDepreciationSetting } from "./bookdepreciationsetting";
/**
 * Fixed asset you are creating
 */
export declare class Asset extends SpeakeasyBase {
    /**
     * The accounting value of the asset
     */
    accountingBookValue?: number;
    /**
     * The Xero-generated Id for the asset
     */
    assetId?: string;
    /**
     * The name of the asset
     */
    assetName: string;
    /**
     * Must be unique.
     */
    assetNumber?: string;
    /**
     * See Asset Status Codes.
     */
    assetStatus?: AssetStatusEnum;
    /**
     * The Xero-generated Id for the asset type
     */
    assetTypeId?: string;
    bookDepreciationDetail?: BookDepreciationDetail;
    bookDepreciationSetting?: BookDepreciationSetting;
    /**
     * Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn't have 'legacy' journal entries and if there is no lock period that would prevent this asset from rolling back.
     */
    canRollback?: boolean;
    /**
     * The date the asset was disposed
     */
    disposalDate?: Date;
    /**
     * The price the asset was disposed at
     */
    disposalPrice?: number;
    /**
     * Boolean to indicate whether delete is enabled
     */
    isDeleteEnabledForDate?: boolean;
    /**
     * The date the asset was purchased YYYY-MM-DD
     */
    purchaseDate?: Date;
    /**
     * The purchase price of the asset
     */
    purchasePrice?: number;
    /**
     * The asset's serial number
     */
    serialNumber?: string;
    /**
     * The date the asset’s warranty expires (if needed) YYYY-MM-DD
     */
    warrantyExpiryDate?: string;
}
