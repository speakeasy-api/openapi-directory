import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAMemberSLGRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the member who is to be removed.
     */
    memberId: string;
    /**
     * Unique Identifier of the shared line group from which you would like to remove a member.
     */
    sharedLineGroupId: string;
}
export declare class DeleteAMemberSLGResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
