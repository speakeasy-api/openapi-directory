import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetPathwaysByOntologyTermFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwaysByOntologyTermRequest extends SpeakeasyBase {
    format?: GetGetPathwaysByOntologyTermFormatEnum;
    /**
     * The Ontology term
     */
    term: string;
}
export declare class GetGetPathwaysByOntologyTermResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
