import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetByExternalId1Request extends SpeakeasyBase {
    /**
     * project's external identifier
     */
    externalProjectId: string;
}
export declare class GetByExternalId1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectDTOv2?: shared.ProjectDTOv2;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
