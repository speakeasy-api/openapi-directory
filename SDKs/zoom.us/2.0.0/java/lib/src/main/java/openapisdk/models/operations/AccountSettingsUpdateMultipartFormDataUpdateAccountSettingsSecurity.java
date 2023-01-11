package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin_change_name_pic")
    public Boolean adminChangeNamePic;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity withAdminChangeNamePic(Boolean adminChangeNamePic) {
        this.adminChangeNamePic = adminChangeNamePic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_billing_info")
    public Boolean hideBillingInfo;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity withHideBillingInfo(Boolean hideBillingInfo) {
        this.hideBillingInfo = hideBillingInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("import_photos_from_devices")
    public Boolean importPhotosFromDevices;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity withImportPhotosFromDevices(Boolean importPhotosFromDevices) {
        this.importPhotosFromDevices = importPhotosFromDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_requirement")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement passwordRequirement;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity withPasswordRequirement(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement passwordRequirement) {
        this.passwordRequirement = passwordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_again_period_for_inactivity_on_client")
    public Long signAgainPeriodForInactivityOnClient;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity withSignAgainPeriodForInactivityOnClient(Long signAgainPeriodForInactivityOnClient) {
        this.signAgainPeriodForInactivityOnClient = signAgainPeriodForInactivityOnClient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_again_period_for_inactivity_on_web")
    public Long signAgainPeriodForInactivityOnWeb;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity withSignAgainPeriodForInactivityOnWeb(Long signAgainPeriodForInactivityOnWeb) {
        this.signAgainPeriodForInactivityOnWeb = signAgainPeriodForInactivityOnWeb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_in_with_two_factor_auth")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum signInWithTwoFactorAuth;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity withSignInWithTwoFactorAuth(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum signInWithTwoFactorAuth) {
        this.signInWithTwoFactorAuth = signInWithTwoFactorAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_in_with_two_factor_auth_groups")
    public String[] signInWithTwoFactorAuthGroups;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity withSignInWithTwoFactorAuthGroups(String[] signInWithTwoFactorAuthGroups) {
        this.signInWithTwoFactorAuthGroups = signInWithTwoFactorAuthGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_in_with_two_factor_auth_roles")
    public String[] signInWithTwoFactorAuthRoles;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity withSignInWithTwoFactorAuthRoles(String[] signInWithTwoFactorAuthRoles) {
        this.signInWithTwoFactorAuthRoles = signInWithTwoFactorAuthRoles;
        return this;
    }
}