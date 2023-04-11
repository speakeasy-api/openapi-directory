import { SpeakeasyBase } from "../../../internal/utils";
import { Transactions } from "./transactions";
export declare class Response extends SpeakeasyBase {
    balance: number;
    caption: string;
    emissionDate: string;
    expiringDate: string;
    id: string;
    redemptionCode: string;
    redemptionToken: string;
    relationName: string;
    transactions: Transactions;
}
