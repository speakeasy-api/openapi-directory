package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutApplyPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public PutApplyPaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}