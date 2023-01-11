package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetMemberGroupsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, java.util.Map<String, Object>> userGetMemberGroupsParameters;
    public UsersGetMemberGroupsRequests withUserGetMemberGroupsParameters(java.util.Map<String, java.util.Map<String, Object>> userGetMemberGroupsParameters) {
        this.userGetMemberGroupsParameters = userGetMemberGroupsParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, java.util.Map<String, Object>> userGetMemberGroupsParameters1;
    public UsersGetMemberGroupsRequests withUserGetMemberGroupsParameters1(java.util.Map<String, java.util.Map<String, Object>> userGetMemberGroupsParameters1) {
        this.userGetMemberGroupsParameters1 = userGetMemberGroupsParameters1;
        return this;
    }
}