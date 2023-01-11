package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeMainCompanyNumberRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChangeMainCompanyNumberApplicationJson object;
    public ChangeMainCompanyNumberRequests withObject(ChangeMainCompanyNumberApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ChangeMainCompanyNumberMultipartFormData object1;
    public ChangeMainCompanyNumberRequests withObject1(ChangeMainCompanyNumberMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}