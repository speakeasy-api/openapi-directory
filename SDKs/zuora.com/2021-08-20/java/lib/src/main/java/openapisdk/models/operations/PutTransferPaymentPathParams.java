package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTransferPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public PutTransferPaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}