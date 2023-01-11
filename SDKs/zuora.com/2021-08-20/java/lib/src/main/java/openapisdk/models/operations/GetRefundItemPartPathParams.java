package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRefundItemPartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itempartid")
    public String itempartid;
    public GetRefundItemPartPathParams withItempartid(String itempartid) {
        this.itempartid = itempartid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundId")
    public String refundId;
    public GetRefundItemPartPathParams withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundpartid")
    public String refundpartid;
    public GetRefundItemPartPathParams withRefundpartid(String refundpartid) {
        this.refundpartid = refundpartid;
        return this;
    }
}