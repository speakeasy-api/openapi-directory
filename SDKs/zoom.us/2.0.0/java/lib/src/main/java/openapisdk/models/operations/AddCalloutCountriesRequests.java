package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCalloutCountriesRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddCalloutCountriesApplicationJson object;
    public AddCalloutCountriesRequests withObject(AddCalloutCountriesApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddCalloutCountriesMultipartFormData1 object1;
    public AddCalloutCountriesRequests withObject1(AddCalloutCountriesMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}