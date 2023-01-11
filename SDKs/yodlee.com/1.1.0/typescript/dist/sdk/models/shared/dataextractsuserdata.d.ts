import { SpeakeasyBase } from "../../../internal/utils";
import { DataExtractsAccount } from "./dataextractsaccount";
import { DataExtractsHolding } from "./dataextractsholding";
import { DataExtractsProviderAccount } from "./dataextractsprovideraccount";
import { DataExtractsTransaction } from "./dataextractstransaction";
import { DataExtractsUser } from "./dataextractsuser";
export declare class DataExtractsUserData extends SpeakeasyBase {
    account?: DataExtractsAccount[];
    holding?: DataExtractsHolding[];
    providerAccount?: DataExtractsProviderAccount[];
    totalTransactionsCount?: number;
    transaction?: DataExtractsTransaction[];
    user?: DataExtractsUser;
}
