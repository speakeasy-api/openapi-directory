import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoPrivacyDomainSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoPrivacyDomainRequest extends SpeakeasyBase {
    /**
     * The domain name.
     */
    domain: string;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoPrivacyDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The video doesn't have a user-defined access list.
     */
    legacyError?: shared.LegacyError;
}
