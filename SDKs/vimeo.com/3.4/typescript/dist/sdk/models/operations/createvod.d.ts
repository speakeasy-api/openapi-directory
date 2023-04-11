import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An array of accepted currencies.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `AUD` - Australian Dollar
 *  * `CAD` - Canadian Dollar
 *  * `CHF` - Swiss Franc
 *  * `DKK` - Danish Krone
 *  * `EUR` - Euro
 *  * `GBP` - British Pound
 *  * `JPY` - Japanese Yen
 *  * `KRW` - South Korean Won
 *  * `NOK` - Norwegian Krone
 *  * `PLN` - Polish Zloty
 *  * `SEK` - Swedish Krona
 *  * `USD` - US Dollar
 *
 */
export declare enum CreateVodRequestBodyAcceptedCurrenciesEnum {
    Aud = "AUD",
    Cad = "CAD",
    Chf = "CHF",
    Dkk = "DKK",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Krw = "KRW",
    Nok = "NOK",
    Pln = "PLN",
    Sek = "SEK",
    Usd = "USD"
}
export declare class CreateVodRequestBodyBuyPrice extends SpeakeasyBase {
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
     * The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`.
     */
    usd?: number;
}
export declare class CreateVodRequestBodyBuy extends SpeakeasyBase {
    /**
     * Whether the Buy action is active. *Required if `rent.active` is false.
     */
    active?: boolean;
    /**
     * Whether people who buy the video can download it. To use this field, `type` must be `film`.
     */
    download?: boolean;
    price?: CreateVodRequestBodyBuyPrice;
}
/**
 * One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
 */
export declare enum CreateVodRequestBodyContentRatingEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}
export declare class CreateVodRequestBodyEpisodesBuyPrice extends SpeakeasyBase {
    /**
     * The purchase price per episode. *Required if `episodes.buy.active` is true.
     */
    usd?: number;
}
export declare class CreateVodRequestBodyEpisodesBuy extends SpeakeasyBase {
    /**
     * Whether episodes can be bought.
     */
    active?: boolean;
    /**
     * Whether people who buy the episode can download it. To use this field, `type` must be `series`.
     */
    download?: boolean;
    price?: CreateVodRequestBodyEpisodesBuyPrice;
}
/**
 * The period in which this episode can be rented for.
 */
export declare enum CreateVodRequestBodyEpisodesRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}
export declare class CreateVodRequestBodyEpisodesRentPrice extends SpeakeasyBase {
    /**
     * The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.
     */
    usd?: number;
}
export declare class CreateVodRequestBodyEpisodesRent extends SpeakeasyBase {
    /**
     * Whether episodes can be rented
     */
    active?: boolean;
    /**
     * The period in which this episode can be rented for.
     */
    period?: CreateVodRequestBodyEpisodesRentPeriodEnum;
    price?: CreateVodRequestBodyEpisodesRentPrice;
}
export declare class CreateVodRequestBodyEpisodes extends SpeakeasyBase {
    buy?: CreateVodRequestBodyEpisodesBuy;
    rent?: CreateVodRequestBodyEpisodesRent;
}
/**
 * The period in which this can be rented for.
 */
export declare enum CreateVodRequestBodyRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}
export declare class CreateVodRequestBodyRentPrice extends SpeakeasyBase {
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
     * The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`.
     */
    usd?: number;
}
export declare class CreateVodRequestBodyRent extends SpeakeasyBase {
    /**
     * Whether the video can be rented. *Required if `buy.active` is false.
     */
    active?: boolean;
    /**
     * The period in which this can be rented for.
     */
    period?: CreateVodRequestBodyRentPeriodEnum;
    price?: CreateVodRequestBodyRentPrice;
}
export declare class CreateVodRequestBodySubscriptionMonthlyPrice extends SpeakeasyBase {
    /**
     * The monthly subscription price in USD. *Required if `subscription.active` is true.
     */
    usd?: number;
}
export declare class CreateVodRequestBodySubscriptionMonthly extends SpeakeasyBase {
    /**
     * Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false.
     */
    active?: boolean;
    price?: CreateVodRequestBodySubscriptionMonthlyPrice;
}
export declare class CreateVodRequestBodySubscription extends SpeakeasyBase {
    monthly?: CreateVodRequestBodySubscriptionMonthly;
}
/**
 * The type of On Demand page.
 */
export declare enum CreateVodRequestBodyTypeEnum {
    Film = "film",
    Series = "series"
}
export declare class CreateVodRequestBody extends SpeakeasyBase {
    /**
     * An array of accepted currencies.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `AUD` - Australian Dollar
     *  * `CAD` - Canadian Dollar
     *  * `CHF` - Swiss Franc
     *  * `DKK` - Danish Krone
     *  * `EUR` - Euro
     *  * `GBP` - British Pound
     *  * `JPY` - Japanese Yen
     *  * `KRW` - South Korean Won
     *  * `NOK` - Norwegian Krone
     *  * `PLN` - Polish Zloty
     *  * `SEK` - Swedish Krona
     *  * `USD` - US Dollar
     *
     */
    acceptedCurrencies?: CreateVodRequestBodyAcceptedCurrenciesEnum;
    buy?: CreateVodRequestBodyBuy;
    /**
     * One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
     */
    contentRating: CreateVodRequestBodyContentRatingEnum;
    /**
     * The description of the On Demand page.
     */
    description: string;
    /**
     * The custom domain of the On Demand page.
     */
    domainLink?: string;
    episodes?: CreateVodRequestBodyEpisodes;
    /**
     * The custom string to use in this On Demand page's Vimeo URL.
     */
    link?: string;
    /**
     * The name of the On Demand page.
     */
    name: string;
    rent?: CreateVodRequestBodyRent;
    subscription?: CreateVodRequestBodySubscription;
    /**
     * The type of On Demand page.
     */
    type: CreateVodRequestBodyTypeEnum;
}
export declare class CreateVodRequest extends SpeakeasyBase {
    requestBody: CreateVodRequestBody;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CreateVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The On Demand page was created.
     */
    onDemandPage?: shared.OnDemandPage;
}
