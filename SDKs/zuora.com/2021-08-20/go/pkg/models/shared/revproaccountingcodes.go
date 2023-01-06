package shared

type RevproAccountingCodes struct {
	AdjustmentLiabilityAccount string `json:"adjustmentLiabilityAccount"`
	AdjustmentRevenueAccount   string `json:"adjustmentRevenueAccount"`
	ContractAssetAccount       string `json:"contractAssetAccount"`
	ContractLiabilityAccount   string `json:"contractLiabilityAccount"`
	ProductRatePlanChargeID    string `json:"productRatePlanChargeId"`
	RecognizedRevenueAccount   string `json:"recognizedRevenueAccount"`
	UnbilledReceivablesAccount string `json:"unbilledReceivablesAccount"`
}
