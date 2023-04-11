import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * listado de entidades
     */
    entities?: Record<string, any>[][];
    /**
     * error
     */
    errors?: shared.ErrorT[];
}
