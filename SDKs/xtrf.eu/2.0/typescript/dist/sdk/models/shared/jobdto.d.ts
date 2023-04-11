import { SpeakeasyBase } from "../../../internal/utils";
import { JobCommunicationDto } from "./jobcommunicationdto";
import { JobDatesDto } from "./jobdatesdto";
import { JobDocumentsDto } from "./jobdocumentsdto";
import { JobFilesDto } from "./jobfilesdto";
import { JobLanguageCombinationDto } from "./joblanguagecombinationdto";
import { StepTypeDto } from "./steptypedto";
/**
 * Success
 */
export declare class JobDto extends SpeakeasyBase {
    communication?: JobCommunicationDto;
    dates?: JobDatesDto;
    documents?: JobDocumentsDto;
    files?: JobFilesDto;
    id?: string;
    idNumber?: string;
    languages?: JobLanguageCombinationDto[];
    name?: string;
    status?: string;
    stepNumber?: number;
    stepType?: StepTypeDto;
    vendorId?: number;
    vendorPriceProfileId?: number;
}
