package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * AccountPlanAddonUpdateMultipartFormData
 * Account plan object.
**/
public class AccountPlanAddonUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=hosts")
    public Long hosts;
    public AccountPlanAddonUpdateMultipartFormData withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public String type;
    public AccountPlanAddonUpdateMultipartFormData withType(String type) {
        this.type = type;
        return this;
    }
}