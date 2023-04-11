import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllNamesWithIdsRequest extends SpeakeasyBase {
    /**
     * only clients modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAllNamesWithIdsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    entityWithNameDTOS?: shared.EntityWithNameDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
