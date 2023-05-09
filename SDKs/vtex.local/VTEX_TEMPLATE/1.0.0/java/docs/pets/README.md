# pets

### Available Operations

* [createPets](#createpets) - Create a pet
* [listPets](#listpets) - List all pets
* [showPetById](#showpetbyid) - Info for a specific pet

## createPets

Create a pet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePetsResponse res = sdk.pets.createPets();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPets

List all pets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPetsRequest;
import org.openapis.openapi.models.operations.ListPetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPetsRequest req = new ListPetsRequest() {{
                limit = 544883;
            }};            

            ListPetsResponse res = sdk.pets.listPets(req);

            if (res.pets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showPetById

Info for a specific pet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowPetByIdRequest;
import org.openapis.openapi.models.operations.ShowPetByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum", "vel") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ShowPetByIdRequest req = new ShowPetByIdRequest("error");            

            ShowPetByIdResponse res = sdk.pets.showPetById(req);

            if (res.pets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
