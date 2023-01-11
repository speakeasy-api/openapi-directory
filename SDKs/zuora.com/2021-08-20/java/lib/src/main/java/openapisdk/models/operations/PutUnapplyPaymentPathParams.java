package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUnapplyPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public PutUnapplyPaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}