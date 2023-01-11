package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsGetMemberGroupsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, java.util.Map<String, Object>> groupGetMemberGroupsParameters;
    public GroupsGetMemberGroupsRequests withGroupGetMemberGroupsParameters(java.util.Map<String, java.util.Map<String, Object>> groupGetMemberGroupsParameters) {
        this.groupGetMemberGroupsParameters = groupGetMemberGroupsParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, java.util.Map<String, Object>> groupGetMemberGroupsParameters1;
    public GroupsGetMemberGroupsRequests withGroupGetMemberGroupsParameters1(java.util.Map<String, java.util.Map<String, Object>> groupGetMemberGroupsParameters1) {
        this.groupGetMemberGroupsParameters1 = groupGetMemberGroupsParameters1;
        return this;
    }
}