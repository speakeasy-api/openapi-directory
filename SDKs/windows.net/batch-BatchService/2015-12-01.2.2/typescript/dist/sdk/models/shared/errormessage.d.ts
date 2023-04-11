import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An error message received in an Azure Batch error response.
 */
export declare class ErrorMessage extends SpeakeasyBase {
    /**
     * Gets or sets the language code of the error message
     */
    lang?: string;
    /**
     * Gets or sets the text of the message.
     */
    value?: string;
}
