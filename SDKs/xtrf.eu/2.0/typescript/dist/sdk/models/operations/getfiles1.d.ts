import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFiles1Request extends SpeakeasyBase {
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class GetFiles1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * ok
     */
    projectFileDtos?: shared.ProjectFileDto[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
