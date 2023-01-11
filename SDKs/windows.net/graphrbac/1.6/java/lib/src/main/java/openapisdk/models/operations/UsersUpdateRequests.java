package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, java.util.Map<String, Object>> userUpdateParameters;
    public UsersUpdateRequests withUserUpdateParameters(java.util.Map<String, java.util.Map<String, Object>> userUpdateParameters) {
        this.userUpdateParameters = userUpdateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, java.util.Map<String, Object>> userUpdateParameters1;
    public UsersUpdateRequests withUserUpdateParameters1(java.util.Map<String, java.util.Map<String, Object>> userUpdateParameters1) {
        this.userUpdateParameters1 = userUpdateParameters1;
        return this;
    }
}