import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetPathwayAsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwayAsRequest extends SpeakeasyBase {
    /**
     * The file type to convert to, e.g.
     */
    fileType: string;
    format?: GetGetPathwayAsFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * The revision number of the pathway (use 0 for most recent)
     */
    revision?: number;
}
export declare class GetGetPathwayAsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
