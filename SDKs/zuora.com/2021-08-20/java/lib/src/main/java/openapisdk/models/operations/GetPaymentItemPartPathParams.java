package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentItemPartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itempartid")
    public String itempartid;
    public GetPaymentItemPartPathParams withItempartid(String itempartid) {
        this.itempartid = itempartid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partid")
    public String partid;
    public GetPaymentItemPartPathParams withPartid(String partid) {
        this.partid = partid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public GetPaymentItemPartPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}