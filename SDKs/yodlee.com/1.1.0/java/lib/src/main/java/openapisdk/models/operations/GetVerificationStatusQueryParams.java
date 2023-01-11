package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVerificationStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetVerificationStatusQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=providerAccountId")
    public String providerAccountId;
    public GetVerificationStatusQueryParams withProviderAccountId(String providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=verificationType")
    public String verificationType;
    public GetVerificationStatusQueryParams withVerificationType(String verificationType) {
        this.verificationType = verificationType;
        return this;
    }
}