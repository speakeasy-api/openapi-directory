package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReversePaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-id")
    public String paymentId;
    public PostReversePaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}