package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutVerifyPaymentMethodsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-method-id")
    public String paymentMethodId;
    public PutVerifyPaymentMethodsPathParams withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}