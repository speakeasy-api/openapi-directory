package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, java.util.Map<String, Object>> userCreateParameters;
    public UsersCreateRequests withUserCreateParameters(java.util.Map<String, java.util.Map<String, Object>> userCreateParameters) {
        this.userCreateParameters = userCreateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, java.util.Map<String, Object>> userCreateParameters1;
    public UsersCreateRequests withUserCreateParameters1(java.util.Map<String, java.util.Map<String, Object>> userCreateParameters1) {
        this.userCreateParameters1 = userCreateParameters1;
        return this;
    }
}