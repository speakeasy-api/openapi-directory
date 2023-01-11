package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Amendment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoRenew")
    public Boolean autoRenew;
    public Amendment withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Amendment withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("ContractEffectiveDate")
    public LocalDate contractEffectiveDate;
    public Amendment withContractEffectiveDate(LocalDate contractEffectiveDate) {
        this.contractEffectiveDate = contractEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public Amendment withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public Amendment withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentTerm")
    public Long currentTerm;
    public Amendment withCurrentTerm(Long currentTerm) {
        this.currentTerm = currentTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentTermPeriodType")
    public String currentTermPeriodType;
    public Amendment withCurrentTermPeriodType(String currentTermPeriodType) {
        this.currentTermPeriodType = currentTermPeriodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerAcceptanceDate")
    public LocalDate customerAcceptanceDate;
    public Amendment withCustomerAcceptanceDate(LocalDate customerAcceptanceDate) {
        this.customerAcceptanceDate = customerAcceptanceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Amendment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationAccountId")
    public String destinationAccountId;
    public Amendment withDestinationAccountId(String destinationAccountId) {
        this.destinationAccountId = destinationAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationInvoiceOwnerId")
    public String destinationInvoiceOwnerId;
    public Amendment withDestinationInvoiceOwnerId(String destinationInvoiceOwnerId) {
        this.destinationInvoiceOwnerId = destinationInvoiceOwnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveDate")
    public LocalDate effectiveDate;
    public Amendment withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Amendment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatePlanData")
    public AmendmentRatePlanData ratePlanData;
    public Amendment withRatePlanData(AmendmentRatePlanData ratePlanData) {
        this.ratePlanData = ratePlanData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RenewalSetting")
    public String renewalSetting;
    public Amendment withRenewalSetting(String renewalSetting) {
        this.renewalSetting = renewalSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RenewalTerm")
    public Long renewalTerm;
    public Amendment withRenewalTerm(Long renewalTerm) {
        this.renewalTerm = renewalTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RenewalTermPeriodType")
    public String renewalTermPeriodType;
    public Amendment withRenewalTermPeriodType(String renewalTermPeriodType) {
        this.renewalTermPeriodType = renewalTermPeriodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResumeDate")
    public LocalDate resumeDate;
    public Amendment withResumeDate(LocalDate resumeDate) {
        this.resumeDate = resumeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceActivationDate")
    public LocalDate serviceActivationDate;
    public Amendment withServiceActivationDate(LocalDate serviceActivationDate) {
        this.serviceActivationDate = serviceActivationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpecificUpdateDate")
    public LocalDate specificUpdateDate;
    public Amendment withSpecificUpdateDate(LocalDate specificUpdateDate) {
        this.specificUpdateDate = specificUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public Amendment withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("SubscriptionId")
    public String subscriptionId;
    public Amendment withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuspendDate")
    public LocalDate suspendDate;
    public Amendment withSuspendDate(LocalDate suspendDate) {
        this.suspendDate = suspendDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TermStartDate")
    public LocalDate termStartDate;
    public Amendment withTermStartDate(LocalDate termStartDate) {
        this.termStartDate = termStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TermType")
    public String termType;
    public Amendment withTermType(String termType) {
        this.termType = termType;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public Amendment withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public Amendment withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public Amendment withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}