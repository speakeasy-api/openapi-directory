package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRefundPartsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundId")
    public String refundId;
    public GetRefundPartsPathParams withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
}