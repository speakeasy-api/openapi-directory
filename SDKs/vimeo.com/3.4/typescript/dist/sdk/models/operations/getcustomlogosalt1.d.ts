import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomLogosAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * The user can't view this custom logo.
     *
     * @remarks
     * * The user can't view custom logos.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom logos were returned.
     */
    pictures?: shared.Picture[];
}
