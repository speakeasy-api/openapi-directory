package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRefundItemPartsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundId")
    public String refundId;
    public GetRefundItemPartsPathParams withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundpartid")
    public String refundpartid;
    public GetRefundItemPartsPathParams withRefundpartid(String refundpartid) {
        this.refundpartid = refundpartid;
        return this;
    }
}