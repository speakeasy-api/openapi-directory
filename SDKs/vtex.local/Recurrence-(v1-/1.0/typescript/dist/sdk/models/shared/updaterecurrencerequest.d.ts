import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
export declare class UpdaterecurrenceRequest extends SpeakeasyBase {
    deliveryDay: number;
    deliveryWeekday: string;
    email: string;
    items: Item[];
    paymentAccountId: string;
}
