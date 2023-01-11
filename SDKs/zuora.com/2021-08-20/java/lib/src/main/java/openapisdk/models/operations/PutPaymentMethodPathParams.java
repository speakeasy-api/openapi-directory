package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPaymentMethodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-method-id")
    public String paymentMethodId;
    public PutPaymentMethodPathParams withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}