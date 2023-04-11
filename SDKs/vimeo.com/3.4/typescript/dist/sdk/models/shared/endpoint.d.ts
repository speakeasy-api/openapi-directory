import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Standard request.
 */
export declare class Endpoint extends SpeakeasyBase {
    /**
     * All HTTP methods permitted on this endpoint.
     */
    methods: string[];
    /**
     * The path section of the URL, which, when appended to the API host `https:///api.vimeo.com`, builds a full API endpoint.
     */
    path: string;
}
