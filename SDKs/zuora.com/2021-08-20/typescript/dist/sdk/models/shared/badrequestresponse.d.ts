import { SpeakeasyBase } from "../../../internal/utils";
export declare class BadRequestResponseErrors extends SpeakeasyBase {
    /**
     * The error code.
     */
    code?: string;
    /**
     * The status of the response.
     */
    status?: string;
    /**
     * The reason for the error.
     */
    title?: string;
}
/**
 * Bad Request for one of the following reasons:
 *
 * @remarks
 * * Data is missing
 * * Data is empty or not an array
 * * Data has more than 50 tasks
 *
 */
export declare class BadRequestResponse extends SpeakeasyBase {
    errors?: BadRequestResponseErrors[];
}
