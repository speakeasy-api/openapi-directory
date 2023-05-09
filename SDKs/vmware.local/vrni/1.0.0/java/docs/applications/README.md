# applications

## Overview

Applications APIs

### Available Operations

* [addApplication](#addapplication) - Create an application
* [addTier](#addtier) - Create tier in application
* [deleteApplication](#deleteapplication) - Delete an application
* [deleteTier](#deletetier) - Delete tier
* [getApplication](#getapplication) - Show application details
* [getApplicationTier](#getapplicationtier) - Show tier details
* [getTier](#gettier) - Show tier details
* [listApplicationTiers](#listapplicationtiers) - List tiers of an application
* [listApplications](#listapplications) - List applications

## addApplication

Application is a group of tiers. A tier is a group of virtual machines based on membership criteria. Tiers are bound to single
application. An application name is unique and should not conflict with another application name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationResponse;
import org.openapis.openapi.models.operations.AddApplicationSecurity;
import org.openapis.openapi.models.shared.ApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ApplicationRequest req = new ApplicationRequest() {{
                name = "Dallas Kassulke";
            }};            

            AddApplicationResponse res = sdk.applications.addApplication(req, new AddApplicationSecurity("suscipit") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addTier

Create a tier of an application by with specified membership criteria. The membership criteria id defined in terms of
virtual machines or ip addresses/subnet. Please refer to API Guide on how to construct membership criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTierRequest;
import org.openapis.openapi.models.operations.AddTierResponse;
import org.openapis.openapi.models.operations.AddTierSecurity;
import org.openapis.openapi.models.shared.AllEntityTypeEnum;
import org.openapis.openapi.models.shared.GroupMembershipCriteria;
import org.openapis.openapi.models.shared.GroupMembershipCriteriaMembershipTypeEnum;
import org.openapis.openapi.models.shared.IpAddressMembershipCriteria;
import org.openapis.openapi.models.shared.SearchMembershipCriteria;
import org.openapis.openapi.models.shared.TierRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddTierRequest req = new AddTierRequest(                new TierRequest() {{
                                groupMembershipCriteria = new org.openapis.openapi.models.shared.GroupMembershipCriteria[]{{
                                    add(new GroupMembershipCriteria() {{
                                        ipAddressMembershipCriteria = new IpAddressMembershipCriteria() {{
                                            ipAddresses = new String[]{{
                                                add("debitis"),
                                                add("ipsa"),
                                            }};
                                        }};
                                        membershipType = GroupMembershipCriteriaMembershipTypeEnum.IP_ADDRESS_MEMBERSHIP_CRITERIA;
                                        searchMembershipCriteria = new SearchMembershipCriteria() {{
                                            entityType = AllEntityTypeEnum.EC2_INSTANCE;
                                            filter = "suscipit";
                                        }};
                                    }}),
                                    add(new GroupMembershipCriteria() {{
                                        ipAddressMembershipCriteria = new IpAddressMembershipCriteria() {{
                                            ipAddresses = new String[]{{
                                                add("minus"),
                                                add("placeat"),
                                            }};
                                        }};
                                        membershipType = GroupMembershipCriteriaMembershipTypeEnum.IP_ADDRESS_MEMBERSHIP_CRITERIA;
                                        searchMembershipCriteria = new SearchMembershipCriteria() {{
                                            entityType = AllEntityTypeEnum.EC2_IP_SET;
                                            filter = "excepturi";
                                        }};
                                    }}),
                                }};
                                name = "Mrs. Sophie Smith MD";
                            }};, "perferendis");            

            AddTierResponse res = sdk.applications.addTier(req, new AddTierSecurity("ipsam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.tier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

Deleting an application deletes all the tiers of the application along with the application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.operations.DeleteApplicationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest("repellendus");            

            DeleteApplicationResponse res = sdk.applications.deleteApplication(req, new DeleteApplicationSecurity("sapiente") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTier

Delete tier of an application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTierRequest;
import org.openapis.openapi.models.operations.DeleteTierResponse;
import org.openapis.openapi.models.operations.DeleteTierSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTierRequest req = new DeleteTierRequest("quo", "odit");            

            DeleteTierResponse res = sdk.applications.deleteTier(req, new DeleteTierSecurity("at") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplication

Show application details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationRequest;
import org.openapis.openapi.models.operations.GetApplicationResponse;
import org.openapis.openapi.models.operations.GetApplicationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApplicationRequest req = new GetApplicationRequest("at");            

            GetApplicationResponse res = sdk.applications.getApplication(req, new GetApplicationSecurity("maiores") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplicationTier

Show tier details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationTierRequest;
import org.openapis.openapi.models.operations.GetApplicationTierResponse;
import org.openapis.openapi.models.operations.GetApplicationTierSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApplicationTierRequest req = new GetApplicationTierRequest("molestiae", "quod");            

            GetApplicationTierResponse res = sdk.applications.getApplicationTier(req, new GetApplicationTierSecurity("quod") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.tier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTier

Show tier details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTierRequest;
import org.openapis.openapi.models.operations.GetTierResponse;
import org.openapis.openapi.models.operations.GetTierSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTierRequest req = new GetTierRequest("esse", "totam");            

            GetTierResponse res = sdk.applications.getTier(req, new GetTierSecurity("porro") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.tier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplicationTiers

List tiers of an application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationTiersRequest;
import org.openapis.openapi.models.operations.ListApplicationTiersResponse;
import org.openapis.openapi.models.operations.ListApplicationTiersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListApplicationTiersRequest req = new ListApplicationTiersRequest("dolorum");            

            ListApplicationTiersResponse res = sdk.applications.listApplicationTiers(req, new ListApplicationTiersSecurity("dicta") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.tierListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

List applications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.operations.ListApplicationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest() {{
                cursor = "nam";
                endTime = 6399.21;
                size = 5820.2;
                startTime = 1433.53;
            }};            

            ListApplicationsResponse res = sdk.applications.listApplications(req, new ListApplicationsSecurity("deleniti") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
