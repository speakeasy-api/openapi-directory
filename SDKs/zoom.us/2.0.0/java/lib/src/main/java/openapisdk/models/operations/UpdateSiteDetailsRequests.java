package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSiteDetailsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSiteDetailsApplicationJson object;
    public UpdateSiteDetailsRequests withObject(UpdateSiteDetailsApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateSiteDetailsMultipartFormData object1;
    public UpdateSiteDetailsRequests withObject1(UpdateSiteDetailsMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}