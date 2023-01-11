package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectsGetObjectsByObjectIdsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, java.util.Map<String, Object>> getObjectsParameters;
    public ObjectsGetObjectsByObjectIdsRequests withGetObjectsParameters(java.util.Map<String, java.util.Map<String, Object>> getObjectsParameters) {
        this.getObjectsParameters = getObjectsParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, java.util.Map<String, Object>> getObjectsParameters1;
    public ObjectsGetObjectsByObjectIdsRequests withGetObjectsParameters1(java.util.Map<String, java.util.Map<String, Object>> getObjectsParameters1) {
        this.getObjectsParameters1 = getObjectsParameters1;
        return this;
    }
}