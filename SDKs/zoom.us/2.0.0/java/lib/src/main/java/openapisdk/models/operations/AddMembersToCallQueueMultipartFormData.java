package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersToCallQueueMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=members,json")
    public AddMembersToCallQueueMultipartFormDataMembers members;
    public AddMembersToCallQueueMultipartFormData withMembers(AddMembersToCallQueueMultipartFormDataMembers members) {
        this.members = members;
        return this;
    }
}