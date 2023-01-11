package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsAddMemberRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, java.util.Map<String, Object>> groupAddMemberParameters;
    public GroupsAddMemberRequests withGroupAddMemberParameters(java.util.Map<String, java.util.Map<String, Object>> groupAddMemberParameters) {
        this.groupAddMemberParameters = groupAddMemberParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, java.util.Map<String, Object>> groupAddMemberParameters1;
    public GroupsAddMemberRequests withGroupAddMemberParameters1(java.util.Map<String, java.util.Map<String, Object>> groupAddMemberParameters1) {
        this.groupAddMemberParameters1 = groupAddMemberParameters1;
        return this;
    }
}