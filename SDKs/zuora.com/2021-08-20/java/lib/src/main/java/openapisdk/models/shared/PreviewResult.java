package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewResult
 * The result of each type of preview. Returned only when the current request is preview call.
**/
public class PreviewResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeMetrics")
    public PreviewResultChargeMetrics[] chargeMetrics;
    public PreviewResult withChargeMetrics(PreviewResultChargeMetrics[] chargeMetrics) {
        this.chargeMetrics = chargeMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemos")
    public PreviewResultCreditMemos[] creditMemos;
    public PreviewResult withCreditMemos(PreviewResultCreditMemos[] creditMemos) {
        this.creditMemos = creditMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public PreviewResultInvoices[] invoices;
    public PreviewResult withInvoices(PreviewResultInvoices[] invoices) {
        this.invoices = invoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderDeltaMetrics")
    public PreviewResultOrderDeltaMetrics orderDeltaMetrics;
    public PreviewResult withOrderDeltaMetrics(PreviewResultOrderDeltaMetrics orderDeltaMetrics) {
        this.orderDeltaMetrics = orderDeltaMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderMetrics")
    public PreviewResultOrderMetrics[] orderMetrics;
    public PreviewResult withOrderMetrics(PreviewResultOrderMetrics[] orderMetrics) {
        this.orderMetrics = orderMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rampMetrics")
    public OrderRampMetrics[] rampMetrics;
    public PreviewResult withRampMetrics(OrderRampMetrics[] rampMetrics) {
        this.rampMetrics = rampMetrics;
        return this;
    }
}