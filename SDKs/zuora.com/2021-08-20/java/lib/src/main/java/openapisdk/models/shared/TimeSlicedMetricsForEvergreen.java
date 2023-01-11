package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeSlicedMetricsForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public TimeSlicedMetricsForEvergreen withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public TimeSlicedMetricsForEvergreen withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceOwner")
    public String invoiceOwner;
    public TimeSlicedMetricsForEvergreen withInvoiceOwner(String invoiceOwner) {
        this.invoiceOwner = invoiceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public TimeSlicedMetricsForEvergreen withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwner")
    public String subscriptionOwner;
    public TimeSlicedMetricsForEvergreen withSubscriptionOwner(String subscriptionOwner) {
        this.subscriptionOwner = subscriptionOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termNumber")
    public Double termNumber;
    public TimeSlicedMetricsForEvergreen withTermNumber(Double termNumber) {
        this.termNumber = termNumber;
        return this;
    }
}