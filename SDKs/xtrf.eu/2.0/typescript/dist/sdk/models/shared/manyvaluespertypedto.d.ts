import { SpeakeasyBase } from "../../../internal/utils";
import { CalculationUnitDTO } from "./calculationunitdto";
import { CategoryDTO } from "./categorydto";
import { CountryDTO } from "./countrydto";
import { CurrencyDTO } from "./currencydto";
import { IndustryDTO } from "./industrydto";
import { JobTypeDTO } from "./jobtypedto";
import { LanguageDTO } from "./languagedto";
import { LanguageSpecializationDTO } from "./languagespecializationdto";
import { LeadSourceDTO } from "./leadsourcedto";
import { PersonDepartmentDTO } from "./persondepartmentdto";
import { PersonPositionDTO } from "./personpositiondto";
import { ProvinceDTO } from "./provincedto";
/**
 * Success
 */
export declare class ManyValuesPerTypeDTO extends SpeakeasyBase {
    calculationUnit?: CalculationUnitDTO[];
    category?: CategoryDTO[];
    country?: CountryDTO[];
    currency?: CurrencyDTO[];
    industry?: IndustryDTO[];
    jobType?: JobTypeDTO[];
    language?: LanguageDTO[];
    leadSource?: LeadSourceDTO[];
    personDepartment?: PersonDepartmentDTO[];
    personPosition?: PersonPositionDTO[];
    province?: ProvinceDTO[];
    specialization?: LanguageSpecializationDTO[];
}
