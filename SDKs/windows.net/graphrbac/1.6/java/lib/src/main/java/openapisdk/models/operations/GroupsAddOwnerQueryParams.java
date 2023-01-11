package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsAddOwnerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public GroupsAddOwnerQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}