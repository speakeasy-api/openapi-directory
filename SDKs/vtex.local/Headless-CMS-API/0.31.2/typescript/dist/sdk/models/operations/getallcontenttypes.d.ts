import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllContentTypesRequest extends SpeakeasyBase {
    /**
     * Builder ID specified in the settings of the CMS app.
     */
    builderId: string;
}
/**
 * Object with data about a specific Content Type tab.
 */
export declare class GetAllContentTypes200ApplicationJSONContentTypesConfigurationSchemaSets extends SpeakeasyBase {
    /**
     * Custom configurations of the Content Type tab. Varies depending on the Content Type schema defined in the FastStore project.
     */
    configurations?: Record<string, any>[];
    /**
     * Name of the Content Type tab.
     */
    name?: string;
}
/**
 * Object with data of a specific Content Type.
 */
export declare class GetAllContentTypes200ApplicationJSONContentTypes extends SpeakeasyBase {
    /**
     * Array with data of the `configurationSchemaSets` tabs specified in the FastStore project.
     */
    configurationSchemaSets?: GetAllContentTypes200ApplicationJSONContentTypesConfigurationSchemaSets[];
    /**
     * Content Type identifier specified in the FastStore project.
     */
    id?: string;
    /**
     * Content Type name specified in the FastStore project.
     */
    name?: string;
}
/**
 * OK
 */
export declare class GetAllContentTypes200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array with data of each Content Type.
     */
    contentTypes?: GetAllContentTypes200ApplicationJSONContentTypes[];
}
export declare class GetAllContentTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getAllContentTypes200ApplicationJSONObject?: GetAllContentTypes200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
