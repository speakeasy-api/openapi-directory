package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJson3
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
public class AccountSettings200ApplicationJson3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin_change_name_pic")
    public Boolean adminChangeNamePic;
    public AccountSettings200ApplicationJson3 withAdminChangeNamePic(Boolean adminChangeNamePic) {
        this.adminChangeNamePic = adminChangeNamePic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_billing_info")
    public Boolean hideBillingInfo;
    public AccountSettings200ApplicationJson3 withHideBillingInfo(Boolean hideBillingInfo) {
        this.hideBillingInfo = hideBillingInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("import_photos_from_devices")
    public Boolean importPhotosFromDevices;
    public AccountSettings200ApplicationJson3 withImportPhotosFromDevices(Boolean importPhotosFromDevices) {
        this.importPhotosFromDevices = importPhotosFromDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_requirement")
    public AccountSettings200ApplicationJson3PasswordRequirement passwordRequirement;
    public AccountSettings200ApplicationJson3 withPasswordRequirement(AccountSettings200ApplicationJson3PasswordRequirement passwordRequirement) {
        this.passwordRequirement = passwordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_again_period_for_inactivity_on_client")
    public Long signAgainPeriodForInactivityOnClient;
    public AccountSettings200ApplicationJson3 withSignAgainPeriodForInactivityOnClient(Long signAgainPeriodForInactivityOnClient) {
        this.signAgainPeriodForInactivityOnClient = signAgainPeriodForInactivityOnClient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_again_period_for_inactivity_on_web")
    public Long signAgainPeriodForInactivityOnWeb;
    public AccountSettings200ApplicationJson3 withSignAgainPeriodForInactivityOnWeb(Long signAgainPeriodForInactivityOnWeb) {
        this.signAgainPeriodForInactivityOnWeb = signAgainPeriodForInactivityOnWeb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_in_with_two_factor_auth")
    public AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum signInWithTwoFactorAuth;
    public AccountSettings200ApplicationJson3 withSignInWithTwoFactorAuth(AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum signInWithTwoFactorAuth) {
        this.signInWithTwoFactorAuth = signInWithTwoFactorAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_in_with_two_factor_auth_groups")
    public String[] signInWithTwoFactorAuthGroups;
    public AccountSettings200ApplicationJson3 withSignInWithTwoFactorAuthGroups(String[] signInWithTwoFactorAuthGroups) {
        this.signInWithTwoFactorAuthGroups = signInWithTwoFactorAuthGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_in_with_two_factor_auth_roles")
    public String[] signInWithTwoFactorAuthRoles;
    public AccountSettings200ApplicationJson3 withSignInWithTwoFactorAuthRoles(String[] signInWithTwoFactorAuthRoles) {
        this.signInWithTwoFactorAuthRoles = signInWithTwoFactorAuthRoles;
        return this;
    }
}