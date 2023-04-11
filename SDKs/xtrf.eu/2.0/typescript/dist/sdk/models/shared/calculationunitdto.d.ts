import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CalculationUnitDTOTypeEnum {
    Time = "TIME",
    Volume = "VOLUME",
    Percent = "PERCENT"
}
export declare class CalculationUnitDTO extends SpeakeasyBase {
    /**
     * should this value be available on the XTRF selection lists
     */
    active?: boolean;
    canBeUsedInCatAnalysis?: boolean;
    catQuantityConversionExpression?: string;
    /**
     * should this value be set by default in XTRF selection lists
     */
    default?: boolean;
    exchangeRatio?: number;
    fileStatsConversionExpression?: string;
    /**
     * internal identifier
     */
    id?: number;
    jobTypeIds?: number[];
    /**
     * localised name (formatted in the current user's locale)
     */
    name?: string;
    /**
     * should this value be available on the top of XTRF selection lists, in the Preferred section
     */
    preferred?: boolean;
    symbol?: string;
    timeToQuantityConversionExpression?: string;
    type?: CalculationUnitDTOTypeEnum;
}
