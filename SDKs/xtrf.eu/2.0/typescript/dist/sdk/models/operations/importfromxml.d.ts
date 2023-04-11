import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportFromXMLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importResultDTO?: shared.ImportResultDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
