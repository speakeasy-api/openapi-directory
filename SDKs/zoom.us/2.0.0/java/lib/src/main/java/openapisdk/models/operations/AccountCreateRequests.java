package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountCreateApplicationJson object;
    public AccountCreateRequests withObject(AccountCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AccountCreateMultipartFormData object1;
    public AccountCreateRequests withObject1(AccountCreateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}