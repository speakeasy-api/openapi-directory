import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSpecializationRequest extends SpeakeasyBase {
    /**
     * Updated specialization for a project.
     */
    specializationDTO: shared.SpecializationDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateSpecializationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
