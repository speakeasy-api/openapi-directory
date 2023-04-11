import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateUpdatePolygonCreateUpdatePolygonRequestGeoShape extends SpeakeasyBase {
    coordinates: number[][];
}
export declare class CreateUpdatePolygonCreateUpdatePolygonRequest extends SpeakeasyBase {
    geoShape: CreateUpdatePolygonCreateUpdatePolygonRequestGeoShape;
    name: string;
}
export declare class CreateUpdatePolygonRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    requestBody: CreateUpdatePolygonCreateUpdatePolygonRequest;
}
export declare class CreateUpdatePolygonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
