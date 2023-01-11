package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, java.util.Map<String, Object>> groupCreateParameters;
    public GroupsCreateRequests withGroupCreateParameters(java.util.Map<String, java.util.Map<String, Object>> groupCreateParameters) {
        this.groupCreateParameters = groupCreateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, java.util.Map<String, Object>> groupCreateParameters1;
    public GroupsCreateRequests withGroupCreateParameters1(java.util.Map<String, java.util.Map<String, Object>> groupCreateParameters1) {
        this.groupCreateParameters1 = groupCreateParameters1;
        return this;
    }
}