package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelAuthorizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-method-id")
    public String paymentMethodId;
    public PostCancelAuthorizationPathParams withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}