package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeSlicedNetMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public TimeSlicedNetMetrics withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountChargeNumber")
    public String discountChargeNumber;
    public TimeSlicedNetMetrics withDiscountChargeNumber(String discountChargeNumber) {
        this.discountChargeNumber = discountChargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public TimeSlicedNetMetrics withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedReason")
    public TimeSlicedNetMetricsGeneratedReasonEnum generatedReason;
    public TimeSlicedNetMetrics withGeneratedReason(TimeSlicedNetMetricsGeneratedReasonEnum generatedReason) {
        this.generatedReason = generatedReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceOwner")
    public String invoiceOwner;
    public TimeSlicedNetMetrics withInvoiceOwner(String invoiceOwner) {
        this.invoiceOwner = invoiceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItemId")
    public String orderItemId;
    public TimeSlicedNetMetrics withOrderItemId(String orderItemId) {
        this.orderItemId = orderItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public TimeSlicedNetMetrics withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwner")
    public String subscriptionOwner;
    public TimeSlicedNetMetrics withSubscriptionOwner(String subscriptionOwner) {
        this.subscriptionOwner = subscriptionOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termNumber")
    public Double termNumber;
    public TimeSlicedNetMetrics withTermNumber(Double termNumber) {
        this.termNumber = termNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TimeSlicedNetMetricsTypeEnum type;
    public TimeSlicedNetMetrics withType(TimeSlicedNetMetricsTypeEnum type) {
        this.type = type;
        return this;
    }
}