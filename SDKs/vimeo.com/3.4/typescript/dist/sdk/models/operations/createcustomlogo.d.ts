import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCustomLogoSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateCustomLogoRequest extends SpeakeasyBase {
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CreateCustomLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * You can't upload pictures for another user's videos.
     *
     * @remarks
     * * The user can't add a custom logo.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom logo was created.
     */
    picture?: shared.Picture;
}
