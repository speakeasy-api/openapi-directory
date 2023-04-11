import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETMassUpdateType extends SpeakeasyBase {
    /**
     * Type of mass action.
     *
     * @remarks
     *
     */
    actionType?: string;
    /**
     * Date and time that the mass action was completed. The format is `yyyy-MM-dd hh:mm:ss`.
     *
     * @remarks
     *
     */
    endedOn?: Date;
    /**
     * Total number of failed records.
     *
     * @remarks
     *
     * This field is updated in real time. When the mass action **status** is Processing, this field returns the number of records that have failed so far. When the mass action **status** is Pending, this field is null.
     *
     */
    errorCount?: string;
    /**
     * Size of the input file in bytes.
     *
     * @remarks
     *
     */
    inputSize?: number;
    /**
     * Size of the response file in bytes.
     *
     * @remarks
     *
     */
    outputSize?: number;
    /**
     * Type of output for the response file. The following table describes the output type.
     *
     * @remarks
     *
     * | Output Type    | Description                         |
     * |----------------|-------------------------------------|
     * | (url:.csv.zip) | URL pointing to a zipped .csv file. |
     *
     */
    outputType?: string;
    /**
     * URL to download the response file. The response file is a zipped .csv file.
     *
     * @remarks
     * The response file is identical to the file you uploaded to perform the mass action, with additional columns providing information about the outcome of each record.
     * This field only returns a value when the mass action **status** is Completed or Stopped. Otherwise, this field is null.
     *
     */
    outputURL?: string;
    /**
     * Total number of processed records. This field is equal to the sum of `errorCount` and `successCount`.
     *
     * @remarks
     *
     * This field is updated in real time. When the mass action **status** is Processing, this field returns the number of records that have been processed so far. When the mass action **status** is Pending, this field is null.
     *
     */
    processedCount?: string;
    /**
     * Date and time that Zuora started processing the mass action. The format is `yyyy-MM-dd hh:mm:ss`.
     *
     * @remarks
     *
     */
    startedOn?: Date;
    /**
     * Status of the mass action. The following table describes the mass action statuses.
     *
     * @remarks
     *
     * | Status     | Description                                                                |
     * |------------|----------------------------------------------------------------------------|
     * | Pending    | Mass action has not yet started being processed.                           |
     * | Processing | Mass action is in progress.                                                |
     * | Stopping   | Mass action is in the process of stopping, but has not yet stopped.        |
     * | Stopped    | Mass action has stopped.                                                   |
     * | Completed  | Mass action was successfully completed. There may still be failed records. |
     * | Failed     | Mass action failed. No records are processed. No response file is created. |
     *
     */
    status?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * Total number of successful records.
     *
     * @remarks
     * This field is updated in real time. When the mass action **status** is Processing, this field returns the number of records that have succeeded so far. When the mass action **status** is Pending, this field is null.
     *
     */
    successCount?: string;
    /**
     * Total number of records in the uploaded mass action file.
     *
     * @remarks
     * When the mass action **status** is Pending, this field is null.
     *
     */
    totalCount?: string;
    /**
     * Email of the person who uploaded the mass action file.
     *
     * @remarks
     *
     */
    uploadedBy?: string;
    /**
     * Date and time that the mass action file was uploaded. The format is `yyyy-MM-dd hh:mm:ss`.
     *
     * @remarks
     *
     */
    uploadedOn?: Date;
}
