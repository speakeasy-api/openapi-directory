import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListNodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    nodeListResult?: shared.NodeListResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
