package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsIsMemberOfRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, java.util.Map<String, Object>> checkGroupMembershipParameters;
    public GroupsIsMemberOfRequests withCheckGroupMembershipParameters(java.util.Map<String, java.util.Map<String, Object>> checkGroupMembershipParameters) {
        this.checkGroupMembershipParameters = checkGroupMembershipParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, java.util.Map<String, Object>> checkGroupMembershipParameters1;
    public GroupsIsMemberOfRequests withCheckGroupMembershipParameters1(java.util.Map<String, java.util.Map<String, Object>> checkGroupMembershipParameters1) {
        this.checkGroupMembershipParameters1 = checkGroupMembershipParameters1;
        return this;
    }
}