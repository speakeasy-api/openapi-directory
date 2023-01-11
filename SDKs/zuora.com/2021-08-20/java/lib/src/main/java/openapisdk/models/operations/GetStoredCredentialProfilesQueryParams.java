package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoredCredentialProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeAll")
    public Boolean includeAll;
    public GetStoredCredentialProfilesQueryParams withIncludeAll(Boolean includeAll) {
        this.includeAll = includeAll;
        return this;
    }
}