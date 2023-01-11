package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserStatusApplicationJson
 * The action.
**/
public class UserStatusApplicationJson {
    @JsonProperty("action")
    public UserStatusApplicationJsonActionEnum action;
    public UserStatusApplicationJson withAction(UserStatusApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
}