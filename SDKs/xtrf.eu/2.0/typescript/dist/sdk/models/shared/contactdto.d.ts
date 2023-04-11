import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerContactEmailsDTO } from "./customercontactemailsdto";
/**
 * Success
 */
export declare class ContactDTO extends SpeakeasyBase {
    /**
     * emails
     */
    emails?: CustomerContactEmailsDTO;
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
    /**
     * websites
     */
    websites?: string[];
}
