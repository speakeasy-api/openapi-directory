import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TspUrlUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Global dial-in URL of the user.
 */
export declare class TSPURLUpdateTSPGlobalDialInURLSetting extends SpeakeasyBase {
    /**
     * The global dial-in URL for a TSP enabled account. The URL must be valid with a max-length of 512 characters.
     */
    audioUrl?: string;
}
export declare class TspUrlUpdateRequest extends SpeakeasyBase {
    /**
     * Global dial-in URL of the user.
     */
    requestBody?: TSPURLUpdateTSPGlobalDialInURLSetting;
    /**
     * The userId or email address of the user.
     */
    userId: string;
}
export declare class TspUrlUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
