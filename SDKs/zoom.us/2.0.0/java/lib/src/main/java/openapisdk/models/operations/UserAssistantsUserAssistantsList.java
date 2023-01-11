package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserAssistantsUserAssistantsList
 * List of user's assistants.
**/
public class UserAssistantsUserAssistantsList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistants")
    public UserAssistantsUserAssistantsListAssistants[] assistants;
    public UserAssistantsUserAssistantsList withAssistants(UserAssistantsUserAssistantsListAssistants[] assistants) {
        this.assistants = assistants;
        return this;
    }
}