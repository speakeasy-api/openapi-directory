import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
export declare class GetAllOrdersResponseType extends SpeakeasyBase {
    nextPage?: string;
    orders?: Order[];
    success?: boolean;
}
