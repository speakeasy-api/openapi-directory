package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReconcileRefundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refund-id")
    public String refundId;
    public PostReconcileRefundPathParams withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
}