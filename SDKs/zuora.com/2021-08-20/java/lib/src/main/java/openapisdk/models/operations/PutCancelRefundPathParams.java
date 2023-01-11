package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCancelRefundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundId")
    public String refundId;
    public PutCancelRefundPathParams withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
}