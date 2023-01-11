package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRefundPartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundId")
    public String refundId;
    public GetRefundPartPathParams withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refundpartid")
    public String refundpartid;
    public GetRefundPartPathParams withRefundpartid(String refundpartid) {
        this.refundpartid = refundpartid;
        return this;
    }
}