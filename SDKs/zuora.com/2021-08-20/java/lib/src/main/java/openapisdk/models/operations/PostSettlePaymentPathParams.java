package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSettlePaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-id")
    public String paymentId;
    public PostSettlePaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}