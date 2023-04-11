import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectionsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetConnectionsRequest extends SpeakeasyBase {
    /**
     * Filter by authEventId
     */
    authEventId?: string;
}
export declare class GetConnectionsResponse extends SpeakeasyBase {
    /**
     * Success - return response of type Connections array with 0 to n Connection
     */
    connections?: shared.Connection[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
