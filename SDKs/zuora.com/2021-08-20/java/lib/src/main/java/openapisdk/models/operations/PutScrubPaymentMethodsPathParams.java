package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutScrubPaymentMethodsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-method-id")
    public String paymentMethodId;
    public PutScrubPaymentMethodsPathParams withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}