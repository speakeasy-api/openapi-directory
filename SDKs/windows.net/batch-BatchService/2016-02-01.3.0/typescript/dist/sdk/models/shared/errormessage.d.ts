import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An error message received in an Azure Batch error response.
 */
export declare class ErrorMessage extends SpeakeasyBase {
    /**
     * The language code of the error message
     */
    lang?: string;
    /**
     * The text of the message.
     */
    value?: string;
}
