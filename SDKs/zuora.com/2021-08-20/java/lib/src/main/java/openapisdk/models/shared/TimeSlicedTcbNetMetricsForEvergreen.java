package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeSlicedTcbNetMetricsForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public TimeSlicedTcbNetMetricsForEvergreen withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountChargeNumber")
    public String discountChargeNumber;
    public TimeSlicedTcbNetMetricsForEvergreen withDiscountChargeNumber(String discountChargeNumber) {
        this.discountChargeNumber = discountChargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public TimeSlicedTcbNetMetricsForEvergreen withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceOwner")
    public String invoiceOwner;
    public TimeSlicedTcbNetMetricsForEvergreen withInvoiceOwner(String invoiceOwner) {
        this.invoiceOwner = invoiceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public TimeSlicedTcbNetMetricsForEvergreen withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwner")
    public String subscriptionOwner;
    public TimeSlicedTcbNetMetricsForEvergreen withSubscriptionOwner(String subscriptionOwner) {
        this.subscriptionOwner = subscriptionOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Double tax;
    public TimeSlicedTcbNetMetricsForEvergreen withTax(Double tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termNumber")
    public Double termNumber;
    public TimeSlicedTcbNetMetricsForEvergreen withTermNumber(Double termNumber) {
        this.termNumber = termNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TimeSlicedTcbNetMetricsForEvergreenTypeEnum type;
    public TimeSlicedTcbNetMetricsForEvergreen withType(TimeSlicedTcbNetMetricsForEvergreenTypeEnum type) {
        this.type = type;
        return this;
    }
}