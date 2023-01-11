package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentItemPartsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partid")
    public String partid;
    public GetPaymentItemPartsPathParams withPartid(String partid) {
        this.partid = partid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public GetPaymentItemPartsPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}