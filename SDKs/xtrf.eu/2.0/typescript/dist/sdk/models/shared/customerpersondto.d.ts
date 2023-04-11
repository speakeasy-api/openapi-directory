import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldDTO } from "./customfielddto";
import { PersonContactDTO } from "./personcontactdto";
export declare enum CustomerPersonDTOGenderEnum {
    Female = "FEMALE",
    Male = "MALE"
}
/**
 * CustomerPerson
 */
export declare class CustomerPersonDTO extends SpeakeasyBase {
    active?: boolean;
    contact?: PersonContactDTO;
    customFields?: CustomFieldDTO[];
    customerId?: number;
    firstProjectDate?: Date;
    firstQuoteDate?: Date;
    gender?: CustomerPersonDTOGenderEnum;
    id?: number;
    lastName?: string;
    lastProjectDate?: Date;
    lastQuoteDate?: Date;
    motherTonguesIds?: number[];
    name?: string;
    numberOfProjects?: number;
    numberOfQuotes?: number;
    positionId?: number;
}
