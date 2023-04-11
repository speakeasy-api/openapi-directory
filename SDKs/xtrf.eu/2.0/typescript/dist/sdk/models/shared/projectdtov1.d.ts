import { SpeakeasyBase } from "../../../internal/utils";
import { ContactsDTO } from "./contactsdto";
import { CustomFieldDTO } from "./customfielddto";
import { FinanceDTO } from "./financedto";
import { InstructionsDTO } from "./instructionsdto";
import { ProjectDatesDTO } from "./projectdatesdto";
import { TaskDTO } from "./taskdto";
export declare enum ProjectDTOv1StatusEnum {
    RequestedProject = "REQUESTED_PROJECT",
    Opened = "OPENED",
    Closed = "CLOSED",
    Cancelled = "CANCELLED",
    Claim = "CLAIM"
}
/**
 * Success
 */
export declare class ProjectDTOv1 extends SpeakeasyBase {
    categoriesIds?: number[];
    contactPersonId?: number;
    contacts?: ContactsDTO;
    customFields?: CustomFieldDTO[];
    customerId?: number;
    dates?: ProjectDatesDTO;
    finance?: FinanceDTO;
    id?: number;
    idNumber?: string;
    instructions?: InstructionsDTO;
    isClassicProject?: boolean;
    name?: string;
    projectId?: string;
    projectManagerId?: number;
    specializationId?: number;
    status?: ProjectDTOv1StatusEnum;
    tasks?: TaskDTO[];
}
