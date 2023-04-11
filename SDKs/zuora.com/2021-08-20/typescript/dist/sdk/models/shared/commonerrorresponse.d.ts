import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bad request
 */
export declare class CommonErrorResponse extends SpeakeasyBase {
    /**
     * The error code.
     *
     * @remarks
     *
     */
    code?: number;
    /**
     * The error message.
     *
     * @remarks
     *
     */
    message?: string;
}
