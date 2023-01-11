package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Employees {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employees")
    public Employee[] employees;
    public Employees withEmployees(Employee[] employees) {
        this.employees = employees;
        return this;
    }
}