package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiateAccountVerificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=providerAccountId")
    public String providerAccountId;
    public InitiateAccountVerificationPathParams withProviderAccountId(String providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
}