package shared

type RewardBalanceBalanceTypeEnum string

const (
	RewardBalanceBalanceTypeEnumExpiringBalance RewardBalanceBalanceTypeEnum = "EXPIRING_BALANCE"
	RewardBalanceBalanceTypeEnumBalanceToLevel  RewardBalanceBalanceTypeEnum = "BALANCE_TO_LEVEL"
	RewardBalanceBalanceTypeEnumBalanceToReward RewardBalanceBalanceTypeEnum = "BALANCE_TO_REWARD"
	RewardBalanceBalanceTypeEnumBalance         RewardBalanceBalanceTypeEnum = "BALANCE"
	RewardBalanceBalanceTypeEnumTotalBalance    RewardBalanceBalanceTypeEnum = "TOTAL_BALANCE"
)

type RewardBalance struct {
	Balance         *float64                      `json:"balance,omitempty"`
	BalanceToLevel  *string                       `json:"balanceToLevel,omitempty"`
	BalanceToReward *string                       `json:"balanceToReward,omitempty"`
	BalanceType     *RewardBalanceBalanceTypeEnum `json:"balanceType,omitempty"`
	Description     *string                       `json:"description,omitempty"`
	ExpiryDate      *string                       `json:"expiryDate,omitempty"`
	Units           *string                       `json:"units,omitempty"`
}
