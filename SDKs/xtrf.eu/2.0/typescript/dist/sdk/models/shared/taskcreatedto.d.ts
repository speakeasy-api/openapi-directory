import { SpeakeasyBase } from "../../../internal/utils";
import { ClassicPeopleDTO } from "./classicpeopledto";
import { CommonLanguageCombinationDTO } from "./commonlanguagecombinationdto";
import { InstructionsDTO } from "./instructionsdto";
import { ProjectDatesDTO } from "./projectdatesdto";
import { TaskFileDTO } from "./taskfiledto";
/**
 * Created new task for a given project.
 */
export declare class TaskCreateDTO extends SpeakeasyBase {
    /**
     * client task PO number
     */
    clientTaskPONumber?: string;
    dates?: ProjectDatesDTO;
    /**
     * files
     */
    files?: TaskFileDTO[];
    instructions?: InstructionsDTO;
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
     * specialization
     */
    specializationId?: number;
    /**
     * workflow
     */
    workflowId?: number;
}
