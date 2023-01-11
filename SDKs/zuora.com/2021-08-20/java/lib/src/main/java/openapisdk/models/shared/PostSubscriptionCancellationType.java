package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSubscriptionCancellationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationOrder")
    public String[] applicationOrder;
    public PostSubscriptionCancellationType withApplicationOrder(String[] applicationOrder) {
        this.applicationOrder = applicationOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCredit")
    public Boolean applyCredit;
    public PostSubscriptionCancellationType withApplyCredit(Boolean applyCredit) {
        this.applyCredit = applyCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCreditBalance")
    public Boolean applyCreditBalance;
    public PostSubscriptionCancellationType withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationEffectiveDate")
    public LocalDate cancellationEffectiveDate;
    public PostSubscriptionCancellationType withCancellationEffectiveDate(LocalDate cancellationEffectiveDate) {
        this.cancellationEffectiveDate = cancellationEffectiveDate;
        return this;
    }
    @JsonProperty("cancellationPolicy")
    public String cancellationPolicy;
    public PostSubscriptionCancellationType withCancellationPolicy(String cancellationPolicy) {
        this.cancellationPolicy = cancellationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collect")
    public Boolean collect;
    public PostSubscriptionCancellationType withCollect(Boolean collect) {
        this.collect = collect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractEffectiveDate")
    public LocalDate contractEffectiveDate;
    public PostSubscriptionCancellationType withContractEffectiveDate(LocalDate contractEffectiveDate) {
        this.contractEffectiveDate = contractEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentDate")
    public LocalDate documentDate;
    public PostSubscriptionCancellationType withDocumentDate(LocalDate documentDate) {
        this.documentDate = documentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public Boolean invoice;
    public PostSubscriptionCancellationType withInvoice(Boolean invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonProperty("invoiceCollect")
    public Boolean invoiceCollect;
    public PostSubscriptionCancellationType withInvoiceCollect(Boolean invoiceCollect) {
        this.invoiceCollect = invoiceCollect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceTargetDate")
    public LocalDate invoiceTargetDate;
    public PostSubscriptionCancellationType withInvoiceTargetDate(LocalDate invoiceTargetDate) {
        this.invoiceTargetDate = invoiceTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runBilling")
    public Boolean runBilling;
    public PostSubscriptionCancellationType withRunBilling(Boolean runBilling) {
        this.runBilling = runBilling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PostSubscriptionCancellationType withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}