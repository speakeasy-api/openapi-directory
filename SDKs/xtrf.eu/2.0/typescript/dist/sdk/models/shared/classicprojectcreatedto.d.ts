import { SpeakeasyBase } from "../../../internal/utils";
import { ClassicPeopleDTO } from "./classicpeopledto";
import { InstructionsDTO } from "./instructionsdto";
import { ProjectDatesDTO } from "./projectdatesdto";
import { TaskFileDTO } from "./taskfiledto";
/**
 * Created a new Classic Project.
 */
export declare class ClassicProjectCreateDTO extends SpeakeasyBase {
    /**
     * list of language categories
     */
    categoriesIds?: number[];
    customerId: number;
    dates?: ProjectDatesDTO;
    /**
     * input files
     */
    inputFiles?: TaskFileDTO[];
    instructions?: InstructionsDTO;
    name?: string;
    /**
     * people
     */
    people?: ClassicPeopleDTO;
    serviceId: number;
    sourceLanguageId?: number;
    specializationId: number;
    targetLanguagesIds?: number[];
}
