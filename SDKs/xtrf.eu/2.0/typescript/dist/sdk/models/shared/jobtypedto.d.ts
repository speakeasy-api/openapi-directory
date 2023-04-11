import { SpeakeasyBase } from "../../../internal/utils";
export declare enum JobTypeDTORelationToLanguageEnum {
    LanguageCombinationRelated = "LANGUAGE_COMBINATION_RELATED",
    SourceLanguageRelatedOnly = "SOURCE_LANGUAGE_RELATED_ONLY",
    TargetLanguageRelatedOnly = "TARGET_LANGUAGE_RELATED_ONLY",
    LanguageIndependent = "LANGUAGE_INDEPENDENT"
}
export declare class JobTypeDTO extends SpeakeasyBase {
    /**
     * should this value be available on the XTRF selection lists
     */
    active?: boolean;
    calculationUnitIds?: number[];
    /**
     * should this value be set by default in XTRF selection lists
     */
    default?: boolean;
    filesNeeded?: boolean;
    /**
     * internal identifier
     */
    id?: number;
    /**
     * localised name (formatted in the current user's locale)
     */
    name?: string;
    /**
     * should this value be available on the top of XTRF selection lists, in the Preferred section
     */
    preferred?: boolean;
    providedByClient?: boolean;
    relationToLanguage?: JobTypeDTORelationToLanguageEnum;
    vendorProductivity?: number;
    vendorProductivityCalculationUnitId?: number;
}
