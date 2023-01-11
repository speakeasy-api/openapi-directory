package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicInfo")
    public java.util.Map<String, Object> basicInfo;
    public GetAccountType withBasicInfo(java.util.Map<String, Object> basicInfo) {
        this.basicInfo = basicInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billToContact")
    public java.util.Map<String, Object> billToContact;
    public GetAccountType withBillToContact(java.util.Map<String, Object> billToContact) {
        this.billToContact = billToContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingAndPayment")
    public GetAccountTypeBillingAndPayment billingAndPayment;
    public GetAccountType withBillingAndPayment(GetAccountTypeBillingAndPayment billingAndPayment) {
        this.billingAndPayment = billingAndPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public GetAccountTypeMetrics metrics;
    public GetAccountType withMetrics(GetAccountTypeMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldToContact")
    public java.util.Map<String, Object> soldToContact;
    public GetAccountType withSoldToContact(java.util.Map<String, Object> soldToContact) {
        this.soldToContact = soldToContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetAccountType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxInfo")
    public GetAccountTypeTaxInfo taxInfo;
    public GetAccountType withTaxInfo(GetAccountTypeTaxInfo taxInfo) {
        this.taxInfo = taxInfo;
        return this;
    }
}