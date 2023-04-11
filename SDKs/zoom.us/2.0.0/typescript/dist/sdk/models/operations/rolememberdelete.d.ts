import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RoleMemberDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class RoleMemberDeleteRequest extends SpeakeasyBase {
    /**
     * Member's ID
     */
    memberId: string;
    /**
     * The role ID
     */
    roleId: string;
}
export declare class RoleMemberDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
