package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsAddMemberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public GroupsAddMemberQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}