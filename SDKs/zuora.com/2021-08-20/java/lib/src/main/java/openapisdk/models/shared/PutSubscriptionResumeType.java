package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSubscriptionResumeType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationOrder")
    public String[] applicationOrder;
    public PutSubscriptionResumeType withApplicationOrder(String[] applicationOrder) {
        this.applicationOrder = applicationOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCredit")
    public Boolean applyCredit;
    public PutSubscriptionResumeType withApplyCredit(Boolean applyCredit) {
        this.applyCredit = applyCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCreditBalance")
    public Boolean applyCreditBalance;
    public PutSubscriptionResumeType withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collect")
    public Boolean collect;
    public PutSubscriptionResumeType withCollect(Boolean collect) {
        this.collect = collect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractEffectiveDate")
    public LocalDate contractEffectiveDate;
    public PutSubscriptionResumeType withContractEffectiveDate(LocalDate contractEffectiveDate) {
        this.contractEffectiveDate = contractEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentDate")
    public LocalDate documentDate;
    public PutSubscriptionResumeType withDocumentDate(LocalDate documentDate) {
        this.documentDate = documentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendsTerm")
    public Boolean extendsTerm;
    public PutSubscriptionResumeType withExtendsTerm(Boolean extendsTerm) {
        this.extendsTerm = extendsTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public Boolean invoice;
    public PutSubscriptionResumeType withInvoice(Boolean invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceCollect")
    public Boolean invoiceCollect;
    public PutSubscriptionResumeType withInvoiceCollect(Boolean invoiceCollect) {
        this.invoiceCollect = invoiceCollect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceTargetDate")
    public LocalDate invoiceTargetDate;
    public PutSubscriptionResumeType withInvoiceTargetDate(LocalDate invoiceTargetDate) {
        this.invoiceTargetDate = invoiceTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePeriods")
    public String resumePeriods;
    public PutSubscriptionResumeType withResumePeriods(String resumePeriods) {
        this.resumePeriods = resumePeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePeriodsType")
    public String resumePeriodsType;
    public PutSubscriptionResumeType withResumePeriodsType(String resumePeriodsType) {
        this.resumePeriodsType = resumePeriodsType;
        return this;
    }
    @JsonProperty("resumePolicy")
    public String resumePolicy;
    public PutSubscriptionResumeType withResumePolicy(String resumePolicy) {
        this.resumePolicy = resumePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumeSpecificDate")
    public LocalDate resumeSpecificDate;
    public PutSubscriptionResumeType withResumeSpecificDate(LocalDate resumeSpecificDate) {
        this.resumeSpecificDate = resumeSpecificDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runBilling")
    public Boolean runBilling;
    public PutSubscriptionResumeType withRunBilling(Boolean runBilling) {
        this.runBilling = runBilling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PutSubscriptionResumeType withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}