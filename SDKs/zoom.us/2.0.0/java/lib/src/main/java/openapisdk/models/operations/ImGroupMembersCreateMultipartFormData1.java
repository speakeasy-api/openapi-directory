package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupMembersCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=members,json")
    public ImGroupMembersCreateMultipartFormDataMembers[] members;
    public ImGroupMembersCreateMultipartFormData1 withMembers(ImGroupMembersCreateMultipartFormDataMembers[] members) {
        this.members = members;
        return this;
    }
}