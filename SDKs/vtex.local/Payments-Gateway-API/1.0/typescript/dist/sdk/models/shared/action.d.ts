import { SpeakeasyBase } from "../../../internal/utils";
import { Payment1 } from "./payment1";
export declare class Action extends SpeakeasyBase {
    connectorResponse: string;
    date: string;
    payment: Payment1;
    paymentId: string;
    type: string;
    value: number;
}
