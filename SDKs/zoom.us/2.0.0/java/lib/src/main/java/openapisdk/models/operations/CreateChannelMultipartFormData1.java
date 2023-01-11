package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=members,json")
    public CreateChannelMultipartFormDataMembers[] members;
    public CreateChannelMultipartFormData1 withMembers(CreateChannelMultipartFormDataMembers[] members) {
        this.members = members;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public CreateChannelMultipartFormData1 withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public Long type;
    public CreateChannelMultipartFormData1 withType(Long type) {
        this.type = type;
        return this;
    }
}