import { SpeakeasyBase } from "../../../internal/utils";
import { AddressDTO } from "./addressdto";
import { ContactDTO } from "./contactdto";
import { CustomerAccountingDTO } from "./customeraccountingdto";
import { CustomerPersonDTO } from "./customerpersondto";
import { CustomerResponsiblePersonsDTO } from "./customerresponsiblepersonsdto";
import { CustomFieldDTO } from "./customfielddto";
export declare enum CustomerDTOStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Potential = "POTENTIAL"
}
/**
 * Created user object
 */
export declare class CustomerDTO extends SpeakeasyBase {
    accountOnCustomerServer?: string;
    accounting?: CustomerAccountingDTO;
    billingAddress?: AddressDTO;
    branchId?: number;
    categoriesIds?: number[];
    clientFirstProjectDate?: Date;
    clientFirstQuoteDate?: Date;
    clientLastProjectDate?: Date;
    clientLastQuoteDate?: Date;
    clientNumberOfProjects?: number;
    clientNumberOfQuotes?: number;
    contact?: ContactDTO;
    contractNumber?: string;
    correspondenceAddress?: AddressDTO;
    customFields?: CustomFieldDTO[];
    fullName?: string;
    id?: number;
    idNumber?: string;
    industriesIds?: number[];
    leadSourceId?: number;
    limitAccessToPeopleResponsible?: boolean;
    name?: string;
    notes?: string;
    persons?: CustomerPersonDTO[];
    responsiblePersons?: CustomerResponsiblePersonsDTO;
    salesNotes?: string;
    status?: CustomerDTOStatusEnum;
}
