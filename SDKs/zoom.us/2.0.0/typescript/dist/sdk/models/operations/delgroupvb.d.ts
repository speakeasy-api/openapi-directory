import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DelGroupVBRequest extends SpeakeasyBase {
    /**
     * Provide the id of the file that is to be deleted. To delete multiple files, provide comma separated values for this field.
     */
    fileIds?: string;
    /**
     * Unique identifier of the group. Retrieve the value for this field by calling the [List groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups) API.
     */
    groupId: string;
}
export declare class DelGroupVBResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
