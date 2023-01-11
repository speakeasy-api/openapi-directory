package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * UserAssistantCreateUserAssistantsList
 * List of user's assistants.
**/
public class UserAssistantCreateUserAssistantsList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistants")
@SpeakeasyMetadata("multipartForm:name=assistants,json")
    public UserAssistantCreateUserAssistantsListAssistants[] assistants;
    public UserAssistantCreateUserAssistantsList withAssistants(UserAssistantCreateUserAssistantsListAssistants[] assistants) {
        this.assistants = assistants;
        return this;
    }
}