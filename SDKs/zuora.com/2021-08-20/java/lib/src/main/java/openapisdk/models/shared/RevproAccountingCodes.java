package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RevproAccountingCodes {
    @JsonProperty("adjustmentLiabilityAccount")
    public String adjustmentLiabilityAccount;
    public RevproAccountingCodes withAdjustmentLiabilityAccount(String adjustmentLiabilityAccount) {
        this.adjustmentLiabilityAccount = adjustmentLiabilityAccount;
        return this;
    }
    @JsonProperty("adjustmentRevenueAccount")
    public String adjustmentRevenueAccount;
    public RevproAccountingCodes withAdjustmentRevenueAccount(String adjustmentRevenueAccount) {
        this.adjustmentRevenueAccount = adjustmentRevenueAccount;
        return this;
    }
    @JsonProperty("contractAssetAccount")
    public String contractAssetAccount;
    public RevproAccountingCodes withContractAssetAccount(String contractAssetAccount) {
        this.contractAssetAccount = contractAssetAccount;
        return this;
    }
    @JsonProperty("contractLiabilityAccount")
    public String contractLiabilityAccount;
    public RevproAccountingCodes withContractLiabilityAccount(String contractLiabilityAccount) {
        this.contractLiabilityAccount = contractLiabilityAccount;
        return this;
    }
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public RevproAccountingCodes withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonProperty("recognizedRevenueAccount")
    public String recognizedRevenueAccount;
    public RevproAccountingCodes withRecognizedRevenueAccount(String recognizedRevenueAccount) {
        this.recognizedRevenueAccount = recognizedRevenueAccount;
        return this;
    }
    @JsonProperty("unbilledReceivablesAccount")
    public String unbilledReceivablesAccount;
    public RevproAccountingCodes withUnbilledReceivablesAccount(String unbilledReceivablesAccount) {
        this.unbilledReceivablesAccount = unbilledReceivablesAccount;
        return this;
    }
}