import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVideoPrivacyDomainSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoPrivacyDomainRequest extends SpeakeasyBase {
    /**
     * The domain name.
     */
    domain: string;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoPrivacyDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The video isn't set to a user-defined access list.
     */
    legacyError?: shared.LegacyError;
}
