package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsRemoveMemberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public GroupsRemoveMemberQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}