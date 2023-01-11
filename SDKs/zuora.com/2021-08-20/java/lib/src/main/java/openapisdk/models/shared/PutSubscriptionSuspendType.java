package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSubscriptionSuspendType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationOrder")
    public String[] applicationOrder;
    public PutSubscriptionSuspendType withApplicationOrder(String[] applicationOrder) {
        this.applicationOrder = applicationOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCredit")
    public Boolean applyCredit;
    public PutSubscriptionSuspendType withApplyCredit(Boolean applyCredit) {
        this.applyCredit = applyCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCreditBalance")
    public Boolean applyCreditBalance;
    public PutSubscriptionSuspendType withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collect")
    public Boolean collect;
    public PutSubscriptionSuspendType withCollect(Boolean collect) {
        this.collect = collect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractEffectiveDate")
    public LocalDate contractEffectiveDate;
    public PutSubscriptionSuspendType withContractEffectiveDate(LocalDate contractEffectiveDate) {
        this.contractEffectiveDate = contractEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentDate")
    public LocalDate documentDate;
    public PutSubscriptionSuspendType withDocumentDate(LocalDate documentDate) {
        this.documentDate = documentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendsTerm")
    public Boolean extendsTerm;
    public PutSubscriptionSuspendType withExtendsTerm(Boolean extendsTerm) {
        this.extendsTerm = extendsTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public Boolean invoice;
    public PutSubscriptionSuspendType withInvoice(Boolean invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceCollect")
    public Boolean invoiceCollect;
    public PutSubscriptionSuspendType withInvoiceCollect(Boolean invoiceCollect) {
        this.invoiceCollect = invoiceCollect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceTargetDate")
    public LocalDate invoiceTargetDate;
    public PutSubscriptionSuspendType withInvoiceTargetDate(LocalDate invoiceTargetDate) {
        this.invoiceTargetDate = invoiceTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resume")
    public Boolean resume;
    public PutSubscriptionSuspendType withResume(Boolean resume) {
        this.resume = resume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePeriods")
    public String resumePeriods;
    public PutSubscriptionSuspendType withResumePeriods(String resumePeriods) {
        this.resumePeriods = resumePeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePeriodsType")
    public String resumePeriodsType;
    public PutSubscriptionSuspendType withResumePeriodsType(String resumePeriodsType) {
        this.resumePeriodsType = resumePeriodsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePolicy")
    public String resumePolicy;
    public PutSubscriptionSuspendType withResumePolicy(String resumePolicy) {
        this.resumePolicy = resumePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumeSpecificDate")
    public LocalDate resumeSpecificDate;
    public PutSubscriptionSuspendType withResumeSpecificDate(LocalDate resumeSpecificDate) {
        this.resumeSpecificDate = resumeSpecificDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runBilling")
    public Boolean runBilling;
    public PutSubscriptionSuspendType withRunBilling(Boolean runBilling) {
        this.runBilling = runBilling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendPeriods")
    public String suspendPeriods;
    public PutSubscriptionSuspendType withSuspendPeriods(String suspendPeriods) {
        this.suspendPeriods = suspendPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendPeriodsType")
    public String suspendPeriodsType;
    public PutSubscriptionSuspendType withSuspendPeriodsType(String suspendPeriodsType) {
        this.suspendPeriodsType = suspendPeriodsType;
        return this;
    }
    @JsonProperty("suspendPolicy")
    public String suspendPolicy;
    public PutSubscriptionSuspendType withSuspendPolicy(String suspendPolicy) {
        this.suspendPolicy = suspendPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendSpecificDate")
    public LocalDate suspendSpecificDate;
    public PutSubscriptionSuspendType withSuspendSpecificDate(LocalDate suspendSpecificDate) {
        this.suspendSpecificDate = suspendSpecificDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PutSubscriptionSuspendType withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}