import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAll1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    manyValuesPerTypeDTO?: shared.ManyValuesPerTypeDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
