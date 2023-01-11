package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RampIntervalChargeMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public RampIntervalChargeMetrics withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcb")
    public Double discountTcb;
    public RampIntervalChargeMetrics withDiscountTcb(Double discountTcb) {
        this.discountTcb = discountTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcv")
    public Double discountTcv;
    public RampIntervalChargeMetrics withDiscountTcv(Double discountTcv) {
        this.discountTcv = discountTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public RampIntervalChargeMetrics withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcb")
    public Double grossTcb;
    public RampIntervalChargeMetrics withGrossTcb(Double grossTcb) {
        this.grossTcb = grossTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcv")
    public Double grossTcv;
    public RampIntervalChargeMetrics withGrossTcv(Double grossTcv) {
        this.grossTcv = grossTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mrr")
    public RampIntervalChargeMetricsMrr[] mrr;
    public RampIntervalChargeMetrics withMrr(RampIntervalChargeMetricsMrr[] mrr) {
        this.mrr = mrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcb")
    public Double netTcb;
    public RampIntervalChargeMetrics withNetTcb(Double netTcb) {
        this.netTcb = netTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcv")
    public Double netTcv;
    public RampIntervalChargeMetrics withNetTcv(Double netTcv) {
        this.netTcv = netTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public RampIntervalChargeMetrics withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public RampIntervalChargeMetrics withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePlanChargeId")
    public String ratePlanChargeId;
    public RampIntervalChargeMetrics withRatePlanChargeId(String ratePlanChargeId) {
        this.ratePlanChargeId = ratePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public RampIntervalChargeMetrics withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public RampIntervalChargeMetrics withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}