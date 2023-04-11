import { SpeakeasyBase } from "../../../internal/utils";
import { Betslippart } from "./betslippart";
export declare class Betslipleg extends SpeakeasyBase {
    parts: Betslippart[];
    /**
     * The leg sort. This element is present for complex bets but not for single bets.
     */
    sort?: string;
    /**
     * Type of leg that was placed on the bet, such as Win or Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.
     */
    type: string;
}
