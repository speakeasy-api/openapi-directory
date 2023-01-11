package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateStoredCredentialProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-method-id")
    public String paymentMethodId;
    public PostCreateStoredCredentialProfilePathParams withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}