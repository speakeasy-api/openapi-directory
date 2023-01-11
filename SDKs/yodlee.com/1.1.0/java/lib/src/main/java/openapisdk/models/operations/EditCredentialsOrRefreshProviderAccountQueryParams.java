package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditCredentialsOrRefreshProviderAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=providerAccountIds")
    public String providerAccountIds;
    public EditCredentialsOrRefreshProviderAccountQueryParams withProviderAccountIds(String providerAccountIds) {
        this.providerAccountIds = providerAccountIds;
        return this;
    }
}