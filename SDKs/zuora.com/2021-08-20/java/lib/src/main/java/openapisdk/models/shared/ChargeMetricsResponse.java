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

public class ChargeMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendmentId")
    public String amendmentId;
    public ChargeMetricsResponse withAmendmentId(String amendmentId) {
        this.amendmentId = amendmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendmentType")
    public String amendmentType;
    public ChargeMetricsResponse withAmendmentType(String amendmentType) {
        this.amendmentType = amendmentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public ChargeMetricsResponse withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdOn")
    public OffsetDateTime createdOn;
    public ChargeMetricsResponse withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public ChargeMetricsResponse withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public ChargeMetricsResponse withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public ChargeMetricsResponse withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ChargeMetricsResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceOwnerAccountNumber")
    public String invoiceOwnerAccountNumber;
    public ChargeMetricsResponse withInvoiceOwnerAccountNumber(String invoiceOwnerAccountNumber) {
        this.invoiceOwnerAccountNumber = invoiceOwnerAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mrrDiscountAmount")
    public Double mrrDiscountAmount;
    public ChargeMetricsResponse withMrrDiscountAmount(Double mrrDiscountAmount) {
        this.mrrDiscountAmount = mrrDiscountAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mrrGrossAmount")
    public Double mrrGrossAmount;
    public ChargeMetricsResponse withMrrGrossAmount(Double mrrGrossAmount) {
        this.mrrGrossAmount = mrrGrossAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mrrNetAmount")
    public Double mrrNetAmount;
    public ChargeMetricsResponse withMrrNetAmount(Double mrrNetAmount) {
        this.mrrNetAmount = mrrNetAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ChargeMetricsResponse withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public ChargeMetricsResponse withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public ChargeMetricsResponse withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePlanChargeId")
    public String ratePlanChargeId;
    public ChargeMetricsResponse withRatePlanChargeId(String ratePlanChargeId) {
        this.ratePlanChargeId = ratePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public ChargeMetricsResponse withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionName")
    public String subscriptionName;
    public ChargeMetricsResponse withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwnerAccountNumber")
    public String subscriptionOwnerAccountNumber;
    public ChargeMetricsResponse withSubscriptionOwnerAccountNumber(String subscriptionOwnerAccountNumber) {
        this.subscriptionOwnerAccountNumber = subscriptionOwnerAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcvDiscountAmount")
    public Double tcvDiscountAmount;
    public ChargeMetricsResponse withTcvDiscountAmount(Double tcvDiscountAmount) {
        this.tcvDiscountAmount = tcvDiscountAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcvGrossAmount")
    public Double tcvGrossAmount;
    public ChargeMetricsResponse withTcvGrossAmount(Double tcvGrossAmount) {
        this.tcvGrossAmount = tcvGrossAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcvNetAmount")
    public Double tcvNetAmount;
    public ChargeMetricsResponse withTcvNetAmount(Double tcvNetAmount) {
        this.tcvNetAmount = tcvNetAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedOn")
    public OffsetDateTime updatedOn;
    public ChargeMetricsResponse withUpdatedOn(OffsetDateTime updatedOn) {
        this.updatedOn = updatedOn;
        return this;
    }
}