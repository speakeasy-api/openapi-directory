package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersToSharedLineGroupMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=members,json")
    public AddMembersToSharedLineGroupMultipartFormDataMembers members;
    public AddMembersToSharedLineGroupMultipartFormData withMembers(AddMembersToSharedLineGroupMultipartFormDataMembers members) {
        this.members = members;
        return this;
    }
}