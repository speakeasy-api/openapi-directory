package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderMetricsForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public OrderMetricsForEvergreen withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mrr")
    public TimeSlicedNetMetricsForEvergreen[] mrr;
    public OrderMetricsForEvergreen withMrr(TimeSlicedNetMetricsForEvergreen[] mrr) {
        this.mrr = mrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originRatePlanId")
    public String originRatePlanId;
    public OrderMetricsForEvergreen withOriginRatePlanId(String originRatePlanId) {
        this.originRatePlanId = originRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public OrderMetricsForEvergreen withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public OrderMetricsForEvergreen withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public TimeSlicedMetricsForEvergreen[] quantity;
    public OrderMetricsForEvergreen withQuantity(TimeSlicedMetricsForEvergreen[] quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcb")
    public TimeSlicedTcbNetMetricsForEvergreen[] tcb;
    public OrderMetricsForEvergreen withTcb(TimeSlicedTcbNetMetricsForEvergreen[] tcb) {
        this.tcb = tcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcv")
    public TimeSlicedNetMetricsForEvergreen[] tcv;
    public OrderMetricsForEvergreen withTcv(TimeSlicedNetMetricsForEvergreen[] tcv) {
        this.tcv = tcv;
        return this;
    }
}