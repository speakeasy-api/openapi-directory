import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetActiveByTypeRequest extends SpeakeasyBase {
    /**
     * exact name of entity
     */
    nameEquals?: string;
    /**
     * dictionary type
     */
    type: string;
}
export declare class GetActiveByTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    dictionaryEntity?: shared.DictionaryEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
