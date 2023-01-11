package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProviderAccountProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=providerAccountId")
    public String providerAccountId;
    public GetProviderAccountProfilesQueryParams withProviderAccountId(String providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
}