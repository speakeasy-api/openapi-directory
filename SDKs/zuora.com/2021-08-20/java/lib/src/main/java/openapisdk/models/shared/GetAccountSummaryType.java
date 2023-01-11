package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountSummaryType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicInfo")
    public java.util.Map<String, Object> basicInfo;
    public GetAccountSummaryType withBasicInfo(java.util.Map<String, Object> basicInfo) {
        this.basicInfo = basicInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billToContact")
    public java.util.Map<String, Object> billToContact;
    public GetAccountSummaryType withBillToContact(java.util.Map<String, Object> billToContact) {
        this.billToContact = billToContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public GetAccountSummaryInvoiceType[] invoices;
    public GetAccountSummaryType withInvoices(GetAccountSummaryInvoiceType[] invoices) {
        this.invoices = invoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payments")
    public GetAccountSummaryPaymentType[] payments;
    public GetAccountSummaryType withPayments(GetAccountSummaryPaymentType[] payments) {
        this.payments = payments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldToContact")
    public java.util.Map<String, Object> soldToContact;
    public GetAccountSummaryType withSoldToContact(java.util.Map<String, Object> soldToContact) {
        this.soldToContact = soldToContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public java.util.Map<String, Object>[] subscriptions;
    public GetAccountSummaryType withSubscriptions(java.util.Map<String, Object>[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetAccountSummaryType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxInfo")
    public GetAccountSummaryTypeTaxInfo taxInfo;
    public GetAccountSummaryType withTaxInfo(GetAccountSummaryTypeTaxInfo taxInfo) {
        this.taxInfo = taxInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public GetAccountSummaryUsageType[] usage;
    public GetAccountSummaryType withUsage(GetAccountSummaryUsageType[] usage) {
        this.usage = usage;
        return this;
    }
}