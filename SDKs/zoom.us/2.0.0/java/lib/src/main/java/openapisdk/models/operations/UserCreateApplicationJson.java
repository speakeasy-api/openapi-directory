package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserCreateApplicationJson {
    @JsonProperty("action")
    public UserCreateApplicationJsonActionEnum action;
    public UserCreateApplicationJson withAction(UserCreateApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_info")
    public UserCreateApplicationJsonUserInfo userInfo;
    public UserCreateApplicationJson withUserInfo(UserCreateApplicationJsonUserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }
}