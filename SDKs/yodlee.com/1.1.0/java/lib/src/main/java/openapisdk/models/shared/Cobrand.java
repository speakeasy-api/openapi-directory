package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Cobrand {
    @JsonProperty("cobrandLogin")
    public String cobrandLogin;
    public Cobrand withCobrandLogin(String cobrandLogin) {
        this.cobrandLogin = cobrandLogin;
        return this;
    }
    @JsonProperty("cobrandPassword")
    public String cobrandPassword;
    public Cobrand withCobrandPassword(String cobrandPassword) {
        this.cobrandPassword = cobrandPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public Cobrand withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}