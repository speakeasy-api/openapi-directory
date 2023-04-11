import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetOntologyTermsByPathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetOntologyTermsByPathwayRequest extends SpeakeasyBase {
    format?: GetGetOntologyTermsByPathwayFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
}
export declare class GetGetOntologyTermsByPathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
