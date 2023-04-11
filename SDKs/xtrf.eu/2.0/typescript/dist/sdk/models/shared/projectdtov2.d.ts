import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentsDTO } from "./documentsdto";
import { PeopleDTO } from "./peopledto";
import { ProjectLanguagesDTO } from "./projectlanguagesdto";
import { VolumeDTO } from "./volumedto";
/**
 * Success
 */
export declare class ProjectDTOv2 extends SpeakeasyBase {
    budgetCode?: string;
    categoryIds?: number[];
    clientDeadline?: number;
    clientId?: number;
    clientNotes?: string;
    clientReferenceNumber?: string;
    documents?: DocumentsDTO;
    id?: string;
    instructionsForAllJobs?: string;
    internalNotes?: string;
    isClassicProject?: boolean;
    languages?: ProjectLanguagesDTO;
    name?: string;
    orderedOn?: number;
    origin?: string;
    people?: PeopleDTO;
    projectId?: string;
    projectIdNumber?: string;
    quoteIdNumber?: string;
    serviceId?: number;
    status?: string;
    volume?: VolumeDTO;
}
