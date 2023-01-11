package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChargePreviewMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public ChargePreviewMetrics withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmrr")
    public ChargePreviewMetricsCmrr cmrr;
    public ChargePreviewMetrics withCmrr(ChargePreviewMetricsCmrr cmrr) {
        this.cmrr = cmrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originRatePlanId")
    public String originRatePlanId;
    public ChargePreviewMetrics withOriginRatePlanId(String originRatePlanId) {
        this.originRatePlanId = originRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public ChargePreviewMetrics withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public ChargePreviewMetrics withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public ChargePreviewMetricsTax tax;
    public ChargePreviewMetrics withTax(ChargePreviewMetricsTax tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcb")
    public ChargePreviewMetricsTcb tcb;
    public ChargePreviewMetrics withTcb(ChargePreviewMetricsTcb tcb) {
        this.tcb = tcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcv")
    public ChargePreviewMetricsTcv tcv;
    public ChargePreviewMetrics withTcv(ChargePreviewMetricsTcv tcv) {
        this.tcv = tcv;
        return this;
    }
}