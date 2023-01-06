package shared

type HoldingTypeListResponseHoldingTypeEnum string

const (
	HoldingTypeListResponseHoldingTypeEnumStock               HoldingTypeListResponseHoldingTypeEnum = "stock"
	HoldingTypeListResponseHoldingTypeEnumMutualFund          HoldingTypeListResponseHoldingTypeEnum = "mutualFund"
	HoldingTypeListResponseHoldingTypeEnumBond                HoldingTypeListResponseHoldingTypeEnum = "bond"
	HoldingTypeListResponseHoldingTypeEnumCd                  HoldingTypeListResponseHoldingTypeEnum = "CD"
	HoldingTypeListResponseHoldingTypeEnumOption              HoldingTypeListResponseHoldingTypeEnum = "option"
	HoldingTypeListResponseHoldingTypeEnumMoneyMarketFund     HoldingTypeListResponseHoldingTypeEnum = "moneyMarketFund"
	HoldingTypeListResponseHoldingTypeEnumOther               HoldingTypeListResponseHoldingTypeEnum = "other"
	HoldingTypeListResponseHoldingTypeEnumRemic               HoldingTypeListResponseHoldingTypeEnum = "remic"
	HoldingTypeListResponseHoldingTypeEnumFuture              HoldingTypeListResponseHoldingTypeEnum = "future"
	HoldingTypeListResponseHoldingTypeEnumCommodity           HoldingTypeListResponseHoldingTypeEnum = "commodity"
	HoldingTypeListResponseHoldingTypeEnumCurrency            HoldingTypeListResponseHoldingTypeEnum = "currency"
	HoldingTypeListResponseHoldingTypeEnumUnitInvestmentTrust HoldingTypeListResponseHoldingTypeEnum = "unitInvestmentTrust"
	HoldingTypeListResponseHoldingTypeEnumEmployeeStockOption HoldingTypeListResponseHoldingTypeEnum = "employeeStockOption"
	HoldingTypeListResponseHoldingTypeEnumInsuranceAnnuity    HoldingTypeListResponseHoldingTypeEnum = "insuranceAnnuity"
	HoldingTypeListResponseHoldingTypeEnumUnknown             HoldingTypeListResponseHoldingTypeEnum = "unknown"
	HoldingTypeListResponseHoldingTypeEnumPreferredStock      HoldingTypeListResponseHoldingTypeEnum = "preferredStock"
	HoldingTypeListResponseHoldingTypeEnumEtf                 HoldingTypeListResponseHoldingTypeEnum = "ETF"
	HoldingTypeListResponseHoldingTypeEnumWarrants            HoldingTypeListResponseHoldingTypeEnum = "warrants"
	HoldingTypeListResponseHoldingTypeEnumEtn                 HoldingTypeListResponseHoldingTypeEnum = "ETN"
)

type HoldingTypeListResponse struct {
	HoldingType []HoldingTypeListResponseHoldingTypeEnum `json:"holdingType,omitempty"`
}
