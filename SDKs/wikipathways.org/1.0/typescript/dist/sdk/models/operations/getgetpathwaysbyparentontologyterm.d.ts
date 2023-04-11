import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetPathwaysByParentOntologyTermFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwaysByParentOntologyTermRequest extends SpeakeasyBase {
    format?: GetGetPathwaysByParentOntologyTermFormatEnum;
    /**
     * The Ontology term
     */
    term: string;
}
export declare class GetGetPathwaysByParentOntologyTermResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
