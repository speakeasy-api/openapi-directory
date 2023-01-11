package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrLocationProfileMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=basic,json")
    public UpdateZrLocationProfileMultipartFormDataBasic basic;
    public UpdateZrLocationProfileMultipartFormData withBasic(UpdateZrLocationProfileMultipartFormDataBasic basic) {
        this.basic = basic;
        return this;
    }
}