package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RampIntervalChargeDeltaMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public RampIntervalChargeDeltaMetrics withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaDiscountTcb")
    public Double deltaDiscountTcb;
    public RampIntervalChargeDeltaMetrics withDeltaDiscountTcb(Double deltaDiscountTcb) {
        this.deltaDiscountTcb = deltaDiscountTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaDiscountTcv")
    public Double deltaDiscountTcv;
    public RampIntervalChargeDeltaMetrics withDeltaDiscountTcv(Double deltaDiscountTcv) {
        this.deltaDiscountTcv = deltaDiscountTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaGrossTcb")
    public Double deltaGrossTcb;
    public RampIntervalChargeDeltaMetrics withDeltaGrossTcb(Double deltaGrossTcb) {
        this.deltaGrossTcb = deltaGrossTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaGrossTcv")
    public Double deltaGrossTcv;
    public RampIntervalChargeDeltaMetrics withDeltaGrossTcv(Double deltaGrossTcv) {
        this.deltaGrossTcv = deltaGrossTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaMrr")
    public RampIntervalChargeDeltaMetricsDeltaMrr[] deltaMrr;
    public RampIntervalChargeDeltaMetrics withDeltaMrr(RampIntervalChargeDeltaMetricsDeltaMrr[] deltaMrr) {
        this.deltaMrr = deltaMrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaNetTcb")
    public Double deltaNetTcb;
    public RampIntervalChargeDeltaMetrics withDeltaNetTcb(Double deltaNetTcb) {
        this.deltaNetTcb = deltaNetTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaNetTcv")
    public Double deltaNetTcv;
    public RampIntervalChargeDeltaMetrics withDeltaNetTcv(Double deltaNetTcv) {
        this.deltaNetTcv = deltaNetTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaQuantity")
    public RampIntervalChargeDeltaMetricsDeltaQuantity[] deltaQuantity;
    public RampIntervalChargeDeltaMetrics withDeltaQuantity(RampIntervalChargeDeltaMetricsDeltaQuantity[] deltaQuantity) {
        this.deltaQuantity = deltaQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public RampIntervalChargeDeltaMetrics withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public RampIntervalChargeDeltaMetrics withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}