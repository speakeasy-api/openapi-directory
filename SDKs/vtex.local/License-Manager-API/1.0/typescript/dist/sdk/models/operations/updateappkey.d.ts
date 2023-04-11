import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateappkeyRequest extends SpeakeasyBase {
    /**
     * Request body for updating AppKeys
     */
    updateappkeyRequest: shared.UpdateappkeyRequest;
    /**
     * ID from the appKey which will be updated
     */
    id: string;
}
export declare class UpdateappkeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    vlmError?: shared.VLMError;
}
