package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePhoneSiteRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreatePhoneSiteApplicationJson object;
    public CreatePhoneSiteRequests withObject(CreatePhoneSiteApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreatePhoneSiteMultipartFormData object1;
    public CreatePhoneSiteRequests withObject1(CreatePhoneSiteMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}