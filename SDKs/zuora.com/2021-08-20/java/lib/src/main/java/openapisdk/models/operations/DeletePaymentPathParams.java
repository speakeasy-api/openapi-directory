package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public DeletePaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}