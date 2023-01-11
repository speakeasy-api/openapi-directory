package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllProviderAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetAllProviderAccountsQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=providerIds")
    public String providerIds;
    public GetAllProviderAccountsQueryParams withProviderIds(String providerIds) {
        this.providerIds = providerIds;
        return this;
    }
}