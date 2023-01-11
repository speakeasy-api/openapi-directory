package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddBatchWebinarRegistrantsMultipartFormDataRegistrants {
    @JsonProperty("email")
    public String email;
    public AddBatchWebinarRegistrantsMultipartFormDataRegistrants withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public AddBatchWebinarRegistrantsMultipartFormDataRegistrants withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public AddBatchWebinarRegistrantsMultipartFormDataRegistrants withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
}