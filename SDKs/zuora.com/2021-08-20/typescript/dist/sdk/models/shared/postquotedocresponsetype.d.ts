import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTQuoteDocResponseType extends SpeakeasyBase {
    /**
     * URL of the generated quote document if the file was successfully generated.
     *
     * @remarks
     *
     */
    file?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
