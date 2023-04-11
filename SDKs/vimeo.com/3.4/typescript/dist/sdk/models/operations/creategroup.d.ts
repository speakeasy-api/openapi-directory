import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateGroupRequestBody extends SpeakeasyBase {
    /**
     * The description of the new group.
     */
    description?: string;
    /**
     * The name of the new group.
     */
    name: string;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The group was created.
     */
    group?: shared.Group;
    /**
     * A parameter is invalid.
     */
    legacyError?: shared.LegacyError;
}
