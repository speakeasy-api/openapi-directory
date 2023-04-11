import { SpeakeasyBase } from "../../../internal/utils";
import { AddressDTO } from "./addressdto";
import { CompetenciesDTO } from "./competenciesdto";
import { ContactDTO } from "./contactdto";
import { CustomFieldDTO } from "./customfielddto";
import { ProviderPersonDTO } from "./providerpersondto";
export declare enum ProviderDTOStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    WaitingForApproval = "WAITING_FOR_APPROVAL",
    Rejected = "REJECTED",
    TooExpensive = "TOO_EXPENSIVE",
    IncompleteData = "INCOMPLETE_DATA",
    Potential = "POTENTIAL",
    NotConfirmed = "NOT_CONFIRMED"
}
/**
 * Success
 */
export declare class ProviderDTO extends SpeakeasyBase {
    billingAddress?: AddressDTO;
    branchId?: number;
    competencies?: CompetenciesDTO;
    contact?: ContactDTO;
    correspondenceAddress?: AddressDTO;
    customFields?: CustomFieldDTO[];
    fullName?: string;
    id?: number;
    idNumber?: string;
    leadSourceId?: number;
    name?: string;
    notes?: string;
    persons?: ProviderPersonDTO[];
    status?: ProviderDTOStatusEnum;
}
