import { SpeakeasyBase } from "../../../internal/utils";
import { BookDepreciationSetting } from "./bookdepreciationsetting";
/**
 * Asset type to add
 */
export declare class AssetType extends SpeakeasyBase {
    /**
     * The account for accumulated depreciation of fixed assets of this type
     */
    accumulatedDepreciationAccountId?: string;
    /**
     * Xero generated unique identifier for asset types
     */
    assetTypeId?: string;
    /**
     * The name of the asset type
     */
    assetTypeName: string;
    bookDepreciationSetting: BookDepreciationSetting;
    /**
     * The expense account for the depreciation of fixed assets of this type
     */
    depreciationExpenseAccountId?: string;
    /**
     * The asset account for fixed assets of this type
     */
    fixedAssetAccountId?: string;
    /**
     * All asset types that have accumulated depreciation for any assets that use them are deemed ‘locked’ and cannot be removed.
     */
    locks?: number;
}
