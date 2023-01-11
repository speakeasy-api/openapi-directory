package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentPartsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public GetPaymentPartsPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}