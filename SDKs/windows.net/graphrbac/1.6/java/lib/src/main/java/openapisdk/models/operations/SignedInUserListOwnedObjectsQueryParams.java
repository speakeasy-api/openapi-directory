package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignedInUserListOwnedObjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public SignedInUserListOwnedObjectsQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}