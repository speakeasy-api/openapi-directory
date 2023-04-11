import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The method of averaging applied to this asset. See Averaging Methods
 */
export declare enum BookDepreciationSettingAveragingMethodEnum {
    FullMonth = "FullMonth",
    ActualDays = "ActualDays"
}
/**
 * See Depreciation Calculation Methods
 */
export declare enum BookDepreciationSettingDepreciationCalculationMethodEnum {
    Rate = "Rate",
    Life = "Life",
    None = "None"
}
/**
 * The method of depreciation applied to this asset. See Depreciation Methods
 */
export declare enum BookDepreciationSettingDepreciationMethodEnum {
    NoDepreciation = "NoDepreciation",
    StraightLine = "StraightLine",
    DiminishingValue100 = "DiminishingValue100",
    DiminishingValue150 = "DiminishingValue150",
    DiminishingValue200 = "DiminishingValue200",
    FullDepreciation = "FullDepreciation"
}
export declare class BookDepreciationSetting extends SpeakeasyBase {
    /**
     * The method of averaging applied to this asset. See Averaging Methods
     */
    averagingMethod?: BookDepreciationSettingAveragingMethodEnum;
    /**
     * Unique Xero identifier for the effective date change
     */
    bookEffectiveDateOfChangeId?: string;
    /**
     * Unique Xero identifier for the depreciable object
     */
    depreciableObjectId?: string;
    /**
     * The type of asset object
     */
    depreciableObjectType?: string;
    /**
     * See Depreciation Calculation Methods
     */
    depreciationCalculationMethod?: BookDepreciationSettingDepreciationCalculationMethodEnum;
    /**
     * The method of depreciation applied to this asset. See Depreciation Methods
     */
    depreciationMethod?: BookDepreciationSettingDepreciationMethodEnum;
    /**
     * The rate of depreciation (e.g. 0.05)
     */
    depreciationRate?: number;
    /**
     * Effective life of the asset in years (e.g. 5)
     */
    effectiveLifeYears?: number;
}
