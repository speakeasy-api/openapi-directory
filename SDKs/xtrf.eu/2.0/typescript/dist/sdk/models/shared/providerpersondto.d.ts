import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldDTO } from "./customfielddto";
import { PersonContactDTO } from "./personcontactdto";
export declare enum ProviderPersonDTOGenderEnum {
    Female = "FEMALE",
    Male = "MALE"
}
/**
 * Success
 */
export declare class ProviderPersonDTO extends SpeakeasyBase {
    active?: boolean;
    contact?: PersonContactDTO;
    customFields?: CustomFieldDTO[];
    gender?: ProviderPersonDTOGenderEnum;
    id?: number;
    lastName?: string;
    motherTonguesIds?: number[];
    name?: string;
    positionId?: number;
    providerId?: number;
}
