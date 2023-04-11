import { SpeakeasyBase } from "../../../internal/utils";
import { ContactsDTO } from "./contactsdto";
import { ResponsiblePersonsDTO } from "./responsiblepersonsdto";
/**
 * people
 */
export declare class ClassicPeopleDTO extends SpeakeasyBase {
    customerContacts?: ContactsDTO;
    responsiblePersons?: ResponsiblePersonsDTO;
}
