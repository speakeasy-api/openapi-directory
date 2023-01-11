import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RewardBalanceBalanceTypeEnum {
    ExpiringBalance = "EXPIRING_BALANCE",
    BalanceToLevel = "BALANCE_TO_LEVEL",
    BalanceToReward = "BALANCE_TO_REWARD",
    Balance = "BALANCE",
    TotalBalance = "TOTAL_BALANCE"
}


export class RewardBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=balanceToLevel" })
  balanceToLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=balanceToReward" })
  balanceToReward?: string;

  @SpeakeasyMetadata({ data: "json, name=balanceType" })
  balanceType?: RewardBalanceBalanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expiryDate" })
  expiryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}
