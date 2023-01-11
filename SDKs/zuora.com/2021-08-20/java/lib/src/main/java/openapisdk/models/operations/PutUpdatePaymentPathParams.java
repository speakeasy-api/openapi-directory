package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdatePaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public PutUpdatePaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}