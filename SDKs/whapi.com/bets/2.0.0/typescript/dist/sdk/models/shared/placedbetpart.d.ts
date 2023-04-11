import { SpeakeasyBase } from "../../../internal/utils";
import { PriceFormatted } from "./priceformatted";
export declare class PlacedBetPart extends SpeakeasyBase {
    /**
     * Human-friendly description of the bet
     */
    description: string;
    /**
     * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
     */
    eachWayDen?: number;
    /**
     * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
     */
    eachWayNum?: number;
    /**
     * The Each-way places available for the bet
     */
    eachWayPlaces?: number;
    /**
     * The description of the event
     */
    eventDescription: string;
    /**
     * Unique identifier of the event
     */
    eventId: string;
    /**
     * The description of the market within an event
     */
    eventMarketDescription?: string;
    /**
     * The description of type of the event
     */
    eventTypeDescription?: string;
    /**
     * Denotes if the bet is part of a handicap market. For example: -1 if the selection starts on -1 goals (in football)
     */
    handicap?: number;
    /**
     * The number of the bet
     */
    number: number;
    /**
     * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
     */
    priceDen: number;
    priceFormatted?: PriceFormatted;
    /**
     * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
     */
    priceNum: number;
    /**
     * The price type chosen when the bet was placed. For example: L (Win)
     */
    priceType: string;
    /**
     * The outcome of the bet/event. Can be one of the following values: W - Won; L - Lost; V - Void; - Result not yet available
     */
    result: string;
    /**
     * The official scale of deductions that apply when a runner is withdrawn
     */
    rule4Deductions?: number;
    /**
     * Unique identifier of the selection
     */
    selectionId?: string;
    /**
     * Time the event will start. For example: 2013-01-30 11:01:01
     */
    startDateTime: string;
}
