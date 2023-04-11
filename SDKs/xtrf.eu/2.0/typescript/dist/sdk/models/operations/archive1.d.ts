import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Archive1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    filesArchiveDto?: shared.FilesArchiveDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
