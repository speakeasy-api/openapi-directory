# dictionaries

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [getActive](#getactive) - Returns active dictionary entities for all types.
* [getActiveByType](#getactivebytype) - Returns active values from a given dictionary.
* [getAllActive](#getallactive) - Returns active services list
* [getAllByType](#getallbytype) - Returns all values (both active and not active) from a given dictionary.
* [getAll1](#getall1) - Returns dictionary entities for all types. Both active and not active ones.
* [getAll3](#getall3) - Returns services list
* [getByTypeAndId](#getbytypeandid) - Returns specific value from a given dictionary.

## getActive

Returns active dictionary entities for all types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetActiveResponse res = sdk.dictionaries.getActive();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActiveByType

Returns active values from a given dictionary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActiveByTypeRequest;
import org.openapis.openapi.models.operations.GetActiveByTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetActiveByTypeRequest req = new GetActiveByTypeRequest("recusandae") {{
                nameEquals = "dolorum";
            }};            

            GetActiveByTypeResponse res = sdk.dictionaries.getActiveByType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllActive

Returns active workflows list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllActiveRequest;
import org.openapis.openapi.models.operations.GetAllActiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllActiveRequest req = new GetAllActiveRequest() {{
                nameEquals = "repellendus";
            }};            

            GetAllActiveResponse res = sdk.dictionaries.getAllActive(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllByType

Returns all values (both active and not active) from a given dictionary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllByTypeRequest;
import org.openapis.openapi.models.operations.GetAllByTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllByTypeRequest req = new GetAllByTypeRequest("labore") {{
                nameEquals = "reiciendis";
            }};            

            GetAllByTypeResponse res = sdk.dictionaries.getAllByType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAll1

<div>
  <p>
    XTRF holds many user-defined dictionaries (ie. countries).
    Each dictionary contains a set of values (ie. Poland or Germany).
    A default value may be defined for a dictionary.
  </p>
  <p>
    Dictionary values are identified using internal identifier which is constant and unique among other values from the same dictionary.
    Please note that name used in dictionary values is presented in the locale of the current identity.
    The same dictionary value can have different names, ie. "Poland" for one user, "Polska" for another one.
  </p>
  <p>
    Possible dictionary types with short explanation:
    <ul>
      <li>calculationUnit - predefined values of how to calculate the volume of work into the price</li>
      <li>category - labels to organize data on the platform</li>
      <li>country - list of countries used on the platform</li>
      <li>currency - currencies used in financial operations in the system</li>
      <li>industry - industry sectors which clients specialize in</li>
      <li>jobType - services offered by a company used in customized workflows</li>
      <li>language - list of languages and its values used on the platform</li>
      <li>leadSource - lead/recruitment places where new clients and vendors may be found</li>
      <li>personDepartment - departments in which contact person may be assigned to</li>
      <li>personPosition - positions in which user may be associated with</li>
      <li>province - states and provinces used in various documents on the platform</li>
      <li>specialization - list of specific qualifications required to perform a specific job in the task, for ex. medical, military</li>
    </ul>
  </p>
</div>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAll1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAll1Response res = sdk.dictionaries.getAll1();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAll3

Returns workflows list. Both active and not active ones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAll3Request;
import org.openapis.openapi.models.operations.GetAll3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAll3Request req = new GetAll3Request() {{
                nameEquals = "doloremque";
            }};            

            GetAll3Response res = sdk.dictionaries.getAll3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getByTypeAndId

Returns specific value from a given dictionary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetByTypeAndIdRequest;
import org.openapis.openapi.models.operations.GetByTypeAndIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetByTypeAndIdRequest req = new GetByTypeAndIdRequest(919783L, "dicta");            

            GetByTypeAndIdResponse res = sdk.dictionaries.getByTypeAndId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
