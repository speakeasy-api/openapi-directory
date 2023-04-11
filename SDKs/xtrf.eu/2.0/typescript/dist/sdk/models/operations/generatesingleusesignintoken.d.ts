import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateSingleUseSignInTokenResponse extends SpeakeasyBase {
    /**
     * Success
     */
    accessTokenDTO?: shared.AccessTokenDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
