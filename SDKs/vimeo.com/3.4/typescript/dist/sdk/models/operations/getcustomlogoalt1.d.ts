import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomLogoAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the custom logo.
     */
    logoId: number;
}
export declare class GetCustomLogoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user can't view custom logos.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom logo was returned.
     */
    picture?: shared.Picture;
}
