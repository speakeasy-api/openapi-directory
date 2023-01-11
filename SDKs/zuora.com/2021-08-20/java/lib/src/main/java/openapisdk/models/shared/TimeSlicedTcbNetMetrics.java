package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeSlicedTcbNetMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public TimeSlicedTcbNetMetrics withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountChargeNumber")
    public String discountChargeNumber;
    public TimeSlicedTcbNetMetrics withDiscountChargeNumber(String discountChargeNumber) {
        this.discountChargeNumber = discountChargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public TimeSlicedTcbNetMetrics withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedReason")
    public TimeSlicedTcbNetMetricsGeneratedReasonEnum generatedReason;
    public TimeSlicedTcbNetMetrics withGeneratedReason(TimeSlicedTcbNetMetricsGeneratedReasonEnum generatedReason) {
        this.generatedReason = generatedReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceOwner")
    public String invoiceOwner;
    public TimeSlicedTcbNetMetrics withInvoiceOwner(String invoiceOwner) {
        this.invoiceOwner = invoiceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItemId")
    public String orderItemId;
    public TimeSlicedTcbNetMetrics withOrderItemId(String orderItemId) {
        this.orderItemId = orderItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public TimeSlicedTcbNetMetrics withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwner")
    public String subscriptionOwner;
    public TimeSlicedTcbNetMetrics withSubscriptionOwner(String subscriptionOwner) {
        this.subscriptionOwner = subscriptionOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Double tax;
    public TimeSlicedTcbNetMetrics withTax(Double tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termNumber")
    public Double termNumber;
    public TimeSlicedTcbNetMetrics withTermNumber(Double termNumber) {
        this.termNumber = termNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TimeSlicedTcbNetMetricsTypeEnum type;
    public TimeSlicedTcbNetMetrics withType(TimeSlicedTcbNetMetricsTypeEnum type) {
        this.type = type;
        return this;
    }
}