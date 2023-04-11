import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GroupUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * Group name. It must be unique to one account and less than 128 characters.
     */
    name?: string;
}
export declare class GroupUpdateRequest extends SpeakeasyBase {
    requestBody: GroupUpdateApplicationJSON;
    /**
     * The group ID.<br>
     *
     * @remarks
     * Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups).
     */
    groupId: string;
}
export declare class GroupUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
