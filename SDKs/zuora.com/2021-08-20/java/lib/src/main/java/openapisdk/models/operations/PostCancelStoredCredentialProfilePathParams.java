package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelStoredCredentialProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-method-id")
    public String paymentMethodId;
    public PostCancelStoredCredentialProfilePathParams withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profile-number")
    public Long profileNumber;
    public PostCancelStoredCredentialProfilePathParams withProfileNumber(Long profileNumber) {
        this.profileNumber = profileNumber;
        return this;
    }
}