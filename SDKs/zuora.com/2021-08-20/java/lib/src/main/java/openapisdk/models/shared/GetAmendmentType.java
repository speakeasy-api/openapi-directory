package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAmendmentType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenew")
    public Boolean autoRenew;
    public GetAmendmentType withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseRatePlanId")
    public String baseRatePlanId;
    public GetAmendmentType withBaseRatePlanId(String baseRatePlanId) {
        this.baseRatePlanId = baseRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseSubscriptionId")
    public String baseSubscriptionId;
    public GetAmendmentType withBaseSubscriptionId(String baseSubscriptionId) {
        this.baseSubscriptionId = baseSubscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetAmendmentType withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractEffectiveDate")
    public LocalDate contractEffectiveDate;
    public GetAmendmentType withContractEffectiveDate(LocalDate contractEffectiveDate) {
        this.contractEffectiveDate = contractEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentTerm")
    public Long currentTerm;
    public GetAmendmentType withCurrentTerm(Long currentTerm) {
        this.currentTerm = currentTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentTermPeriodType")
    public String currentTermPeriodType;
    public GetAmendmentType withCurrentTermPeriodType(String currentTermPeriodType) {
        this.currentTermPeriodType = currentTermPeriodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerAcceptanceDate")
    public LocalDate customerAcceptanceDate;
    public GetAmendmentType withCustomerAcceptanceDate(LocalDate customerAcceptanceDate) {
        this.customerAcceptanceDate = customerAcceptanceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetAmendmentType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationAccountId")
    public String destinationAccountId;
    public GetAmendmentType withDestinationAccountId(String destinationAccountId) {
        this.destinationAccountId = destinationAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationInvoiceOwnerId")
    public String destinationInvoiceOwnerId;
    public GetAmendmentType withDestinationInvoiceOwnerId(String destinationInvoiceOwnerId) {
        this.destinationInvoiceOwnerId = destinationInvoiceOwnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public LocalDate effectiveDate;
    public GetAmendmentType withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAmendmentType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetAmendmentType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newRatePlanId")
    public String newRatePlanId;
    public GetAmendmentType withNewRatePlanId(String newRatePlanId) {
        this.newRatePlanId = newRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSubscriptionId")
    public String newSubscriptionId;
    public GetAmendmentType withNewSubscriptionId(String newSubscriptionId) {
        this.newSubscriptionId = newSubscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSetting")
    public String renewalSetting;
    public GetAmendmentType withRenewalSetting(String renewalSetting) {
        this.renewalSetting = renewalSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalTerm")
    public Long renewalTerm;
    public GetAmendmentType withRenewalTerm(Long renewalTerm) {
        this.renewalTerm = renewalTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalTermPeriodType")
    public String renewalTermPeriodType;
    public GetAmendmentType withRenewalTermPeriodType(String renewalTermPeriodType) {
        this.renewalTermPeriodType = renewalTermPeriodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumeDate")
    public LocalDate resumeDate;
    public GetAmendmentType withResumeDate(LocalDate resumeDate) {
        this.resumeDate = resumeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceActivationDate")
    public LocalDate serviceActivationDate;
    public GetAmendmentType withServiceActivationDate(LocalDate serviceActivationDate) {
        this.serviceActivationDate = serviceActivationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificUpdateDate")
    public LocalDate specificUpdateDate;
    public GetAmendmentType withSpecificUpdateDate(LocalDate specificUpdateDate) {
        this.specificUpdateDate = specificUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetAmendmentType withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetAmendmentType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendDate")
    public LocalDate suspendDate;
    public GetAmendmentType withSuspendDate(LocalDate suspendDate) {
        this.suspendDate = suspendDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termStartDate")
    public LocalDate termStartDate;
    public GetAmendmentType withTermStartDate(LocalDate termStartDate) {
        this.termStartDate = termStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termType")
    public String termType;
    public GetAmendmentType withTermType(String termType) {
        this.termType = termType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetAmendmentType withType(String type) {
        this.type = type;
        return this;
    }
}