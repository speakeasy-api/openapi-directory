package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LoginForm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forgetPasswordURL")
    public String forgetPasswordURL;
    public LoginForm withForgetPasswordUrl(String forgetPasswordURL) {
        this.forgetPasswordURL = forgetPasswordURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formType")
    public LoginFormFormTypeEnum formType;
    public LoginForm withFormType(LoginFormFormTypeEnum formType) {
        this.formType = formType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help")
    public String help;
    public LoginForm withHelp(String help) {
        this.help = help;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public LoginForm withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginHelp")
    public String loginHelp;
    public LoginForm withLoginHelp(String loginHelp) {
        this.loginHelp = loginHelp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaInfoText")
    public String mfaInfoText;
    public LoginForm withMfaInfoText(String mfaInfoText) {
        this.mfaInfoText = mfaInfoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaInfoTitle")
    public String mfaInfoTitle;
    public LoginForm withMfaInfoTitle(String mfaInfoTitle) {
        this.mfaInfoTitle = mfaInfoTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaTimeout")
    public Long mfaTimeout;
    public LoginForm withMfaTimeout(Long mfaTimeout) {
        this.mfaTimeout = mfaTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row")
    public Row[] row;
    public LoginForm withRow(Row[] row) {
        this.row = row;
        return this;
    }
}