import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RewardBalanceBalanceTypeEnum {
    ExpiringBalance = "EXPIRING_BALANCE",
    BalanceToLevel = "BALANCE_TO_LEVEL",
    BalanceToReward = "BALANCE_TO_REWARD",
    Balance = "BALANCE",
    TotalBalance = "TOTAL_BALANCE"
}
export declare class RewardBalance extends SpeakeasyBase {
    balance?: number;
    balanceToLevel?: string;
    balanceToReward?: string;
    balanceType?: RewardBalanceBalanceTypeEnum;
    description?: string;
    expiryDate?: string;
    units?: string;
}
