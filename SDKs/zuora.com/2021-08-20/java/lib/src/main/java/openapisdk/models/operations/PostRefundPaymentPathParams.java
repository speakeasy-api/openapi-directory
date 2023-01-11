package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRefundPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public PostRefundPaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}