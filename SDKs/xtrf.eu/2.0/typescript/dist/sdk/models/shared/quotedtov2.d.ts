import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentsDTO } from "./documentsdto";
import { PeopleDTO } from "./peopledto";
import { ProjectLanguagesDTO } from "./projectlanguagesdto";
import { VolumeDTO } from "./volumedto";
/**
 * Success
 */
export declare class QuoteDTOv2 extends SpeakeasyBase {
    budgetCode?: string;
    businessDays?: number;
    categoryIds?: number[];
    clientDeadline?: number;
    clientId?: number;
    clientNotes?: string;
    clientReferenceNumber?: string;
    createdOn?: number;
    documents?: DocumentsDTO;
    expectedDeliveryDate?: number;
    id?: string;
    instructionsForAllJobs?: string;
    internalNotes?: string;
    isClassicQuote?: boolean;
    languages?: ProjectLanguagesDTO;
    name?: string;
    origin?: string;
    people?: PeopleDTO;
    quoteExpiry?: number;
    quoteId?: string;
    quoteIdNumber?: string;
    serviceId?: number;
    status?: string;
    volume?: VolumeDTO;
}
