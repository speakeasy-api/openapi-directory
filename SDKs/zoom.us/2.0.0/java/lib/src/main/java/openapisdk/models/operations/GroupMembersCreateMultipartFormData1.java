package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupMembersCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=members,json")
    public GroupMembersCreateMultipartFormDataMembers[] members;
    public GroupMembersCreateMultipartFormData1 withMembers(GroupMembersCreateMultipartFormDataMembers[] members) {
        this.members = members;
        return this;
    }
}