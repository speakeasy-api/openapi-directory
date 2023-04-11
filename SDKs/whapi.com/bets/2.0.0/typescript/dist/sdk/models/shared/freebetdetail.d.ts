import { SpeakeasyBase } from "../../../internal/utils";
export declare class FreeBetDetail extends SpeakeasyBase {
    /**
     * The time the free bet was awarded. For example 2014-11-013T23:59:10
     */
    awardDateTime?: string;
    /**
     * The message explaining the offer displayed to the customer along with the free bet
     */
    displayText?: string;
    /**
     * The time the free bet expired. For example 2014-11-013T23:59:10
     */
    expiryDateTime?: string;
    /**
     * The identifier of the free bet
     */
    id: number;
    /**
     * The description of the offer that enabled the customer to place a free bet
     */
    offerDesc?: string;
    /**
     * The identifier of the offer
     */
    offerId?: number;
    /**
     * The name of the offer that enabled the customer to place a free bet
     */
    offerName: string;
    /**
     * The time the free bet offer started. For example 2014-11-013T23:59:10
     */
    startDateTime?: string;
    /**
     * The value of the free bet
     */
    value: number;
}
