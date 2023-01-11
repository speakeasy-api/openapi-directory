package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRefundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundId")
    public String refundId;
    public DeleteRefundPathParams withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
}