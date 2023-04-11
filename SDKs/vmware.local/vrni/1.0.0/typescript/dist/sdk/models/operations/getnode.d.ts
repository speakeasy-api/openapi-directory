import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNodeSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetNodeRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetNodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    node?: shared.Node;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
