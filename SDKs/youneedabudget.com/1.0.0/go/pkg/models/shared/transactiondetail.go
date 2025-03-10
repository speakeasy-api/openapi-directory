// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"openapi/pkg/types"
)

// TransactionDetailClearedEnum - The cleared status of the transaction
type TransactionDetailClearedEnum string

const (
	TransactionDetailClearedEnumCleared    TransactionDetailClearedEnum = "cleared"
	TransactionDetailClearedEnumUncleared  TransactionDetailClearedEnum = "uncleared"
	TransactionDetailClearedEnumReconciled TransactionDetailClearedEnum = "reconciled"
)

func (e TransactionDetailClearedEnum) ToPointer() *TransactionDetailClearedEnum {
	return &e
}

func (e *TransactionDetailClearedEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "cleared":
		fallthrough
	case "uncleared":
		fallthrough
	case "reconciled":
		*e = TransactionDetailClearedEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TransactionDetailClearedEnum: %v", v)
	}
}

// TransactionDetailDebtTransactionTypeEnum - If the transaction is a debt/loan account transaction, the type of transaction
type TransactionDetailDebtTransactionTypeEnum string

const (
	TransactionDetailDebtTransactionTypeEnumPayment                TransactionDetailDebtTransactionTypeEnum = "payment"
	TransactionDetailDebtTransactionTypeEnumRefund                 TransactionDetailDebtTransactionTypeEnum = "refund"
	TransactionDetailDebtTransactionTypeEnumFee                    TransactionDetailDebtTransactionTypeEnum = "fee"
	TransactionDetailDebtTransactionTypeEnumInterest               TransactionDetailDebtTransactionTypeEnum = "interest"
	TransactionDetailDebtTransactionTypeEnumEscrow                 TransactionDetailDebtTransactionTypeEnum = "escrow"
	TransactionDetailDebtTransactionTypeEnumBalancedAdjustment     TransactionDetailDebtTransactionTypeEnum = "balancedAdjustment"
	TransactionDetailDebtTransactionTypeEnumCredit                 TransactionDetailDebtTransactionTypeEnum = "credit"
	TransactionDetailDebtTransactionTypeEnumCharge                 TransactionDetailDebtTransactionTypeEnum = "charge"
	TransactionDetailDebtTransactionTypeEnumLessThanNilGreaterThan TransactionDetailDebtTransactionTypeEnum = "<nil>"
)

func (e TransactionDetailDebtTransactionTypeEnum) ToPointer() *TransactionDetailDebtTransactionTypeEnum {
	return &e
}

func (e *TransactionDetailDebtTransactionTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "payment":
		fallthrough
	case "refund":
		fallthrough
	case "fee":
		fallthrough
	case "interest":
		fallthrough
	case "escrow":
		fallthrough
	case "balancedAdjustment":
		fallthrough
	case "credit":
		fallthrough
	case "charge":
		fallthrough
	case "<nil>":
		*e = TransactionDetailDebtTransactionTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TransactionDetailDebtTransactionTypeEnum: %v", v)
	}
}

// TransactionDetailFlagColorEnum - The transaction flag
type TransactionDetailFlagColorEnum string

const (
	TransactionDetailFlagColorEnumRed                    TransactionDetailFlagColorEnum = "red"
	TransactionDetailFlagColorEnumOrange                 TransactionDetailFlagColorEnum = "orange"
	TransactionDetailFlagColorEnumYellow                 TransactionDetailFlagColorEnum = "yellow"
	TransactionDetailFlagColorEnumGreen                  TransactionDetailFlagColorEnum = "green"
	TransactionDetailFlagColorEnumBlue                   TransactionDetailFlagColorEnum = "blue"
	TransactionDetailFlagColorEnumPurple                 TransactionDetailFlagColorEnum = "purple"
	TransactionDetailFlagColorEnumLessThanNilGreaterThan TransactionDetailFlagColorEnum = "<nil>"
)

func (e TransactionDetailFlagColorEnum) ToPointer() *TransactionDetailFlagColorEnum {
	return &e
}

func (e *TransactionDetailFlagColorEnum) UnmarshalJSON(data []byte) error {
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
		*e = TransactionDetailFlagColorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TransactionDetailFlagColorEnum: %v", v)
	}
}

type TransactionDetail struct {
	AccountID   string `json:"account_id"`
	AccountName string `json:"account_name"`
	// The transaction amount in milliunits format
	Amount int64 `json:"amount"`
	// Whether or not the transaction is approved
	Approved   bool    `json:"approved"`
	CategoryID *string `json:"category_id,omitempty"`
	// The name of the category.  If a split transaction, this will be 'Split'.
	CategoryName *string `json:"category_name,omitempty"`
	// The cleared status of the transaction
	Cleared TransactionDetailClearedEnum `json:"cleared"`
	// The transaction date in ISO format (e.g. 2016-12-01)
	Date types.Date `json:"date"`
	// If the transaction is a debt/loan account transaction, the type of transaction
	DebtTransactionType *TransactionDetailDebtTransactionTypeEnum `json:"debt_transaction_type,omitempty"`
	// Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.
	Deleted bool `json:"deleted"`
	// The transaction flag
	FlagColor *TransactionDetailFlagColorEnum `json:"flag_color,omitempty"`
	ID        string                          `json:"id"`
	// If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.
	ImportID *string `json:"import_id,omitempty"`
	// If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules
	ImportPayeeName *string `json:"import_payee_name,omitempty"`
	// If the transaction was imported, the original payee name as it appeared on the statement
	ImportPayeeNameOriginal *string `json:"import_payee_name_original,omitempty"`
	// If transaction is matched, the id of the matched transaction
	MatchedTransactionID *string `json:"matched_transaction_id,omitempty"`
	Memo                 *string `json:"memo,omitempty"`
	PayeeID              *string `json:"payee_id,omitempty"`
	PayeeName            *string `json:"payee_name,omitempty"`
	// If a split transaction, the subtransactions.
	Subtransactions []SubTransaction `json:"subtransactions"`
	// If a transfer transaction, the account to which it transfers
	TransferAccountID *string `json:"transfer_account_id,omitempty"`
	// If a transfer transaction, the id of transaction on the other side of the transfer
	TransferTransactionID *string `json:"transfer_transaction_id,omitempty"`
}
