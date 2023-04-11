import { SpeakeasyBase } from "../../../internal/utils";
export declare class BookDepreciationDetail extends SpeakeasyBase {
    /**
     * The value of the asset you want to depreciate, if this is less than the cost of the asset.
     */
    costLimit?: number;
    /**
     * All depreciation occurring in the current financial year.
     */
    currentAccumDepreciationAmount?: number;
    /**
     * When an asset is disposed, this will be the sell price minus the purchase price if a profit was made.
     */
    currentCapitalGain?: number;
    /**
     * When an asset is disposed, this will be the lowest one of sell price or purchase price, minus the current book value.
     */
    currentGainLoss?: number;
    /**
     * YYYY-MM-DD
     */
    depreciationStartDate?: Date;
    /**
     * All depreciation prior to the current financial year.
     */
    priorAccumDepreciationAmount?: number;
    /**
     * The value of the asset remaining when you've fully depreciated it.
     */
    residualValue?: number;
}
