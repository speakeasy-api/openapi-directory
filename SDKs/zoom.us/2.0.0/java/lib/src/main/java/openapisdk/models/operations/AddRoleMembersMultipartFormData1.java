package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddRoleMembersMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=members,json")
    public AddRoleMembersMultipartFormDataMembers[] members;
    public AddRoleMembersMultipartFormData1 withMembers(AddRoleMembersMultipartFormDataMembers[] members) {
        this.members = members;
        return this;
    }
}