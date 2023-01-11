package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserUcis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public UserUcisHealth health;
    public UserUcis withHealth(UserUcisHealth health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UserUcis withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UserUcis withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ucpLabel")
    public String ucpLabel;
    public UserUcis withUcpLabel(String ucpLabel) {
        this.ucpLabel = ucpLabel;
        return this;
    }
}