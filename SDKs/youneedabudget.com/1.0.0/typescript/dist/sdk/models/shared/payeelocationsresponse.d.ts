import { SpeakeasyBase } from "../../../internal/utils";
import { PayeeLocation } from "./payeelocation";
export declare class PayeeLocationsResponseData extends SpeakeasyBase {
    payeeLocations: PayeeLocation[];
}
/**
 * The list of payee locations
 */
export declare class PayeeLocationsResponse extends SpeakeasyBase {
    data: PayeeLocationsResponseData;
}
