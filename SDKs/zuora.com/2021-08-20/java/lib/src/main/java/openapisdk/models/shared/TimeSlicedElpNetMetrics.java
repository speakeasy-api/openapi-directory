package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeSlicedElpNetMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public TimeSlicedElpNetMetrics withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public TimeSlicedElpNetMetrics withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedReason")
    public TimeSlicedElpNetMetricsGeneratedReasonEnum generatedReason;
    public TimeSlicedElpNetMetrics withGeneratedReason(TimeSlicedElpNetMetricsGeneratedReasonEnum generatedReason) {
        this.generatedReason = generatedReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceOwner")
    public String invoiceOwner;
    public TimeSlicedElpNetMetrics withInvoiceOwner(String invoiceOwner) {
        this.invoiceOwner = invoiceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItemId")
    public String orderItemId;
    public TimeSlicedElpNetMetrics withOrderItemId(String orderItemId) {
        this.orderItemId = orderItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public TimeSlicedElpNetMetrics withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwner")
    public String subscriptionOwner;
    public TimeSlicedElpNetMetrics withSubscriptionOwner(String subscriptionOwner) {
        this.subscriptionOwner = subscriptionOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Double tax;
    public TimeSlicedElpNetMetrics withTax(Double tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termNumber")
    public Double termNumber;
    public TimeSlicedElpNetMetrics withTermNumber(Double termNumber) {
        this.termNumber = termNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TimeSlicedElpNetMetricsTypeEnum type;
    public TimeSlicedElpNetMetrics withType(TimeSlicedElpNetMetricsTypeEnum type) {
        this.type = type;
        return this;
    }
}