package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCancelPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public PutCancelPaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}