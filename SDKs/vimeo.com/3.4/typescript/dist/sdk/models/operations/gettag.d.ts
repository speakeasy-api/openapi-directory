import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagRequest extends SpeakeasyBase {
    /**
     * The tag to return.
     */
    word: string;
}
export declare class GetTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The tag was returned.
     */
    tag?: shared.Tag;
}
