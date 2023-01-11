package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupCreateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public GroupCreateMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
}