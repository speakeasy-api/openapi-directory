import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPortfolioRequest extends SpeakeasyBase {
    /**
     * The ID of the portfolio.
     */
    portfolioId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The portfolio was returned.
     */
    portfolio?: shared.Portfolio;
}
