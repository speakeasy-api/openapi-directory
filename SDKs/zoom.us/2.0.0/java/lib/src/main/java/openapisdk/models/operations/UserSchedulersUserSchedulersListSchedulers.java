package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSchedulersUserSchedulersListSchedulers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserSchedulersUserSchedulersListSchedulers withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserSchedulersUserSchedulersListSchedulers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi")
    public Long pmi;
    public UserSchedulersUserSchedulersListSchedulers withPmi(Long pmi) {
        this.pmi = pmi;
        return this;
    }
}