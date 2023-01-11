package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PRIORITY")
    public ProviderDetailPriorityEnum priority;
    public ProviderDetail withPriority(ProviderDetailPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public ProviderDetailAccountTypeEnum[] accountType;
    public ProviderDetail withAccountType(ProviderDetailAccountTypeEnum[] accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedProviderIds")
    public Long[] associatedProviderIds;
    public ProviderDetail withAssociatedProviderIds(Long[] associatedProviderIds) {
        this.associatedProviderIds = associatedProviderIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authParameter")
    public ProviderDetailAuthParameterEnum[] authParameter;
    public ProviderDetail withAuthParameter(ProviderDetailAuthParameterEnum[] authParameter) {
        this.authParameter = authParameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authType")
    public ProviderDetailAuthTypeEnum authType;
    public ProviderDetail withAuthType(ProviderDetailAuthTypeEnum authType) {
        this.authType = authType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUrl")
    public String baseUrl;
    public ProviderDetail withBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capability")
    public Capability[] capability;
    public ProviderDetail withCapability(Capability[] capability) {
        this.capability = capability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryISOCode")
    public String countryISOCode;
    public ProviderDetail withCountryIsoCode(String countryISOCode) {
        this.countryISOCode = countryISOCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public ProvidersDataset[] dataset;
    public ProviderDetail withDataset(ProvidersDataset[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favicon")
    public String favicon;
    public ProviderDetail withFavicon(String favicon) {
        this.favicon = favicon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help")
    public String help;
    public ProviderDetail withHelp(String help) {
        this.help = help;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ProviderDetail withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAddedByUser")
    public String isAddedByUser;
    public ProviderDetail withIsAddedByUser(String isAddedByUser) {
        this.isAddedByUser = isAddedByUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAutoRefreshEnabled")
    public Boolean isAutoRefreshEnabled;
    public ProviderDetail withIsAutoRefreshEnabled(Boolean isAutoRefreshEnabled) {
        this.isAutoRefreshEnabled = isAutoRefreshEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isConsentRequired")
    public Boolean isConsentRequired;
    public ProviderDetail withIsConsentRequired(Boolean isConsentRequired) {
        this.isConsentRequired = isConsentRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageISOCode")
    public String languageISOCode;
    public ProviderDetail withLanguageIsoCode(String languageISOCode) {
        this.languageISOCode = languageISOCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModified")
    public String lastModified;
    public ProviderDetail withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginForm")
    public LoginForm[] loginForm;
    public ProviderDetail withLoginForm(LoginForm[] loginForm) {
        this.loginForm = loginForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginUrl")
    public String loginUrl;
    public ProviderDetail withLoginUrl(String loginUrl) {
        this.loginUrl = loginUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public String logo;
    public ProviderDetail withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProviderDetail withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryLanguageISOCode")
    public String primaryLanguageISOCode;
    public ProviderDetail withPrimaryLanguageIsoCode(String primaryLanguageISOCode) {
        this.primaryLanguageISOCode = primaryLanguageISOCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ProviderDetailStatusEnum status;
    public ProviderDetail withStatus(ProviderDetailStatusEnum status) {
        this.status = status;
        return this;
    }
}