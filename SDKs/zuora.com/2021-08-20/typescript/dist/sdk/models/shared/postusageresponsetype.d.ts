import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTUsageResponseType extends SpeakeasyBase {
    /**
     * The path for checking the status of the import.
     *
     * @remarks
     *
     * The possible status values at this path are `Pending`, `Processing`, `Completed`, `Canceled`, and `Failed`. Only `Completed` indicates that the file contents were imported successfully.
     *
     */
    checkImportStatus?: string;
    /**
     * The size of the uploaded file in bytes.
     *
     * @remarks
     *
     */
    size?: number;
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
