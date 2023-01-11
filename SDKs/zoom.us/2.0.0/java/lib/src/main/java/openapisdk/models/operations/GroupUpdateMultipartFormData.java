package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public GroupUpdateMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
}