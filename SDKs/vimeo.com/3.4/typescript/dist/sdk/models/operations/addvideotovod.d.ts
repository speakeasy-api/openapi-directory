import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoToVodSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoToVodRequestBodyBuyPrice extends SpeakeasyBase {
    /**
     * The purchase price of this video in AUD.
     */
    aud?: number;
    /**
     * The purchase price of this video in CAD.
     */
    cad?: number;
    /**
     * The purchase price of this video in CHF.
     */
    chf?: number;
    /**
     * The purchase price of this video in DKK.
     */
    dkk?: number;
    /**
     * The purchase price of this video in EUR.
     */
    eur?: number;
    /**
     * The purchase price of this video in GBP.
     */
    gbp?: number;
    /**
     * The purchase price of this video in JPY.
     */
    jpy?: number;
    /**
     * The purchase price of this video in KRW.
     */
    krw?: number;
    /**
     * The purchase price of this video in NOK.
     */
    nok?: number;
    /**
     * The purchase price of this video in PLN.
     */
    pln?: number;
    /**
     * The purchase price of this video in SEK.
     */
    sek?: number;
    /**
     * The purchase price of this video in USD. *Required if `buy.active` is true.
     */
    usd?: number;
}
export declare class AddVideoToVodRequestBodyBuy extends SpeakeasyBase {
    price?: AddVideoToVodRequestBodyBuyPrice;
}
export declare class AddVideoToVodRequestBodyRentPrice extends SpeakeasyBase {
    /**
     * The rental price of this video in AUD.
     */
    aud?: number;
    /**
     * The rental price of this video in CAD.
     */
    cad?: number;
    /**
     * The rental price of this video in CHF.
     */
    chf?: number;
    /**
     * The rental price of this video in DKK.
     */
    dkk?: number;
    /**
     * The rental price of this video in EUR.
     */
    eur?: number;
    /**
     * The rental price of this video in GBP.
     */
    gbp?: number;
    /**
     * The rental price of this video in JPY.
     */
    jpy?: number;
    /**
     * The rental price of this video in KRW.
     */
    krw?: number;
    /**
     * The rental price of this video in NOK.
     */
    nok?: number;
    /**
     * The rental price of this video in PLN.
     */
    pln?: number;
    /**
     * The rental price of this video in SEK.
     */
    sek?: number;
    /**
     * The rental price of this video in USD. *Required if `rent.active` is true.
     */
    usd?: number;
}
export declare class AddVideoToVodRequestBodyRent extends SpeakeasyBase {
    price?: AddVideoToVodRequestBodyRentPrice;
}
/**
 * The type of video that you are adding to the On Demand page.
 */
export declare enum AddVideoToVodRequestBodyTypeEnum {
    Extra = "extra",
    Main = "main",
    Trailer = "trailer"
}
export declare class AddVideoToVodRequestBody extends SpeakeasyBase {
    buy?: AddVideoToVodRequestBodyBuy;
    /**
     * The position of this video in the On Demand collection.
     */
    position?: number;
    /**
     * The video release year.
     */
    releaseYear?: number;
    rent?: AddVideoToVodRequestBodyRent;
    /**
     * The type of video that you are adding to the On Demand page.
     */
    type: AddVideoToVodRequestBodyTypeEnum;
}
export declare class AddVideoToVodRequest extends SpeakeasyBase {
    requestBody: AddVideoToVodRequestBody;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoToVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't add the video to this On Demand page.
     */
    legacyError?: shared.LegacyError;
    /**
     * The video was added.
     */
    onDemandVideo?: shared.OnDemandVideo;
}
