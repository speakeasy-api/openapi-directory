import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditVodSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditVodRequestBodyPreorder extends SpeakeasyBase {
    /**
     * If set to true, you will enable pre-orders on the On Demand page.
     */
    active?: boolean;
    /**
     * The time that the On Demand page will be published. *Required if `preorder.active` is `true`.
     */
    publishTime?: string;
}
export declare class EditVodRequestBodyPublish extends SpeakeasyBase {
    /**
     * Whether to publish the On Demand page.
     */
    active?: boolean;
}
export declare class EditVodRequestBody extends SpeakeasyBase {
    /**
     * The custom string to use in this On Demand page's Vimeo URL.
     */
    link?: string;
    preorder?: EditVodRequestBodyPreorder;
    publish?: EditVodRequestBodyPublish;
    /**
     * Whether to publish the On Demand page automatically after all videos are finished transcoding.
     */
    publishWhenReady?: boolean;
}
export declare class EditVodRequest extends SpeakeasyBase {
    requestBody?: EditVodRequestBody;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class EditVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't edit the On Demand page.
     */
    legacyError?: shared.LegacyError;
    /**
     * The On Demand page was edited.
     */
    onDemandPage?: shared.OnDemandPage;
}
