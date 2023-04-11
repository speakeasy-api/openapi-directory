import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompetenciesRequest extends SpeakeasyBase {
    /**
     * provider's internal identifier
     */
    providerId: number;
}
export declare class GetCompetenciesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    competenciesDTO?: shared.CompetenciesDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
