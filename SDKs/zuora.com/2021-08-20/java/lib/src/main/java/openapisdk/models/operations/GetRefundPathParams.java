package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRefundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundId")
    public String refundId;
    public GetRefundPathParams withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
}