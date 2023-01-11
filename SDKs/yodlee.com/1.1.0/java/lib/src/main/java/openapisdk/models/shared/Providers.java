package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Providers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PRIORITY")
    public ProvidersPriorityEnum priority;
    public Providers withPriority(ProvidersPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public ProvidersAccountTypeEnum[] accountType;
    public Providers withAccountType(ProvidersAccountTypeEnum[] accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedProviderIds")
    public Long[] associatedProviderIds;
    public Providers withAssociatedProviderIds(Long[] associatedProviderIds) {
        this.associatedProviderIds = associatedProviderIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authParameter")
    public ProvidersAuthParameterEnum[] authParameter;
    public Providers withAuthParameter(ProvidersAuthParameterEnum[] authParameter) {
        this.authParameter = authParameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authType")
    public ProvidersAuthTypeEnum authType;
    public Providers withAuthType(ProvidersAuthTypeEnum authType) {
        this.authType = authType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUrl")
    public String baseUrl;
    public Providers withBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capability")
    public Capability[] capability;
    public Providers withCapability(Capability[] capability) {
        this.capability = capability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryISOCode")
    public String countryISOCode;
    public Providers withCountryIsoCode(String countryISOCode) {
        this.countryISOCode = countryISOCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public ProvidersDataset[] dataset;
    public Providers withDataset(ProvidersDataset[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favicon")
    public String favicon;
    public Providers withFavicon(String favicon) {
        this.favicon = favicon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forgetPasswordUrl")
    public String forgetPasswordUrl;
    public Providers withForgetPasswordUrl(String forgetPasswordUrl) {
        this.forgetPasswordUrl = forgetPasswordUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help")
    public String help;
    public Providers withHelp(String help) {
        this.help = help;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Providers withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAddedByUser")
    public String isAddedByUser;
    public Providers withIsAddedByUser(String isAddedByUser) {
        this.isAddedByUser = isAddedByUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAutoRefreshEnabled")
    public Boolean isAutoRefreshEnabled;
    public Providers withIsAutoRefreshEnabled(Boolean isAutoRefreshEnabled) {
        this.isAutoRefreshEnabled = isAutoRefreshEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isConsentRequired")
    public Boolean isConsentRequired;
    public Providers withIsConsentRequired(Boolean isConsentRequired) {
        this.isConsentRequired = isConsentRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageISOCode")
    public String languageISOCode;
    public Providers withLanguageIsoCode(String languageISOCode) {
        this.languageISOCode = languageISOCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModified")
    public String lastModified;
    public Providers withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginHelp")
    public String loginHelp;
    public Providers withLoginHelp(String loginHelp) {
        this.loginHelp = loginHelp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginUrl")
    public String loginUrl;
    public Providers withLoginUrl(String loginUrl) {
        this.loginUrl = loginUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public String logo;
    public Providers withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Providers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryLanguageISOCode")
    public String primaryLanguageISOCode;
    public Providers withPrimaryLanguageIsoCode(String primaryLanguageISOCode) {
        this.primaryLanguageISOCode = primaryLanguageISOCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ProvidersStatusEnum status;
    public Providers withStatus(ProvidersStatusEnum status) {
        this.status = status;
        return this;
    }
}