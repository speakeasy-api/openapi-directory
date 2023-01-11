package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentMethodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-method-id")
    public String paymentMethodId;
    public GetPaymentMethodPathParams withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}