import { SpeakeasyBase } from "../../../internal/utils";
import { Frequency } from "./frequency";
export declare class AddrecurrenceitemRequest extends SpeakeasyBase {
    frequency: Frequency;
    quantity: number;
    seller: string;
    shippingAddressId: string;
    sku: string;
}
