import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllNamesWithIds1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    entityWithNameDTOS?: shared.EntityWithNameDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
