package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRenewSubscriptionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationOrder")
    public String[] applicationOrder;
    public PutRenewSubscriptionType withApplicationOrder(String[] applicationOrder) {
        this.applicationOrder = applicationOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCredit")
    public Boolean applyCredit;
    public PutRenewSubscriptionType withApplyCredit(Boolean applyCredit) {
        this.applyCredit = applyCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCreditBalance")
    public Boolean applyCreditBalance;
    public PutRenewSubscriptionType withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collect")
    public Boolean collect;
    public PutRenewSubscriptionType withCollect(Boolean collect) {
        this.collect = collect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentDate")
    public LocalDate documentDate;
    public PutRenewSubscriptionType withDocumentDate(LocalDate documentDate) {
        this.documentDate = documentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public Boolean invoice;
    public PutRenewSubscriptionType withInvoice(Boolean invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceCollect")
    public Boolean invoiceCollect;
    public PutRenewSubscriptionType withInvoiceCollect(Boolean invoiceCollect) {
        this.invoiceCollect = invoiceCollect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceTargetDate")
    public LocalDate invoiceTargetDate;
    public PutRenewSubscriptionType withInvoiceTargetDate(LocalDate invoiceTargetDate) {
        this.invoiceTargetDate = invoiceTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runBilling")
    public Boolean runBilling;
    public PutRenewSubscriptionType withRunBilling(Boolean runBilling) {
        this.runBilling = runBilling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PutRenewSubscriptionType withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}