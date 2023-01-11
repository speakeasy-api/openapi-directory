package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeSlicedMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public TimeSlicedMetrics withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public TimeSlicedMetrics withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedReason")
    public TimeSlicedMetricsGeneratedReasonEnum generatedReason;
    public TimeSlicedMetrics withGeneratedReason(TimeSlicedMetricsGeneratedReasonEnum generatedReason) {
        this.generatedReason = generatedReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceOwner")
    public String invoiceOwner;
    public TimeSlicedMetrics withInvoiceOwner(String invoiceOwner) {
        this.invoiceOwner = invoiceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItemId")
    public String orderItemId;
    public TimeSlicedMetrics withOrderItemId(String orderItemId) {
        this.orderItemId = orderItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public TimeSlicedMetrics withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwner")
    public String subscriptionOwner;
    public TimeSlicedMetrics withSubscriptionOwner(String subscriptionOwner) {
        this.subscriptionOwner = subscriptionOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termNumber")
    public Double termNumber;
    public TimeSlicedMetrics withTermNumber(Double termNumber) {
        this.termNumber = termNumber;
        return this;
    }
}