import { SpeakeasyBase } from "../../../internal/utils";
import { PersonContactEmailsDTO } from "./personcontactemailsdto";
/**
 * Success
 */
export declare class PersonContactDTO extends SpeakeasyBase {
    /**
     * emails
     */
    emails?: PersonContactEmailsDTO;
    /**
     * fax number
     */
    fax?: string;
    /**
     * phones' numbers
     */
    phones?: string[];
    /**
     * mobile phone for which SMS notifications will be sent (if configured)
     */
    sms?: string;
}
