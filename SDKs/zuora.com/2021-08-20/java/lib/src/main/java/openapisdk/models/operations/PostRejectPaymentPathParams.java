package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-id")
    public String paymentId;
    public PostRejectPaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}