import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPortfolioVideoRequest extends SpeakeasyBase {
    /**
     * The ID of the portfolio.
     */
    portfolioId: number;
    /**
     * The ID of the user.
     */
    userId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetPortfolioVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The video was returned.
     */
    video?: shared.Video;
}
