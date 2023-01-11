import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExtractsAccount } from "./dataextractsaccount";
import { DataExtractsHolding } from "./dataextractsholding";
import { DataExtractsProviderAccount } from "./dataextractsprovideraccount";
import { DataExtractsTransaction } from "./dataextractstransaction";
import { DataExtractsUser } from "./dataextractsuser";



export class DataExtractsUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account", elemType: DataExtractsAccount })
  account?: DataExtractsAccount[];

  @SpeakeasyMetadata({ data: "json, name=holding", elemType: DataExtractsHolding })
  holding?: DataExtractsHolding[];

  @SpeakeasyMetadata({ data: "json, name=providerAccount", elemType: DataExtractsProviderAccount })
  providerAccount?: DataExtractsProviderAccount[];

  @SpeakeasyMetadata({ data: "json, name=totalTransactionsCount" })
  totalTransactionsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=transaction", elemType: DataExtractsTransaction })
  transaction?: DataExtractsTransaction[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: DataExtractsUser;
}
