package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeSlicedNetMetricsForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public TimeSlicedNetMetricsForEvergreen withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountChargeNumber")
    public String discountChargeNumber;
    public TimeSlicedNetMetricsForEvergreen withDiscountChargeNumber(String discountChargeNumber) {
        this.discountChargeNumber = discountChargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public TimeSlicedNetMetricsForEvergreen withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceOwner")
    public String invoiceOwner;
    public TimeSlicedNetMetricsForEvergreen withInvoiceOwner(String invoiceOwner) {
        this.invoiceOwner = invoiceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public TimeSlicedNetMetricsForEvergreen withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwner")
    public String subscriptionOwner;
    public TimeSlicedNetMetricsForEvergreen withSubscriptionOwner(String subscriptionOwner) {
        this.subscriptionOwner = subscriptionOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termNumber")
    public Double termNumber;
    public TimeSlicedNetMetricsForEvergreen withTermNumber(Double termNumber) {
        this.termNumber = termNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TimeSlicedNetMetricsForEvergreenTypeEnum type;
    public TimeSlicedNetMetricsForEvergreen withType(TimeSlicedNetMetricsForEvergreenTypeEnum type) {
        this.type = type;
        return this;
    }
}