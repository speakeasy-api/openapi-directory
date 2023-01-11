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

/**
 * GetBillingPreviewRunResponse
 * get billingPreviewRun response
**/
public class GetBillingPreviewRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assumeRenewal")
    public String assumeRenewal;
    public GetBillingPreviewRunResponse withAssumeRenewal(String assumeRenewal) {
        this.assumeRenewal = assumeRenewal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch")
    public String batch;
    public GetBillingPreviewRunResponse withBatch(String batch) {
        this.batch = batch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeTypeToExclude")
    public String chargeTypeToExclude;
    public GetBillingPreviewRunResponse withChargeTypeToExclude(String chargeTypeToExclude) {
        this.chargeTypeToExclude = chargeTypeToExclude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdById")
    public String createdById;
    public GetBillingPreviewRunResponse withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public GetBillingPreviewRunResponse withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public GetBillingPreviewRunResponse withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public GetBillingPreviewRunResponse withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includingEvergreenSubscription")
    public Boolean includingEvergreenSubscription;
    public GetBillingPreviewRunResponse withIncludingEvergreenSubscription(Boolean includingEvergreenSubscription) {
        this.includingEvergreenSubscription = includingEvergreenSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultFileUrl")
    public String resultFileUrl;
    public GetBillingPreviewRunResponse withResultFileUrl(String resultFileUrl) {
        this.resultFileUrl = resultFileUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runNumber")
    public String runNumber;
    public GetBillingPreviewRunResponse withRunNumber(String runNumber) {
        this.runNumber = runNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public GetBillingPreviewRunResponse withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetBillingPreviewRunResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("succeededAccounts")
    public Long succeededAccounts;
    public GetBillingPreviewRunResponse withSucceededAccounts(Long succeededAccounts) {
        this.succeededAccounts = succeededAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetBillingPreviewRunResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public GetBillingPreviewRunResponse withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalAccounts")
    public Integer totalAccounts;
    public GetBillingPreviewRunResponse withTotalAccounts(Integer totalAccounts) {
        this.totalAccounts = totalAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedById")
    public String updatedById;
    public GetBillingPreviewRunResponse withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedDate")
    public OffsetDateTime updatedDate;
    public GetBillingPreviewRunResponse withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}