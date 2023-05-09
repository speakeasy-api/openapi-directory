# dataEntities

## Overview

Set of APIs that returns the structure of the data entities.

### Available Operations

* [getdataentitystructure](#getdataentitystructure) - Get data entity structure
* [listdataentities](#listdataentities) - List data entities

## getdataentitystructure

Returns the data entity structure with its respective fields and data type.

### Response status code

1. Status Code `403`: Access not allowed
2. Status Code `200`: Retrieves data entity structure

> All headers listed below are required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetdataentitystructureRequest;
import org.openapis.openapi.models.operations.GetdataentitystructureResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab", "quis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetdataentitystructureRequest req = new GetdataentitystructureRequest("veritatis", "deserunt", "perferendis");            

            GetdataentitystructureResponse res = sdk.dataEntities.getdataentitystructure(req);

            if (res.getdataentityfields != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listdataentities

Retrieves the list of existing data entities in the store.

### Response status code

1. Status Code `403`: Access not allowed
2. Status Code `200`: Retrieves data entity list

> All headers listed below are required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListdataentitiesRequest;
import org.openapis.openapi.models.operations.ListdataentitiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "repellendus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListdataentitiesRequest req = new ListdataentitiesRequest("sapiente", "quo");            

            ListdataentitiesResponse res = sdk.dataEntities.listdataentities(req);

            if (res.listdataentities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
