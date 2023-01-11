package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateRefundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundId")
    public String refundId;
    public PutUpdateRefundPathParams withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
}