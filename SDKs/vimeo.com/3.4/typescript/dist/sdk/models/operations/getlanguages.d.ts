import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The attribute by which to filter the results.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `texttracks` - Only return text track supported languages
 *
 */
export declare enum GetLanguagesFilterEnum {
    Texttracks = "texttracks"
}
export declare class GetLanguagesRequest extends SpeakeasyBase {
    /**
     * The attribute by which to filter the results.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `texttracks` - Only return text track supported languages
     *
     */
    filter?: GetLanguagesFilterEnum;
}
export declare class GetLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The languages were returned.
     */
    languages?: shared.Language[];
}
