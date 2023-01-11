package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostReconcileRefundRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public PostReconcileRefundRequestActionEnum action;
    public PostReconcileRefundRequest withAction(PostReconcileRefundRequestActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionDate")
    public String actionDate;
    public PostReconcileRefundRequest withActionDate(String actionDate) {
        this.actionDate = actionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayReconciliationReason")
    public String gatewayReconciliationReason;
    public PostReconcileRefundRequest withGatewayReconciliationReason(String gatewayReconciliationReason) {
        this.gatewayReconciliationReason = gatewayReconciliationReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayReconciliationStatus")
    public String gatewayReconciliationStatus;
    public PostReconcileRefundRequest withGatewayReconciliationStatus(String gatewayReconciliationStatus) {
        this.gatewayReconciliationStatus = gatewayReconciliationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutId")
    public String payoutId;
    public PostReconcileRefundRequest withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
}