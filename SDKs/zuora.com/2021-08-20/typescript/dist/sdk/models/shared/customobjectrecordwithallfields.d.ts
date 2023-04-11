import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Record data from an object
 */
export declare class CustomObjectRecordWithAllFields extends SpeakeasyBase {
    /**
     * The creator's Id
     */
    createdById?: string;
    /**
     * The record creation time in the date-time format
     */
    createdDate?: Date;
    /**
     * The unique Id of the custom object record
     */
    id?: string;
    /**
     * The modifier's Id
     */
    updatedById?: string;
    /**
     * The record modification time in the date-time format
     */
    updatedDate?: Date;
    /**
     * The type of the custom object record. It is the API name of the custom object definition.
     */
    type?: string;
}
