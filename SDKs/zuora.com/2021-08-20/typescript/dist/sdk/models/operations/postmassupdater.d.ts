import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class POSTMassUpdaterRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class POSTMassUpdaterRequestBody extends SpeakeasyBase {
    /**
     * File containing data about the mass action you want to perform. The file requirements are the same as when uploading a file through the Mass Updater in the Zuora UI. The file must be a `.csv` file or a zipped `.csv` file.
     *
     * @remarks
     *
     * The maximum file size is 4 MB.
     *
     * The data in the file must be formatted according to the mass action type you want to perform.
     *
     */
    file: POSTMassUpdaterRequestBodyFile;
    /**
     * Container for the following fields. You must format this parameter as a JSON object.
     *
     * @remarks
     *
     * * `actionType` (string, **Required**) - Type of mass action you want to perform. The following mass actions are supported: `UpdateAccountingCode`, `CreateRevenueSchedule`, `UpdateRevenueSchedule`, `DeleteRevenueSchedule`, `ImportFXRate`, and `MPU`.
     *
     * * `checksum` (string) - An MD5 checksum that is used to validate the integrity of
     *   the uploaded file. The checksum is a 32-character string.
     *
     */
    params: string;
}
export declare class POSTMassUpdaterRequest extends SpeakeasyBase {
    requestBody: POSTMassUpdaterRequestBody;
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
}
export declare class POSTMassUpdaterResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    postMassUpdateResponseType?: shared.POSTMassUpdateResponseType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
