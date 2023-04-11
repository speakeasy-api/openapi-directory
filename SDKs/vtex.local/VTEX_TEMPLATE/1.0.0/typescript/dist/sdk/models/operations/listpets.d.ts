import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPetsRequest extends SpeakeasyBase {
    /**
     * How many items to return at one time (max 100)
     */
    limit?: number;
}
export declare class ListPetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * unexpected error
     */
    error?: shared.ErrorT;
    /**
     * An paged array of pets
     */
    pets?: shared.Pet[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
