package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrAccProfileMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=basic,json")
    public UpdateZrAccProfileMultipartFormDataBasic basic;
    public UpdateZrAccProfileMultipartFormData withBasic(UpdateZrAccProfileMultipartFormDataBasic basic) {
        this.basic = basic;
        return this;
    }
}