package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostSubscriptionPreviewResponseTypeChargeMetrics
 * Container for charge metrics.
 * 
**/
public class PostSubscriptionPreviewResponseTypeChargeMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dmrr")
    public String dmrr;
    public PostSubscriptionPreviewResponseTypeChargeMetrics withDmrr(String dmrr) {
        this.dmrr = dmrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dtcv")
    public String dtcv;
    public PostSubscriptionPreviewResponseTypeChargeMetrics withDtcv(String dtcv) {
        this.dtcv = dtcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mrr")
    public String mrr;
    public PostSubscriptionPreviewResponseTypeChargeMetrics withMrr(String mrr) {
        this.mrr = mrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PostSubscriptionPreviewResponseTypeChargeMetrics withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originRatePlanId")
    public String originRatePlanId;
    public PostSubscriptionPreviewResponseTypeChargeMetrics withOriginRatePlanId(String originRatePlanId) {
        this.originRatePlanId = originRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalId")
    public String originalId;
    public PostSubscriptionPreviewResponseTypeChargeMetrics withOriginalId(String originalId) {
        this.originalId = originalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public PostSubscriptionPreviewResponseTypeChargeMetrics withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public PostSubscriptionPreviewResponseTypeChargeMetrics withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcv")
    public String tcv;
    public PostSubscriptionPreviewResponseTypeChargeMetrics withTcv(String tcv) {
        this.tcv = tcv;
        return this;
    }
}