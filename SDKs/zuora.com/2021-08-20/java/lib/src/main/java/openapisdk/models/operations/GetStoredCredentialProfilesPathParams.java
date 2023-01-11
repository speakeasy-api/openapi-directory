package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoredCredentialProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-method-id")
    public String paymentMethodId;
    public GetStoredCredentialProfilesPathParams withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}