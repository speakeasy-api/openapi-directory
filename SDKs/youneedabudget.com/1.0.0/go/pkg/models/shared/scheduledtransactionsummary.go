// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"openapi/pkg/types"
)

// ScheduledTransactionSummaryFlagColorEnum - The scheduled transaction flag
type ScheduledTransactionSummaryFlagColorEnum string

const (
	ScheduledTransactionSummaryFlagColorEnumRed                    ScheduledTransactionSummaryFlagColorEnum = "red"
	ScheduledTransactionSummaryFlagColorEnumOrange                 ScheduledTransactionSummaryFlagColorEnum = "orange"
	ScheduledTransactionSummaryFlagColorEnumYellow                 ScheduledTransactionSummaryFlagColorEnum = "yellow"
	ScheduledTransactionSummaryFlagColorEnumGreen                  ScheduledTransactionSummaryFlagColorEnum = "green"
	ScheduledTransactionSummaryFlagColorEnumBlue                   ScheduledTransactionSummaryFlagColorEnum = "blue"
	ScheduledTransactionSummaryFlagColorEnumPurple                 ScheduledTransactionSummaryFlagColorEnum = "purple"
	ScheduledTransactionSummaryFlagColorEnumLessThanNilGreaterThan ScheduledTransactionSummaryFlagColorEnum = "<nil>"
)

func (e ScheduledTransactionSummaryFlagColorEnum) ToPointer() *ScheduledTransactionSummaryFlagColorEnum {
	return &e
}

func (e *ScheduledTransactionSummaryFlagColorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "red":
		fallthrough
	case "orange":
		fallthrough
	case "yellow":
		fallthrough
	case "green":
		fallthrough
	case "blue":
		fallthrough
	case "purple":
		fallthrough
	case "<nil>":
		*e = ScheduledTransactionSummaryFlagColorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ScheduledTransactionSummaryFlagColorEnum: %v", v)
	}
}

type ScheduledTransactionSummaryFrequencyEnum string

const (
	ScheduledTransactionSummaryFrequencyEnumNever           ScheduledTransactionSummaryFrequencyEnum = "never"
	ScheduledTransactionSummaryFrequencyEnumDaily           ScheduledTransactionSummaryFrequencyEnum = "daily"
	ScheduledTransactionSummaryFrequencyEnumWeekly          ScheduledTransactionSummaryFrequencyEnum = "weekly"
	ScheduledTransactionSummaryFrequencyEnumEveryOtherWeek  ScheduledTransactionSummaryFrequencyEnum = "everyOtherWeek"
	ScheduledTransactionSummaryFrequencyEnumTwiceAMonth     ScheduledTransactionSummaryFrequencyEnum = "twiceAMonth"
	ScheduledTransactionSummaryFrequencyEnumEvery4Weeks     ScheduledTransactionSummaryFrequencyEnum = "every4Weeks"
	ScheduledTransactionSummaryFrequencyEnumMonthly         ScheduledTransactionSummaryFrequencyEnum = "monthly"
	ScheduledTransactionSummaryFrequencyEnumEveryOtherMonth ScheduledTransactionSummaryFrequencyEnum = "everyOtherMonth"
	ScheduledTransactionSummaryFrequencyEnumEvery3Months    ScheduledTransactionSummaryFrequencyEnum = "every3Months"
	ScheduledTransactionSummaryFrequencyEnumEvery4Months    ScheduledTransactionSummaryFrequencyEnum = "every4Months"
	ScheduledTransactionSummaryFrequencyEnumTwiceAYear      ScheduledTransactionSummaryFrequencyEnum = "twiceAYear"
	ScheduledTransactionSummaryFrequencyEnumYearly          ScheduledTransactionSummaryFrequencyEnum = "yearly"
	ScheduledTransactionSummaryFrequencyEnumEveryOtherYear  ScheduledTransactionSummaryFrequencyEnum = "everyOtherYear"
)

func (e ScheduledTransactionSummaryFrequencyEnum) ToPointer() *ScheduledTransactionSummaryFrequencyEnum {
	return &e
}

func (e *ScheduledTransactionSummaryFrequencyEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "never":
		fallthrough
	case "daily":
		fallthrough
	case "weekly":
		fallthrough
	case "everyOtherWeek":
		fallthrough
	case "twiceAMonth":
		fallthrough
	case "every4Weeks":
		fallthrough
	case "monthly":
		fallthrough
	case "everyOtherMonth":
		fallthrough
	case "every3Months":
		fallthrough
	case "every4Months":
		fallthrough
	case "twiceAYear":
		fallthrough
	case "yearly":
		fallthrough
	case "everyOtherYear":
		*e = ScheduledTransactionSummaryFrequencyEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ScheduledTransactionSummaryFrequencyEnum: %v", v)
	}
}

type ScheduledTransactionSummary struct {
	AccountID string `json:"account_id"`
	// The scheduled transaction amount in milliunits format
	Amount     int64   `json:"amount"`
	CategoryID *string `json:"category_id,omitempty"`
	// The first date for which the Scheduled Transaction was scheduled.
	DateFirst types.Date `json:"date_first"`
	// The next date for which the Scheduled Transaction is scheduled.
	DateNext types.Date `json:"date_next"`
	// Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
	Deleted bool `json:"deleted"`
	// The scheduled transaction flag
	FlagColor *ScheduledTransactionSummaryFlagColorEnum `json:"flag_color,omitempty"`
	Frequency ScheduledTransactionSummaryFrequencyEnum  `json:"frequency"`
	ID        string                                    `json:"id"`
	Memo      *string                                   `json:"memo,omitempty"`
	PayeeID   *string                                   `json:"payee_id,omitempty"`
	// If a transfer, the account_id which the scheduled transaction transfers to
	TransferAccountID *string `json:"transfer_account_id,omitempty"`
}
