import { SpeakeasyBase } from "../../../internal/utils";
/**
 * emails
 */
export declare class PersonContactEmailsDTO extends SpeakeasyBase {
    /**
     * additional e-mails addresses
     */
    additional?: string[];
    /**
     * primary e-mail
     */
    primary: string;
}
