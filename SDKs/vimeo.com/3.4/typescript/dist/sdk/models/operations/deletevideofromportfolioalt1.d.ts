import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVideoFromPortfolioAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoFromPortfolioAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the portfolio.
     */
    portfolioId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoFromPortfolioAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The portfolio wasn't found, or the video wasn't found.
     */
    legacyError?: shared.LegacyError;
}
