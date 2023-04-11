import { SpeakeasyBase } from "../../../internal/utils";
import { ClassicPeopleDTO } from "./classicpeopledto";
import { CommonLanguageCombinationDTO } from "./commonlanguagecombinationdto";
import { CustomFieldDTO } from "./customfielddto";
import { InstructionsDTO } from "./instructionsdto";
import { ProjectDatesDTO } from "./projectdatesdto";
import { TaskFinanceDTO } from "./taskfinancedto";
import { TaskJobsDTO } from "./taskjobsdto";
/**
 * Success
 */
export declare class TaskDTO extends SpeakeasyBase {
    /**
     * client task PO number
     */
    clientTaskPONumber?: string;
    customFields?: CustomFieldDTO[];
    dates?: ProjectDatesDTO;
    /**
     * finance
     */
    finance?: TaskFinanceDTO;
    /**
     * internal identifier
     */
    id?: number;
    /**
     * identifier
     */
    idNumber?: string;
    instructions?: InstructionsDTO;
    jobs?: TaskJobsDTO;
    /**
     * language combination (ie. PL -> EN)
     */
    languageCombination?: CommonLanguageCombinationDTO;
    /**
     * name
     */
    name?: string;
    /**
     * people
     */
    people?: ClassicPeopleDTO;
    /**
     * project's internal identifier
     */
    projectId?: number;
    /**
     * quote's internal identifier
     */
    quoteId?: number;
}
