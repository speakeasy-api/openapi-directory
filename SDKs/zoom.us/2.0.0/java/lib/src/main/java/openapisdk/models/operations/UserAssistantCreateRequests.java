package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserAssistantCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UserAssistantCreateUserAssistantsList userAssistantsList;
    public UserAssistantCreateRequests withUserAssistantsList(UserAssistantCreateUserAssistantsList userAssistantsList) {
        this.userAssistantsList = userAssistantsList;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UserAssistantCreateUserAssistantsList userAssistantsList1;
    public UserAssistantCreateRequests withUserAssistantsList1(UserAssistantCreateUserAssistantsList userAssistantsList1) {
        this.userAssistantsList1 = userAssistantsList1;
        return this;
    }
}