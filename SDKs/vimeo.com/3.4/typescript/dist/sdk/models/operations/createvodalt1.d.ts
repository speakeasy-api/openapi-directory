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
export declare enum CreateVodAlt1RequestBodyAcceptedCurrenciesEnum {
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
export declare class CreateVodAlt1RequestBodyBuyPrice extends SpeakeasyBase {
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
export declare class CreateVodAlt1RequestBodyBuy extends SpeakeasyBase {
    /**
     * Whether the Buy action is active. *Required if `rent.active` is false.
     */
    active?: boolean;
    /**
     * Whether people who buy the video can download it. To use this field, `type` must be `film`.
     */
    download?: boolean;
    price?: CreateVodAlt1RequestBodyBuyPrice;
}
/**
 * One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
 */
export declare enum CreateVodAlt1RequestBodyContentRatingEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}
export declare class CreateVodAlt1RequestBodyEpisodesBuyPrice extends SpeakeasyBase {
    /**
     * The purchase price per episode. *Required if `episodes.buy.active` is true.
     */
    usd?: number;
}
export declare class CreateVodAlt1RequestBodyEpisodesBuy extends SpeakeasyBase {
    /**
     * Whether episodes can be bought.
     */
    active?: boolean;
    /**
     * Whether people who buy the episode can download it. To use this field, `type` must be `series`.
     */
    download?: boolean;
    price?: CreateVodAlt1RequestBodyEpisodesBuyPrice;
}
/**
 * The period in which this episode can be rented for.
 */
export declare enum CreateVodAlt1RequestBodyEpisodesRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}
export declare class CreateVodAlt1RequestBodyEpisodesRentPrice extends SpeakeasyBase {
    /**
     * The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.
     */
    usd?: number;
}
export declare class CreateVodAlt1RequestBodyEpisodesRent extends SpeakeasyBase {
    /**
     * Whether episodes can be rented
     */
    active?: boolean;
    /**
     * The period in which this episode can be rented for.
     */
    period?: CreateVodAlt1RequestBodyEpisodesRentPeriodEnum;
    price?: CreateVodAlt1RequestBodyEpisodesRentPrice;
}
export declare class CreateVodAlt1RequestBodyEpisodes extends SpeakeasyBase {
    buy?: CreateVodAlt1RequestBodyEpisodesBuy;
    rent?: CreateVodAlt1RequestBodyEpisodesRent;
}
/**
 * The period in which this can be rented for.
 */
export declare enum CreateVodAlt1RequestBodyRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}
export declare class CreateVodAlt1RequestBodyRentPrice extends SpeakeasyBase {
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
export declare class CreateVodAlt1RequestBodyRent extends SpeakeasyBase {
    /**
     * Whether the video can be rented. *Required if `buy.active` is false.
     */
    active?: boolean;
    /**
     * The period in which this can be rented for.
     */
    period?: CreateVodAlt1RequestBodyRentPeriodEnum;
    price?: CreateVodAlt1RequestBodyRentPrice;
}
export declare class CreateVodAlt1RequestBodySubscriptionMonthlyPrice extends SpeakeasyBase {
    /**
     * The monthly subscription price in USD. *Required if `subscription.active` is true.
     */
    usd?: number;
}
export declare class CreateVodAlt1RequestBodySubscriptionMonthly extends SpeakeasyBase {
    /**
     * Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false.
     */
    active?: boolean;
    price?: CreateVodAlt1RequestBodySubscriptionMonthlyPrice;
}
export declare class CreateVodAlt1RequestBodySubscription extends SpeakeasyBase {
    monthly?: CreateVodAlt1RequestBodySubscriptionMonthly;
}
/**
 * The type of On Demand page.
 */
export declare enum CreateVodAlt1RequestBodyTypeEnum {
    Film = "film",
    Series = "series"
}
export declare class CreateVodAlt1RequestBody extends SpeakeasyBase {
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
    acceptedCurrencies?: CreateVodAlt1RequestBodyAcceptedCurrenciesEnum;
    buy?: CreateVodAlt1RequestBodyBuy;
    /**
     * One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
     */
    contentRating: CreateVodAlt1RequestBodyContentRatingEnum;
    /**
     * The description of the On Demand page.
     */
    description: string;
    /**
     * The custom domain of the On Demand page.
     */
    domainLink?: string;
    episodes?: CreateVodAlt1RequestBodyEpisodes;
    /**
     * The custom string to use in this On Demand page's Vimeo URL.
     */
    link?: string;
    /**
     * The name of the On Demand page.
     */
    name: string;
    rent?: CreateVodAlt1RequestBodyRent;
    subscription?: CreateVodAlt1RequestBodySubscription;
    /**
     * The type of On Demand page.
     */
    type: CreateVodAlt1RequestBodyTypeEnum;
}
export declare class CreateVodAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The On Demand page was created.
     */
    onDemandPage?: shared.OnDemandPage;
}
