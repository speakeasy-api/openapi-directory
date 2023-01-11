package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsRemoveOwnerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public GroupsRemoveOwnerQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}