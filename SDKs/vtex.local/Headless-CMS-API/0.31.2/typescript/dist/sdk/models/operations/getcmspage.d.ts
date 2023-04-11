import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCMSpageRequest extends SpeakeasyBase {
    /**
     * Builder ID specified in the settings of the CMS app.
     */
    builderId: string;
    /**
     * Content Type ID defined in the FastStore project.
     */
    contentType: string;
    /**
     * Document ID presented in the URL path of a CMS preview.
     */
    documentId: string;
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
export declare class GetCMSpage200ApplicationJSONSections extends SpeakeasyBase {
    /**
     * Content of the Section. Varies depending on the Section schema defined in the FastStore project.
     */
    data: Record<string, any>;
    /**
     * Section ID.
     */
    id: string;
    /**
     * Section name.
     */
    name: string;
}
/**
 * Object containing the data related to a specific page.
 */
export declare class GetCMSpage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Document ID.
     */
    id: string;
    /**
     * Name of the page created in the CMS app.
     */
    name: string;
    /**
     * Sections that compose the page.
     */
    sections?: GetCMSpage200ApplicationJSONSections[];
    /**
     * Current status of the page.
     */
    status: string;
    /**
     * Name of the Content Type defined in the FastStore project.
     */
    type: string;
    /**
     * Version ID.
     */
    versionId?: string;
    /**
     * Version status
     */
    versionStatus?: string;
}
export declare class GetCMSpageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getCMSpage200ApplicationJSONObject?: GetCMSpage200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
