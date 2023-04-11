import { SpeakeasyBase } from "../../../internal/utils";
/**
 * emails
 */
export declare class CustomerContactEmailsDTO extends SpeakeasyBase {
    /**
     * additional e-mails addresses
     */
    additional?: string[];
    /**
     * e-mails which will be included in the CC list
     */
    cc?: string[];
    /**
     * primary e-mail
     */
    primary: string;
}
