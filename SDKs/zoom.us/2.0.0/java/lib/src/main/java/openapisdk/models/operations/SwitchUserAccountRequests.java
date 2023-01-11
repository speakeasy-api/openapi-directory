package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SwitchUserAccountRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SwitchUserAccountApplicationJson object;
    public SwitchUserAccountRequests withObject(SwitchUserAccountApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SwitchUserAccountMultipartFormData object1;
    public SwitchUserAccountRequests withObject1(SwitchUserAccountMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}