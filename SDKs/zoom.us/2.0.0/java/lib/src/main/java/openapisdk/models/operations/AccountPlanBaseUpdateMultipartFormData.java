package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * AccountPlanBaseUpdateMultipartFormData
 * Account base plan object.
**/
public class AccountPlanBaseUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=hosts")
    public Long hosts;
    public AccountPlanBaseUpdateMultipartFormData withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public String type;
    public AccountPlanBaseUpdateMultipartFormData withType(String type) {
        this.type = type;
        return this;
    }
}