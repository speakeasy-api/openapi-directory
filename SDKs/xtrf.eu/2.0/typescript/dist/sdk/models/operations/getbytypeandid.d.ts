import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetByTypeAndIdRequest extends SpeakeasyBase {
    /**
     * dictionary value identifier
     */
    id: number;
    /**
     * dictionary type
     */
    type: string;
}
export declare class GetByTypeAndIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    dictionaryEntity?: shared.DictionaryEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
