import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateVolumeRequest extends SpeakeasyBase {
    /**
     * Updated volume for a project.
     */
    bigDecimalDTO: shared.BigDecimalDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
