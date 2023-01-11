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

public class ChargeMetricsDiscountAllocationDetailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendmentId")
    public String amendmentId;
    public ChargeMetricsDiscountAllocationDetailResponse withAmendmentId(String amendmentId) {
        this.amendmentId = amendmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendmentType")
    public String amendmentType;
    public ChargeMetricsDiscountAllocationDetailResponse withAmendmentType(String amendmentType) {
        this.amendmentType = amendmentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeMetricsId")
    public String chargeMetricsId;
    public ChargeMetricsDiscountAllocationDetailResponse withChargeMetricsId(String chargeMetricsId) {
        this.chargeMetricsId = chargeMetricsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public ChargeMetricsDiscountAllocationDetailResponse withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdOn")
    public OffsetDateTime createdOn;
    public ChargeMetricsDiscountAllocationDetailResponse withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public ChargeMetricsDiscountAllocationDetailResponse withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public ChargeMetricsDiscountAllocationDetailResponse withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountChargeNumber")
    public String discountChargeNumber;
    public ChargeMetricsDiscountAllocationDetailResponse withDiscountChargeNumber(String discountChargeNumber) {
        this.discountChargeNumber = discountChargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountMrr")
    public Double discountMrr;
    public ChargeMetricsDiscountAllocationDetailResponse withDiscountMrr(Double discountMrr) {
        this.discountMrr = discountMrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcv")
    public Double discountTcv;
    public ChargeMetricsDiscountAllocationDetailResponse withDiscountTcv(Double discountTcv) {
        this.discountTcv = discountTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public ChargeMetricsDiscountAllocationDetailResponse withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ChargeMetricsDiscountAllocationDetailResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceOwnerAccountNumber")
    public String invoiceOwnerAccountNumber;
    public ChargeMetricsDiscountAllocationDetailResponse withInvoiceOwnerAccountNumber(String invoiceOwnerAccountNumber) {
        this.invoiceOwnerAccountNumber = invoiceOwnerAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ChargeMetricsDiscountAllocationDetailResponse withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public ChargeMetricsDiscountAllocationDetailResponse withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public ChargeMetricsDiscountAllocationDetailResponse withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePlanChargeId")
    public String ratePlanChargeId;
    public ChargeMetricsDiscountAllocationDetailResponse withRatePlanChargeId(String ratePlanChargeId) {
        this.ratePlanChargeId = ratePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public ChargeMetricsDiscountAllocationDetailResponse withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionName")
    public String subscriptionName;
    public ChargeMetricsDiscountAllocationDetailResponse withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwnerAccountNumber")
    public String subscriptionOwnerAccountNumber;
    public ChargeMetricsDiscountAllocationDetailResponse withSubscriptionOwnerAccountNumber(String subscriptionOwnerAccountNumber) {
        this.subscriptionOwnerAccountNumber = subscriptionOwnerAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedOn")
    public OffsetDateTime updatedOn;
    public ChargeMetricsDiscountAllocationDetailResponse withUpdatedOn(OffsetDateTime updatedOn) {
        this.updatedOn = updatedOn;
        return this;
    }
}