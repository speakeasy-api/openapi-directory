import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPagesbyContentTypeRequest extends SpeakeasyBase {
    /**
     * Builder ID specified in the settings of the CMS app.
     */
    builderId: string;
    /**
     * Content Type identifier defined in the FastStore project.
     */
    contentType: string;
    /**
     * Filter results by a property of the page (e.g., `filters[status]`) or by a nested custom field of the `parameters` object (e.g., `filters[parameters.collection.sort]`).
     *
     * @remarks
     * *Replace {field} with the desired property.*
     */
    filtersField?: string;
    /**
     * Release ID presented in the URL path of a CMS preview.
     */
    releaseId?: string;
    /**
     * Version ID presented in the URL path of a CMS preview.
     */
    versionId?: string;
}
/**
 * Object with data about a specific section.
 */
export declare class GetPagesbyContentType200ApplicationJSONDataSections extends SpeakeasyBase {
    /**
     * Custom field values of the Section. Varies depending on the Section schema defined in the FastStore project.
     */
    data?: Record<string, any>;
    /**
     * Section ID.
     */
    id?: string;
    /**
     * Section name.
     */
    name?: string;
}
/**
 * Object with data from a specific page.
 */
export declare class GetPagesbyContentType200ApplicationJSONData extends SpeakeasyBase {
    /**
     * Document ID presented in the URL path of a CMS preview.
     */
    id?: string;
    /**
     * Name of the page created via the CMS interface.
     */
    name?: string;
    /**
     * Object with the configuration values of a `configurationSchemaSets` tab. Varies depending on the Content Type schema defined in the FastStore project.
     */
    parameters?: Record<string, any>;
    /**
     * Sections that compose the page.
     */
    sections?: GetPagesbyContentType200ApplicationJSONDataSections[];
    /**
     * Current status of the page.
     */
    status?: string;
    /**
     * Name of the Content Type defined in the FastStore project.
     */
    type?: string;
    /**
     * Version ID.
     */
    versionId?: string;
    /**
     * Version status.
     */
    versionStatus?: string;
}
/**
 * OK
 */
export declare class GetPagesbyContentType200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array with data from all pages of the given Content Type.
     */
    data?: GetPagesbyContentType200ApplicationJSONData[];
    /**
     * Indicates if there are more items to fetch.
     */
    hasNextPage?: boolean;
    /**
     * Total number of results.
     */
    totalItems?: number;
}
export declare class GetPagesbyContentTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getPagesbyContentType200ApplicationJSONObject?: GetPagesbyContentType200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
