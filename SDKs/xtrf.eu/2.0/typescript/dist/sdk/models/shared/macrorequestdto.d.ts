import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Generated client invoices documents.
 */
export declare class MacroRequestDTO extends SpeakeasyBase {
    /**
     * indicates whether the macro should be executed asynchronously or synchronously (default: false)
     */
    async?: boolean;
    /**
     * list of internal identifiers of elements to be processed by the macro, can be empty for certain macros
     */
    ids?: number[];
    /**
     * map of custom key-value pairs that can optionally parametrize the macro execution
     */
    params?: Record<string, Record<string, any>>;
}
