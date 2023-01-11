package openapisdk.models.shared;


public enum EmployeeStatusEnum {
    ACTIVE("ACTIVE"),
    TERMINATED("TERMINATED");

    public final String value;

    private EmployeeStatusEnum(String value) {
        this.value = value;
    }
}
