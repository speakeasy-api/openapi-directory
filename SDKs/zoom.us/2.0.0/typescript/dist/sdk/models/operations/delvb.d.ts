import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DelVBRequest extends SpeakeasyBase {
    accountId: string;
    /**
     * Provide the id of the file that is to be deleted. To delete multiple files, provide comma separated values for this field.
     */
    fileIds?: string;
}
export declare class DelVBResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
