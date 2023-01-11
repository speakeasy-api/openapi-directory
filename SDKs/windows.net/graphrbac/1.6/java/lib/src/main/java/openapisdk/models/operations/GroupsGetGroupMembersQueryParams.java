package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsGetGroupMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public GroupsGetGroupMembersQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}