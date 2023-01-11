package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public TaxLine withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public TaxLine withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LiabilityAccount")
    public String liabilityAccount;
    public TaxLine withLiabilityAccount(String liabilityAccount) {
        this.liabilityAccount = liabilityAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManualTaxType")
    public ManualTaxTypeEnum manualTaxType;
    public TaxLine withManualTaxType(ManualTaxTypeEnum manualTaxType) {
        this.manualTaxType = manualTaxType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayslipTaxLineID")
    public String payslipTaxLineID;
    public TaxLine withPayslipTaxLineId(String payslipTaxLineID) {
        this.payslipTaxLineID = payslipTaxLineID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxTypeName")
    public String taxTypeName;
    public TaxLine withTaxTypeName(String taxTypeName) {
        this.taxTypeName = taxTypeName;
        return this;
    }
}