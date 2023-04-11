import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The group was returned.
     */
    group?: shared.Group;
}
