package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSchedulersUserSchedulersList
 * List of user's schedulers.
**/
public class UserSchedulersUserSchedulersList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedulers")
    public UserSchedulersUserSchedulersListSchedulers[] schedulers;
    public UserSchedulersUserSchedulersList withSchedulers(UserSchedulersUserSchedulersListSchedulers[] schedulers) {
        this.schedulers = schedulers;
        return this;
    }
}