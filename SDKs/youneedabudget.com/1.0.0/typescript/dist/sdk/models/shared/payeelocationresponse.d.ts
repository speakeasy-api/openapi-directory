import { SpeakeasyBase } from "../../../internal/utils";
import { PayeeLocation } from "./payeelocation";
export declare class PayeeLocationResponseData extends SpeakeasyBase {
    payeeLocation: PayeeLocation;
}
/**
 * The payee location
 */
export declare class PayeeLocationResponse extends SpeakeasyBase {
    data: PayeeLocationResponseData;
}
