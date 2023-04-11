import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddFiles1Request extends SpeakeasyBase {
    /**
     * Added files to the project as added by PM.
     */
    fileCategorizationsDto: shared.FileCategorizationsDto;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class AddFiles1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
