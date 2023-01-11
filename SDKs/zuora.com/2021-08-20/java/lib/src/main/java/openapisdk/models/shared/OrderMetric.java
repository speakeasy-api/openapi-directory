package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderMetric
 * The set of order metrics for an order action.
**/
public class OrderMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public OrderMetric withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elp")
    public TimeSlicedElpNetMetrics[] elp;
    public OrderMetric withElp(TimeSlicedElpNetMetrics[] elp) {
        this.elp = elp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mrr")
    public TimeSlicedNetMetrics[] mrr;
    public OrderMetric withMrr(TimeSlicedNetMetrics[] mrr) {
        this.mrr = mrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originRatePlanId")
    public String originRatePlanId;
    public OrderMetric withOriginRatePlanId(String originRatePlanId) {
        this.originRatePlanId = originRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public OrderMetric withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public OrderMetric withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public TimeSlicedMetrics[] quantity;
    public OrderMetric withQuantity(TimeSlicedMetrics[] quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcb")
    public TimeSlicedTcbNetMetrics[] tcb;
    public OrderMetric withTcb(TimeSlicedTcbNetMetrics[] tcb) {
        this.tcb = tcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcv")
    public TimeSlicedNetMetrics[] tcv;
    public OrderMetric withTcv(TimeSlicedNetMetrics[] tcv) {
        this.tcv = tcv;
        return this;
    }
}