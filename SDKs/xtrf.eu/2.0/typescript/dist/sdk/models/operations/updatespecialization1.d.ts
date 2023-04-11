import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSpecialization1Request extends SpeakeasyBase {
    /**
     * Updated specialization for a quote.
     */
    specializationDTO: shared.SpecializationDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateSpecialization1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
