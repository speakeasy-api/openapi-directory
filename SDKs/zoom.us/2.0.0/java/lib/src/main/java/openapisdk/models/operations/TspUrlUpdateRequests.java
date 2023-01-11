package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TspUrlUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TspUrlUpdateTspGlobalDialInUrlSetting tspGlobalDialInURLSetting;
    public TspUrlUpdateRequests withTspGlobalDialInUrlSetting(TspUrlUpdateTspGlobalDialInUrlSetting tspGlobalDialInURLSetting) {
        this.tspGlobalDialInURLSetting = tspGlobalDialInURLSetting;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public TspUrlUpdateTspGlobalDialInUrlSetting tspGlobalDialInURLSetting1;
    public TspUrlUpdateRequests withTspGlobalDialInUrlSetting1(TspUrlUpdateTspGlobalDialInUrlSetting tspGlobalDialInURLSetting1) {
        this.tspGlobalDialInURLSetting1 = tspGlobalDialInURLSetting1;
        return this;
    }
}