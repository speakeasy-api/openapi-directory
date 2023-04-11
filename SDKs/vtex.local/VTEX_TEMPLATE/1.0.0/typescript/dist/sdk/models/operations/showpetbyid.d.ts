import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShowPetByIdRequest extends SpeakeasyBase {
    /**
     * The id of the pet to retrieve
     */
    petId: string;
}
export declare class ShowPetByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * unexpected error
     */
    error?: shared.ErrorT;
    /**
     * Expected response to a valid request
     */
    pets?: shared.Pet[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
