import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetByExternalIdRequest extends SpeakeasyBase {
    /**
     * job's external identifier
     */
    externalId?: string;
    /**
     * job's externalProjectId
     */
    externalProjectId?: string;
}
export declare class GetByExternalIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
