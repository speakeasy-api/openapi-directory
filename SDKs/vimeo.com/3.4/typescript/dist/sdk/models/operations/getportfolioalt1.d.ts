import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPortfolioAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the portfolio.
     */
    portfolioId: number;
}
export declare class GetPortfolioAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The portfolio was returned.
     */
    portfolio?: shared.Portfolio;
}
