import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DelUserVBRequest extends SpeakeasyBase {
    /**
     * Provide the id of the file that is to be deleted. To delete multiple files, provide comma separated values for this field.
     */
    fileIds?: string;
    /**
     * Unique identifier of the user. Retrieve the value of this field by calling the [List users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/users) API.
     */
    userId: string;
}
export declare class DelUserVBResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
